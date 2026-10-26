use std::env;
use std::process::{Command, Output};
use std::sync::Mutex;
use tauri::State;

struct TerminalState {
    current_dir: Mutex<String>,
    home: String,
    backend: &'static str,
}

fn bash_single_quote(value: &str) -> String {
    format!("'{}'", value.replace('\'', "'\\''"))
}

fn resolve_cd(current_dir: &str, trimmed: &str, home: &str) -> String {
    if trimmed == "cd" {
        return home.to_string();
    }

    let path = trimmed[3..].trim();
    if path == "~" || path.is_empty() {
        home.to_string()
    } else if let Some(rest) = path.strip_prefix("~/") {
        format!("{}/{}", home, rest)
    } else if path.starts_with('/') {
        path.to_string()
    } else if path == ".." {
        let mut parts: Vec<&str> = current_dir.split('/').collect();
        parts.pop();
        if parts.is_empty() || (parts.len() == 1 && parts[0].is_empty()) {
            "/".to_string()
        } else {
            parts.join("/")
        }
    } else if path == "." {
        current_dir.to_string()
    } else if current_dir == "/" {
        format!("/{}", path)
    } else {
        format!("{}/{}", current_dir, path)
    }
}

fn display_path(dir: &str, home: &str) -> String {
    if !home.is_empty() && dir.starts_with(home) {
        dir.replacen(home, "~", 1)
    } else {
        dir.to_string()
    }
}

fn command_output_text(output: &Output) -> String {
    String::from_utf8_lossy(&output.stdout).replace('\r', "")
}

fn command_error_text(output: &Output) -> String {
    String::from_utf8_lossy(&output.stderr).replace('\r', "")
}

const WSL_MISSING: &str = "Instala WSL para usar la misma terminal de Linux. En PowerShell ejecuta: wsl --install. Reinicia Windows y abre Pinguiñoño otra vez.";

#[cfg(windows)]
fn hide_console(command: &mut Command) {
    use std::os::windows::process::CommandExt;
    const CREATE_NO_WINDOW: u32 = 0x08000000;
    command.creation_flags(CREATE_NO_WINDOW);
}

#[cfg(windows)]
fn wsl_command(script: &str) -> Command {
    let mut command = Command::new("wsl.exe");
    command.env("WSL_UTF8", "1");
    command.args(["-e", "bash", "-lc", script]);
    hide_console(&mut command);
    command
}

#[cfg(windows)]
fn wsl_capture(script: &str) -> Result<String, String> {
    let output = wsl_command(script)
        .output()
        .map_err(|_| WSL_MISSING.to_string())?;
    if output.status.success() {
        Ok(command_output_text(&output).trim().to_string())
    } else {
        Err(WSL_MISSING.to_string())
    }
}

#[cfg(not(windows))]
fn run_in_dir(current_dir: &str, command: &str) -> Result<Output, String> {
    Command::new("bash")
        .arg("-c")
        .arg(command)
        .current_dir(current_dir)
        .output()
        .map_err(|e| format!("Error al ejecutar comando: {}", e))
}

#[cfg(windows)]
fn run_in_dir(current_dir: &str, command: &str) -> Result<Output, String> {
    let script = format!("cd {} && {}", bash_single_quote(current_dir), command);
    wsl_command(&script)
        .output()
        .map_err(|e| format!("Error al ejecutar comando: {}", e))
}

fn dir_exists(path: &str, backend: &str) -> bool {
    if backend == "missing" {
        return false;
    }
    #[cfg(windows)]
    {
        wsl_command(&format!("test -d {}", bash_single_quote(path)))
            .status()
            .map(|status| status.success())
            .unwrap_or(false)
    }
    #[cfg(not(windows))]
    {
        let _ = backend;
        std::path::Path::new(path).is_dir()
    }
}

fn detect_terminal() -> (&'static str, String) {
    #[cfg(not(windows))]
    {
        (
            "linux",
            env::var("HOME").unwrap_or_else(|_| "/home".to_string()),
        )
    }
    #[cfg(windows)]
    {
        match wsl_capture("printf %s \"$HOME\"") {
            Ok(home) if home.starts_with('/') => ("wsl", home),
            _ => ("missing", String::new()),
        }
    }
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("¡Hola, {}! Bienvenido a Pinguiñoño", name)
}

#[tauri::command]
fn get_terminal_backend(state: State<TerminalState>) -> String {
    state.backend.to_string()
}

#[tauri::command]
fn execute_command(command: &str, state: State<TerminalState>) -> Result<String, String> {
    if state.backend == "missing" {
        return Err(WSL_MISSING.to_string());
    }

    let current_dir = state.current_dir.lock().unwrap().clone();
    let trimmed = command.trim();

    if trimmed.starts_with("cd ") || trimmed == "cd" {
        let target = resolve_cd(&current_dir, trimmed, &state.home);
        let shown = if trimmed == "cd" {
            "~"
        } else {
            trimmed[3..].trim()
        };

        if dir_exists(&target, state.backend) {
            *state.current_dir.lock().unwrap() = target;
            Ok(String::new())
        } else {
            Err(format!(
                "cd: {}: No existe el fichero o el directorio",
                shown
            ))
        }
    } else {
        let output = run_in_dir(&current_dir, command)?;

        if output.status.success() {
            Ok(command_output_text(&output))
        } else {
            let stderr = command_error_text(&output);
            if stderr.is_empty() {
                Ok(command_output_text(&output))
            } else {
                Err(stderr)
            }
        }
    }
}

#[tauri::command]
fn get_current_directory(state: State<TerminalState>) -> String {
    let dir = state.current_dir.lock().unwrap().clone();
    display_path(&dir, &state.home)
}

#[tauri::command]
fn get_system_info(state: State<TerminalState>) -> Result<String, String> {
    if state.backend == "missing" {
        return Err(WSL_MISSING.to_string());
    }
    let current_dir = state.current_dir.lock().unwrap().clone();
    let output = run_in_dir(&current_dir, "uname -a")?;
    Ok(command_output_text(&output))
}

#[tauri::command]
fn get_username(state: State<TerminalState>) -> String {
    if state.backend == "wsl" {
        #[cfg(windows)]
        {
            if let Ok(user) = wsl_capture("whoami") {
                if !user.is_empty() {
                    return user;
                }
            }
        }
    }
    #[cfg(windows)]
    {
        return env::var("USERNAME").unwrap_or_else(|_| "user".to_string());
    }
    #[cfg(not(windows))]
    {
        let _ = state;
        env::var("USER").unwrap_or_else(|_| "user".to_string())
    }
}

#[tauri::command]
fn get_hostname(state: State<TerminalState>) -> String {
    if state.backend == "wsl" {
        #[cfg(windows)]
        {
            if let Ok(host) = wsl_capture("hostname") {
                if !host.is_empty() {
                    return host;
                }
            }
        }
    }
    #[cfg(windows)]
    {
        return env::var("COMPUTERNAME").unwrap_or_else(|_| "windows".to_string());
    }
    #[cfg(not(windows))]
    {
        let _ = state;
        Command::new("hostname")
            .output()
            .map(|output| command_output_text(&output).trim().to_string())
            .unwrap_or_else(|_| "localhost".to_string())
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let (backend, home) = detect_terminal();

    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .manage(TerminalState {
            current_dir: Mutex::new(home.clone()),
            home,
            backend,
        })
        .invoke_handler(tauri::generate_handler![
            greet,
            execute_command,
            get_current_directory,
            get_system_info,
            get_username,
            get_hostname,
            get_terminal_backend
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[cfg(test)]
mod tests {
    use super::{bash_single_quote, display_path, resolve_cd};

    #[test]
    fn quotes_paths_for_bash() {
        assert_eq!(bash_single_quote("/home/a"), "'/home/a'");
        assert_eq!(bash_single_quote("/home/o'hara"), "'/home/o'\\''hara'");
    }

    #[test]
    fn cd_matches_the_linux_terminal() {
        assert_eq!(resolve_cd("/home/u/proyecto", "cd", "/home/u"), "/home/u");
        assert_eq!(resolve_cd("/home/u/proyecto", "cd ~", "/home/u"), "/home/u");
        assert_eq!(
            resolve_cd("/home/u/proyecto", "cd ~/practica-linux", "/home/u"),
            "/home/u/practica-linux"
        );
        assert_eq!(resolve_cd("/home/u/proyecto", "cd ..", "/home/u"), "/home/u");
        assert_eq!(resolve_cd("/home/u", "cd ..", "/home/u"), "/home");
        assert_eq!(resolve_cd("/home", "cd ..", "/home/u"), "/");
        assert_eq!(resolve_cd("/", "cd ..", "/home/u"), "/");
        assert_eq!(resolve_cd("/home/u", "cd src", "/home/u"), "/home/u/src");
        assert_eq!(resolve_cd("/", "cd tmp", "/home/u"), "/tmp");
        assert_eq!(display_path("/home/u/src", "/home/u"), "~/src");
        assert_eq!(display_path("/tmp", "/home/u"), "/tmp");
    }
}

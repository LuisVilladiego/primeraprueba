use std::process::Command;
use std::env;
use std::sync::Mutex;
use tauri::State;

struct TerminalState {
    current_dir: Mutex<String>,
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("¡Hola, {}! Bienvenido a Pinguiñoño", name)
}

#[tauri::command]
fn execute_command(command: &str, state: State<TerminalState>) -> Result<String, String> {
    let current_dir = state.current_dir.lock().unwrap().clone();
    
    let trimmed = command.trim();
    
    if trimmed.starts_with("cd ") || trimmed == "cd" {
        let target = if trimmed == "cd" {
            env::var("HOME").unwrap_or_else(|_| "/home".to_string())
        } else {
            let path = trimmed[3..].trim();
            if path == "~" || path.is_empty() {
                env::var("HOME").unwrap_or_else(|_| "/home".to_string())
            } else if path.starts_with("~/") {
                let home = env::var("HOME").unwrap_or_else(|_| "/home".to_string());
                format!("{}/{}", home, &path[2..])
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
                current_dir.clone()
            } else {
                if current_dir == "/" {
                    format!("/{}", path)
                } else {
                    format!("{}/{}", current_dir, path)
                }
            }
        };
        
        if std::path::Path::new(&target).is_dir() {
            *state.current_dir.lock().unwrap() = target;
            Ok(String::new())
        } else {
            Err(format!("cd: {}: No existe el fichero o el directorio", trimmed[3..].trim()))
        }
    } else {
        let output = Command::new("bash")
            .arg("-c")
            .arg(command)
            .current_dir(&current_dir)
            .output()
            .map_err(|e| format!("Error al ejecutar comando: {}", e))?;

        if output.status.success() {
            let stdout = String::from_utf8_lossy(&output.stdout).to_string();
            Ok(stdout)
        } else {
            let stderr = String::from_utf8_lossy(&output.stderr).to_string();
            if stderr.is_empty() {
                let stdout = String::from_utf8_lossy(&output.stdout).to_string();
                if stdout.is_empty() {
                    Ok(String::new())
                } else {
                    Ok(stdout)
                }
            } else {
                Err(stderr)
            }
        }
    }
}

#[tauri::command]
fn get_current_directory(state: State<TerminalState>) -> String {
    let dir = state.current_dir.lock().unwrap().clone();
    let home = env::var("HOME").unwrap_or_else(|_| "/home".to_string());
    if dir.starts_with(&home) {
        dir.replacen(&home, "~", 1)
    } else {
        dir
    }
}

#[tauri::command]
fn get_system_info() -> Result<String, String> {
    let output = Command::new("uname")
        .arg("-a")
        .output()
        .map_err(|e| format!("Error: {}", e))?;
    
    Ok(String::from_utf8_lossy(&output.stdout).to_string())
}

#[tauri::command]
fn get_username() -> String {
    env::var("USER").unwrap_or_else(|_| "user".to_string())
}

#[tauri::command]
fn get_hostname() -> String {
    Command::new("hostname")
        .output()
        .map(|o| String::from_utf8_lossy(&o.stdout).trim().to_string())
        .unwrap_or_else(|_| "localhost".to_string())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let home = env::var("HOME").unwrap_or_else(|_| "/home".to_string());
    
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .manage(TerminalState {
            current_dir: Mutex::new(home),
        })
        .invoke_handler(tauri::generate_handler![
            greet,
            execute_command,
            get_current_directory,
            get_system_info,
            get_username,
            get_hostname
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

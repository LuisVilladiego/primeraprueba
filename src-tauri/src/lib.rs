use std::process::Command;
use std::env;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn execute_command(command: &str) -> Result<String, String> {
    let home = env::var("HOME").unwrap_or_else(|_| "/home".to_string());
    
    let output = Command::new("bash")
        .arg("-c")
        .arg(command)
        .current_dir(&home)
        .output()
        .map_err(|e| format!("Failed to execute command: {}", e))?;

    if output.status.success() {
        let stdout = String::from_utf8_lossy(&output.stdout).to_string();
        Ok(stdout)
    } else {
        let stderr = String::from_utf8_lossy(&output.stderr).to_string();
        if stderr.is_empty() {
            Ok(String::new())
        } else {
            Err(stderr)
        }
    }
}

#[tauri::command]
fn get_current_directory() -> Result<String, String> {
    env::current_dir()
        .map(|p| p.to_string_lossy().to_string())
        .map_err(|e| format!("Failed to get current directory: {}", e))
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, execute_command, get_current_directory])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

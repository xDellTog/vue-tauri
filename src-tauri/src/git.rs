// use std::process::Command;

// #[tauri::command]
// pub fn get_commits() -> String {
//     let output = Command::new("sh")
//         // .arg("git log --pretty=format:\"_&_%h_&_%s_&_%an_&_%ar_&_%D\" --graph --all")
//         .arg("pwd")
//         .output()
//         .expect("failed to execute process");

//     return if output.stderr.is_empty() {
//         String::from_utf8(output.stdout)
//             .expect("Invalid buffer")
//             .into()
//     } else {
//         String::from_utf8(output.stderr)
//             .expect("Invalid buffer")
//             .into()
//     };
// }

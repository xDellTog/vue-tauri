import { Command } from "@tauri-apps/api/shell";

export default class GitService {
  static async getCommits(repositoryPath: string): Promise<any[]> {
    const output = await new Command(
      "git-get-commits",
      [
        "log",
        '--pretty=format:"_&_%h_&_%s_&_%an_&_%ar_&_%D"',
        "--graph",
        "--all",
      ],
      {
        cwd: repositoryPath,
      }
    ).execute();

    if (output.stderr) {
      return Promise.reject(output.stderr);
    }

    let commits = output.stdout
      .split("\n")
      .map((commit: any, i: number, arr: any[]) => {
        const splt = commit.split("_&_");
        return {
          graph: splt[0],
          hash: splt[1],
          subject: !!splt[1] ? splt[2] : "Merge",
          author: splt[3],
          relativeDate: splt[4],
          refs: !!splt[5] ? splt[5].split(/,|->/) : [],
          branches: [],
        };
      });

    return Promise.resolve(commits);
  }
}

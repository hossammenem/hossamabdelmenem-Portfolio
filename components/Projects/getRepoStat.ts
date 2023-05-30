import { Octokit } from "octokit";

export default async function getRepoStats(owner: string, repo: string) {
  const octokit = new Octokit();

  const data = (
    await octokit.request(`GET /repos/${owner}/${repo}`, {
      owner,
      repo,
    })
  ).data;

  // round numbers
  return {
    forks: data["forks_count"] as number,
    stargazers: data["stargazers_count"] as number,
    issues: data["open_issues_count"] as number,
  };
}

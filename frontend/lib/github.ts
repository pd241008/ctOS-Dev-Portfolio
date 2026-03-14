import { GithubStats } from "@/types/github";

export async function fetchGithubStats(): Promise<GithubStats> {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  if (!username) {
    throw new Error("Missing NEXT_PUBLIC_GITHUB_USERNAME");
  }

  const res = await fetch(`https://api.github.com/users/${username}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub stats");
  }

  const data = await res.json();

  return {
    repos: data.public_repos,
    followers: data.followers,
    following: data.following,
  };
}

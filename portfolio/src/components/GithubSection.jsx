import { useEffect, useState } from "react";
import { GitFork, Star } from "lucide-react";
import { GithubIcon } from "./icons";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

// Public GitHub API data, fetched without any token (no secrets in frontend code).
// Set profile.githubUsername to enable live data; otherwise a clean
// placeholder linking to your profile is shown.
export default function GithubSection() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!profile.githubUsername) return;
    let cancelled = false;

    fetch(`https://api.github.com/users/${profile.githubUsername}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => !cancelled && data && setUser(data))
      .catch(() => {});

    fetch(`https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=6`)
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => !cancelled && Array.isArray(data) && setRepos(data))
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Open source"
        title="Building in Public"
        subtitle="My code, repositories, and recent work on GitHub."
      />

      {user ? (
        <div className="mb-8 flex items-center gap-4 rounded-xl border border-line bg-panel p-6">
          <img src={user.avatar_url} alt={`${user.login} avatar`} className="h-16 w-16 rounded-full" />
          <div>
            <h3 className="font-semibold text-ink">{user.name || user.login}</h3>
            <p className="text-sm text-muted">{user.bio}</p>
            <a href={user.html_url} className="text-sm text-accent hover:underline">
              {user.html_url}
            </a>
          </div>
        </div>
      ) : (
        <div className="mb-8 rounded-xl border border-dashed border-line bg-panel p-6 text-sm text-muted">
          Live GitHub profile data will appear here once you set{" "}
          <code className="font-mono text-accent">githubUsername</code> in{" "}
          <code className="font-mono text-accent">src/data/profile.js</code>.{" "}
          <a href={profile.github} className="text-accent hover:underline">
            Visit my GitHub →
          </a>
        </div>
      )}

      {repos.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-line bg-panel p-5 transition-colors hover:border-accent/40"
            >
              <h4 className="font-semibold text-ink">{repo.name}</h4>
              <p className="mt-1 line-clamp-2 text-xs text-muted">{repo.description || "No description"}</p>
              <div className="mt-3 flex items-center gap-4 text-xs text-muted">
                {repo.language && <span className="text-accent">{repo.language}</span>}
                <span className="inline-flex items-center gap-1">
                  <Star size={12} /> {repo.stargazers_count}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork size={12} /> {repo.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      <div className="mt-8">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-ink hover:border-accent hover:text-accent"
        >
          <GithubIcon size={16} /> View GitHub Profile
        </a>
      </div>
    </section>
  );
}

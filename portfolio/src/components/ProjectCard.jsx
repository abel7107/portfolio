import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectCard({ project }) {
  return (
    <article className="flex flex-col rounded-xl border border-line bg-panel p-6 transition-all hover:-translate-y-1 hover:border-accent/40">
      <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li key={t} className="rounded bg-bg px-2 py-0.5 font-mono text-[11px] text-muted">
            {t}
          </li>
        ))}
      </ul>

      <ul className="mt-4 space-y-1 text-xs text-muted">
        {project.features.map((f) => (
          <li key={f} className="before:mr-1.5 before:text-accent before:content-['▹']">
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-4 text-sm">
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-accent">
            <GithubIcon size={15} /> GitHub
          </a>
        ) : (
          <span className="text-xs text-muted/70">GitHub: add link in data</span>
        )}
        {project.demoUrl ? (
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-accent">
            <ExternalLink size={15} /> Live Demo
          </a>
        ) : (
          <span className="text-xs text-muted/70">Demo: N/A</span>
        )}
      </div>
    </article>
  );
}

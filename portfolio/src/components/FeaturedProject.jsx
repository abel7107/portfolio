import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { featuredProject } from "../data/projects";
import SectionHeading from "./SectionHeading";

export default function FeaturedProject() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Featured project" title="LostLink" />
      <div className="rounded-2xl border border-accent/30 bg-panel p-6 shadow-xl shadow-black/30 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs text-accent">{featuredProject.tagline}</p>
            <h3 className="mt-2 text-2xl font-bold text-ink">{featuredProject.name}</h3>
            <p className="mt-4 text-muted">{featuredProject.description}</p>

            <h4 className="mt-6 font-semibold text-ink">My contribution</h4>
            <p className="mt-2 text-sm text-muted">{featuredProject.contribution}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {featuredProject.demoUrl ? (
                <a
                  href={featuredProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg"
                >
                  Live Demo <ExternalLink size={15} />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-line px-4 py-2 text-sm text-muted">
                  Live Demo — coming soon
                </span>
              )}
              {featuredProject.githubUrl ? (
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-ink hover:border-accent hover:text-accent"
                >
                  <GithubIcon size={15} /> View GitHub
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-line px-4 py-2 text-sm text-muted">
                  <GithubIcon size={15} /> GitHub link — add in data/projects.js
                </span>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-ink">Technologies</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {featuredProject.tech.map((t) => (
                <li key={t} className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent">
                  {t}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 font-semibold text-ink">Features</h4>
            <ul className="mt-3 grid grid-cols-1 gap-y-1.5 text-sm text-muted sm:grid-cols-2">
              {featuredProject.features.map((f) => (
                <li key={f} className="before:mr-2 before:text-accent before:content-['▹']">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

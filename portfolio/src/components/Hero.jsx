import { ArrowDown, Download } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon } from "./icons";

const codeLines = `const developer = {
  name: "Abel",
  role: "Software Engineering Student",
  learned: ["HTML", "CSS", "JavaScript", "PHP"],
  currentlyLearning: ["React", "Node.js", "Express.js", "PostgreSQL"],
  belief: "build real software, learn by doing",
};`;

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-2 lg:pt-40">
      <div>
        <p className="mb-4 font-mono text-sm text-accent">Hi, I&apos;m Abel.</p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
          I Build Digital Experiences &amp; Real-World Software.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          I started by learning HTML, CSS, JavaScript, and PHP. I am now learning React,
          Node.js, Express.js, and PostgreSQL as I grow into full-stack development.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
          >
            View My Projects <ArrowDown size={16} />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
          >
            <GithubIcon size={16} /> GitHub
          </a>
        </div>
      </div>

      {/* Terminal-style visual — lightweight, no stock imagery */}
      <div className="rounded-xl border border-line bg-panel shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
          <span className="ml-2 font-mono text-xs text-muted">abel@dev — portfolio</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-muted sm:text-sm">
          {codeLines + "\n"}
          <span className="text-accent">{"> run abel --ready-to-contribute"}</span>
          <span className="cursor-blink text-accent">_</span>
        </pre>
      </div>
    </section>
  );
}

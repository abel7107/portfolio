import { useEffect, useState } from "react";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-bg/80 py-2" : "bg-bg/60 py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main navigation">
        <a href="#home" className="font-mono text-sm font-semibold tracking-tight text-ink">
          <span className="text-accent">&lt;</span>Abel<span className="text-accent">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md p-2 text-muted transition-colors hover:text-accent">
            <GithubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md p-2 text-muted transition-colors hover:text-accent">
            <LinkedinIcon size={18} />
          </a>
          <button
            type="button"
            onClick={() => setLight((v) => !v)}
            aria-label="Toggle theme"
            className="rounded-md p-2 text-muted transition-colors hover:text-accent"
          >
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href={profile.resumeUrl}
            className="ml-1 inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <FileText size={15} /> Resume
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-muted md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg/95 px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 py-3 text-sm text-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 hover:bg-panel hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 border-t border-line pt-3">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md p-2 text-muted hover:text-accent">
              <GithubIcon size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md p-2 text-muted hover:text-accent">
              <LinkedinIcon size={18} />
            </a>
            <button
              type="button"
              onClick={() => setLight((v) => !v)}
              aria-label="Toggle theme"
              className="rounded-md p-2 text-muted hover:text-accent"
            >
              {light ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href={profile.resumeUrl} className="ml-auto rounded-md border border-line px-3 py-1.5 text-sm text-ink">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

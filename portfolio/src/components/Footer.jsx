import { Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './icons'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-10 dark:border-slate-800/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left sm:px-6">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {profile.name} — Software Engineering Student & Full-Stack Developer
        </p>
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            <GithubIcon size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            <LinkedinIcon size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            <Mail size={17} />
          </a>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-600">
        © 2026 {profile.name}. Built with React.
      </p>
    </footer>
  )
}

import { GraduationCap, FolderGit2, Layers, RefreshCw } from "lucide-react";

const stats = [
  { icon: GraduationCap, title: "Software Engineering Student", sub: "Dire Dawa University" },
  { icon: FolderGit2, title: "Full-Stack Projects", sub: "Built end-to-end, including LostLink" },
  { icon: Layers, title: "Technologies Used", sub: "React, Node.js, Express, PostgreSQL & more" },
  { icon: RefreshCw, title: "Always Learning", sub: "Docker, CI/CD, testing, system design" },
];

export default function Stats() {
  return (
    <section className="border-y border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4">
        {stats.map(({ icon: Icon, title, sub }) => (
          <div key={title} className="text-center sm:text-left">
            <Icon className="mx-auto mb-3 text-accent sm:mx-0" size={22} />
            <h3 className="text-sm font-semibold text-ink">{title}</h3>
            <p className="mt-1 text-xs text-muted">{sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

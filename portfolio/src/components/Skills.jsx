import { Layout, Server, Database, ShieldCheck, Wrench, TrendingUp } from "lucide-react";
import { skills } from "../data/skills";
import SectionHeading from "./SectionHeading";

const icons = { Layout, Server, Database, ShieldCheck, Wrench, TrendingUp };

const levelStyles = {
  Comfortable: "bg-accent-soft text-accent",
  "Currently learning": "border border-dashed border-accent/40 text-accent",
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Technologies"
        title="Skills"
        subtitle="Technologies I have experience with, organized by area of the stack."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => {
          const Icon = icons[group.icon];
          return (
            <div
              key={group.category}
              className="rounded-xl border border-line bg-panel p-6 transition-colors hover:border-accent/40"
            >
              <div className="mb-4 flex items-center gap-3">
                {Icon && <Icon size={20} className="text-accent" />}
                <h3 className="font-semibold text-ink">{group.category}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item.name} className="rounded-md border border-line px-2.5 py-1 text-xs text-muted">
                    {item.name}{" "}
                    <span className={`ml-1 rounded px-1 text-[10px] ${levelStyles[item.level]}`}>
                      {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-xs text-muted">
        Labels reflect honest experience levels — no inflated percentage bars.
      </p>
    </section>
  );
}

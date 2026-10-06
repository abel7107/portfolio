import SectionHeading from "./SectionHeading";

const focusAreas = [
  "Software Engineering",
  "Object-Oriented Programming",
  "Database Systems",
  "Web Development",
  "Software Architecture",
  "System Programming",
  "Computer Architecture",
  "System Security",
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Background" title="Experience & Learning" />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-line bg-panel p-6">
          <h3 className="text-lg font-semibold text-ink">Software Engineering Student</h3>
          <p className="text-sm text-accent">Dire Dawa University</p>
          <p className="mt-3 text-sm text-muted">Focus areas covered through coursework and practice:</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {focusAreas.map((f) => (
              <li key={f} className="rounded-md border border-line px-2.5 py-1 text-xs text-muted">
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-line bg-panel p-6">
          <h3 className="text-lg font-semibold text-ink">Independent Full-Stack Development</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Outside the classroom I learn by building projects end-to-end — designing the
            architecture, building the database schema, writing the backend API, creating the
            frontend interface, and shipping the result. LostLink is the largest example of this
            project-based learning, and smaller systems like hospital, dormitory, and e-commerce
            applications helped me practice different parts of the stack.
          </p>
        </div>
      </div>
    </section>
  );
}

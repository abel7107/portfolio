import SectionHeading from "./SectionHeading";

const courses = [
  "Software Engineering",
  "Programming",
  "Database Systems",
  "Web Development",
  "Software Architecture",
  "Software Engineering Practices",
];

export default function Education() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Academics" title="Education" />
        <div className="rounded-xl border border-line bg-panel p-6">
          <h3 className="text-lg font-semibold text-ink">Software Engineering</h3>
          <p className="text-sm text-accent">Dire Dawa University</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {courses.map((c) => (
              <li key={c} className="rounded-md border border-line px-2.5 py-1 text-xs text-muted">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

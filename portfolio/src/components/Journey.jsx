import SectionHeading from "./SectionHeading";

const stages = [
  {
    title: "Web Fundamentals",
    path: "HTML → CSS → JavaScript",
    note: "Learned how the web works by building and styling real pages.",
  },
  {
    title: "Backend Development",
    path: "PHP → Node.js → Express.js",
    note: "Moved into server-side development, APIs, and request handling.",
  },
  {
    title: "Modern Frontend",
    path: "React → React Router → Tailwind CSS",
    note: "Adopted component-based UI development and utility-first styling.",
  },
  {
    title: "Data & Authentication",
    path: "PostgreSQL → Prisma → JWT → bcrypt",
    note: "Added databases, relationships, and secure authentication flows.",
  },
  {
    title: "Professional Development",
    path: "Git/GitHub → Deployment → Docker → CI/CD → Testing",
    note: "Building habits around version control, shipping, and quality.",
  },
];

export default function Journey() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="How I got here"
        title="My Development Journey"
        subtitle="A project-driven path from web basics to full-stack development."
      />
      <ol className="relative border-l border-line pl-8">
        {stages.map((stage, i) => (
          <li key={stage.title} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[2.55rem] flex h-7 w-7 items-center justify-center rounded-full border border-line bg-panel font-mono text-xs text-accent">
              {i + 1}
            </span>
            <h3 className="text-lg font-semibold text-ink">{stage.title}</h3>
            <p className="mt-1 font-mono text-sm text-accent">{stage.path}</p>
            <p className="mt-1 text-sm text-muted">{stage.note}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Who I am" title="About Me" />
      <div className="grid items-center gap-10 lg:grid-cols-3">
        <div className="space-y-4 leading-relaxed text-muted lg:col-span-2">
          <p>
            I&apos;m a Software Engineering student passionate about building useful software and
            solving real-world problems through technology.
          </p>
          <p>
            I started by learning HTML, CSS, JavaScript, and PHP. I am now learning React,
            Node.js, Express.js, and PostgreSQL as I grow into full-stack development.
          </p>
          <p>
            I enjoy learning by building real projects rather than only studying theory. Each project
            helps me understand software architecture, databases, APIs, authentication, debugging,
            Git workflows, and user experience more deeply.
          </p>
          <p>
            I am currently looking for opportunities where I can learn from experienced developers,
            contribute to real projects, and grow into a professional software engineer.
          </p>
        </div>

        {/* Profile picture — add your image path to the src attribute */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/abel-profile.jpg"
            alt="Abel profile photo"
            className="object-cover w-full h-full rounded-2xl border border-dashed border-line bg-panel"
            width={200}
            height={200}
            loading="lazy"
          />
          {/* Fallback initial if image fails to load */}
          <div className="absolute inset-0 rounded-2xl border border-dashed border-line bg-panel flex items-center justify-center">
            <span className="font-mono text-5xl text-accent">A</span>
          </div>
        </div>
      </div>
    </section>
  );
}

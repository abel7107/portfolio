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

        {/* Profile image placeholder — swap for an <img> later */}
        <div className="flex justify-center lg:justify-end">
          <div className="flex aspect-square w-56 flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-panel text-center sm:w-64">
            <span className="font-mono text-5xl text-accent">A</span>
            <p className="mt-3 px-6 text-xs text-muted">Profile photo placeholder — replace with your image</p>
          </div>
        </div>
      </div>
    </section>
  );
}

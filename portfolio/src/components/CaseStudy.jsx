import { caseStudy } from "../data/projects";
import SectionHeading from "./SectionHeading";

export default function CaseStudy() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Deep dive" title="LostLink Case Study" />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-line bg-panel p-6">
            <h3 className="font-semibold text-ink">Problem</h3>
            <p className="mt-2 text-sm text-muted">{caseStudy.problem}</p>
          </div>
          <div className="rounded-xl border border-line bg-panel p-6">
            <h3 className="font-semibold text-ink">Solution</h3>
            <p className="mt-2 text-sm text-muted">{caseStudy.solution}</p>
          </div>

          <div className="rounded-xl border border-line bg-panel p-6">
            <h3 className="font-semibold text-ink">Technical Approach</h3>
            <dl className="mt-3 space-y-2 text-sm">
              {caseStudy.approach.map((a) => (
                <div key={a.label} className="flex justify-between gap-4">
                  <dt className="text-muted">{a.label}</dt>
                  <dd className="font-mono text-xs text-accent">{a.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-xl border border-line bg-panel p-6">
            <h3 className="font-semibold text-ink">Challenges</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {caseStudy.challenges.map((c) => (
                <li key={c} className="before:mr-1.5 before:text-accent before:content-['▹']">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-line bg-panel p-6 lg:col-span-2">
            <h3 className="font-semibold text-ink">What I Learned</h3>
            <ul className="mt-3 grid grid-cols-2 gap-y-1.5 text-sm text-muted sm:grid-cols-4">
              {caseStudy.learned.map((l) => (
                <li key={l} className="before:mr-1.5 before:text-accent before:content-['▹']">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

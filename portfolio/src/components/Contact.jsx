import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

// NOTE: No fake backend. Validation is client-side only; wire the
// onSubmit handler to a real email service (Formspree, EmailJS, etc.).
export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Please enter a valid email address.";
    if (!values.message.trim()) e.message = "Please write a message.";
    return e;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      // TODO: connect a real email/contact service here.
    }
  };

  const update = (field) => (event) => {
    setValues({ ...values, [field]: event.target.value });
    setErrors({ ...errors, [field]: undefined });
  };

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Get in touch" title="Let's Build Something Together." />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-muted hover:text-accent">
              <Mail size={18} className="text-accent" /> {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted hover:text-accent">
              <GithubIcon size={18} className="text-accent" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted hover:text-accent">
              <LinkedinIcon size={18} className="text-accent" /> LinkedIn
            </a>
            <p className="flex items-center gap-3 text-sm text-muted">
              <MapPin size={18} className="text-accent" /> {profile.location}
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-line bg-panel p-6">
            <div className="mb-4">
              <label htmlFor="name" className="mb-1 block text-sm text-ink">Name</label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={update("name")}
                className="w-full rounded-md border border-line bg-bg px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="mb-1 block text-sm text-ink">Email</label>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={update("email")}
                className="w-full rounded-md border border-line bg-bg px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="mb-1 block text-sm text-ink">Message</label>
              <textarea
                id="message"
                rows="5"
                value={values.message}
                onChange={update("message")}
                className="w-full rounded-md border border-line bg-bg px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg"
            >
              <Send size={15} /> Send Message
            </button>
            {sent && (
              <p className="mt-3 text-sm text-accent">
                Thanks! Your message passed validation. Connect an email service (e.g., Formspree)
                in Contact.jsx to deliver it.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

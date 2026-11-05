import { useState } from "react";
import { toast } from "sonner";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // CRM integration point — connect to form tracking when authorized.
    setDone(true);
    toast.success("Thanks for reaching out. We'll get back to you soon.");
  };

  return (
    <div className="pt-16">
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan">Support</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-base text-white/70">
            Questions about the book, your order, or digital delivery? We're here to help.
          </p>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {done ? (
            <div className="rounded-lg border border-cyan bg-white p-8 text-center">
              <h2 className="font-display text-2xl font-bold">Message sent.</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Thanks for reaching out. We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5 rounded-lg border border-line bg-white p-8">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 h-12 w-full rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 h-12 w-full rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Subject</label>
                <input
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="mt-2 h-12 w-full rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan py-4 text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:scale-[1.01]"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

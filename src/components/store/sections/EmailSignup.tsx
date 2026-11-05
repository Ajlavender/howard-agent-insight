import { useState } from "react";
import { toast } from "sonner";
import { buildTrackingPayload, postTrackingEvent } from "@/lib/form-tracking";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const payload = buildTrackingPayload("newsletter-signup", "Book Newsletter");
    payload.formData = { email };
    payload.formLabels = { email: "Email" };
    postTrackingEvent(payload);
    setDone(true);
    toast.success("You're on the list. We'll keep you updated.");
    setEmail("");
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan">
          Stay in the Loop
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Get book updates, author insights, and occasional news from Eric Howard.
        </h2>

        {done ? (
          <p className="mt-8 text-sm font-medium text-foreground">
            Thanks for subscribing. Watch your inbox for updates from Eric.
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              inputMode="email"
              autoCapitalize="off"
              autoCorrect="off"
              className="h-12 flex-1 rounded-md border border-input bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan sm:text-sm"
            />
            <button
              type="submit"
              className="h-12 shrink-0 bg-cyan px-8 text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:scale-[1.02] active:scale-95"
            >
              Keep Me Updated
            </button>
          </form>
        )}
        <p className="mt-4 text-xs text-muted-foreground">
          We respect your inbox. No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

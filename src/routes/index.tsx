import { createFileRoute } from "@tanstack/react-router";
import tonicHero from "@/assets/tonic-hero.jpg";

const OFFER_URL =
  "https://hop.clickbank.net/?affiliate=rohit2588&vendor=lbtonic&pid=38&tid=pinterest_l_landingpage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Morning Metabolic Ritual — One Scoop, Every Day" },
      {
        name: "description",
        content:
          "A quiet morning tonic of botanicals that helps awaken a sleeping metabolism. One warm scoop, every day — backed by a 60-day guarantee.",
      },
      { property: "og:title", content: "The Morning Metabolic Ritual" },
      {
        property: "og:description",
        content:
          "A quiet morning tonic of botanicals that helps awaken a sleeping metabolism. One warm scoop, every day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function CtaButton({
  children,
  large = false,
}: {
  children: React.ReactNode;
  large?: boolean;
}) {
  return (
    <a
      href={OFFER_URL}
      target="_blank"
      rel="noopener"
      className={`ctapulse lift inline-flex items-center gap-2 rounded-full bg-terracotta font-semibold text-creamsoft ring-1 ring-terracotta/60 ${
        large ? "px-8 py-4 text-sm" : "px-7 py-3.5 text-sm"
      }`}
    >
      {children}
      <span className="text-creamsoft/80">&rarr;</span>
    </a>
  );
}

const benefits = [
  {
    title: "Steadier energy",
    body: "Helps smooth the mid-morning dip so the day feels less like a scramble.",
  },
  {
    title: "Lighter mornings",
    body: "A warm first drink that helps you wake up gently rather than all at once.",
  },
  {
    title: "Daily momentum",
    body: "A single ritual that supports consistency you can actually keep up with.",
  },
  {
    title: "Calmer start",
    body: "Botanicals chosen for a composed, unhurried beginning to the day.",
  },
  {
    title: "Gentle warmth",
    body: "A soothing, slightly sweet note that makes the habit one you look forward to.",
  },
  {
    title: "A small routine",
    body: "Simple enough to slot into a busy morning without thinking about it.",
  },
];

const ritual = [
  {
    step: "1",
    title: "Pour the water",
    body: "A glass of warm water, still enough to hold the tone you're about to stir in.",
  },
  {
    step: "2",
    title: "Add one scoop",
    body: "A single measure of the tonic, dusted over the surface like first light.",
  },
  {
    step: "3",
    title: "Stir and sip",
    body: "Watch the ripples settle, take a slow breath, and begin the day unhurried.",
  },
];

const ingredients = [
  {
    name: "Camu Camu",
    body: "A bright, gently antioxidant-rich fruit from the river forests.",
  },
  {
    name: "EGCG green tea",
    body: "A familiar leaf, valued for its steady, everyday antioxidants.",
  },
  {
    name: "Mangosteen",
    body: "A deep-purple fruit known for its quietly protective compounds.",
  },
  {
    name: "Panax ginseng",
    body: "An adaptogenic root that helps the body meet everyday demands.",
  },
  {
    name: "Ashwagandha",
    body: "A calming root long used to support composure and balance.",
  },
  {
    name: "Cinnamon",
    body: "A warm spice that lends the tonic its gentle, grounding note.",
  },
  {
    name: "Ginger",
    body: "A warming root that rounds the blend and sets the tone.",
  },
];

const testimonials = [
  {
    quote: "The first thing I do now. It's become the calmest part of my morning.",
    name: "Mara T.",
  },
  {
    quote: "I was skeptical, but the ritual stuck. I actually look forward to it.",
    name: "Devin K.",
  },
  {
    quote: "Small change, but the energy through the afternoon has felt real.",
    name: "Priya R.",
  },
];

const faqs = [
  {
    q: "What does a morning scoop feel like?",
    a: "Most people describe it as warm and lightly sweet, with a calm, unhurried quality. It's meant to be a small, pleasant pause rather than a jolt.",
  },
  {
    q: "When should I take it?",
    a: "Ideally first thing, into a glass of warm water, before much else. Consistency matters more than timing.",
  },
  {
    q: "Is it backed by a guarantee?",
    a: "Yes — there's a 60-day window to try it as part of your day and reach out if it's not a fit.",
  },
  {
    q: "Will it replace my coffee?",
    a: "It's a complement, not a replacement. Many people enjoy it alongside their usual routine.",
  },
];

function Index() {
  return (
    <div className="font-sans text-ink">
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 90% at 15% 0%, #f3ecdd 0%, #e8e6ec 38%, #dfe3ea 62%, #e6d9c8 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute -top-24 -right-24 size-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(217,138,68,0.55), rgba(217,138,68,0) 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 -left-20 size-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(127,138,91,0.4), rgba(127,138,91,0) 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:py-28">
          <div className="rise lg:col-span-7">
            <div className="frost-2 mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
              <span className="size-1.5 rounded-full bg-terracotta" />
              <span className="text-xs uppercase tracking-[0.18em] text-ink/70">
                Morning metabolic ritual
              </span>
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight text-balance text-ink sm:text-5xl lg:text-6xl">
              Awaken the sleeping metabolism with a single morning scoop.
            </h1>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-pretty text-ink/70">
              Stir one warm measure into water as the light comes up. A quiet
              tonic of Camu Camu, green tea and root botanicals that helps you
              feel gently awake and quietly energized.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaButton>See today's offer</CtaButton>
              <a
                href="#ritual"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-ink/70 hover:text-ink"
              >
                View the ritual
              </a>
            </div>
          </div>
          <div className="rise d2 relative lg:col-span-5">
            <div className="frost rounded-[28px] p-3">
              <img
                src={tonicHero}
                alt="Warm amber tonic drink in a glass with soft steam rising in morning light"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-[20px] object-cover"
              />
            </div>
            <div className="frost-2 mx-6 -mt-8 -ml-6 flex items-center gap-3 rounded-2xl px-5 py-4">
              <span className="font-display text-2xl font-semibold leading-none text-terracotta">
                1st light
              </span>
              <span className="text-xs leading-snug text-ink/60">
                the first pour of the day, before anything else
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-creamsoft">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="frost flex flex-wrap items-center justify-between gap-x-8 gap-y-3 rounded-2xl px-6 py-5">
            <span className="text-xs uppercase tracking-[0.18em] text-ink/50">
              The quiet standard
            </span>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-ink/70">
              <span>Third-party tested</span>
              <span>60-day guarantee</span>
              <span>Plant-forward formula</span>
              <span>Made in small batches</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg,#eef0f3 0%,#e6e6ee 55%,#efe8da 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute top-10 right-0 size-[360px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(217,138,68,0.28), rgba(217,138,68,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="mb-12 max-w-[34ch]">
            <h2 className="font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
              What a gentle morning supports.
            </h2>
            <p className="mt-4 text-base text-pretty text-ink/70">
              Not a fix, not a fad — a small, repeatable habit that helps your
              body feel a little more in tune.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <div key={b.title} className="frost lift rounded-2xl p-6">
                <span className="font-display text-sm text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-pretty text-ink/70">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-STEP RITUAL */}
      <section id="ritual" className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="mb-12 max-w-[30ch]">
            <span className="text-xs uppercase tracking-[0.18em] text-terracotta">
              The ritual
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
              Three quiet steps, once a day.
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {ritual.map((r) => (
              <div key={r.step}>
                <span className="font-display text-7xl font-semibold leading-none text-terracotta/30 lg:text-8xl">
                  {r.step}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-pretty text-ink/70">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INGREDIENT RAIL */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg,#efe8da 0%,#e6e6ee 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="mb-10 max-w-[34ch]">
            <span className="text-xs uppercase tracking-[0.18em] text-matcha">
              Inside the tonic
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
              Botanicals, chosen with intent.
            </h2>
          </div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-4">
            {ingredients.map((ing) => (
              <div
                key={ing.name}
                className="frost lift w-64 shrink-0 snap-start rounded-2xl p-6"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {ing.name}
                </h3>
                <p className="mt-2 text-sm text-pretty text-ink/70">
                  {ing.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-creamsoft">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="frost lift rounded-2xl p-7">
                <span className="font-display text-3xl leading-none text-terracotta/40">
                  &ldquo;
                </span>
                <blockquote className="mt-1 text-base text-pretty text-ink/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-sm font-medium text-ink/60">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg,#eef0f3 0%,#e6e6ee 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute -bottom-20 right-10 size-[380px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(127,138,91,0.35), rgba(127,138,91,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-24">
          <div className="frost rounded-[28px] p-8 text-center lg:p-12">
            <span className="text-xs uppercase tracking-[0.18em] text-matcha">
              A calm promise
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
              60 days, no fuss.
            </h2>
            <p className="mx-auto mt-4 max-w-[44ch] text-base text-pretty text-ink/70">
              Try it as part of your mornings for two full months. If it
              doesn't feel like a fit, reach out and we'll make it right.
            </p>
            <div className="mt-8">
              <CtaButton>Start the ritual</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
          <h2 className="mb-8 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            Questions, gently answered.
          </h2>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-ink">
                  {f.q}
                  <span className="text-xl leading-none text-terracotta transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-pretty text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* REPEAT CTA */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg,#efe8da 0%,#e6e6ee 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute top-0 left-1/3 size-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(217,138,68,0.32), rgba(217,138,68,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            Begin with a single scoop.
          </h2>
          <p className="mx-auto mt-4 max-w-[42ch] text-base text-pretty text-ink/70">
            One warm glass, one quiet ritual, every morning.
          </p>
          <div className="mt-8">
            <CtaButton large>See today's offer</CtaButton>
          </div>
        </div>
      </section>

      {/* DISCLAIMER FOOTER */}
      <footer className="bg-ink text-cream/70">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <p className="text-sm leading-relaxed text-pretty text-cream/60">
              Disclaimer: This page is an independent affiliate publication. We
              may receive a commission if you purchase through links on this
              page, at no extra cost to you. Statements have not been evaluated
              by the FDA. This product is not intended to diagnose, treat,
              cure, or prevent any disease. Individual results vary. Consult a
              healthcare professional before beginning any new supplement,
              especially if you are pregnant, nursing, or taking medication.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-6">
            <span className="text-xs uppercase tracking-[0.18em] text-cream/40">
              Morning metabolic ritual
            </span>
            <span className="text-xs text-cream/40">
              An affiliate experience. No price or brand shown here.
            </span>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA BAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
        <div className="frost flex items-center justify-between gap-4 px-5 py-3">
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink">One morning scoop</p>
            <p className="text-xs text-ink/60">60-day guarantee</p>
          </div>
          <a
            href={OFFER_URL}
            target="_blank"
            rel="noopener"
            className="ctapulse inline-flex shrink-0 items-center gap-1.5 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-creamsoft ring-1 ring-terracotta/60"
          >
            See offer <span className="text-creamsoft/80">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

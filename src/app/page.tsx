import Image from "next/image";
import { site, hero, intro, facts, residences, deck, rooftop, design, arrival, location, agent, form, footer, nav } from "@/content/copy";
import SiteHeader from "@/components/SiteHeader";
import ResidenceTabs from "@/components/ResidenceTabs";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";

function jsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ApartmentComplex",
      name: site.name,
      description: site.description,
      url: site.url,
      image: `${site.url}${hero.poster}`,
      numberOfAccommodationUnits: 5,
      address: { "@type": "PostalAddress", streetAddress: site.address, addressLocality: "Christchurch", addressRegion: "Canterbury", addressCountry: "NZ" },
    },
    { "@context": "https://schema.org", "@type": "RealEstateAgent", name: `${agent.name}, Bayleys`, telephone: agent.phone, email: agent.email, areaServed: "Christchurch" },
  ];
}

const Centre = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-3xl px-6 text-center ${className}`}>{children}</div>
);

// A short vertical hairline between sections, echoing York's centre rule.
const Stem = ({ dark = false }: { dark?: boolean }) => <div aria-hidden="true" className={`mx-auto h-20 w-px ${dark ? "bg-sage/30" : "bg-line"}`} />;

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }} />
      <SiteHeader />
      <Reveal />

      <main>
        {/* Hero: drone film, morning to night */}
        <section id="top" className="relative h-[100svh] min-h-[560px] overflow-hidden bg-ink">
          {/* On phones the film sits in a wider frame at the top so more of the skyline shows; from sm up it fills the screen */}
          <div className="absolute inset-x-0 top-[68px] h-[100vw] max-h-[58svh] sm:inset-0 sm:h-auto sm:max-h-none">
            <Image src={hero.poster} alt={hero.imageAlt} fill priority sizes="100vw" className="object-cover" />
            <video className="hero-video absolute inset-0 h-full w-full object-cover" src={hero.video} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_bottom,rgba(31,28,25,0),#1f1c19)] sm:hidden" />
          </div>
          <div className="absolute inset-0 hidden sm:block bg-[linear-gradient(to_bottom,rgba(20,18,15,.55)_0%,rgba(20,18,15,0)_28%,rgba(20,18,15,0)_45%,rgba(20,18,15,.7)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-28 sm:hidden bg-[linear-gradient(to_bottom,rgba(20,18,15,.55),rgba(20,18,15,0))]" />
          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-14 text-center text-white sm:pb-20">
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-white/90">{hero.eyebrow}</p>
            <h1 className="display h-xl mt-5 !text-white whitespace-pre-line">{hero.headline}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-[0.85rem] uppercase leading-relaxed tracking-[0.24em] text-white/90">{hero.status}</p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#register" className="btn btn-light">{hero.cta}</a>
              <a href="#residences" className="btn btn-ghost-light hidden sm:inline-flex">Explore</a>
            </div>
          </div>
          <span className="render-tag !left-auto right-3 !bottom-3 hidden sm:block">{hero.renderNote}</span>
        </section>

        {/* Intro */}
        <section className="pt-24 sm:pt-32">
          <Centre className="reveal">
            <p className="eyebrow">{intro.eyebrow}</p>
            <h2 className="display h-lg mt-6">{intro.heading}</h2>
            <div className="mt-8 grid gap-5">{intro.body.map((p) => <p key={p} className="lede">{p}</p>)}</div>
          </Centre>
          <Stem />
          <div className="reveal relative mx-auto aspect-[3/2] w-full max-w-[1400px] sm:px-8">
            <div className="relative h-full w-full">
              <Image src={intro.image} alt={intro.imageAlt} fill sizes="(min-width:1400px) 1400px, 100vw" className="object-cover" />
              <span className="render-tag">Artist's impression</span>
            </div>
          </div>
        </section>

        {/* Facts */}
        <section aria-label="At a glance" className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8">
          <dl className="grid grid-cols-2 gap-px border-y border-line bg-line md:grid-cols-5">
            {facts.map((f) => (
              <div key={f.label} className="bg-stone px-4 py-8 text-center last:col-span-2 md:last:col-span-1">
                <dd className="font-[family-name:var(--font-display)] text-4xl text-ink sm:text-5xl">{f.value}</dd>
                <dt className="mt-2 text-[0.8rem] uppercase tracking-[0.18em]">{f.label}</dt>
              </div>
            ))}
          </dl>
        </section>

        {/* Residences */}
        <section id="residences" className="scroll-mt-20 bg-paper py-24 sm:py-32">
          <Centre className="reveal">
            <p className="eyebrow">{residences.eyebrow}</p>
            <h2 className="display h-lg mt-6">{residences.heading}</h2>
            <p className="lede mt-6">{residences.lede}</p>
          </Centre>
          <div className="reveal mx-auto mt-16 max-w-[1300px] px-4 sm:px-8"><ResidenceTabs /></div>
          <p className="mx-auto mt-12 max-w-3xl px-6 text-center text-sm text-body">{residences.areaNote}</p>
        </section>

        {/* West deck */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-6 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:items-end">
            <div className="reveal relative aspect-[3/2]">
              <Image src={deck.image} alt={deck.imageAlt} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" />
              <span className="render-tag">Artist's impression</span>
            </div>
            <div className="reveal lg:pb-8">
              <p className="eyebrow">{deck.eyebrow}</p>
              <h2 className="display h-lg mt-6">{deck.heading}</h2>
              <p className="lede mt-6">{deck.body}</p>
              <div className="relative mt-10 aspect-[3/2] w-3/4">
                <Image src={deck.image2} alt={deck.image2Alt} fill sizes="30vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Rooftop wellness, on dark garden olive */}
        <section id="rooftop" className="on-dark scroll-mt-20 bg-olive py-24 sm:py-32">
          <Centre className="reveal">
            <p className="eyebrow">{rooftop.eyebrow}</p>
            <h2 className="display h-lg mt-6">{rooftop.heading}</h2>
            <p className="lede mt-6">{rooftop.body}</p>
          </Centre>
          <Stem dark />
          <div className="reveal relative mx-auto aspect-[3/2] max-w-[1400px] sm:px-8">
            <div className="relative h-full w-full">
              <Image src={rooftop.image} alt={rooftop.imageAlt} fill sizes="(min-width:1400px) 1400px, 100vw" className="object-cover" />
              <span className="render-tag">Artist's impression</span>
            </div>
          </div>
          <ul className="mx-auto mt-14 grid max-w-[1400px] gap-px px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
            {rooftop.features.map((f) => (
              <li key={f.name} className="reveal border-t border-sage/30 pt-6 pb-4 lg:px-4">
                <p className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-[0.08em] text-white">{f.name}</p>
                <p className="mt-2 text-sage">{f.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Design and materials */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <p className="eyebrow">{design.eyebrow}</p>
              <h2 className="display h-lg mt-6">{design.heading}</h2>
              <p className="lede mt-6">{design.body}</p>
              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
                {design.materials.map((m) => (
                  <div key={m.name} className="border-t border-line pt-4">
                    <dt className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-[0.08em] text-ink">{m.name}</dt>
                    <dd className="mt-1">{m.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="reveal relative aspect-[4/5] lg:aspect-[4/5]">
              <Image src={hero.dusk} alt="Artist's impression of The Rise with planting cascading from every deck" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
              <span className="render-tag">Artist's impression</span>
            </div>
          </div>
        </section>

        {/* Arrival */}
        <section className="bg-paper py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1.25fr] lg:items-center">
            <div className="reveal order-2 lg:order-1">
              <p className="eyebrow">{arrival.eyebrow}</p>
              <h2 className="display h-lg mt-6">{arrival.heading}</h2>
              <p className="lede mt-6">{arrival.body}</p>
              <ul className="mt-8 grid gap-3">
                {arrival.points.map((p) => <li key={p} className="flex gap-4"><span aria-hidden="true" className="mt-[0.85em] h-px w-6 shrink-0 bg-bronze" />{p}</li>)}
              </ul>
            </div>
            <div className="reveal relative order-1 aspect-[3/2] lg:order-2">
              <Image src={arrival.image} alt={arrival.imageAlt} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" />
              <span className="render-tag">Artist's impression</span>
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="scroll-mt-20 py-24 sm:py-32">
          <Centre className="reveal">
            <p className="eyebrow">{location.eyebrow}</p>
            <h2 className="display h-lg mt-6">{location.heading}</h2>
            <p className="lede mt-6">{location.body}</p>
          </Centre>
          <div className="mt-16 overflow-hidden border-y border-line py-8" aria-label="Nearby places">
            <ul className="marquee">
              {[...location.places, ...location.places].map((p, i) => (
                <li key={i} aria-hidden={i >= location.places.length} className="flex items-baseline gap-4 whitespace-nowrap px-10">
                  <span className="font-[family-name:var(--font-display)] text-3xl uppercase tracking-[0.08em] text-ink">{p.name}</span>
                  <span className="text-sm uppercase tracking-[0.2em] text-bronze">{p.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-center text-sm">{location.note}</p>
        </section>

        {/* Agent and register */}
        <section id="register" className="scroll-mt-20 bg-paper py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1300px] gap-16 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal">
              <p className="eyebrow">{agent.eyebrow}</p>
              <div className="mt-8 flex items-center gap-6">
                <Image src={agent.photo} alt={`${agent.name}, Bayleys`} width={140} height={140} className="h-[120px] w-[120px] shrink-0 rounded-full object-cover grayscale-[15%] sm:h-[140px] sm:w-[140px]" />
                <div>
                  <h2 className="display h-md">{agent.name}</h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-body">{agent.role}</p>
                </div>
              </div>
              <p className="mt-8">{agent.bio}</p>
              <div className="mt-8 grid gap-2 text-lg">
                <a href={agent.phoneHref} className="text-ink underline decoration-line underline-offset-8 hover:decoration-ink">{agent.phone}</a>
                <a href={`mailto:${agent.email}`} className="text-ink underline decoration-line underline-offset-8 hover:decoration-ink break-all">{agent.email}</a>
              </div>
              <p className="mt-8 text-sm">{agent.office}<br />{agent.licence}</p>
              <p className="mt-10 font-[family-name:var(--font-display)] text-[1.75rem] tracking-[0.3em] uppercase text-ink">Bayleys</p>
            </div>
            <div className="reveal">
              <p className="eyebrow">{form.eyebrow}</p>
              <h2 className="display h-lg mt-6">{form.heading}</h2>
              <p className="lede mt-6 mb-10">{form.lede}</p>
              <EnquiryForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="on-dark bg-ink py-16 text-sage">
        <div className="mx-auto max-w-[1300px] px-6 sm:px-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="font-[family-name:var(--font-display)] text-3xl uppercase tracking-[0.32em] pl-[0.32em] text-white">The Rise</p>
            <p className="text-[0.8rem] uppercase tracking-[0.28em]">{site.address} · {site.suburb}</p>
            <p className="mt-4 text-[0.8rem] uppercase tracking-[0.22em]">Marketed by {agent.name} · Bayleys</p>
          </div>
          <div className="rule my-10" />
          <p className="text-sm leading-relaxed">{footer.disclaimer}</p>
          <p className="mt-4 text-sm">{footer.developer}</p>
          <p className="mt-6 text-sm">© {new Date().getFullYear()} The Rise · <a className="underline underline-offset-4 hover:text-white" href={nav.brochure.href} target="_blank" rel="noopener">{nav.brochure.label}</a> · <a className="underline underline-offset-4 hover:text-white" href="/marketing">{footer.marketingLink}</a></p>
        </div>
      </footer>
    </>
  );
}

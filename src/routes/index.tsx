import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, useParallax } from "@/components/Reveal";
import { Section } from "@/components/PageHero";
import { PRESTATIONS, TEMOIGNAGES, FAQ, SITE } from "@/lib/site";
import heroImg from "@/assets/hero-garde-enfants.jpg";
import sortieImg from "@/assets/sortie-ecole.jpg";
import bebeImg from "@/assets/bebe-jeux.jpg";
import dessinImg from "@/assets/enfant-dessin.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Garde d'enfants à domicile à Marseille | Minots Minettes" },
      {
        name: "description",
        content:
          "Garde d'enfants à domicile à Marseille, Aubagne et Allauch : sortie d'école, mercredi, vacances, horaires atypiques, garde d'urgence sous 48 h. Agrément préfectoral, intervenantes sélectionnées une à une.",
      },
      {
        property: "og:title",
        content: "Garde d'enfants à domicile à Marseille | Minots Minettes",
      },
      {
        property: "og:description",
        content:
          "15 ans de terrain à Marseille. Une intervenante référente, une rencontre à domicile avant la première garde, zéro paperasse pour les parents.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const PEURS = [
  {
    peur: "« Confier mon enfant à un inconnu »",
    reponse:
      "Vous ne rencontrerez jamais votre intervenante le jour J. Nous venons à votre domicile avant la première garde, avec elle, pour que le lien commence en votre présence.",
  },
  {
    peur: "« Le prix va exploser »",
    reponse:
      "33 €/h, soit environ 16,50 €/h après crédit d'impôt de 50 %. Nous simulons votre reste à charge avec le CMG avant toute signature.",
  },
  {
    peur: "« Ce ne sera jamais la même personne »",
    reponse:
      "Une intervenante référente par famille, pour toute la durée du contrat. En cas d'absence, le remplacement est assuré par un profil déjà briefé.",
  },
  {
    peur: "« La paperasse et les démarches »",
    reponse:
      "Aucune. Contrat, paie, déclarations, attestation fiscale : l'agence est l'employeur. Vous recevez une facture, c'est tout.",
  },
];

const ETAPES = [
  {
    n: "01",
    t: "Vous nous racontez votre quotidien",
    d: "Un échange téléphonique de 15 minutes pour comprendre vos horaires, l'âge des enfants, vos contraintes réelles.",
  },
  {
    n: "02",
    t: "Nous recrutons pour vous, pas avant vous",
    d: "Nous sélectionnons les profils en fonction de votre besoin exclusif, puis nous les recevons en agence.",
  },
  {
    n: "03",
    t: "Rencontre à votre domicile",
    d: "Vous, vos enfants, l'intervenante et nous. On pose le cadre, les habitudes, les urgences, les petits détails qui comptent.",
  },
  {
    n: "04",
    t: "La garde commence, nous restons présents",
    d: "Transmissions régulières, points de suivi, remplacement garanti. Vous gardez un interlocuteur unique en agence.",
  },
];

const AGES = [
  { a: "0 – 3 ans", d: "Intervenantes qualifiées petite enfance : rythmes, repas, sommeil, éveil sensoriel." },
  { a: "3 – 6 ans", d: "Sortie d'école, goûter, jeux d'éveil, autonomie et premiers rituels du soir." },
  { a: "6 – 12 ans", d: "Devoirs, accompagnement aux activités, temps calme, gestion des fratries." },
  { a: "12 ans et +", d: "Présence rassurante, cadrage des horaires, accompagnement des trajets." },
];

function Index() {
  const heroRef = useParallax(0.08);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden pt-32 pb-16 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-15%] top-[-10%] size-[40rem] rounded-full bg-[image:var(--gradient-warm)] opacity-60 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:px-10">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                <span className="size-2 rounded-full bg-primary" />
                Marseille & alentours · 15 ans de terrain
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-7 font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
                La garde de mes enfants,
                <span className="block text-gradient-warm">ce sera Minots Minettes.</span>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Agence de garde d'enfants à domicile à Marseille, Aubagne et Allauch. Un
                accompagnement premium, une intervenante référente choisie pour votre famille, et
                une proximité de terrain que personne ne remplace.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-1"
                >
                  Inscrire ma famille
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="rounded-full border border-border bg-card px-7 py-4 font-semibold transition-colors hover:bg-secondary"
                >
                  {SITE.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={330}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  ["15 ans", "à Marseille"],
                  ["48 h", "garde d'urgence"],
                  ["0 – 12+", "tous les âges"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-display text-3xl text-primary">{k}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-lift)]">
              <div ref={heroRef} className="will-change-transform">
                <img
                  src={heroImg}
                  alt="Intervenante Minots Minettes jouant avec deux enfants dans un salon lumineux à Marseille"
                  width={1600}
                  height={1104}
                  className="h-[30rem] w-full scale-110 object-cover lg:h-[38rem]"
                />
              </div>
            </div>
            <div className="animate-float-slow surface-card absolute -bottom-8 -left-4 max-w-[16rem] p-5 lg:-left-12">
              <p className="text-sm leading-snug">
                « Une rencontre à la maison avant la première garde. Ça a tout changé pour nous. »
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Julien & Marie · Aubagne
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="grain overflow-hidden border-y border-border bg-secondary/60 py-5">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...PRESTATIONS, ...PRESTATIONS].map((p, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-xl text-foreground/70">
              {p.titre}
              <span className="text-primary">✳</span>
            </span>
          ))}
        </div>
      </div>

      {/* MANIFESTE */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="text-xs uppercase tracking-[0.32em] text-primary">Notre promesse</p>
              <h2 className="mt-5 font-display text-4xl leading-tight lg:text-5xl">
                Nous ne plaçons pas une nounou. Nous construisons une relation de confiance.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Linda Guenfici accompagne les familles marseillaises depuis plus de quinze ans.
                Animatrice, responsable de structure petite enfance, puis gérante d'agence : chaque
                étape a nourri la même conviction — un enfant bien gardé est un enfant compris.
              </p>
              <Link
                to="/a-propos"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition-transform duration-300 hover:translate-x-1"
              >
                Découvrir l'histoire de l'agence →
              </Link>
            </div>
          </Reveal>
          <ul className="space-y-4">
            {PEURS.map((p, i) => (
              <Reveal key={p.peur} as="li" delay={i * 90}>
                <div className="surface-card p-7 transition-transform duration-500 hover:-translate-y-1">
                  <h3 className="font-display text-xl">{p.peur}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.reponse}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* PRESTATIONS */}
      <Section id="prestations">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-4xl leading-tight lg:text-5xl">
              Une solution pour chaque moment de votre semaine
            </h2>
            <Link to="/prestations" className="font-semibold text-primary">
              Toutes les prestations →
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRESTATIONS.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link
                to="/prestations"
                hash={p.slug}
                className="group block h-full rounded-[2rem] border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="font-display text-sm text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl leading-snug">{p.titre}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.resume}</p>
                <span className="mt-6 inline-block text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  En savoir plus →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* IMMERSION IMAGES */}
      <section className="relative overflow-hidden py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 lg:px-10">
          {[
            { src: sortieImg, alt: "Intervenante accompagnant un enfant à la sortie de l'école à Marseille", w: 1408, h: 1008, label: "Sortie d'école" },
            { src: bebeImg, alt: "Bébé jouant avec des jouets en bois accompagné d'une auxiliaire", w: 1008, h: 1008, label: "Petite enfance" },
            { src: dessinImg, alt: "Petite fille dessinant avec son intervenante à domicile", w: 912, h: 1200, label: "Éveil & créativité" },
          ].map((img, i) => (
            <Reveal key={img.label} delay={i * 100}>
              <figure className="group relative overflow-hidden rounded-[2rem]">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  className="h-[22rem] w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-background/85 px-4 py-2 text-sm font-medium backdrop-blur">
                  {img.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* METHODE */}
      <Section>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-primary">La méthode Minots Minettes</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight lg:text-5xl">
            Quatre étapes, aucune zone d'ombre
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {ETAPES.map((e, i) => (
            <Reveal key={e.n} as="li" delay={i * 90}>
              <div className="h-full bg-card p-8 transition-colors duration-500 hover:bg-secondary/70">
                <span className="font-display text-5xl text-clay-soft">{e.n}</span>
                <h3 className="mt-5 font-display text-xl leading-snug">{e.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* AGES */}
      <Section className="!py-10">
        <div className="grain rounded-[2.5rem] bg-[image:var(--gradient-dusk)] px-7 py-14 text-[oklch(0.95_0.015_85)] lg:px-16 lg:py-20">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl leading-tight lg:text-5xl">
              De la naissance à l'adolescence
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {AGES.map((a, i) => (
              <Reveal key={a.a} delay={i * 80}>
                <div className="border-t border-[oklch(0.95_0.015_85_/_0.25)] pt-5">
                  <h3 className="font-display text-2xl">{a.a}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[oklch(0.88_0.02_85)]">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* TEMOIGNAGES */}
      <Section>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-4xl leading-tight lg:text-5xl">
              Les familles marseillaises en parlent mieux que nous
            </h2>
            <Link to="/temoignages" className="font-semibold text-primary">
              Tous les témoignages →
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TEMOIGNAGES.slice(0, 3).map((t, i) => (
            <Reveal key={t.nom} delay={i * 90}>
              <blockquote className="surface-card h-full p-8">
                <p className="font-display text-3xl text-clay-soft">“</p>
                <p className="mt-2 leading-relaxed">{t.texte}</p>
                <footer className="mt-6 text-sm text-muted-foreground">
                  {t.nom} — {t.lieu}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ TEASER */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div>
              <h2 className="font-display text-4xl leading-tight lg:text-5xl">
                Les questions que tous les parents nous posent
              </h2>
              <Link to="/faq" className="mt-6 inline-block font-semibold text-primary">
                Voir la FAQ complète →
              </Link>
            </div>
          </Reveal>
          <div className="divide-y divide-border border-y border-border">
            {FAQ.slice(0, 4).map((f, i) => (
              <Reveal key={f.q} delay={i * 70}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl">
                    {f.q}
                    <span className="text-primary transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{f.r}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal>
          <div className="surface-card grain overflow-hidden px-7 py-14 text-center lg:px-16 lg:py-20">
            <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight lg:text-6xl">
              Parlons de votre organisation, sans engagement
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Décrivez-nous vos horaires et l'âge de vos enfants : nous vous rappelons sous 24 h
              avec une proposition claire et un devis personnalisé.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-1"
              >
                Remplir le formulaire d'inscription
              </Link>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-8 py-4 font-semibold transition-colors hover:bg-secondary"
              >
                Écrire sur WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

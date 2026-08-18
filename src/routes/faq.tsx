import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ garde d'enfants à domicile à Marseille | Minots Minettes" },
      {
        name: "description",
        content:
          "Sélection des intervenantes, continuité, tarifs après crédit d'impôt, démarches administratives, âges gardés, assurance : toutes les réponses aux questions des parents marseillais.",
      },
      { property: "og:title", content: "Vos questions, nos réponses — Minots Minettes" },
      {
        property: "og:description",
        content:
          "Tout ce que les parents veulent savoir avant de confier leurs enfants à une agence de garde à domicile.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.r },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [q, setQ] = useState("");
  const list = FAQ.filter(
    (f) =>
      f.q.toLowerCase().includes(q.toLowerCase()) || f.r.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Posez toutes vos questions.{" "}
            <span className="text-gradient-warm">Même les plus délicates.</span>
          </>
        }
        intro="Choisir une garde d'enfants, c'est accepter de laisser quelqu'un entrer dans son intimité familiale. Il est normal de vouloir tout comprendre avant de dire oui."
      >
        <div className="mt-9 max-w-md">
          <label htmlFor="faq-search" className="sr-only">
            Rechercher dans la FAQ
          </label>
          <input
            id="faq-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher : tarif, remplacement, urgence…"
            className="w-full rounded-full border border-border bg-card px-6 py-4 outline-none transition-shadow focus:ring-2 focus:ring-ring"
          />
        </div>
      </PageHero>

      <Section className="!pt-0">
        <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
          {list.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl leading-snug">
                  {f.q}
                  <span className="mt-1 text-primary transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted-foreground">{f.r}</p>
              </details>
            </Reveal>
          ))}
          {list.length === 0 && (
            <p className="py-10 text-center text-muted-foreground">
              Aucune réponse ne correspond à votre recherche — posez-nous directement la question.
            </p>
          )}
        </div>

        <Reveal>
          <div className="mx-auto mt-14 max-w-3xl rounded-[2rem] bg-secondary/60 p-9 text-center">
            <h2 className="font-display text-3xl">Il vous manque une réponse ?</h2>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground"
            >
              Écrire à l'agence
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

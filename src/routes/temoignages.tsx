import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TEMOIGNAGES } from "@/lib/site";

export const Route = createFileRoute("/temoignages")({
  head: () => ({
    meta: [
      { title: "Avis des familles sur Minots Minettes | Garde d'enfants Marseille" },
      {
        name: "description",
        content:
          "Les retours des familles accompagnées par Minots Minettes à Marseille, Aubagne et Allauch : continuité de l'intervenante, garde d'urgence, horaires atypiques et garde partagée.",
      },
      { property: "og:title", content: "Témoignages de familles — Minots Minettes" },
      {
        property: "og:description",
        content:
          "Ce que disent les parents marseillais de notre accompagnement, de la première rencontre au quotidien.",
      },
      { property: "og:url", content: "/temoignages" },
    ],
    links: [{ rel: "canonical", href: "/temoignages" }],
  }),
  component: Temoignages,
});

function Temoignages() {
  return (
    <>
      <PageHero
        eyebrow="Témoignages"
        title={
          <>
            La confiance ne se promet pas.{" "}
            <span className="text-gradient-warm">Elle se raconte.</span>
          </>
        }
        intro="Voici les mots des familles que nous accompagnons, parfois depuis plusieurs années. Ce sont elles qui décrivent le mieux notre façon de travailler."
      />

      <Section className="!pt-0">
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {TEMOIGNAGES.map((t, i) => (
            <Reveal key={t.nom} delay={(i % 3) * 90} className="mb-5 break-inside-avoid">
              <blockquote className="surface-card p-8">
                <div className="flex gap-1 text-primary" aria-label="5 étoiles sur 5">
                  {"★★★★★".split("").map((s, k) => (
                    <span key={k}>{s}</span>
                  ))}
                </div>
                <p className="mt-4 leading-relaxed">{t.texte}</p>
                <footer className="mt-6 text-sm text-muted-foreground">
                  {t.nom} — {t.lieu}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <div className="surface-card flex flex-wrap items-center justify-between gap-6 p-9">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl">Vous êtes déjà accompagné par l'agence ?</h2>
              <p className="mt-3 text-muted-foreground">
                Votre avis aide d'autres parents à franchir le pas. Partagez votre expérience sur
                notre fiche Google ou directement auprès de l'agence.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground"
            >
              Laisser un avis
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PRESTATIONS } from "@/lib/site";
import sortieImg from "@/assets/sortie-ecole.jpg";

export const Route = createFileRoute("/prestations")({
  head: () => ({
    meta: [
      { title: "Prestations de garde d'enfants à Marseille | Minots Minettes" },
      {
        name: "description",
        content:
          "Sortie d'école, garde du matin, mercredi, vacances scolaires, soirées, horaires atypiques, garde d'urgence 48 h, garde partagée et événements familiaux à Marseille et alentours.",
      },
      { property: "og:title", content: "Nos prestations de garde d'enfants à domicile" },
      {
        property: "og:description",
        content:
          "Dix formules de garde à domicile pensées pour le rythme réel des familles marseillaises, de 0 à 12 ans et plus.",
      },
      { property: "og:url", content: "/prestations" },
    ],
    links: [{ rel: "canonical", href: "/prestations" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Prestations de garde d'enfants — Minots Minettes",
          itemListElement: PRESTATIONS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.titre,
            description: p.resume,
          })),
        }),
      },
    ],
  }),
  component: Prestations,
});

function Prestations() {
  return (
    <>
      <PageHero
        eyebrow="Prestations"
        title={
          <>
            Chaque famille a son rythme.{" "}
            <span className="text-gradient-warm">Nous nous y adaptons.</span>
          </>
        }
        intro="Régulier ou ponctuel, du lever à la nuit, du bébé à l'adolescent : nos formules couvrent l'ensemble des besoins de garde à Marseille, Aubagne et Allauch."
      />

      <Section className="!pt-0">
        <div className="grid gap-5 lg:grid-cols-2">
          {PRESTATIONS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80}>
              <article
                id={p.slug}
                className="surface-card h-full scroll-mt-32 p-8 transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="font-display text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-3xl leading-snug">{p.titre}</h2>
                <p className="mt-4 leading-relaxed">{p.resume}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2.5rem] border border-border bg-card lg:grid-cols-2">
            <img
              src={sortieImg}
              alt="Intervenante Minots Minettes récupérant un enfant à la sortie de l'école"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full min-h-[18rem] w-full object-cover"
            />
            <div className="p-9 lg:p-14">
              <h2 className="font-display text-3xl leading-tight lg:text-4xl">
                Un besoin qui ne rentre dans aucune case ?
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Gardes fractionnées, semaines alternées, fratries nombreuses, enfants à besoins
                spécifiques : nous construisons des plannings sur mesure depuis quinze ans. Racontez
                -nous votre semaine, nous trouverons l'organisation qui tient.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground"
                >
                  Demander un devis gratuit
                </Link>
                <Link
                  to="/aides-et-tarifs"
                  className="rounded-full border border-border px-7 py-4 font-semibold"
                >
                  Aides & tarifs
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

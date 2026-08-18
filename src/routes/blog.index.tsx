import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ARTICLES } from "@/lib/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Conseils aux parents & parentalité | Blog Minots Minettes" },
      {
        name: "description",
        content:
          "Conseils pratiques de professionnels de la petite enfance à Marseille : adaptation avec une nouvelle intervenante, crédit d'impôt et CMG, horaires atypiques, activités d'éveil.",
      },
      { property: "og:title", content: "Blog — Conseils aux parents | Minots Minettes" },
      {
        property: "og:description",
        content:
          "Nos articles pour organiser la garde de vos enfants sereinement, écrits par des professionnels de la petite enfance.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Blog · conseils aux parents"
        title={
          <>
            Quinze ans de terrain,{" "}
            <span className="text-gradient-warm">partagés sans filtre.</span>
          </>
        }
        intro="Adaptation, budget, sommeil, organisation : nos articles répondent aux vraies questions des familles, avec l'expérience d'une agence qui intervient chaque jour à domicile."
      />

      <Section className="!pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 2) * 80}>
              <article className="surface-card group h-full p-8 transition-transform duration-500 hover:-translate-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {new Date(a.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  · {a.lecture}
                </p>
                <h2 className="mt-4 font-display text-3xl leading-snug">
                  <Link to="/blog/$slug" params={{ slug: a.slug }} className="hover:text-primary">
                    {a.titre}
                  </Link>
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{a.chapeau}</p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: a.slug }}
                  className="mt-6 inline-block font-semibold text-primary"
                >
                  Lire l'article →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

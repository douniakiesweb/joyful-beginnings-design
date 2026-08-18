import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ARTICLES } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    const a = loaderData?.article;
    return {
      meta: [
        { title: a ? `${a.titre} | Minots Minettes` : "Article | Minots Minettes" },
        { name: "description", content: a?.chapeau ?? "Conseils aux parents à Marseille." },
        { property: "og:title", content: a?.titre ?? "Article" },
        { property: "og:description", content: a?.chapeau ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: a
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: a.titre,
                description: a.chapeau,
                datePublished: a.date,
                author: { "@type": "Organization", name: "Minots Minettes" },
              }),
            },
          ]
        : [],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const autres = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <Section className="!pb-8 !pt-36 lg:!pt-48">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link to="/blog" className="text-sm font-semibold text-primary">
              ← Tous les articles
            </Link>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="mt-6 font-display text-4xl leading-tight lg:text-6xl">{article.titre}</h1>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {new Date(article.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · {article.lecture} de lecture
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 font-display text-2xl leading-snug text-foreground/80">
              {article.chapeau}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="mx-auto max-w-3xl space-y-6">
          {article.contenu.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="text-lg leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}

          <Reveal>
            <div className="surface-card mt-12 p-8">
              <h2 className="font-display text-2xl">Besoin d'une garde à Marseille ?</h2>
              <p className="mt-3 text-muted-foreground">
                Nous vous rappelons sous 24 h avec une proposition adaptée à vos horaires.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-block rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground"
              >
                Parler à l'agence
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="!pt-0">
        <h2 className="font-display text-3xl">À lire ensuite</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {autres.map((a) => (
            <Reveal key={a.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: a.slug }}
                className="surface-card block h-full p-8 transition-transform duration-500 hover:-translate-y-1"
              >
                <h3 className="font-display text-2xl leading-snug">{a.titre}</h3>
                <p className="mt-3 text-muted-foreground">{a.chapeau}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

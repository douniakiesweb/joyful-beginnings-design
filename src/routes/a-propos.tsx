import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-garde-enfants.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous ? Linda Guenfici | Minots Minettes Marseille" },
      {
        name: "description",
        content:
          "Minots Minettes, agence de garde d'enfants à domicile fondée par Linda Guenfici : 15 ans d'expérience petite enfance à Marseille, agrément préfectoral et intervenantes salariées.",
      },
      { property: "og:title", content: "L'histoire de Minots Minettes — Linda Guenfici" },
      {
        property: "og:description",
        content:
          "De l'animation à la direction de structure petite enfance : le parcours qui fonde notre exigence auprès des familles marseillaises.",
      },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: APropos,
});

const VALEURS = [
  {
    t: "Proximité de terrain",
    d: "Nous sommes une agence locale, pas une plateforme. Nous connaissons les écoles, les crèches, les trajets et les habitudes de chaque quartier de Marseille.",
  },
  {
    t: "Sélection exigeante",
    d: "Chaque candidate est reçue en agence, ses diplômes, références et son casier judiciaire sont vérifiés. Nous recrutons en fonction du besoin exclusif de la famille.",
  },
  {
    t: "Accompagnement premium",
    d: "Un interlocuteur unique, des transmissions régulières, un remplacement garanti et zéro démarche administrative pour les parents.",
  },
  {
    t: "Le rythme de l'enfant d'abord",
    d: "Repas, sieste, devoirs, rituels du soir : nous adaptons l'intervention à l'enfant, jamais l'inverse.",
  },
];

const PARCOURS = [
  { a: "Les débuts", d: "Animatrice de centre aéré, de colonies de vacances et babysitting : la découverte du métier par le terrain." },
  { a: "La formation", d: "Diplôme de responsable de structure enfance et petite enfance." },
  { a: "L'agence", d: "Intégration d'une agence marseillaise de garde d'enfants, puis prise de la gérance." },
  { a: "Aujourd'hui", d: "Minots Minettes se développe en indépendante et en local, avec la même équipe d'intervenantes sélectionnées personnellement." },
];

function APropos() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            Quinze ans auprès des enfants, <span className="text-gradient-warm">et des parents.</span>
          </>
        }
        intro="Minots Minettes est née d'un parcours entier consacré à l'enfance : l'animation, la petite enfance, la direction de structure, puis la gérance d'agence. Aujourd'hui, l'aventure continue en local, à Marseille."
      />

      <Section className="!pt-0">
        <Reveal>
          <figure className="overflow-hidden rounded-[2.5rem]">
            <img
              src={heroImg}
              alt="Linda Guenfici et son équipe accompagnant des enfants à Marseille"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-[24rem] w-full object-cover lg:h-[34rem]"
            />
          </figure>
        </Reveal>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight lg:sticky lg:top-32 lg:text-5xl">
              Le parcours de Linda Guenfici
            </h2>
          </Reveal>
          <ol className="space-y-8">
            {PARCOURS.map((p, i) => (
              <Reveal key={p.a} as="li" delay={i * 80}>
                <div className="border-l-2 border-clay-soft pl-6">
                  <h3 className="font-display text-xl">{p.a}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl leading-tight lg:text-5xl">
            Ce qui ne se négocie pas
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {VALEURS.map((v, i) => (
            <Reveal key={v.t} delay={i * 80}>
              <article className="surface-card h-full p-8">
                <h3 className="font-display text-2xl">{v.t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{v.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <div className="surface-card flex flex-wrap items-center justify-between gap-6 p-8">
            <div>
              <h2 className="font-display text-2xl">Une question sur notre fonctionnement ?</h2>
              <p className="mt-2 text-muted-foreground">
                Nous répondons à toutes les familles, même à celles qui hésitent encore.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground"
            >
              Nous contacter
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/aides-et-tarifs")({
  head: () => ({
    meta: [
      { title: "Crédit d'impôt, CAF et tarifs de garde d'enfants | Minots Minettes" },
      {
        name: "description",
        content:
          "Comprendre le coût réel d'une garde d'enfants à domicile à Marseille : crédit d'impôt de 50 %, avance immédiate, complément mode de garde (CMG) de la CAF et devis personnalisé.",
      },
      { property: "og:title", content: "Aides aux familles : crédit d'impôt et CMG" },
      {
        property: "og:description",
        content:
          "33 €/h affichés, environ 16,50 €/h réellement supportés après crédit d'impôt. Simulation personnalisée avant toute signature.",
      },
      { property: "og:url", content: "/aides-et-tarifs" },
    ],
    links: [{ rel: "canonical", href: "/aides-et-tarifs" }],
  }),
  component: Aides,
});

const AIDES = [
  {
    t: "Crédit d'impôt de 50 %",
    d: "La garde d'enfants à domicile relève des services à la personne : la moitié des sommes versées vous est restituée sous forme de crédit d'impôt, dans la limite des plafonds annuels en vigueur. Il s'applique que vous soyez imposable ou non.",
  },
  {
    t: "Avance immédiate",
    d: "Le crédit d'impôt peut être déduit dès le paiement, plutôt qu'attendu l'année suivante. Votre budget mensuel n'est plus avancé pendant douze mois.",
  },
  {
    t: "CMG de la CAF",
    d: "Le complément de libre choix du mode de garde peut compléter le dispositif pour les enfants de moins de 6 ans, avec un montant modulé selon vos revenus et l'âge de l'enfant.",
  },
  {
    t: "Comité d'entreprise & CESU",
    d: "De nombreux employeurs participent au financement via des CESU préfinancés. Nous vous aidons à monter le dossier.",
  },
];

function Aides() {
  return (
    <>
      <PageHero
        eyebrow="Aides & tarifs"
        title={
          <>
            Ce que vous payez vraiment,{" "}
            <span className="text-gradient-warm">écrit noir sur blanc.</span>
          </>
        }
        intro="Le prix est la deuxième crainte des parents, juste après la confiance. Nous préférons donc l'expliquer complètement plutôt que de l'afficher à moitié."
      />

      <Section className="!pt-0">
        <Reveal>
          <div className="grain grid gap-8 rounded-[2.5rem] bg-[image:var(--gradient-dusk)] p-9 text-[oklch(0.95_0.015_85)] sm:grid-cols-2 lg:p-14">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[oklch(0.85_0.03_80)]">
                Tarif horaire agence
              </p>
              <p className="mt-4 font-display text-6xl">{SITE.tarif}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[oklch(0.85_0.03_80)]">
                Après crédit d'impôt
              </p>
              <p className="mt-4 font-display text-6xl text-clay-soft">{SITE.tarifNet}</p>
              <p className="mt-4 text-sm text-[oklch(0.88_0.02_85)]">
                Hors CMG et participation employeur, qui peuvent réduire encore ce montant.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl leading-tight lg:text-5xl">
            Les aides accordées aux familles
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {AIDES.map((a, i) => (
            <Reveal key={a.t} delay={i * 80}>
              <article className="surface-card h-full p-8">
                <h3 className="font-display text-2xl">{a.t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{a.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <div className="surface-card p-9 lg:p-14">
            <h2 className="font-display text-3xl lg:text-4xl">Pourquoi un devis plutôt qu'une grille ?</h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
              Le coût d'une garde dépend du volume horaire, du nombre d'enfants, des horaires
              (matin, soirée, nuit, week-end) et du recours éventuel à la garde partagée. Une grille
              figée donnerait un chiffre faux. Nous établissons donc une simulation nominative,
              gratuite et sans engagement, qui intègre vos aides réelles.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground"
            >
              Recevoir ma simulation
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

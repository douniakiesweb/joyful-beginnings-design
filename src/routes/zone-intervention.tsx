import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/zone-intervention")({
  head: () => ({
    meta: [
      { title: "Zone d'intervention : Marseille, Aubagne, Allauch | Minots Minettes" },
      {
        name: "description",
        content:
          "Garde d'enfants à domicile dans tous les arrondissements de Marseille (1er au 16e), à Aubagne, Allauch et les communes limitrophes. Une agence locale, présente sur le terrain.",
      },
      { property: "og:title", content: "Où intervenons-nous ? Marseille et alentours" },
      {
        property: "og:description",
        content:
          "Du 1er au 16e arrondissement de Marseille, jusqu'à Aubagne et Allauch : des intervenantes qui connaissent votre quartier.",
      },
      { property: "og:url", content: "/zone-intervention" },
    ],
    links: [{ rel: "canonical", href: "/zone-intervention" }],
  }),
  component: Zone,
});

const ARRDTS = [
  { n: "1er", q: "Belsunce · Noailles · Opéra" },
  { n: "2e", q: "Joliette · Panier · Arenc" },
  { n: "3e", q: "Belle de Mai · Saint-Mauront" },
  { n: "4e", q: "Chartreux · Cinq-Avenues" },
  { n: "5e", q: "Baille · Camas · Conception" },
  { n: "6e", q: "Castellane · Préfecture · Notre-Dame-du-Mont" },
  { n: "7e", q: "Endoume · Saint-Victor · Pharo" },
  { n: "8e", q: "Prado · Périer · Bonneveine" },
  { n: "9e", q: "Mazargues · Sainte-Marguerite · Luminy" },
  { n: "10e", q: "Saint-Loup · La Timone · Pont-de-Vivaux" },
  { n: "11e", q: "La Valentine · Saint-Menet · Les Camoins" },
  { n: "12e", q: "Saint-Barnabé · Les Trois-Lucs · Montolivet" },
  { n: "13e", q: "Château-Gombert · Malpassé · Les Olives" },
  { n: "14e", q: "Saint-Jérôme · Le Merlan · Bon-Secours" },
  { n: "15e", q: "Saint-Antoine · La Cabucelle · Verduron" },
  { n: "16e", q: "L'Estaque · Saint-Henri · Les Riaux" },
];

const COMMUNES = ["Aubagne", "Allauch", "Plan-de-Cuques", "La Penne-sur-Huveaune", "Cassis", "Carnoux-en-Provence"];

function Zone() {
  return (
    <>
      <PageHero
        eyebrow="Zone d'intervention"
        title={
          <>
            Marseille, quartier par quartier.{" "}
            <span className="text-gradient-warm">Et bien au-delà.</span>
          </>
        }
        intro="Nous intervenons dans les seize arrondissements de Marseille ainsi qu'à Aubagne, Allauch et les communes limitrophes. Nos intervenantes habitent le secteur : elles connaissent les écoles, les trajets et les horaires réels de circulation."
      />

      <Section className="!pt-0">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ARRDTS.map((a, i) => (
            <Reveal key={a.n} delay={(i % 4) * 60}>
              <article className="group h-full rounded-[1.5rem] border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-secondary">
                <h2 className="font-display text-2xl">
                  Marseille <span className="text-primary">{a.n}</span>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{a.q}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <div className="surface-card p-9 lg:p-14">
            <h2 className="font-display text-3xl lg:text-4xl">Communes autour de Marseille</h2>
            <ul className="mt-7 flex flex-wrap gap-3">
              {COMMUNES.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border bg-secondary/60 px-5 py-2.5 text-sm font-medium"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-7 max-w-2xl leading-relaxed text-muted-foreground">
              Votre commune n'apparaît pas ? Contactez-nous : selon le volume horaire et la
              disponibilité de nos intervenantes, nous étudions chaque demande de proximité.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground"
            >
              Vérifier ma disponibilité
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

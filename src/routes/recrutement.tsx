import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/recrutement")({
  head: () => ({
    meta: [
      { title: "Recrutement garde d'enfants à Marseille | Minots Minettes" },
      {
        name: "description",
        content:
          "Rejoignez Minots Minettes à Marseille : postes de garde d'enfants à domicile, CDI temps partiel, horaires choisis. Candidature en ligne avec vos disponibilités.",
      },
      { property: "og:title", content: "Rejoindre l'équipe Minots Minettes" },
      {
        property: "og:description",
        content:
          "Nous recrutons des intervenantes petite enfance à Marseille et alentours. Postulez en indiquant vos disponibilités.",
      },
      { property: "og:url", content: "/recrutement" },
    ],
    links: [{ rel: "canonical", href: "/recrutement" }],
  }),
  component: Recrutement,
});

const POSTES = [
  {
    t: "Intervenante sortie d'école",
    d: "16h – 19h du lundi au vendredi, périscolaire, aide aux devoirs et goûter. Marseille et alentours.",
    c: "CDI temps partiel",
  },
  {
    t: "Auxiliaire petite enfance (moins de 3 ans)",
    d: "Gardes en journée ou matinées, diplôme petite enfance (CAP AEPE, auxiliaire de puériculture) requis.",
    c: "CDI · 15 à 30 h",
  },
  {
    t: "Intervenante horaires atypiques",
    d: "Très tôt le matin, en soirée ou de nuit, auprès de familles aux métiers décalés. Majorations prévues.",
    c: "CDI modulé",
  },
  {
    t: "Renfort vacances scolaires",
    d: "Journées complètes pendant les vacances, programme d'activités à construire avec l'agence.",
    c: "CDD saisonnier",
  },
];

const ETAPES = [
  { n: "01", t: "Candidature en ligne", d: "Vous déposez votre profil et vos disponibilités. Réponse sous 5 jours ouvrés." },
  { n: "02", t: "Entretien en agence", d: "Rencontre avec Linda, vérification des diplômes, références et casier judiciaire." },
  { n: "03", t: "Mise en relation", d: "Nous vous proposons une famille correspondant à votre profil et à vos créneaux." },
  { n: "04", t: "Rencontre à domicile", d: "Présentation à la famille et aux enfants, puis démarrage du contrat." },
];

const DISPOS = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
  "Matin",
  "Après-midi",
  "Soirée",
  "Nuit",
  "Vacances scolaires",
];

const field =
  "w-full rounded-2xl border border-border bg-card px-5 py-3.5 outline-none transition-shadow focus:ring-2 focus:ring-ring";

function Recrutement() {
  const [sent, setSent] = useState(false);
  const [dispos, setDispos] = useState<string[]>([]);
  const toggle = (d: string) =>
    setDispos((x) => (x.includes(d) ? x.filter((v) => v !== d) : [...x, d]));

  return (
    <>
      <PageHero
        eyebrow="Espace recrutement"
        title={
          <>
            Travailler avec nous,{" "}
            <span className="text-gradient-warm">c'est être choisie, pas placée.</span>
          </>
        }
        intro="Nous recrutons en fonction du besoin exclusif de chaque famille. Cela signifie des missions qui correspondent vraiment à votre profil, à vos horaires et à votre secteur."
      />

      <Section className="!pt-0">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight lg:text-5xl">Postes recherchés</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {POSTES.map((p, i) => (
            <Reveal key={p.t} delay={(i % 2) * 80}>
              <article className="surface-card h-full p-8">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-[0.16em]">
                  {p.c}
                </span>
                <h3 className="mt-5 font-display text-2xl leading-snug">{p.t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight lg:text-5xl">Le déroulé du recrutement</h2>
        </Reveal>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {ETAPES.map((e, i) => (
            <Reveal key={e.n} as="li" delay={i * 80}>
              <div className="h-full bg-card p-8">
                <span className="font-display text-5xl text-clay-soft">{e.n}</span>
                <h3 className="mt-5 font-display text-xl leading-snug">{e.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              n: "Sonia",
              r: "Intervenante depuis 6 ans",
              t: "Ce que j'apprécie, c'est qu'on me confie des familles qui correspondent à mon expérience. Je ne suis jamais envoyée au hasard.",
            },
            {
              n: "Amel",
              r: "Auxiliaire petite enfance",
              t: "L'agence est joignable, réellement. Quand j'ai une question sur un enfant, j'ai une réponse dans l'heure.",
            },
            {
              n: "Léa",
              r: "Étudiante, gardes du soir",
              t: "Mes créneaux sont respectés, mes heures déclarées, et j'ai été présentée à la famille avant de commencer.",
            },
          ].map((t, i) => (
            <Reveal key={t.n} delay={i * 80}>
              <blockquote className="surface-card h-full p-8">
                <p className="leading-relaxed">« {t.t} »</p>
                <footer className="mt-5 text-sm text-muted-foreground">
                  {t.n} — {t.r}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <div className="surface-card mx-auto max-w-3xl p-8 lg:p-12">
            <h2 className="font-display text-3xl lg:text-4xl">Formulaire de candidature</h2>
            {sent ? (
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Merci, votre candidature est bien reçue. Nous revenons vers vous sous 5 jours
                ouvrés. Pour un échange direct : {SITE.phone}.
              </p>
            ) : (
              <form
                className="mt-8 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-nom" className="mb-2 block text-sm font-medium">
                      Nom et prénom *
                    </label>
                    <input id="c-nom" required className={field} />
                  </div>
                  <div>
                    <label htmlFor="c-tel" className="mb-2 block text-sm font-medium">
                      Téléphone *
                    </label>
                    <input id="c-tel" type="tel" required className={field} />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="mb-2 block text-sm font-medium">
                      E-mail *
                    </label>
                    <input id="c-email" type="email" required className={field} />
                  </div>
                  <div>
                    <label htmlFor="c-secteur" className="mb-2 block text-sm font-medium">
                      Secteur d'intervention souhaité *
                    </label>
                    <input id="c-secteur" required className={field} />
                  </div>
                  <div>
                    <label htmlFor="c-diplome" className="mb-2 block text-sm font-medium">
                      Diplôme petite enfance
                    </label>
                    <input id="c-diplome" placeholder="CAP AEPE, BAFA…" className={field} />
                  </div>
                  <div>
                    <label htmlFor="c-exp" className="mb-2 block text-sm font-medium">
                      Années d'expérience
                    </label>
                    <input id="c-exp" type="number" min={0} className={field} />
                  </div>
                </div>

                <fieldset>
                  <legend className="mb-3 text-sm font-medium">Vos disponibilités</legend>
                  <div className="flex flex-wrap gap-2">
                    {DISPOS.map((d) => (
                      <button
                        type="button"
                        key={d}
                        aria-pressed={dispos.includes(d)}
                        onClick={() => toggle(d)}
                        className={`rounded-full border px-4 py-2.5 text-sm transition-colors ${
                          dispos.includes(d)
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card hover:bg-secondary"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="c-msg" className="mb-2 block text-sm font-medium">
                    Présentez-vous en quelques lignes
                  </label>
                  <textarea id="c-msg" rows={5} className={field} />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-primary py-4 font-semibold text-primary-foreground"
                >
                  Envoyer ma candidature
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </Section>
    </>
  );
}

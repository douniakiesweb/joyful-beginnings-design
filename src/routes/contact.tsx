import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Inscription & devis garde d'enfants Marseille | Minots Minettes" },
      {
        name: "description",
        content:
          "Inscrivez votre famille auprès de Minots Minettes : formulaire en ligne, rappel sous 24 h, devis gratuit et rendez-vous à domicile avant la première garde. Marseille, Aubagne, Allauch.",
      },
      { property: "og:title", content: "Contact & inscription — Minots Minettes" },
      {
        property: "og:description",
        content:
          "Décrivez vos besoins de garde : nous vous rappelons sous 24 h avec une proposition claire.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const CRENEAUX = [
  "Sortie d'école / crèche",
  "Matin avant l'école",
  "Mercredi",
  "Vacances scolaires",
  "Soirées & week-ends",
  "Horaires atypiques / nuit",
  "Garde d'urgence (48 h)",
  "Garde partagée",
  "Événement familial",
];

const field =
  "w-full rounded-2xl border border-border bg-card px-5 py-3.5 outline-none transition-shadow focus:ring-2 focus:ring-ring";

function Contact() {
  const [sent, setSent] = useState(false);
  const [besoins, setBesoins] = useState<string[]>([]);

  const toggle = (c: string) =>
    setBesoins((b) => (b.includes(c) ? b.filter((x) => x !== c) : [...b, c]));

  return (
    <>
      <PageHero
        eyebrow="Inscription"
        title={
          <>
            Racontez-nous votre semaine,{" "}
            <span className="text-gradient-warm">nous nous occupons du reste.</span>
          </>
        }
        intro="Remplissez ce formulaire d'inscription : Linda vous rappelle sous 24 h pour préciser vos besoins, vous transmettre un devis et fixer la rencontre à domicile."
      />

      <Section className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            {sent ? (
              <div className="surface-card p-10">
                <h2 className="font-display text-3xl">Merci, votre demande est enregistrée.</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Nous revenons vers vous sous 24 h ouvrées. Pour une garde d'urgence, appelez
                  directement le {SITE.phone} : nous mobilisons une intervenante sous 48 h.
                </p>
              </div>
            ) : (
              <form
                className="surface-card space-y-6 p-8 lg:p-10"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nom" className="mb-2 block text-sm font-medium">
                      Nom et prénom *
                    </label>
                    <input id="nom" name="nom" required className={field} />
                  </div>
                  <div>
                    <label htmlFor="tel" className="mb-2 block text-sm font-medium">
                      Téléphone *
                    </label>
                    <input id="tel" name="tel" type="tel" required className={field} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      E-mail *
                    </label>
                    <input id="email" name="email" type="email" required className={field} />
                  </div>
                  <div>
                    <label htmlFor="secteur" className="mb-2 block text-sm font-medium">
                      Quartier / commune *
                    </label>
                    <input
                      id="secteur"
                      name="secteur"
                      required
                      placeholder="Marseille 8e, Aubagne…"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="enfants" className="mb-2 block text-sm font-medium">
                      Nombre d'enfants et âges *
                    </label>
                    <input
                      id="enfants"
                      name="enfants"
                      required
                      placeholder="2 enfants — 18 mois et 6 ans"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="debut" className="mb-2 block text-sm font-medium">
                      Date de début souhaitée
                    </label>
                    <input id="debut" name="debut" type="date" className={field} />
                  </div>
                </div>

                <fieldset>
                  <legend className="mb-3 text-sm font-medium">Type de garde recherchée</legend>
                  <div className="flex flex-wrap gap-2">
                    {CRENEAUX.map((c) => (
                      <button
                        type="button"
                        key={c}
                        aria-pressed={besoins.includes(c)}
                        onClick={() => toggle(c)}
                        className={`rounded-full border px-4 py-2.5 text-sm transition-colors ${
                          besoins.includes(c)
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card hover:bg-secondary"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Vos horaires et précisions
                  </label>
                  <textarea id="message" name="message" rows={5} className={field} />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-primary py-4 font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Envoyer ma demande
                </button>
                <p className="text-xs text-muted-foreground">
                  Vos informations sont utilisées uniquement pour traiter votre demande de garde.
                </p>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <aside className="space-y-5">
              <div className="surface-card p-8">
                <h2 className="font-display text-2xl">Joindre l'agence</h2>
                <ul className="mt-5 space-y-3 text-muted-foreground">
                  <li>
                    <a href={SITE.phoneHref} className="font-semibold text-foreground">
                      {SITE.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>Du lundi au samedi, 7h – 21h</li>
                  <li>{SITE.villes}</li>
                </ul>
              </div>
              <div className="surface-card p-8">
                <h2 className="font-display text-2xl">Prendre rendez-vous</h2>
                <p className="mt-3 text-muted-foreground">
                  Rencontre à domicile gratuite avant toute première garde, en présence de
                  l'intervenante pressentie.
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-6 inline-block rounded-full border border-border px-6 py-3 font-semibold"
                >
                  Fixer un créneau
                </a>
              </div>
              <div className="grain rounded-[2rem] bg-[image:var(--gradient-dusk)] p-8 text-[oklch(0.95_0.015_85)]">
                <h2 className="font-display text-2xl">Garde d'urgence</h2>
                <p className="mt-3 text-sm text-[oklch(0.88_0.02_85)]">
                  Crèche fermée, nounou absente, imprévu professionnel : appelez-nous, une
                  intervenante qualifiée peut intervenir sous 48 h.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

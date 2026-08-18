import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[image:var(--gradient-dusk)] text-[oklch(0.95_0.015_85)] grain">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="grid gap-14 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl leading-tight">
              Confier ses enfants, <br /> sans jamais douter.
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[oklch(0.88_0.02_85)]">
              Agence de garde d'enfants à domicile à Marseille et alentours. Agrément préfectoral,
              déclaration DDETS, intervenantes salariées et sélectionnées une à une.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.phoneHref}
                className="rounded-full bg-[oklch(0.95_0.015_85)] px-5 py-3 text-sm font-semibold text-ink"
              >
                {SITE.phone}
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-[oklch(0.95_0.015_85_/_0.35)] px-5 py-3 text-sm font-semibold"
              >
                Formulaire d'inscription
              </Link>
            </div>
          </div>

          <nav aria-label="Pages du site">
            <h2 className="text-xs uppercase tracking-[0.22em] text-[oklch(0.82_0.03_80)]">
              Navigation
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="transition-opacity hover:opacity-70">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs uppercase tracking-[0.22em] text-[oklch(0.82_0.03_80)]">
              L'agence
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm text-[oklch(0.9_0.02_85)]">
              <li>Marseille 1er au 16e</li>
              <li>Aubagne · Allauch · alentours</li>
              <li>Du lundi au samedi, 7h – 21h</li>
              <li>Horaires atypiques sur demande</li>
              <li className="pt-3">SASU · SIRET {SITE.siret}</li>
              <li>Agrément préfectoral · Déclaration DDETS</li>
              <li>Assurance responsabilité civile professionnelle</li>
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-[oklch(0.95_0.015_85_/_0.18)] pt-6 text-xs text-[oklch(0.85_0.02_85)]">
          © {new Date().getFullYear()} Minots Minettes — Garde d'enfants à domicile à Marseille.
          Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 lg:pt-48 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-[image:var(--gradient-warm)] opacity-50 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-primary">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          </Reveal>
        )}
        {children && <Reveal delay={220}>{children}</Reveal>}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

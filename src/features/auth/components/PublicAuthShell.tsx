import Link from "next/link";
import { Card } from "@/components/ui";
import { cn } from "@/lib/utils/cn";
import { ArrowLeftIcon } from "./AuthIcons";

interface PublicAuthShellProps {
  children: React.ReactNode;
  backHref: string;
  backLabel: string;
  cardClassName?: string;
}

function PublicBrandMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-auth-off-white)] shadow-[var(--shadow-auth-badge)]">
        <span className="absolute inset-[5px] flex items-center justify-center rounded-full bg-[var(--color-brand-primary)]">
          <span className="text-[13px] font-bold tracking-[0.08em] text-[var(--color-brand-hover)]">IC</span>
        </span>
      </span>
      <span className="hidden sm:block">
        <span className="block font-display text-[15px] font-semibold leading-5 tracking-[0.075em] text-[var(--color-text-primary)]">
          ISABELA CARDOSO
        </span>
        <span className="mt-0.5 block text-[9px] font-semibold leading-4 tracking-[0.22em] text-[var(--color-brand-primary)]">
          ENGLISH TEACHER
        </span>
      </span>
    </div>
  );
}

export function PublicAuthShell({ children, backHref, backLabel, cardClassName }: PublicAuthShellProps) {
  return (
    <main className="relative min-h-[100svh] overflow-x-hidden bg-[var(--color-background-muted)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute -right-40 -top-44 size-[520px] rounded-full border border-[var(--color-brand-primary)]/[0.10]" />
        <span className="absolute -right-28 -top-32 size-[420px] rounded-full border border-[var(--color-brand-primary)]/[0.08]" />
        <span className="absolute -bottom-48 -left-40 size-[520px] rounded-full bg-[var(--color-brand-soft)]/[0.55]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1120px] flex-col px-4 py-6 sm:px-8 sm:py-8">
        <header className="flex items-center justify-between">
          <Link
            href="/login"
            aria-label="Voltar para o login"
            className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-4"
          >
            <PublicBrandMark />
          </Link>
          <span className="hidden text-right text-[10px] font-semibold leading-[18px] tracking-[0.16em] text-[var(--color-text-tertiary)] sm:block">
            <span className="block">ACESSO PÚBLICO</span>
            <span className="block text-[var(--color-brand-primary)]">ISABELA CARDOSO</span>
          </span>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center py-10 sm:py-12">
          <div className="mb-4 w-full max-w-[560px]">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 rounded-md text-[13px] font-semibold text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-brand-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              {backLabel}
            </Link>
          </div>

          <Card
            padding="none"
            className={cn(
              "w-full max-w-[560px] overflow-visible rounded-[var(--radius-xxl)] border-0 bg-[var(--color-surface-default)] shadow-[var(--shadow-auth-card)]",
              cardClassName
            )}
          >
            {children}
          </Card>
        </div>
      </div>
    </main>
  );
}

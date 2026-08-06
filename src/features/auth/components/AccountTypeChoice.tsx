import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import type { AuthRole } from "../types";
import { ChevronRightIcon, GraduationCapIcon, ShieldIcon } from "./AuthIcons";
import { PublicAuthShell } from "./PublicAuthShell";

interface AccountOptionProps {
  role: AuthRole;
  title: string;
  description: string;
  href: string;
}

function AccountOption({ role, title, description, href }: AccountOptionProps) {
  const isStudent = role === "student";

  return (
    <Link
      href={href}
      className="group flex min-h-[104px] w-full items-center gap-4 rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-default)] px-4 py-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-surface-hover)] hover:shadow-[var(--shadows-level1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
    >
      <span
        className={cn(
          "flex size-14 shrink-0 items-center justify-center rounded-full",
          isStudent
            ? "bg-[var(--color-auth-badge)] text-[var(--color-brand-primary)]"
            : "bg-[var(--color-brand-soft)] text-[var(--color-brand-hover)]"
        )}
      >
        {isStudent ? <GraduationCapIcon className="h-8 w-8" /> : <ShieldIcon className="h-8 w-8" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-bold leading-5 text-[var(--color-text-primary)]">{title}</span>
        <span className="mt-2 block text-[13px] font-medium leading-5 text-[var(--color-text-secondary)]">{description}</span>
      </span>
      <ChevronRightIcon className="h-6 w-6 shrink-0 text-[var(--color-brand-primary)] transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

export function AccountTypeChoice() {
  return (
    <PublicAuthShell backHref="/login" backLabel="Voltar para o login">
      <div className="mx-auto w-full max-w-[432px] px-6 py-8 sm:px-0 sm:py-12">
        <p className="text-[11px] font-bold leading-[18px] tracking-[2.2px] text-[var(--color-brand-primary)]">NOVA CONTA</p>
        <h1 className="mt-5 font-display text-[clamp(2rem,4vw,2.25rem)] font-bold leading-[1.15] text-[var(--color-text-primary)]">
          Como você vai usar a plataforma?
        </h1>
        <p className="mt-3 text-base leading-[1.55] text-[var(--color-text-secondary)]">
          Escolha o tipo de conta para continuar seu cadastro.
        </p>

        <div className="mt-8 space-y-4">
          <AccountOption
            role="administrator"
            title="Sou administrador"
            description="Gerencie alunos, trilhas, materiais e aulas."
            href="/signup/admin"
          />
          <AccountOption
            role="student"
            title="Sou aluno"
            description="Acesse sua área de estudos e acompanhe sua jornada."
            href="/signup/student"
          />
        </div>

        <div className="mt-8 border-t border-[var(--color-border-subtle)] pt-6 text-center">
          <p className="text-[13px] font-medium text-[var(--color-text-secondary)]">
            Já tem uma conta?{" "}
            <Link
              href="/login"
              className="font-bold text-[var(--color-brand-primary)] underline decoration-[var(--color-brand-primary)] underline-offset-2 transition-colors hover:text-[var(--color-brand-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
            >
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </PublicAuthShell>
  );
}

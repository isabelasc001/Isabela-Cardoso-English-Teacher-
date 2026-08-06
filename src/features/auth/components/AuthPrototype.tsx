"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { Button, Card, Input } from "@/components/ui";
import { cn } from "@/lib/utils/cn";
import type { AuthRole, AuthViewState } from "../types";
import { BrandPanel } from "./BrandPanel";
import {
  EnvelopeIcon,
  EyeIcon,
  GoogleIcon,
  GraduationCapIcon,
  LockIcon,
} from "./AuthIcons";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

interface LoginCardProps {
  role: AuthRole;
  email: string;
  password: string;
  remember: boolean;
  showPassword: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onRememberChange: (value: boolean) => void;
  onTogglePassword: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function AuthCard({ children, className }: AuthCardProps) {
  return (
    <Card
      padding="none"
      className={cn(
        "min-h-[clamp(0px,72.65625vh,744px)] w-full max-w-[560px] overflow-visible rounded-[var(--radius-xxl)] border-0 bg-[var(--color-surface-default)] shadow-[var(--shadow-auth-card)] lg:h-[744px]",
        className
      )}
    >
      {children}
    </Card>
  );
}

function PrototypeLink({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
  return (
    <Link
      href={href}
      className={cn("font-semibold text-[var(--color-brand-primary)] underline decoration-[var(--color-brand-primary)] underline-offset-2 transition-colors hover:text-[var(--color-brand-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2", className)}
    >
      {children}
    </Link>
  );
}

function PasswordField({
  role,
  password,
  showPassword,
  onPasswordChange,
  onTogglePassword,
}: {
  role: AuthRole;
  password: string;
  showPassword: boolean;
  onPasswordChange: (value: string) => void;
  onTogglePassword: () => void;
}) {
  return (
    <Input
      id={`${role}-password`}
      label="Senha"
      type={showPassword ? "text" : "password"}
      value={password}
      onChange={(event) => onPasswordChange(event.target.value)}
      placeholder="Digite sua senha"
      inputSize="md"
      fullWidth
      className="h-14 rounded-[var(--radius-auth-control)] px-[var(--spacing-4)] text-base font-normal placeholder:text-[var(--color-text-secondary)]"
      startAdornment={role === "student" ? <LockIcon className="h-5 w-5" /> : undefined}
      endAdornment={
        <button
          type="button"
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          onClick={onTogglePassword}
          className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-[var(--color-surface-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]"
        >
          <EyeIcon open={showPassword} className="h-5 w-5" />
        </button>
      }
    />
  );
}

function StudentBadge() {
  return (
    <div aria-hidden="true" className="absolute left-1/2 top-[-32px] z-20 size-[72px] -translate-x-1/2 lg:top-[-42px] lg:size-[88px]">
      <span className="absolute inset-0 rounded-full bg-[var(--color-auth-badge)] opacity-40" />
      <span className="absolute inset-2 rounded-full border border-[var(--color-auth-badge-border)] bg-[var(--color-surface-default)] shadow-[var(--shadow-auth-badge)]" />
      <span className="absolute inset-4 flex items-center justify-center rounded-full bg-[var(--color-auth-badge)]">
        <GraduationCapIcon className="h-12 w-12 text-[var(--color-brand-primary)]" />
      </span>
    </div>
  );
}

function LoginCard({
  role,
  email,
  password,
  remember,
  showPassword,
  onEmailChange,
  onPasswordChange,
  onRememberChange,
  onTogglePassword,
  onSubmit,
}: LoginCardProps) {
  const isStudent = role === "student";

  return (
    <AuthCard className="relative">
      {isStudent && <StudentBadge />}
      <div className={cn("mx-auto w-full max-w-[432px] px-[clamp(20px,6vw,24px)] pb-[clamp(32px,5vh,48px)] pt-[clamp(32px,5vh,52px)] lg:px-0 lg:pt-[52px]", isStudent ? "text-center" : "text-left")}>
        <p className="h-[18px] text-[11px] font-bold leading-[18px] tracking-[2.2px] text-[var(--color-brand-primary)]">
          {isStudent ? "ÁREA DO ALUNO" : "ÁREA ADMINISTRATIVA"}
        </p>
        <h1 className={cn("flex items-center font-display font-bold text-[var(--color-text-primary)]", isStudent ? "mt-5 h-[52px] text-[clamp(2rem,3.2vw,2.25rem)] leading-[1.15] lg:mt-[22px] lg:text-[36px]" : "mt-6 h-[56px] text-[clamp(2rem,3.2vw,2.125rem)] leading-[1.15] lg:text-[34px]")}>
          {isStudent ? "Login do aluno" : "Login do administrador"}
        </h1>
        <p className={cn("text-base font-normal text-[var(--color-text-secondary)]", isStudent ? "mt-2 leading-[1.45] lg:mt-[14px] lg:flex lg:h-[26px] lg:items-center lg:justify-center" : "mt-2 leading-[1.55] lg:mt-[10px] lg:flex lg:h-[52px] lg:items-center")}>
          {isStudent ? "Acesse seu espaço de estudos e continue aprendendo." : "Acesse o painel administrativo com segurança."}
        </p>

        <form className={cn("mt-[clamp(24px,3.125vh,32px)]", isStudent ? "lg:mt-[64px]" : "lg:mt-[36px]")} onSubmit={onSubmit} noValidate>
          <div className="space-y-6 text-left">
            <Input
              id={`${role}-email`}
              label={isStudent ? "E-mail do aluno" : "E-mail institucional"}
              type="email"
              value={email}
              onChange={(event) => onEmailChange(event.target.value)}
              placeholder={isStudent ? "seu@email.com" : "admin@exemplo.com"}
              inputSize="md"
              fullWidth
              className="h-14 rounded-[var(--radius-auth-control)] px-[var(--spacing-4)] text-base font-normal placeholder:text-[var(--color-text-tertiary)]"
              startAdornment={isStudent ? <EnvelopeIcon className="h-5 w-5" /> : undefined}
            />
            <PasswordField
              role={role}
              password={password}
              showPassword={showPassword}
              onPasswordChange={onPasswordChange}
              onTogglePassword={onTogglePassword}
            />
          </div>

          {isStudent ? (
            <div className="mt-[clamp(16px,2.75vh,28px)] flex h-6 items-center justify-end text-[13px] font-semibold leading-6 lg:mt-7">
              <PrototypeLink href="/forgot-password">Esqueci a senha?</PrototypeLink>
            </div>
          ) : (
            <div className="mt-[clamp(16px,2.75vh,28px)] flex h-6 items-center justify-between gap-4 text-[13px] leading-6 text-[var(--color-text-secondary)] lg:mt-7">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => onRememberChange(event.target.checked)}
                  className="h-[18px] w-[18px] rounded-[var(--radius-xs)] accent-[var(--color-brand-primary)]"
                />
                <span>Lembrar de mim</span>
              </label>
              <PrototypeLink href="/forgot-password">Esqueci minha senha</PrototypeLink>
            </div>
          )}

          <Button
            type="submit"
            fullWidth
            size="md"
            className="mt-[clamp(16px,2.75vh,28px)] h-14 rounded-[var(--radius-auth-control)] text-base font-bold shadow-[var(--shadow-auth-action)] lg:mt-7"
          >
            Entrar
          </Button>

          {isStudent ? (
            <>
              <div className="mt-[clamp(16px,2.75vh,28px)] flex h-[18px] items-center gap-0 text-xs font-semibold text-[var(--color-text-tertiary)] lg:mt-[14px]">
                <span className="h-px flex-1 bg-[var(--color-border-subtle)]" />
                <span className="flex h-[18px] w-16 items-center justify-center">ou</span>
                <span className="h-px flex-1 bg-[var(--color-border-subtle)]" />
              </div>
              <Button
                type="button"
                variant="outline"
                fullWidth
                className="mt-4 h-14 rounded-[var(--radius-auth-control)] border-[var(--color-sidebar-border)] bg-[var(--color-surface-default)] text-sm font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)] lg:mt-[14px]"
                leftIcon={<GoogleIcon />}
              >
                Entrar com Google
              </Button>
            </>
          ) : (
            <p className="mt-2 flex h-[42px] items-center justify-center text-center text-xs leading-[1.45] text-[var(--color-text-tertiary)] lg:mt-[11px]">
              Você será direcionado para o painel administrativo.
            </p>
          )}

          <div className={cn("flex flex-col items-center", isStudent ? "mt-5 lg:mt-6" : "mt-[clamp(24px,4.7vh,48px)] lg:mt-12")}>
            {!isStudent && <span className="h-px w-full max-w-[268px] bg-[var(--color-border-subtle)]" />}
            <p className={cn("flex h-5 items-center text-xs font-medium text-[var(--color-text-secondary)]", !isStudent && "mt-6")}>
               Ainda não tem uma conta? <PrototypeLink href="/signup" className="font-bold">Criar nova conta</PrototypeLink>
            </p>
          </div>
        </form>
      </div>
    </AuthCard>
  );
}

function AuthStateCard({ state, onRetry }: { state: Exclude<AuthViewState, "form">; onRetry: () => void }) {
  const loading = state === "loading";

  return (
    <AuthCard className="relative">
      <div className="mx-auto w-full max-w-[432px] px-[clamp(20px,6vw,24px)] pb-[clamp(32px,5vh,48px)] pt-[clamp(32px,5vh,52px)] lg:px-0">
        <h1 className="font-display text-[clamp(2rem,3.2vw,2.125rem)] font-bold leading-[clamp(2.75rem,4vw,3.5rem)] text-[var(--color-text-primary)]">
          {loading ? "Entrando..." : "Não foi possível entrar"}
        </h1>
        <p className="mt-3 text-[15px] leading-6 text-[var(--color-text-secondary)]">
          {loading ? "Validando suas credenciais." : "Confira seus dados e tente novamente."}
        </p>

        {!loading && (
          <div className="mt-8 flex min-h-14 items-center rounded-[var(--radius-sm)] bg-[var(--color-badge-error)] px-4 py-3 text-[13px] font-semibold leading-[1.5] text-[var(--color-feedback-error)]" role="alert">
            E-mail ou senha inválidos.
          </div>
        )}

        <Button
          type="button"
          fullWidth
          loading={loading}
          onClick={loading ? undefined : onRetry}
          className={cn("h-14 rounded-[var(--radius-auth-control)] text-base font-bold shadow-[var(--shadow-auth-action)]", loading ? "mt-10" : "mt-6")}
        >
          {loading ? "Aguarde..." : "Tentar novamente"}
        </Button>
      </div>
    </AuthCard>
  );
}

export function AuthPrototype() {
  const [role, setRole] = useState<AuthRole>("administrator");
  const [viewState, setViewState] = useState<AuthViewState>("form");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (viewState !== "loading") return;

    const timeoutId = window.setTimeout(() => setViewState("error"), 1200);
    return () => window.clearTimeout(timeoutId);
  }, [viewState]);

  function handleRoleChange(nextRole: AuthRole) {
    setRole(nextRole);
    setViewState("form");
    setShowPassword(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setViewState("loading");
  }

  return (
    <main className="min-h-[100svh] overflow-x-hidden bg-[var(--color-background-default)]">
      <div className="grid min-h-[100svh] lg:grid-cols-[minmax(0,39.583333%)_minmax(0,1fr)]">
        <BrandPanel role={role} onRoleChange={handleRoleChange} />

        <section className="relative flex min-h-[100svh] min-w-0 flex-1 flex-col overflow-y-auto bg-[var(--color-background-muted)]">
          <div className="absolute right-[clamp(24px,4.444vw,64px)] top-[clamp(24px,5vh,52px)] text-right text-[10px] font-semibold leading-[22px] tracking-[0.16em] text-[var(--color-text-tertiary)]">
            <p>{role === "student" ? "ÁREA DO ALUNO" : "ÁREA ADMINISTRATIVA"}</p>
            <p>ACESSO SEGURO</p>
          </div>

          <div className="flex min-h-full w-full flex-1 items-center justify-center px-[clamp(16px,4.444vw,64px)] py-[clamp(40px,7.8125vh,80px)]">
            {viewState === "form" ? (
              <LoginCard
                role={role}
                email={email}
                password={password}
                remember={remember}
                showPassword={showPassword}
                onEmailChange={setEmail}
                onPasswordChange={setPassword}
                onRememberChange={setRemember}
                onTogglePassword={() => setShowPassword((current) => !current)}
                onSubmit={handleSubmit}
              />
            ) : (
              <AuthStateCard state={viewState} onRetry={() => setViewState("form")} />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

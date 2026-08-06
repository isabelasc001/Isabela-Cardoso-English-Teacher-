"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { Button, Input } from "@/components/ui";
import { cn } from "@/lib/utils/cn";
import type { AuthRole } from "../types";
import {
  CheckCircleIcon,
  EnvelopeIcon,
  EyeIcon,
  LockIcon,
} from "./AuthIcons";
import { PublicAuthShell } from "./PublicAuthShell";

interface SignupPrototypeProps {
  role: AuthRole;
}

interface SignupValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type SignupErrors = Partial<Record<keyof SignupValues, string>>;
type SignupState = "form" | "loading" | "success";

const initialValues: SignupValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const roleCopy: Record<AuthRole, { eyebrow: string; title: string; description: string; emailLabel: string; successDescription: string }> = {
  administrator: {
    eyebrow: "ÁREA ADMINISTRATIVA",
    title: "Criar conta de administrador",
    description: "Configure seu acesso ao painel administrativo.",
    emailLabel: "E-mail institucional",
    successDescription: "Sua conta administrativa foi criada. Agora você já pode acessar o painel.",
  },
  student: {
    eyebrow: "ÁREA DO ALUNO",
    title: "Criar conta de aluno",
    description: "Crie seu espaço de estudos e acompanhe sua jornada.",
    emailLabel: "E-mail",
    successDescription: "Sua conta de aluno foi criada. Agora você já pode começar sua jornada.",
  },
};

function validateSignup(values: SignupValues): SignupErrors {
  const errors: SignupErrors = {};

  if (!values.name.trim()) {
    errors.name = "Informe seu nome completo.";
  }

  if (!values.email.trim()) {
    errors.email = "Informe seu e-mail.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Digite um e-mail válido.";
  }

  if (!values.password) {
    errors.password = "Crie uma senha para continuar.";
  } else if (values.password.length < 8) {
    errors.password = "A senha deve ter pelo menos 8 caracteres.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirme sua senha.";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "As senhas precisam ser iguais.";
  }

  return errors;
}

function SignupPasswordField({
  id,
  label,
  value,
  error,
  showPassword,
  autoComplete,
  onChange,
  onToggle,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  showPassword: boolean;
  autoComplete: string;
  onChange: (value: string) => void;
  onToggle: () => void;
}) {
  return (
    <Input
      id={id}
      label={label}
      type={showPassword ? "text" : "password"}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={label}
      autoComplete={autoComplete}
      inputSize="md"
      fullWidth
      error={error}
      className="h-14 rounded-[var(--radius-auth-control)] px-[var(--spacing-4)] text-base font-normal placeholder:text-[var(--color-text-tertiary)]"
      startAdornment={<LockIcon className="h-5 w-5" />}
      endAdornment={
        <button
          type="button"
          aria-label={showPassword ? `Ocultar ${label.toLowerCase()}` : `Mostrar ${label.toLowerCase()}`}
          onClick={onToggle}
          className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-[var(--color-surface-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]"
        >
          <EyeIcon open={showPassword} className="h-5 w-5" />
        </button>
      }
    />
  );
}

function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex h-14 w-full items-center justify-center rounded-[var(--radius-auth-control)] bg-[var(--color-button-primary-background)] px-6 text-base font-bold text-[var(--color-button-primary-text)] shadow-[var(--shadow-auth-action)] transition-colors hover:bg-[var(--color-button-primary-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
    >
      {children}
    </Link>
  );
}

function SignupSuccess({ role }: { role: AuthRole }) {
  const copy = roleCopy[role];

  return (
    <div className="mx-auto flex w-full max-w-[432px] flex-col items-center px-6 py-10 text-center sm:px-0 sm:py-16">
      <span className="flex size-16 items-center justify-center rounded-full bg-[var(--color-badge-success)] text-[var(--color-feedback-success)]">
        <CheckCircleIcon className="h-9 w-9" />
      </span>
      <p className="mt-6 text-[11px] font-bold leading-[18px] tracking-[2.2px] text-[var(--color-feedback-success)]">CONTA CRIADA</p>
      <h1 className="mt-4 font-display text-[clamp(2rem,4vw,2.25rem)] font-bold leading-[1.15] text-[var(--color-text-primary)]">
        Tudo pronto por aqui.
      </h1>
      <p className="mt-4 text-base leading-[1.55] text-[var(--color-text-secondary)]">{copy.successDescription}</p>
      <div className="mt-8 w-full">
        <PrimaryLink href="/login">Ir para o login</PrimaryLink>
      </div>
    </div>
  );
}

export function SignupPrototype({ role }: SignupPrototypeProps) {
  const copy = roleCopy[role];
  const [values, setValues] = useState<SignupValues>(initialValues);
  const [errors, setErrors] = useState<SignupErrors>({});
  const [state, setState] = useState<SignupState>("form");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (state !== "loading") return;

    const timeoutId = window.setTimeout(() => setState("success"), 900);
    return () => window.clearTimeout(timeoutId);
  }, [state]);

  function updateField(field: keyof SignupValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      return { ...current, [field]: undefined };
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateSignup(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;
    setState("loading");
  }

  return (
    <PublicAuthShell backHref="/signup" backLabel="Voltar para escolha de perfil">
      {state === "success" ? (
        <SignupSuccess role={role} />
      ) : (
        <div className="mx-auto w-full max-w-[432px] px-6 py-8 sm:px-0 sm:py-12">
          <p className="text-[11px] font-bold leading-[18px] tracking-[2.2px] text-[var(--color-brand-primary)]">{copy.eyebrow}</p>
          <h1 className="mt-5 font-display text-[clamp(2rem,4vw,2.25rem)] font-bold leading-[1.15] text-[var(--color-text-primary)]">
            {copy.title}
          </h1>
          <p className="mt-3 text-base leading-[1.55] text-[var(--color-text-secondary)]">{copy.description}</p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
            <Input
              id={`${role}-name`}
              label="Nome completo"
              type="text"
              value={values.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Digite seu nome"
              autoComplete="name"
              inputSize="md"
              fullWidth
              error={errors.name}
              className="h-14 rounded-[var(--radius-auth-control)] px-[var(--spacing-4)] text-base font-normal placeholder:text-[var(--color-text-tertiary)]"
            />
            <Input
              id={`${role}-email`}
              label={copy.emailLabel}
              type="email"
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder={role === "administrator" ? "admin@exemplo.com" : "seu@email.com"}
              autoComplete="email"
              inputSize="md"
              fullWidth
              error={errors.email}
              className="h-14 rounded-[var(--radius-auth-control)] px-[var(--spacing-4)] text-base font-normal placeholder:text-[var(--color-text-tertiary)]"
              startAdornment={<EnvelopeIcon className="h-5 w-5" />}
            />
            <SignupPasswordField
              id={`${role}-password`}
              label="Senha"
              value={values.password}
              error={errors.password}
              showPassword={showPassword}
              autoComplete="new-password"
              onChange={(value) => updateField("password", value)}
              onToggle={() => setShowPassword((current) => !current)}
            />
            <SignupPasswordField
              id={`${role}-confirm-password`}
              label="Confirmar senha"
              value={values.confirmPassword}
              error={errors.confirmPassword}
              showPassword={showConfirmPassword}
              autoComplete="new-password"
              onChange={(value) => updateField("confirmPassword", value)}
              onToggle={() => setShowConfirmPassword((current) => !current)}
            />

            <Button
              type="submit"
              fullWidth
              loading={state === "loading"}
              size="md"
              className="h-14 rounded-[var(--radius-auth-control)] text-base font-bold shadow-[var(--shadow-auth-action)]"
            >
              Criar conta
            </Button>
          </form>

          <div className="mt-8 border-t border-[var(--color-border-subtle)] pt-6 text-center">
            <p className="text-[13px] font-medium text-[var(--color-text-secondary)]">
              Já tem uma conta?{" "}
              <Link
                href="/login"
                className={cn(
                  "font-bold text-[var(--color-brand-primary)] underline decoration-[var(--color-brand-primary)] underline-offset-2 transition-colors hover:text-[var(--color-brand-hover)]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
                )}
              >
                Entrar
              </Link>
            </p>
          </div>
        </div>
      )}
    </PublicAuthShell>
  );
}

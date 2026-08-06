"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { Button, Input } from "@/components/ui";
import { CheckCircleIcon, EnvelopeIcon } from "./AuthIcons";
import { PublicAuthShell } from "./PublicAuthShell";

type RecoveryState = "form" | "loading" | "success";

function validateEmail(email: string) {
  if (!email.trim()) return "Informe seu e-mail.";
  if (!/^\S+@\S+\.\S+$/.test(email)) return "Digite um e-mail válido.";
  return undefined;
}

function RecoverySuccess() {
  return (
    <div className="mx-auto flex w-full max-w-[432px] flex-col items-center px-6 py-10 text-center sm:px-0 sm:py-16">
      <span className="flex size-16 items-center justify-center rounded-full bg-[var(--color-badge-success)] text-[var(--color-feedback-success)]">
        <CheckCircleIcon className="h-9 w-9" />
      </span>
      <p className="mt-6 text-[11px] font-bold leading-[18px] tracking-[2.2px] text-[var(--color-feedback-success)]">LINK ENVIADO</p>
      <h1 className="mt-4 font-display text-[clamp(2rem,4vw,2.25rem)] font-bold leading-[1.15] text-[var(--color-text-primary)]">
        Confira seu e-mail.
      </h1>
      <p className="mt-4 text-base leading-[1.55] text-[var(--color-text-secondary)]">
        Enviamos as instruções para redefinir sua senha. Se a mensagem não chegar, confira sua caixa de spam.
      </p>
      <Link
        href="/login"
        className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-[var(--radius-auth-control)] bg-[var(--color-button-primary-background)] px-6 text-base font-bold text-[var(--color-button-primary-text)] shadow-[var(--shadow-auth-action)] transition-colors hover:bg-[var(--color-button-primary-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
      >
        Voltar para o login
      </Link>
    </div>
  );
}

export function ForgotPasswordPrototype() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>();
  const [state, setState] = useState<RecoveryState>("form");

  useEffect(() => {
    if (state !== "loading") return;

    const timeoutId = window.setTimeout(() => setState("success"), 900);
    return () => window.clearTimeout(timeoutId);
  }, [state]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextError = validateEmail(email);
    setError(nextError);

    if (nextError) return;
    setState("loading");
  }

  return (
    <PublicAuthShell backHref="/login" backLabel="Voltar para o login">
      {state === "success" ? (
        <RecoverySuccess />
      ) : (
        <div className="mx-auto w-full max-w-[432px] px-6 py-8 sm:px-0 sm:py-12">
          <p className="text-[11px] font-bold leading-[18px] tracking-[2.2px] text-[var(--color-brand-primary)]">RECUPERAÇÃO DE ACESSO</p>
          <h1 className="mt-5 font-display text-[clamp(2rem,4vw,2.25rem)] font-bold leading-[1.15] text-[var(--color-text-primary)]">
            Esqueceu sua senha?
          </h1>
          <p className="mt-3 text-base leading-[1.55] text-[var(--color-text-secondary)]">
            Informe seu e-mail e enviaremos um link para você criar uma nova senha.
          </p>

          <form className="mt-8" onSubmit={handleSubmit} noValidate>
            <Input
              id="recovery-email"
              label="E-mail"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (error) setError(undefined);
              }}
              placeholder="seu@email.com"
              autoComplete="email"
              inputSize="md"
              fullWidth
              error={error}
              className="h-14 rounded-[var(--radius-auth-control)] px-[var(--spacing-4)] text-base font-normal placeholder:text-[var(--color-text-tertiary)]"
              startAdornment={<EnvelopeIcon className="h-5 w-5" />}
            />
            <Button
              type="submit"
              fullWidth
              loading={state === "loading"}
              size="md"
              className="mt-6 h-14 rounded-[var(--radius-auth-control)] text-base font-bold shadow-[var(--shadow-auth-action)]"
            >
              Enviar link de recuperação
            </Button>
          </form>

          <div className="mt-8 border-t border-[var(--color-border-subtle)] pt-6 text-center">
            <p className="text-[13px] font-medium text-[var(--color-text-secondary)]">
              Lembrou sua senha?{" "}
              <Link
                href="/login"
                className="font-bold text-[var(--color-brand-primary)] underline decoration-[var(--color-brand-primary)] underline-offset-2 transition-colors hover:text-[var(--color-brand-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
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

"use client";

import { cn } from "@/lib/utils/cn";
import type { AuthRole } from "../types";
import { ChevronRightIcon } from "./AuthIcons";

interface BrandPanelProps {
  role: AuthRole;
  onRoleChange: (role: AuthRole) => void;
}

interface RoleOptionProps {
  role: AuthRole;
  selected: boolean;
  title: string;
  subtitle: string;
  onClick: () => void;
}

function RoleOption({ role, selected, title, subtitle, onClick }: RoleOptionProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "flex h-24 w-full shrink-0 items-center gap-4 rounded-[var(--radius-md)] border px-4 py-4 text-left transition-colors duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-auth-off-white)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-brand-primary)]",
        selected
          ? "border-[var(--color-auth-row-selected-border)] bg-[var(--color-auth-row-selected)] text-[var(--color-text-primary)]"
          : "border-[var(--color-auth-off-white)]/[0.22] bg-[var(--color-auth-off-white)]/[0.10] text-[var(--color-auth-off-white)] hover:bg-[var(--color-auth-off-white)]/[0.16]"
      )}
    >
      <span
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[13px] font-bold",
          selected
            ? "bg-[var(--color-brand-primary)] text-[var(--color-auth-off-white)]"
            : "bg-[var(--color-auth-off-white)]/[0.16] text-[var(--color-auth-off-white)]"
        )}
      >
        {role === "administrator" ? "AD" : "AL"}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-bold leading-5">{title}</span>
        <span className={cn("mt-1.5 block text-xs font-medium leading-4", selected ? "text-[var(--color-text-tertiary)]" : "text-[var(--color-auth-off-white)]/[0.72]")}>{subtitle}</span>
      </span>
      <ChevronRightIcon className={cn("h-6 w-6 shrink-0", selected ? "text-[var(--color-brand-primary)]" : "text-[var(--color-auth-off-white)]/[0.76]")} />
    </button>
  );
}

export function BrandPanel({ role, onRoleChange }: BrandPanelProps) {
  const options: RoleOptionProps[] = role === "student"
    ? [
        {
          role: "student",
          selected: true,
          title: "Sou aluno",
          subtitle: "Área de estudos",
          onClick: () => onRoleChange("student"),
        },
        {
          role: "administrator",
          selected: false,
          title: "Sou administrador",
          subtitle: "Painel administrativo",
          onClick: () => onRoleChange("administrator"),
        },
      ]
    : [
        {
          role: "administrator",
          selected: true,
          title: "Sou administrador",
          subtitle: "Painel administrativo",
          onClick: () => onRoleChange("administrator"),
        },
        {
          role: "student",
          selected: false,
          title: "Sou aluno",
          subtitle: "Área de estudos",
          onClick: () => onRoleChange("student"),
        },
      ];

  return (
    <aside className="auth-brand-panel relative overflow-hidden px-[clamp(24px,4.444vw,64px)] pb-[clamp(32px,3.90625vh,40px)] pt-[clamp(32px,6.25vh,64px)] text-[var(--color-auth-off-white)] lg:flex lg:min-h-[100svh] lg:flex-col">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute right-[clamp(-280px,-19.444vw,-180px)] top-[clamp(-170px,-16.602vh,-120px)] h-[clamp(360px,34.722vw,500px)] w-[clamp(360px,34.722vw,500px)] rounded-full border border-[var(--color-auth-off-white)]/[0.16]" />
        <span className="absolute right-[clamp(-232px,-16.111vw,-144px)] top-[clamp(-122px,-11.914vh,-88px)] h-[clamp(300px,28.056vw,404px)] w-[clamp(300px,28.056vw,404px)] rounded-full border border-[var(--color-auth-off-white)]/[0.10]" />
        <span className="absolute bottom-[clamp(-114px,-11.133vh,-72px)] right-[clamp(-186px,-12.917vw,-100px)] h-[clamp(320px,29.861vw,430px)] w-[clamp(320px,29.861vw,430px)] rounded-full border border-[var(--color-auth-off-white)]/[0.12]" />
        <span className="absolute bottom-[clamp(24px,4.306vh,44px)] right-[clamp(-56px,-3.889vw,-32px)] h-[clamp(160px,14.583vw,210px)] w-[clamp(160px,14.583vw,210px)] rounded-full bg-[var(--color-auth-off-white)]/[0.07]" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-1">
        <div>
          <div className="flex items-start gap-4">
            <div className="relative h-12 w-12 shrink-0 rounded-full bg-[var(--color-auth-off-white)]">
              <span className="absolute inset-[6px] flex items-center justify-center rounded-full bg-[var(--color-brand-primary)]">
                <span className="text-[14px] font-bold tracking-[0.08em] text-[var(--color-brand-hover)]">IC</span>
              </span>
            </div>
            <div>
              <p className="font-display text-base font-semibold leading-[22px] tracking-[0.075em] text-[var(--color-auth-off-white)]">ISABELA CARDOSO</p>
              <p className="mt-0.5 text-[10px] font-semibold leading-4 tracking-[0.22em] text-[var(--color-auth-row-selected-border)]">ENGLISH TEACHER</p>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(48px,7.91vh,81px)] lg:mt-[81px]">
          <p className="text-base font-bold leading-[18px] tracking-[0.13em] text-[var(--color-auth-off-white)]/[0.82]">APRENDA COM INTENÇÃO</p>
          <p className="mt-4 w-full max-w-[390px] text-sm font-normal leading-[1.55] text-[var(--color-auth-off-white)]/[0.90] lg:mt-5 lg:h-[60px]">Uma experiência de aprendizagem clara,<br className="hidden lg:block" /> acolhedora e feita para a sua jornada.</p>
          <span className="mt-[clamp(48px,6.25vh,64px)] block h-[3px] w-12 rounded-full bg-[var(--color-auth-off-white)]/[0.72] lg:mt-[74px]" />
        </div>

        <div className="mt-[clamp(32px,5.273vh,54px)] w-full max-w-[470px] lg:relative lg:-left-[14px] lg:mt-6 lg:w-[calc(100%+28px)]">
          <p className="text-base font-bold leading-4 tracking-[0.10em] text-[var(--color-auth-off-white)]/[0.78]">SELECIONE SEU ACESSO</p>
          <div className="mt-5 flex flex-col gap-[clamp(12px,1.563vh,16px)] lg:mt-[21px] lg:gap-4">
            {options.map((option) => (
              <RoleOption key={option.role} {...option} />
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <h2 className="font-display text-[clamp(2rem,2.5vw,2.25rem)] font-bold leading-[1.02] text-[var(--color-auth-off-white)]">Seu inglês<br />começa aqui.</h2>
          <p className="mt-5 text-[13px] font-medium leading-[1.4] text-[var(--color-auth-off-white)]/[0.72]">Aulas, materiais e prática em um só lugar.</p>
        </div>

        <p className="mt-[clamp(32px,5.664vh,58px)] text-[10px] font-semibold leading-[18px] tracking-[0.15em] text-[var(--color-auth-off-white)]/[0.58]">ISABELA CARDOSO&nbsp;&nbsp;/&nbsp;&nbsp;ENGLISH TEACHER</p>
      </div>
    </aside>
  );
}

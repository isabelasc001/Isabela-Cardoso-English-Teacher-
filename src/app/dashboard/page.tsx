import { Card } from "@/components/ui";
import { DashboardLayout, type DashboardUser } from "@/components/layouts/DashboardLayouts";

const student: DashboardUser = {
  name: "Mariana Costa",
  email: "mariana@exemplo.com",
};

export default function StudentDashboardPage() {
  return (
    <DashboardLayout role="student" user={student}>
      <section className="mx-auto max-w-6xl">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary)]">Sua jornada</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-[var(--color-text-primary)] sm:text-5xl">Olá, Mariana.</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">Continue praticando inglês no seu ritmo e acompanhe cada pequena evolução.</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <Card padding="relaxed" className="border-[var(--color-card-border)] bg-[var(--color-card-background)]">
            <p className="text-sm font-semibold text-[var(--color-text-tertiary)]">Progresso geral</p>
            <p className="mt-3 font-display text-4xl font-bold text-[var(--color-text-primary)]">42%</p>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Você está avançando bem.</p>
          </Card>
          <Card padding="relaxed" className="border-[var(--color-card-border)] bg-[var(--color-card-background)]">
            <p className="text-sm font-semibold text-[var(--color-text-tertiary)]">Próxima aula</p>
            <p className="mt-3 text-xl font-bold text-[var(--color-text-primary)]">Conversação</p>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Hoje, às 19:00.</p>
          </Card>
          <Card padding="relaxed" className="border-[var(--color-card-border)] bg-[var(--color-card-background)] md:col-span-2 xl:col-span-1">
            <p className="text-sm font-semibold text-[var(--color-text-tertiary)]">Trilha em andamento</p>
            <p className="mt-3 text-xl font-bold text-[var(--color-text-primary)]">Everyday English</p>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Retome de onde parou.</p>
          </Card>
        </div>
      </section>
    </DashboardLayout>
  );
}

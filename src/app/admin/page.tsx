import { Card } from "@/components/ui";
import { DashboardLayout, type DashboardUser } from "@/components/layouts/DashboardLayouts";

const administrator: DashboardUser = {
  name: "Isabela Cardoso",
  email: "admin@exemplo.com",
};

export default function AdministratorDashboardPage() {
  return (
    <DashboardLayout role="administrator" user={administrator}>
      <section className="mx-auto max-w-6xl">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary)]">Visão geral</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-[var(--color-text-primary)] sm:text-5xl">Painel administrativo.</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">Gerencie alunos, conteúdos e aulas em um só lugar.</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <Card padding="relaxed" className="border-[var(--color-card-border)] bg-[var(--color-card-background)]">
            <p className="text-sm font-semibold text-[var(--color-text-tertiary)]">Alunos ativos</p>
            <p className="mt-3 font-display text-4xl font-bold text-[var(--color-text-primary)]">24</p>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Acompanhamento em dia.</p>
          </Card>
          <Card padding="relaxed" className="border-[var(--color-card-border)] bg-[var(--color-card-background)]">
            <p className="text-sm font-semibold text-[var(--color-text-tertiary)]">Trilhas publicadas</p>
            <p className="mt-3 font-display text-4xl font-bold text-[var(--color-text-primary)]">08</p>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Conteúdos disponíveis.</p>
          </Card>
          <Card padding="relaxed" className="border-[var(--color-card-border)] bg-[var(--color-card-background)] md:col-span-2 xl:col-span-1">
            <p className="text-sm font-semibold text-[var(--color-text-tertiary)]">Próximas aulas</p>
            <p className="mt-3 font-display text-4xl font-bold text-[var(--color-text-primary)]">05</p>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Agenda da semana.</p>
          </Card>
        </div>
      </section>
    </DashboardLayout>
  );
}

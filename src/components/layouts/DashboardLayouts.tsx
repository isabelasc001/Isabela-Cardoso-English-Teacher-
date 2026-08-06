import Link from "next/link";
import { Avatar } from "@/components/ui";
import { cn } from "@/lib/utils/cn";

export type DashboardRole = "student" | "administrator";

export interface DashboardUser {
  name: string;
  email: string;
  avatarUrl?: string;
}

interface DashboardLayoutProps {
  role: DashboardRole;
  user: DashboardUser;
  children: React.ReactNode;
}

interface NavigationItem {
  label: string;
  href: string;
}

const navigation: Record<DashboardRole, NavigationItem[]> = {
  student: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Trilhas", href: "/trails" },
    { label: "Materiais", href: "/materials" },
    { label: "Aulas", href: "/lessons" },
    { label: "Notas", href: "/notes" },
    { label: "Assistente IA", href: "/assistant" },
  ],
  administrator: [
    { label: "Dashboard", href: "/admin" },
    { label: "Usuários", href: "/admin/users" },
    { label: "Trilhas", href: "/admin/trails" },
    { label: "Materiais", href: "/admin/materials" },
    { label: "Aulas", href: "/admin/lessons" },
  ],
};

function NavigationLink({ item, active }: { item: NavigationItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex min-h-11 items-center rounded-[var(--radius-md)] px-3 text-sm font-semibold transition-colors",
        active
          ? "bg-[var(--color-sidebar-itemActiveBackground)] text-[var(--color-brand-primary)]"
          : "text-[var(--color-sidebar-item)] hover:bg-[var(--color-sidebar-itemHover)]"
      )}
    >
      {item.label}
    </Link>
  );
}

function BrandLockup() {
  return (
    <Link href="/" className="flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]">
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-primary)] text-xs font-bold tracking-[0.08em] text-white">
        <span className="absolute inset-[5px] rounded-full border border-white/70" />
        IC
      </span>
      <span>
        <span className="block font-display text-sm font-semibold tracking-[0.075em] text-[var(--color-text-primary)]">ISABELA CARDOSO</span>
        <span className="mt-0.5 block text-[9px] font-semibold tracking-[0.2em] text-[var(--color-text-tertiary)]">ENGLISH TEACHER</span>
      </span>
    </Link>
  );
}

export function DashboardLayout({ role, user, children }: DashboardLayoutProps) {
  const isStudent = role === "student";
  const roleLabel = isStudent ? "Área do aluno" : "Área administrativa";
  const navigationItems = navigation[role];

  return (
    <main className="min-h-screen bg-[var(--color-background-muted)] text-[var(--color-text-primary)]">
      <div className="mx-auto grid min-h-screen max-w-[1600px] lg:grid-cols-[264px_minmax(0,1fr)]">
        <aside className="border-b border-[var(--color-sidebar-border)] bg-[var(--color-sidebar-background)] px-5 py-6 lg:border-b-0 lg:border-r lg:px-6 lg:py-8">
          <div className="flex h-full flex-col">
            <BrandLockup />

            <div className="mt-10">
              <p className="px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">Navegação</p>
              <nav aria-label={roleLabel} className="mt-3 space-y-1">
                {navigationItems.map((item, index) => (
                  <NavigationLink key={item.href} item={item} active={index === 0} />
                ))}
              </nav>
            </div>

            <div className="mt-auto hidden rounded-[var(--radius-lg)] border border-[var(--color-sidebar-border)] bg-[var(--color-surface-default)] p-4 lg:block">
              <p className="text-xs font-semibold text-[var(--color-text-tertiary)]">Sessão ativa</p>
              <p className="mt-1 truncate text-sm font-semibold text-[var(--color-text-primary)]">{user.name}</p>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="flex min-h-[88px] items-center justify-between gap-6 border-b border-[var(--color-header-border)] bg-[var(--color-header-background)] px-5 py-4 sm:px-8 lg:px-10">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary)]">{roleLabel}</p>
              <p className="mt-1 text-sm text-[var(--color-text-tertiary)]">Uma jornada de aprendizagem clara e acolhedora.</p>
            </div>

            <div className="flex shrink-0 items-center gap-3" aria-label={`Usuário ${user.name}`}>
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">{user.name}</p>
                <p className="mt-0.5 max-w-48 truncate text-xs text-[var(--color-text-tertiary)]">{user.email}</p>
              </div>
              <Avatar
                src={user.avatarUrl}
                alt={`Foto de perfil de ${user.name}`}
                name={user.name}
                size="lg"
                className="ring-2 ring-[var(--color-auth-row-selected-border)] ring-offset-2 ring-offset-[var(--color-header-background)]"
              />
            </div>
          </header>

          <div className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">{children}</div>
        </div>
      </div>
    </main>
  );
}

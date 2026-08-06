"use client";

import { useState } from "react";
import { Avatar, Badge, Button, Card, EmptyState, ErrorState, Input, Progress, SearchBar, Skeleton, Spinner } from "@/components/ui";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

function ArrowIcon() {
  return <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function PlusIcon() {
  return <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>;
}

export function ComponentPlayground() {
  const [progress, setProgress] = useState(68);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showEmptyState, setShowEmptyState] = useState(false);
  const [retryMessage, setRetryMessage] = useState("Não foi possível carregar as atividades desta turma.");

  return (
    <main className="min-h-screen bg-[var(--color-background-default)] px-[var(--spacing-4)] py-[var(--spacing-8)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-10)]">
      <div className="mx-auto max-w-7xl">
        <header className="mb-[var(--spacing-8)] flex flex-col gap-[var(--spacing-5)] border-b border-[var(--color-border-subtle)] pb-[var(--spacing-6)] sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-[var(--spacing-2)] text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-primary)]">English Teacher Platform</p>
            <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">Playground de componentes</h1>
            <p className="mt-[var(--spacing-2)] max-w-2xl text-[var(--color-text-secondary)]">Uma tela de referência para validar estados, interações e os temas claro e escuro.</p>
          </div>
          <ThemeToggle variant="dropdown" />
        </header>

        <div className="grid gap-[var(--spacing-6)] xl:grid-cols-3">
          <section className="space-y-[var(--spacing-6)] xl:col-span-2">
            <Card header={<h2 className="font-semibold text-[var(--color-text-primary)]">Ações e feedback</h2>} footer={<p className="text-sm text-[var(--color-text-tertiary)]">Teste os estados de carregamento e as variações de botões.</p>}>
              <div className="grid gap-[var(--spacing-4)] sm:grid-cols-2 lg:grid-cols-3">
                <Button leftIcon={<PlusIcon />}>Nova aula</Button>
                <Button variant="secondary">Salvar rascunho</Button>
                <Button variant="outline" rightIcon={<ArrowIcon />}>Ver turma</Button>
                <Button variant="ghost">Cancelar</Button>
                <Button variant="text">Saiba mais</Button>
                <Button loading={isLoading} onClick={() => setIsLoading((value) => !value)}>{isLoading ? "Carregando" : "Testar loading"}</Button>
              </div>
              <div className="mt-[var(--spacing-6)] grid gap-[var(--spacing-4)] sm:grid-cols-2">
                <Input label="Nome da aula" placeholder="Ex.: Conversation club" helperText="Use um título claro para os alunos." fullWidth />
                <Input label="Código da turma" placeholder="ABC-123" error="Informe um código válido." fullWidth />
              </div>
            </Card>

            <Card header={<h2 className="font-semibold text-[var(--color-text-primary)]">Busca e conteúdo</h2>}>
              <SearchBar fullWidth value={search} onChange={setSearch} onSearch={setSearch} placeholder="Buscar alunos, aulas ou materiais..." />
              <div className="mt-[var(--spacing-5)] flex flex-wrap items-center justify-between gap-[var(--spacing-3)] rounded-[var(--radius-sm)] bg-[var(--color-background-subtle)] p-[var(--spacing-4)]">
                <div><p className="font-medium text-[var(--color-text-primary)]">{search ? `Resultados para "${search}"` : "Encontre o que precisa"}</p><p className="text-sm text-[var(--color-text-secondary)]">Pressione Enter ou limpe a busca para testar o campo.</p></div>
                <Avatar name="Mariana Costa" size="lg" />
              </div>
            </Card>

            <Card header={<h2 className="font-semibold text-[var(--color-text-primary)]">Progresso e status</h2>}>
              <Progress value={progress} label="Plano de estudos da semana" showValue size="lg" />
              <div className="mt-[var(--spacing-4)] flex flex-wrap items-center justify-between gap-[var(--spacing-3)]">
                <div className="flex flex-wrap gap-[var(--spacing-2)]"><Badge variant="primary" size="md">Em andamento</Badge><Badge variant="success" size="md">Concluída</Badge><Badge variant="warning" size="md">Atenção</Badge><Badge variant="error" size="md">Atrasada</Badge><Badge variant="neutral" size="md">Rascunho</Badge></div>
                <Button variant="outline" size="sm" onClick={() => setProgress((current) => current >= 100 ? 16 : current + 16)}>Avançar progresso</Button>
              </div>
            </Card>
          </section>

          <aside className="space-y-[var(--spacing-6)]">
            <Card header={<h2 className="font-semibold text-[var(--color-text-primary)]">Carregamento</h2>}>
              <div className="space-y-[var(--spacing-4)]"><div className="flex items-center gap-[var(--spacing-3)]"><Skeleton variant="circular" width={40} /><div className="flex-1 space-y-[var(--spacing-2)]"><Skeleton width="55%" /><Skeleton width="85%" height={12} /></div></div><Skeleton variant="card" /><div className="flex items-center gap-[var(--spacing-2)] text-sm text-[var(--color-text-secondary)]"><Spinner size="sm" /> Processando conteúdo</div></div>
            </Card>
            <Card hoverable clickable onClick={() => setShowEmptyState((value) => !value)} header={<h2 className="font-semibold text-[var(--color-text-primary)]">Estado vazio</h2>}>
              {showEmptyState ? <EmptyState title="Nenhuma atividade por aqui" description="Crie uma atividade para começar a acompanhar a evolução da turma." action={{ label: "Criar atividade", onClick: () => setShowEmptyState(false) }} /> : <div className="py-[var(--spacing-5)] text-center text-sm text-[var(--color-text-secondary)]">Clique neste card para visualizar o EmptyState.</div>}
            </Card>
            <Card header={<h2 className="font-semibold text-[var(--color-text-primary)]">Estado de erro</h2>}><ErrorState message={retryMessage} onRetry={() => setRetryMessage("Tentativa realizada. Você pode continuar trabalhando normalmente.")} /></Card>
          </aside>
        </div>
      </div>
    </main>
  );
}

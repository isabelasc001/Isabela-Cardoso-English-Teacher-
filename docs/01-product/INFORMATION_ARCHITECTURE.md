# DOCUMENT 03 — INFORMATION ARCHITECTURE

Projeto: Isabela Cardoso English Teacher  
Documento: DOC-03  
Versão: 2.0  
Status: Oficial

## 1. Objetivo

Este documento define a arquitetura da informação da plataforma.
Seu objetivo é organizar todas as funcionalidades em uma estrutura lógica, consistente e escalável, permitindo que usuários encontrem rapidamente qualquer recurso da plataforma.
A Arquitetura da Informação estabelece como os módulos se relacionam, como as telas são organizadas e quais caminhos de navegação estarão disponíveis.
Ela serve como referência para UX, UI, desenvolvimento Front-end e documentação.

## 2. Princípios

Toda organização da plataforma segue cinco princípios fundamentais.

### Clareza

O usuário deve compreender imediatamente onde está.
Cada tela pertence claramente a um módulo.

### Consistência

Uma funcionalidade deve existir em apenas um local.
Nunca haverá duas formas diferentes de acessar exatamente o mesmo recurso.

### Hierarquia

Informações importantes aparecem primeiro.
Conteúdos secundários aparecem somente quando necessários.

### Progressão

O sistema conduz o usuário naturalmente para a próxima ação.

### Escalabilidade

Novos módulos poderão ser adicionados sem reorganizar toda a plataforma.

## 3. Estrutura Geral

A plataforma é dividida em dois ambientes.

```text
Sistema
├── Área do Aluno
└── Área Administrativa
```

Cada ambiente possui navegação própria.

## 4. Área do Aluno

A área do aluno concentra todas as funcionalidades relacionadas ao processo de aprendizagem.
Ela é composta pelos seguintes módulos.

```text
Dashboard
↓
Trilhas
↓
Materiais
↓
Aulas
↓
Notas
↓
Assistente IA
↓
Perfil
```

O Dashboard atua como ponto central da experiência.

## 5. Área Administrativa

A área administrativa concentra todas as ferramentas de gerenciamento.

```text
Dashboard Administrativo
↓
Usuários
↓
Trilhas
↓
Materiais
↓
Aulas
↓
Perfil
```

## 6. Estrutura de Navegação

### Fluxo inicial

```text
Splash
↓
Login
↓
Autenticação
↓
Dashboard correspondente ao perfil
```

Após a autenticação, o usuário nunca retorna à tela inicial durante a mesma sessão.

## 7. Estrutura dos Menus

### Menu Principal do Aluno

A navegação principal é composta pelos seguintes itens.

| Ordem | Item |
| --- | --- |
| 1 | Dashboard |
| 2 | Trilhas |
| 3 | Materiais |
| 4 | Aulas |
| 5 | Notas |
| 6 | Assistente IA |
| 7 | Perfil |

A ordem dos itens deve permanecer consistente em todas as plataformas.

### Menu Principal do Administrador

| Ordem | Item |
| --- | --- |
| 1 | Dashboard |
| 2 | Usuários |
| 3 | Trilhas |
| 4 | Materiais |
| 5 | Aulas |
| 6 | Perfil |

## 8. Hierarquia dos Conteúdos

Cada módulo possui um nível claro de profundidade.

### Dashboard

Visão geral.
Nenhum conteúdo detalhado é editado diretamente nesta tela.

### Trilhas

```text
Lista de Trilhas
↓
Detalhes da Trilha
↓
Etapa
↓
Conteúdo
```

### Materiais

```text
Lista
↓
Categoria
↓
Material
↓
Visualização
```

### Aulas

```text
Calendário
↓
Detalhes da Aula
```

### Perfil

```text
Perfil
↓
Editar
↓
Salvar
```

## 9. Regras de Navegação

Toda navegação da plataforma deve seguir as seguintes regras.

### Uma ação principal por tela

Cada tela possui apenas um objetivo principal.

### Profundidade controlada

Nenhum fluxo deve exigir mais de quatro níveis de navegação para acessar um conteúdo.

### Retorno previsível

O botão "Voltar" sempre retorna para a tela imediatamente anterior.

### Estado preservado

Ao retornar para uma listagem, filtros, paginação e posição de rolagem devem ser mantidos sempre que possível.

## 10. Organização das Informações

Todas as telas devem apresentar informações seguindo a mesma ordem:

1. Cabeçalho.
2. Contexto da página (título e descrição).
3. Conteúdo principal.
4. Ações relacionadas.
5. Conteúdo complementar.

Essa estrutura deve ser reutilizada em todos os módulos para criar familiaridade e reduzir a carga cognitiva.

## 11. Estrutura de Rotas (Conceitual)

A arquitetura de rotas seguirá a organização funcional da plataforma.

```text
/
/login
/dashboard
/trails
/trails/{trailId}
/materials
/materials/{materialId}
/lessons
/notes
/assistant
/profile
/admin
/admin/users
/admin/trails
/admin/materials
/admin/lessons
```

Os nomes técnicos das rotas poderão ser ajustados durante a implementação, mas sua organização deve refletir a estrutura funcional definida neste documento.

## 12. Escalabilidade

Novos módulos deverão ser adicionados sem alterar a estrutura existente.

```text
Dashboard
↓
Novo módulo
↓
Demais módulos
```

A inclusão de novas funcionalidades não deve quebrar a consistência da navegação nem modificar a localização de funcionalidades já consolidadas.

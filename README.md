# Isabela Cardoso English Teacher

Plataforma de aprendizagem de inglês que reúne aulas, materiais, trilhas de estudo, acompanhamento individual e recursos de Inteligência Artificial em uma única experiência.

O produto complementa o trabalho da professora: ajuda estudantes a organizar os estudos, acompanhar a evolução e acessar os conteúdos antes, durante e após as aulas.

## Objetivos

- Centralizar os recursos de aprendizagem em um só lugar.
- Organizar conteúdos, trilhas, materiais e aulas de forma simples de navegar.
- Dar visibilidade à evolução contínua de cada estudante.
- Oferecer à administração ferramentas para gerenciar alunos, conteúdos e aulas.
- Construir uma base escalável para a evolução da plataforma.

## Perfis de acesso

| Perfil | Principais capacidades |
| --- | --- |
| Aluno | Acompanhar trilhas, acessar materiais, visualizar aulas, registrar notas, utilizar o assistente de IA e atualizar o perfil. |
| Administrador | Gerenciar usuários, trilhas, materiais, aulas e conteúdos da plataforma. |

## Escopo do MVP

O MVP contempla os seguintes módulos:

- Autenticação e gerenciamento de sessão;
- Dashboard de acompanhamento;
- Trilhas de aprendizagem;
- Materiais de estudo;
- Aulas e calendário;
- Notas pessoais;
- Assistente de IA para apoio aos estudos;
- Perfil do usuário;
- Área administrativa.

## Tecnologias

- [Next.js](https://nextjs.org/)
- React
- TypeScript
- Tailwind CSS

A arquitetura planejada prevê o Supabase para autenticação, banco de dados PostgreSQL, armazenamento e políticas de segurança.

## Como executar

Pré-requisito: Node.js compatível com o projeto.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

Outros comandos disponíveis:

```bash
npm run lint
npm run build
npm run start
```

## Documentação

A documentação oficial está organizada por área em [`docs/`](docs/). Ela é a fonte de verdade para decisões de produto, design, arquitetura e desenvolvimento.

### Visão geral

- [Visão geral da documentação](docs/00-overview/DOCUMENTATION_OVERVIEW.md)

### Produto

- [Visão do produto](docs/01-product/PRODUCT_VISION.md)
- [Escopo do MVP](docs/01-product/MVP_SCOPE.md)
- [Arquitetura da informação](docs/01-product/INFORMATION_ARCHITECTURE.md)
- [Fluxos de usuário](docs/01-product/USER_FLOWS.md)
- [Regras de negócio](docs/01-product/BUSINESS_RULES.md)

### Design

- [Diretrizes de design](docs/02-design/DESIGN_GUIDELINES.md)
- [Especificações de telas](docs/02-design/SCREEN_SPECIFICATIONS.md)

### Arquitetura

- [Arquitetura da aplicação](docs/03-architecture/ARCHITECTURE.md)
- [Especificação do banco de dados](docs/03-architecture/DATABASE_SPECIFICATION.md)
- [Especificação da API](docs/03-architecture/API_SPECIFICATION.md)

### Desenvolvimento

- [Roadmap de desenvolvimento](docs/04-development/DEVELOPMENT_ROADMAP.md)
- [Guia de desenvolvimento](docs/04-development/DEVELOPMENT_GUIDE.md)

## Princípios do produto

As decisões de produto e implementação devem preservar simplicidade, clareza, consistência, organização, humanização e evolução contínua.

Para conhecer as regras completas, o escopo e a ordem de implementação, consulte a documentação vinculada acima.

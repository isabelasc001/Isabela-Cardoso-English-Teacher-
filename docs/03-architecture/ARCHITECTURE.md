DOCUMENT 08
ARCHITECTURE
Projeto: Isabela Cardoso English Teacher
Documento: DOC-08
Versão: 2.0
Status: Oficial

1. Objetivo
Este documento define a arquitetura oficial da plataforma Isabela Cardoso English Teacher.
Seu objetivo é estabelecer a organização da aplicação, responsabilidades de cada camada e princípios que devem ser seguidos durante todo o desenvolvimento.
Este documento serve como referência para toda implementação técnica do projeto.

2. Objetivos da Arquitetura
A arquitetura da plataforma foi projetada para:
facilitar manutenção;
permitir crescimento gradual;
incentivar reutilização;
separar responsabilidades;
reduzir acoplamento;
simplificar testes;
manter consistência.

3. Stack Tecnológica
A primeira versão da plataforma utiliza:
Front-end
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui

Backend
Supabase
Responsável por:
autenticação;
banco PostgreSQL;
storage;
Row Level Security;
APIs.

Gerenciamento de Estado
A aplicação utiliza:
React Query para dados remotos;
Context API para estados globais;
React Hook Form para formulários.
Cada ferramenta possui uma responsabilidade específica e não deve substituir a outra.

4. Organização do Projeto
A aplicação é organizada por domínio funcional.
Cada módulo possui sua própria estrutura.
Exemplo:
features/

auth/

dashboard/

trails/

materials/

lessons/

notes/

assistant/

profile/

admin/
Cada feature contém tudo o que precisa para funcionar.

5. Organização das Camadas
Cada módulo deve seguir a mesma organização.
Feature

↓

UI

↓

Business

↓

Data

↓

Supabase

UI
Responsável por:
componentes;
páginas;
interação do usuário.
A UI nunca deve conter regras de negócio complexas.

Business
Responsável por:
regras da aplicação;
validações;
processamento dos dados.
Toda regra reutilizável pertence a esta camada.

Data
Responsável por:
consultas;
persistência;
comunicação com APIs.
Essa camada isola o restante da aplicação das tecnologias externas.

Backend
Responsável por:
autenticação;
armazenamento;
banco de dados;
políticas de segurança.

6. Componentização
Todo elemento reutilizável deve ser transformado em componente.
Exemplos:
Button
Input
Card
Badge
Avatar
Dialog
Modal
Empty State
Skeleton
Progress
Evitar duplicação de componentes.

7. Design System
Todo componente deve utilizar exclusivamente os tokens definidos no Brand Design System.
Não criar:
novas cores;
novos espaçamentos;
novas tipografias.
Qualquer alteração visual permanente deve ocorrer primeiro no Design System.

8. Organização das Features
Cada feature deve possuir responsabilidade única.
Exemplo:
Dashboard
Responsável apenas pela experiência inicial do aluno.
Não deve conter lógica pertencente às trilhas ou materiais.

Trilhas
Responsável exclusivamente pela navegação e progresso das trilhas.

Materiais
Responsável exclusivamente pelo gerenciamento dos conteúdos de estudo.

Esse princípio deve ser aplicado a todos os módulos.

9. Navegação
A estrutura de navegação segue a Arquitetura da Informação definida no DOC-03.
Cada módulo representa uma área funcional da plataforma.
A navegação deve ser previsível e consistente.

10. Autenticação
Toda autenticação é gerenciada pelo Supabase Auth.
Após autenticação:
identificar perfil do usuário;
carregar permissões;
redirecionar para a área correspondente.

11. Controle de Acesso
O sistema possui dois perfis principais.
Aluno
Pode acessar apenas:
seus dados;
materiais disponíveis;
trilhas;
aulas;
notas;
IA.

Administrador
Possui acesso às funcionalidades administrativas.
As permissões devem ser aplicadas tanto na interface quanto no backend.

12. Gerenciamento de Dados
Todos os dados remotos devem seguir o mesmo fluxo.
Interface

↓

React Query

↓

Service

↓

Supabase

↓

Banco
Esse padrão garante consistência no acesso aos dados.

13. Tratamento de Estados
Toda tela deve prever:
Loading
Success
Empty
Error
Os componentes utilizados para esses estados devem ser reutilizados em toda a aplicação.

14. Upload de Arquivos
Todo upload deve utilizar o Supabase Storage.
Os arquivos devem ser organizados por categoria.
Exemplos:
profile-images
materials
attachments
Cada bucket deve possuir políticas de acesso compatíveis com seu conteúdo.

15. Segurança
A segurança deve ser aplicada em duas camadas.
Interface
Oculta funcionalidades não permitidas para o perfil do usuário.

Backend
Aplica efetivamente as permissões utilizando RLS.
Nunca confiar apenas na interface para controle de acesso.

16. Escalabilidade
A arquitetura foi projetada para permitir:
novos módulos;
novos perfis;
novas integrações;
novas funcionalidades.
Sem necessidade de reorganização estrutural.

17. Performance
Durante o desenvolvimento devem ser priorizados:
carregamento progressivo;
componentes reutilizáveis;
cache de consultas;
paginação quando necessário;
carregamento sob demanda de conteúdos maiores.

18. Manutenção
Toda nova funcionalidade deve respeitar a arquitetura existente.
Antes de criar:
componente;
hook;
serviço;
contexto;
deve-se verificar se já existe uma solução equivalente.

19. Convenções
Todo desenvolvimento deve seguir os seguintes princípios:
nomes consistentes;
responsabilidades bem definidas;
componentes reutilizáveis;
baixo acoplamento;
alta coesão.

20. Critérios Arquiteturais
Antes da implementação de qualquer funcionalidade, validar:
pertence à feature correta?
reutiliza componentes existentes?
respeita o Design System?
respeita os User Flows?
respeita a Information Architecture?
respeita o MVP Scope?
Se alguma resposta for negativa, revisar a implementação.

21. Relação com os Demais Documentos
A documentação segue a seguinte hierarquia:
Product Vision
        ↓
MVP Scope
        ↓
Information Architecture
        ↓
User Flows
        ↓
Design Guidelines
        ↓
Screen Specifications
        ↓
Database
        ↓
Architecture
        ↓
Roadmap
        ↓
Development Guide
Cada documento complementa o anterior e não deve duplicar informações já definidas.

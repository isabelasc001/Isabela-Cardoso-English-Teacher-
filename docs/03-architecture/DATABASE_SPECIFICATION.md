DOCUMENT 07: DATABASE SPECIFICATION
Projeto: Isabela Cardoso English Teacher
Documento: DOC-07
Versão: 3.0 (Alinhado 100% ao Schema Supabase)
Status: Oficial

1. Objetivo
Este documento descreve a estrutura de dados da plataforma Isabela Cardoso English Teacher. Seu objetivo é documentar:
As 13 entidades principais da aplicação;
Responsabilidades e campos de cada tabela;
Tipos customizados (Enums);
Relacionamentos e cardinalidade;
Fluxo dos dados;
Regras de segurança (Row Level Security - RLS).
A implementação utiliza Supabase PostgreSQL como banco de dados relacional principal.
2. Arquitetura de Dados
A plataforma utiliza uma separação clara entre duas camadas:
Camada de Autenticação (auth)
Gerenciada nativamente pelo Supabase Auth. Responsável pelas credenciais, criptografia de senha, tokens JWT e identificação única do usuário.
Tabela principal: auth.users
Camada de Aplicação (public)
Responsável pelos dados de negócio, histórico pedagógico, gamificação e agendamentos.
Schema principal: public
O relacionamento primordial de identidade do sistema é:
auth.users.id⟶public.users.id

3. Modelo Geral de Relacionamentos
A estrutura do banco está dividida em 5 domínios principais: Usuários, Conteúdo/Trilhas, Aulas (Agenda), Gamificação e Sistema.
Plaintext
                        [ auth.users ]
                              │
                              ▼
                         [ users ]
                              │
       ┌──────────────────────┼──────────────────────┬──────────────────────┐
       │                      │                      │                      │
       ▼                      ▼                      ▼                      ▼
[ student_trails ]     [ notes ]             [ lesson_bookings ]    [ notifications ]
       │                      │                      │
       ▼                      ▼                      ▼
[ student_step_progress ]  (trail_id)           [ lessons ]
       │                      │
       ▼                      ▼
 [ trail_steps ] ◄─────── [ trails ] ────────► [ materials ]
                              │
                              ▼
                       [ certificates ]
                              ▲
                              │
                     [ user_achievements ] ◄─── [ achievements ]

4. Entidades de Usuário e Sistema
4.1. Entidade: users
Objetivo: Armazenar dados de perfil, métricas de estudo e permissões dos usuários autenticados, funcionando como extensão da tabela nativa do Supabase.
Relacionamento: auth.users.id → users.id (1:1).
Campos Principais:
id (uuid, PK): Referência direta ao Supabase Auth.
email, full_name, avatar_url, whatsapp: Dados de contato e perfil.
role (enum: user_role): Define se é student ou admin.
level (enum: english_level): Nível atual do aluno (A1 a C2).
status (enum: user_status): Status da conta (active ou inactive).
study_days, total_hours: Métricas agregadas de engajamento do aluno.
created_at, last_login: Auditoria de acesso.
4.2. Entidade: notifications
Objetivo: Gerenciar o painel de avisos e notificações in-app para os usuários.
Relacionamento: users.id → notifications.user_id (1:N).
Campos Principais: title, message, read (bool), created_at.

5. Entidades de Aprendizagem (Trilhas e Conteúdo)
5.1. Entidade: trails
Objetivo: Representar as trilhas ou cursos temáticos de inglês criados pela professora.
Relacionamento: users.id (Admin) → trails.created_by.
Campos Principais: title, description, category, level (english_level), cover_image, published (bool).
5.2. Entidade: trail_steps
Objetivo: Armazenar os módulos ou etapas individuais compõem uma trilha.
Relacionamento: trails.id → trail_steps.trail_id (1:N).
Campos Principais: title, description, type (enum: step_type), order_index (ordem de exibição), unlock_score (pontuação necessária para desbloqueio).
5.3. Entidade: materials
Objetivo: Armazenar arquivos de apoio, PDFs, áudios e documentos vinculados a uma trilha.
Relacionamento: trails.id → materials.trail_id (1:N).
Campos Principais: title, description, file_url, file_type, size, visibility.

6. Entidades de Progresso e Estudo
6.1. Entidade: student_trails
Objetivo: Controlar a matrícula e o progresso macro de um aluno em uma trilha específica.
Relacionamentos:
users.id → student_trails.student_id
trails.id → student_trails.trail_id
Campos Principais: progress_percentage (0 a 100), completed (bool), started_at, completed_at.
6.2. Entidade: student_step_progress
Objetivo: Registrar a evolução micro, ou seja, a conclusão e pontuação do aluno em cada etapa (trail_step) de uma trilha.
Relacionamentos:
users.id → student_step_progress.student_id
trail_steps.id → student_step_progress.step_id
Campos Principais: completed (bool), score (int4), completed_at.
6.3. Entidade: notes
Objetivo: Permitir que o aluno crie anotações pessoais livres ou vinculadas a uma trilha específica.
Relacionamentos:
users.id → notes.user_id (Obrigatório)
trails.id → notes.trail_id (Opcional/Nullable)
Campos Principais: content, created_at, updated_at.

7. Entidades de Aulas e Agendamentos
7.1. Entidade: lessons
Objetivo: Representar os horários de aulas disponibilizados na agenda pela professora.
Relacionamento: users.id (Admin) → lessons.admin_id.
Campos Principais: lesson_date, lesson_time, duration (em minutos), modality (ex: Online, Presencial), status (enum: lesson_status).
7.2. Entidade: lesson_bookings
Objetivo: Tabela associativa que registra a reserva (agendamento) de uma aula disponível por um aluno.
Relacionamentos:
lessons.id → lesson_bookings.lesson_id
users.id (Aluno) → lesson_bookings.student_id
Campos Principais: notes (observações do aluno para a aula), booked_at.

8. Entidades de Gamificação e Reconhecimento
8.1. Entidade: achievements
Objetivo: Catálogo de conquistas, badges e premiações disponíveis na plataforma.
Relacionamento: trails.id → achievements.trail_id (Opcional, caso a conquista seja exclusiva de um curso).
Campos Principais: title, description, badge_url.
8.2. Entidade: user_achievements
Objetivo: Tabela associativa que registra quais conquistas foram desbloqueadas por quais alunos.
Relacionamentos:
users.id → user_achievements.user_id
achievements.id → user_achievements.achievement_id
Campos Principais: unlocked_at.
8.3. Entidade: certificates
Objetivo: Emitir e registrar os certificados de conclusão de trilhas obtidos pelos alunos.
Relacionamentos:
users.id → certificates.user_id
trails.id → certificates.trail_id
Campos Principais: code (Código único de validação), certificate_url, issued_at.

9. Tipos Customizados (Enums)
O banco de dados faz uso robusto de tipos tipados para garantir integridade de dados e evitar erros de preenchimento (strings inválidas):
Nome do Enum	Valores Permitidos	Aplicação
user_role	student, admin	Define permissões de acesso na tabela users.
english_level	A1, A2, B1, B2, C1, C2	Classificação CEFR em users e trails.
user_status	active, inactive	Controle de bloqueio/ativação em users.
step_type	content, material, quiz, review, achievement	Tipifica o formato da etapa em trail_steps.
lesson_status	available, booked, cancelled, completed	Controla o ciclo de vida da agenda em lessons.

10. Fluxo Principal de Aprendizagem
O caminho de dados gerado pela interação do aluno com o conteúdo segue o pipeline:
Matrícula: Aluno inicia um curso → Registro criado em student_trails (progress_percentage = 0).
Consumo: Aluno acessa módulos → Leituras de trail_steps e downloads de materials.
Execução: Aluno conclui uma aula ou teste → Registro em student_step_progress (completed = true, com score).
Sincronização: Sistema recalcula avanço → Atualiza progress_percentage em student_trails.
Recompensa (Gamificação): Ao atingir metas → Sistema insere registro em user_achievements.
Conclusão: progress_percentage atinge 100% → Status em student_trails muda para completed = true → Gerado registro em certificates.

11. Mapeamento Banco x Interface
Relacionamento entre as telas especificadas na documentação de UI e as tabelas do banco:
Tela / Módulo	Tabelas Consumidas	Operações Principais
Login / Cadastro	auth.users, users	SELECT, INSERT
Perfil / Configurações	users, user_achievements	SELECT, UPDATE
Dashboard Aluno	users, student_trails, lesson_bookings, notifications	SELECT
Catálogo de Trilhas	trails, student_trails	SELECT (apenas published = true)
Sala de Aula (Trilha)	trails, trail_steps, materials, student_step_progress, notes	SELECT, INSERT, UPDATE
Agenda de Aulas	lessons, lesson_bookings	SELECT (disponíveis), INSERT (reserva)
Conquistas e Badges	achievements, user_achievements, certificates	SELECT

12. Segurança e Controle de Acesso (RLS)
A segurança da informação é regida por Row Level Security (RLS) nativo do PostgreSQL. Nenhuma query da aplicação web ou mobile acessa dados sem passar por essas regras:
Regras Gerais (Perfis de Acesso)
Função Administrador (is_admin()): Usuários com role = 'admin' possuem permissão total (ALL / Permissive) para criar, ler, editar e deletar registros em qualquer tabela (Trilhas, Etapas, Aulas, Materiais, etc.).
Função Aluno: O acesso é restrito ao próprio escopo, utilizando a validação do token JWT: auth.uid() = user_id ou auth.uid() = student_id.
Políticas por Tabela (Exemplos Implementados)
users: Aluno só lê/edita a si mesmo (auth.uid() = id).
trails: Alunos só podem ler trilhas publicadas (published = true). Trilhas em rascunho são exclusivas do admin.
student_trails e student_step_progress: Aluno só visualiza e manipula o seu próprio progresso (auth.uid() = student_id).
notes: Acesso estritamente privado. Um aluno jamais tem acesso à nota de outro (auth.uid() = user_id).
lesson_bookings: Aluno só gerencia seus próprios agendamentos (auth.uid() = student_id).

13. Evoluções Planejadas
O modelo atual cobre todo o escopo de MVP e operação consolidada da professora. Para versões futuras (v4.0+), o banco está preparado para receber:
Tabelas de Pagamentos e Assinaturas (integração com Stripe/Mercado Pago).
Expansão de Métricas de Estudo (tabela de analytics de tempo real por etapa estudada).
Feedback de Aulas: Tabela para relatórios pós-aula preenchidos pela professora para o aluno.

14. Preferência de Tema (UI)
Status: Implementado via Frontend.
Implementação: A preferência visual (Modo Claro / Modo Escuro) é controlada via localStorage e CSS Variables no navegador do usuário.
Nota de Banco: Como não é um dado de negócio crítico, nenhuma coluna foi adicionada à tabela users para armazenar o tema nesta versão, evitando consumo desnecessário de tráfego de banco.

15. Princípios do Modelo de Dados
Chaves Primárias (PK): Uso universal de UUIDv4, prevenindo ataques de enumeração e facilitando replicação de dados.
Integridade Referencial: Chaves estrangeiras (FK) possuem rastreabilidade clara, evitando registros órfãos.
Segurança em Camada Zero: RLS ativado em 100% das tabelas públicas.
Nomenclatura Padrão: Adoção estrita de snake_case para tabelas e colunas no PostgreSQL, traduzidas para camelCase nas interfaces ORM/Frontend.

16. Relação com Outros Documentos
Este documento deve ser consultado em conjunto com:
DOC-06 (Screen Specifications): Detalha os componentes de UI que preenchem e consomem estas tabelas.
DOC-08 (Architecture): Define a camada de rede, uso de Supabase Client e gerenciamento de estado (ex: React Query/Zustand).
DOC-11 (Business Rules): Documenta as regras matemáticas e lógicas (ex: cálculo exato de pontuação para destravar o unlock_score ou emissão de certificado).
DOCUMENT 07
DATABASE SPECIFICATION
Projeto: Isabela Cardoso English Teacher
Documento: DOC-07
Versão: 2.0
Status: Oficial

1. Objetivo
Este documento descreve a estrutura de dados da plataforma Isabela Cardoso English Teacher.
Seu objetivo é documentar:
entidades principais;
responsabilidades das tabelas;
relacionamentos;
fluxo dos dados;
regras gerais de persistência.
A implementação utiliza Supabase PostgreSQL como banco principal.

2. Arquitetura de Dados
A plataforma utiliza uma separação entre:
Camada de autenticação
Gerenciada pelo Supabase Auth.
Responsável por:
login;
autenticação;
identificação do usuário.
Tabela principal:
auth.users

Camada de aplicação
Responsável pelos dados específicos da plataforma.
Schema principal:
public

O relacionamento principal é:
auth.users

↓

public.users

3. Modelo Geral
A estrutura atual do banco segue o seguinte modelo:
                auth.users
                     |
                     |
                  users
                     |
      --------------------------------
      |              |               |
      |              |               |
 student_trails   lessons        notes
      |
      |
student_step_progress
      |
      |
   certificates
      |
      |
 achievements

4. Entidade: users
Objetivo
Armazenar as informações complementares dos usuários autenticados.
A tabela funciona como extensão da tabela nativa do Supabase Auth.

Responsabilidades
Armazenar dados do usuário dentro da plataforma.
Exemplos:
informações pessoais;
dados de perfil;
configurações futuras.

Relacionamento
auth.users.id

↓

users.id
Cada usuário da aplicação possui um registro correspondente.

Observações
Essa tabela será utilizada como base para controle de perfil e permissões.

5. Entidade: student_trails
Objetivo
Representar a relação entre um aluno e uma trilha de aprendizagem.
Essa entidade controla o progresso geral do aluno dentro de uma trilha.

Responsabilidades
Gerenciar:
trilha associada;
aluno associado;
percentual de progresso;
status de conclusão;
datas importantes.

Relacionamento
users

↓

student_trails

↓

trails

Dados principais
estudante;
trilha;
percentual de progresso;
status de conclusão;
data de início;
data de conclusão.

6. Entidade: student_step_progress
Objetivo
Controlar o progresso individual do aluno em cada etapa de uma trilha.

Responsabilidades
Registrar:
etapa atual;
conclusão;
evolução dentro da trilha.

Relacionamento
student_trails

↓

student_step_progress

↓

steps

Fluxo
Aluno inicia trilha

↓

Trilha registrada

↓

Aluno executa etapas

↓

Progresso atualizado

↓

Trilha concluída

7. Entidade: lessons
Objetivo
Representar as aulas cadastradas na plataforma.

Responsabilidades
Armazenar informações relacionadas aos encontros entre professora e aluno.

Informações principais
usuário relacionado;
data da aula;
informações da aula;
status ou observações.

Relacionamento
users

↓

lessons

8. Entidade: notes
Objetivo
Permitir que o aluno registre anotações pessoais durante seu aprendizado.

Responsabilidades
Armazenar:
proprietário da nota;
conteúdo;
datas de criação;
datas de atualização.

Relacionamento
users

↓

notes

Regra
Cada nota pertence exclusivamente ao usuário que a criou.

9. Entidade: certificates
Objetivo
Registrar certificados obtidos pelo aluno.

Responsabilidades
Armazenar informações relacionadas à conclusão de trilhas ou etapas.

Relacionamento
users

↓

certificates

↓

trails

Fluxo
Aluno conclui trilha

↓

Sistema valida conclusão

↓

Certificado gerado

↓

Registro salvo

10. Entidade: achievements
Objetivo
Representar conquistas obtidas pelos alunos.

Responsabilidades
Armazenar elementos de reconhecimento e evolução.
Exemplos:
conquistas;
badges;
recompensas.

Relacionamento
Relacionada ao progresso do aluno dentro da plataforma.

11. Relacionamento Entre Entidades
Usuário
Um usuário pode possuir:
várias trilhas;
várias aulas;
várias notas;
certificados;
conquistas.

Trilha
Uma trilha pode possuir:
vários alunos;
várias etapas;
progresso individual por aluno.

Progresso
O progresso é dividido em dois níveis:
Geral
Tabela:
student_trails
Representa:
quanto o aluno avançou dentro da trilha.

Específico
Tabela:
student_step_progress
Representa:
quais etapas foram concluídas.

12. Fluxo Principal de Aprendizagem
O fluxo principal da plataforma é:
Usuário

↓

Seleciona uma trilha

↓

student_trails

↓

Executa etapas

↓

student_step_progress

↓

Conclui trilha

↓

certificate

↓

achievement

13. Mapeamento Banco x Interface
Interface
Entidades utilizadas
Login
auth.users
Perfil
users
Dashboard
users, student_trails, lessons, achievements
Trilhas
student_trails
Progresso da trilha
student_step_progress
Aulas
lessons
Notas
notes
Certificados
certificates
Conquistas
achievements


14. Segurança e Controle de Acesso
O controle de acesso será realizado utilizando:
Supabase Auth;
Row Level Security (RLS).

Aluno
Pode acessar:
seus próprios dados;
suas trilhas;
seu progresso;
suas notas;
suas aulas;
seus certificados.

Administrador
Possui permissões administrativas conforme definido no sistema de autorização.

15. Evoluções Planejadas
Algumas informações podem ser adicionadas futuramente conforme necessidade do produto.
Exemplos:
preferências do usuário;
tema escolhido;
configurações pessoais;
histórico de atividades;
métricas de aprendizagem.

16. Preferência de Tema
Status
Planejado.

Objetivo
Permitir sincronizar a preferência visual do usuário entre dispositivos.

Implementação atual
A preferência de tema é controlada pela aplicação utilizando:
localStorage;
ThemeProvider;
CSS Variables.
Nenhuma alteração no banco foi realizada neste momento.

17. Princípios do Modelo de Dados
O banco deve seguir:
separação clara de responsabilidades;
relacionamentos consistentes;
segurança por padrão;
possibilidade de evolução;
evitar duplicação de dados.

18. Relação com Outros Documentos
Este documento deve ser utilizado em conjunto com:
DOC-06 — Screen Specifications
Define quais telas consomem os dados.
DOC-08 — Architecture
Define como a aplicação acessa e organiza os dados.
DOC-11 — Business Rules
Definirá regras de negócio aplicadas sobre essas entidades.


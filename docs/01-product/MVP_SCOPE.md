DOCUMENT 02
MVP SCOPE
Projeto: Isabela Cardoso English Teacher
Documento: DOC-02
Versão: 2.0
Status: Oficial

1. Objetivo
Este documento define o escopo funcional da primeira versão da plataforma (Minimum Viable Product - MVP).
Seu objetivo é estabelecer exatamente quais funcionalidades serão desenvolvidas, quais ficarão para versões futuras e quais critérios determinam a conclusão do MVP.
Este documento é a referência oficial para planejamento, desenvolvimento e priorização das entregas.

2. Objetivos do MVP
A primeira versão da plataforma tem como finalidade validar a experiência principal do produto.
O MVP deve permitir que um aluno consiga realizar toda sua jornada de aprendizagem utilizando apenas a plataforma.
Da mesma forma, deve permitir que a professora administre alunos, conteúdos e aulas sem depender de ferramentas externas.
O MVP não busca entregar todas as funcionalidades imaginadas para a plataforma, mas sim construir uma base sólida, escalável e preparada para evoluções futuras.

3. Perfis de Usuário
O MVP contempla dois perfis de acesso.
Aluno
Usuário responsável por consumir os conteúdos e acompanhar sua evolução.
Permissões principais:
acessar materiais;
acompanhar trilhas;
visualizar aulas;
registrar notas;
conversar com a IA;
atualizar perfil.

Administrador
Responsável pela gestão da plataforma.
Permissões principais:
gerenciar alunos;
cadastrar conteúdos;
organizar trilhas;
administrar aulas;
atualizar materiais;
acompanhar informações gerais.

4. Estrutura Funcional do MVP
O MVP é dividido em nove módulos principais.
Módulo 1 — Autenticação
Objetivo:
Controlar acesso à plataforma.
Inclui:
login;
logout;
recuperação de senha;
gerenciamento de sessão.

Módulo 2 — Dashboard
Objetivo:
Apresentar ao usuário um resumo da sua jornada de aprendizagem.
Inclui:
progresso;
próxima aula;
trilha atual;
materiais recentes;
ações rápidas.

Módulo 3 — Trilhas de Aprendizagem
Objetivo:
Organizar o conteúdo do curso de forma progressiva.
Inclui:
visualização das trilhas;
progresso individual;
etapas;
status de conclusão.

Módulo 4 — Materiais
Objetivo:
Disponibilizar materiais organizados para consulta.
Inclui:
listagem;
categorias;
pesquisa;
visualização;
download (quando permitido).

Módulo 5 — Aulas
Objetivo:
Permitir acompanhamento dos encontros entre professora e aluno.
Inclui:
calendário;
horários;
detalhes da aula;
histórico.

Módulo 6 — Notas
Objetivo:
Centralizar anotações pessoais relacionadas aos estudos.
Inclui:
criação;
edição;
exclusão;
consulta.

Módulo 7 — Assistente IA
Objetivo:
Auxiliar o estudante durante o processo de aprendizagem.
Inclui:
chat;
dúvidas sobre conteúdos;
apoio aos estudos.
O assistente atua como suporte complementar e não substitui a orientação da professora.

Módulo 8 — Perfil
Objetivo:
Permitir gerenciamento das informações pessoais do usuário.
Inclui:
dados pessoais;
foto;
senha;
preferências.

Módulo 9 — Administração
Objetivo:
Disponibilizar todas as ferramentas necessárias para gerenciamento da plataforma.
Inclui:
usuários;
materiais;
trilhas;
aulas;
conteúdos.

5. Navegação Principal
A navegação do MVP é organizada em torno dos módulos principais da plataforma.
Aluno
Fluxo principal:
Login
   ↓
Dashboard
   ↓
Trilhas
Materiais
Aulas
Notas
IA
Perfil
O Dashboard atua como ponto central da experiência.

Administrador
Fluxo principal:
Login
   ↓
Painel Administrativo
   ↓
Usuários
Trilhas
Materiais
Aulas
Conteúdo
Perfil

6. Funcionalidades Incluídas
O MVP contempla as seguintes funcionalidades:
Autenticação
Login
Logout
Recuperação de senha
Controle de sessão

Dashboard
Saudação personalizada
Progresso geral
Próxima aula
Trilha em andamento
Materiais recentes
Atalhos rápidos

Trilhas
Lista de trilhas
Visualização da estrutura
Progresso
Etapas
Status

Materiais
Lista
Busca
Categorias
Visualização
Download quando permitido

Aulas
Agenda
Próxima aula
Histórico

Notas
Criar
Editar
Excluir
Consultar

IA
Conversa
Perguntas
Apoio ao estudo

Perfil
Atualizar informações
Alterar senha
Atualizar foto

Administração
Gerenciar alunos
Gerenciar trilhas
Gerenciar materiais
Gerenciar aulas

7. Funcionalidades Fora do Escopo
As funcionalidades abaixo não fazem parte do MVP.
Comunidade
Interação entre alunos.

Gamificação Avançada
Badges, rankings e desafios complexos.

Marketplace
Venda de cursos e conteúdos.

Notificações Avançadas
Campanhas e automações.

Integrações Futuras
Serviços externos ainda não definidos.

Recursos Premium
Qualquer funcionalidade não essencial para validar o produto.

8. Critérios de Priorização
Toda funcionalidade deve atender pelo menos um dos critérios abaixo:
melhora diretamente a experiência do aluno;
reduz trabalho administrativo;
aumenta a organização da plataforma;
melhora a continuidade dos estudos;
fortalece a proposta de valor do produto.
Caso contrário, deve ser considerada para versões futuras.

9. Dependências Entre Módulos
A ordem lógica de implementação segue as dependências funcionais do sistema.
Autenticação
        ↓
Dashboard
        ↓
Perfil
        ↓
Trilhas
        ↓
Materiais
        ↓
Aulas
        ↓
Notas
        ↓
IA
        ↓
Administração
Cada módulo deve estar operacional antes da implementação do próximo, sempre que houver dependência direta.

10. Critérios de Conclusão do MVP
O MVP será considerado concluído quando:
todos os módulos definidos neste documento estiverem implementados;
todos os fluxos principais puderem ser executados sem interrupções;
a interface estiver alinhada ao Brand Design System;
os componentes reutilizáveis estiverem consolidados;
a navegação estiver consistente entre todas as telas;
os dados persistirem corretamente no backend;
a plataforma estiver pronta para receber novas funcionalidades sem alterações estruturais.

11. Relação com os Demais Documentos
Este documento define o que será entregue.
Os próximos documentos detalharão como essas funcionalidades funcionarão.
A relação entre eles é:
Product Vision
        ↓
MVP Scope
        ↓
Features
        ↓
User Flows
        ↓
Design Guidelines
        ↓
Screen Specifications
O escopo definido neste documento é a referência oficial para todas as etapas seguintes do projeto. Nenhum módulo ou funcionalidade deve ser adicionado ao MVP sem atualização prévia desta especificação.

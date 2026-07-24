
DOCUMENT 09
DEVELOPMENT ROADMAP
Projeto: Isabela Cardoso English Teacher
Documento: DOC-09
Versão: 2.0
Status: Oficial

1. Objetivo
Este documento define a ordem recomendada para o desenvolvimento do MVP.
Seu propósito é organizar a implementação em etapas progressivas, permitindo validações frequentes e reduzindo riscos durante o desenvolvimento.
O roadmap representa uma sequência sugerida e pode ser ajustado conforme a evolução do projeto.

2. Princípios
A implementação deve seguir os seguintes princípios:
desenvolver primeiro a infraestrutura;
priorizar funcionalidades essenciais;
validar cada etapa antes de avançar;
evitar iniciar novas funcionalidades com pendências críticas;
manter o sistema funcional ao final de cada fase.

3. Fase 1 — Fundação
Objetivo: preparar a base técnica do projeto.
Entregas
Configuração do projeto Next.js
Configuração do Supabase
Estrutura de pastas
Configuração do Design System
Componentes base
Layout principal
Sistema de autenticação
Controle de permissões
Resultado esperado
Aplicação estruturada, autenticada e pronta para receber funcionalidades.

4. Fase 2 — Área do Aluno
Objetivo: disponibilizar a experiência principal do aluno.
Entregas
Dashboard
Trilhas
Detalhes da Trilha
Materiais
Visualização de Material
Agenda / Aulas
Perfil
Resultado esperado
O aluno consegue navegar e consumir os conteúdos da plataforma.

5. Fase 3 — Recursos de Apoio
Objetivo: complementar a experiência de aprendizagem.
Entregas
Notas
Assistente IA
Melhorias de navegação
Estados de interface
Ajustes de responsividade
Resultado esperado
A plataforma oferece uma experiência completa de estudo.

6. Fase 4 — Área Administrativa
Objetivo: permitir o gerenciamento do conteúdo da plataforma.
Entregas
Dashboard Administrativo
Usuários
Trilhas
Materiais
Aulas
Perfil Administrativo
Resultado esperado
A administradora consegue gerenciar integralmente os conteúdos do sistema.

7. Fase 5 — Finalização
Objetivo: preparar o MVP para publicação.
Entregas
Revisão geral
Testes
Ajustes de performance
Revisão de acessibilidade
Correções finais
Deploy
Resultado esperado
Primeira versão oficial do MVP publicada.

8. Critérios para Conclusão de uma Fase
Uma fase só deve ser considerada concluída quando:
todas as funcionalidades previstas estiverem implementadas;
os fluxos principais estiverem funcionando;
os componentes seguirem o Design System;
não existirem erros críticos conhecidos.

9. Evolução Pós-MVP
Após a entrega do MVP, novas funcionalidades poderão ser planejadas em ciclos futuros, preservando a arquitetura e os princípios definidos nesta documentação.

DOCUMENT 10
DEVELOPMENT GUIDE
Projeto: Isabela Cardoso English Teacher
Documento: DOC-10
Versão: 2.0
Status: Oficial

1. Objetivo
Este documento reúne as diretrizes gerais para o desenvolvimento da plataforma.
Seu propósito é garantir consistência durante toda a implementação, independentemente do momento ou da pessoa responsável pelo desenvolvimento.

2. Antes de Desenvolver
Antes de iniciar qualquer funcionalidade, verificar:
Product Vision;
MVP Scope;
Information Architecture;
User Flows;
Screen Specifications.
Nenhuma implementação deve contrariar esses documentos.

3. Design System
Toda interface deve utilizar exclusivamente os componentes e tokens definidos no Brand Design System.
Evitar criar componentes duplicados ou estilos específicos para uma única tela.

4. Organização do Código
Cada funcionalidade deve permanecer dentro de sua feature correspondente.
Sempre priorizar:
reutilização;
separação de responsabilidades;
simplicidade.

5. Componentes
Antes de criar um novo componente:
Verificar se já existe um equivalente.
Avaliar se o componente existente pode ser estendido.
Criar um novo componente apenas quando necessário.

6. Estados da Interface
Todas as telas devem prever, quando aplicável:
Loading
Empty
Success
Error
Esses estados devem reutilizar os componentes padrão da aplicação.

7. Formulários
Todos os formulários devem:
validar os campos obrigatórios;
apresentar mensagens claras de erro;
preservar os dados informados quando possível;
confirmar operações concluídas com sucesso.

8. Navegação
Toda navegação deve seguir os fluxos definidos no DOC-04.
Evitar caminhos alternativos que possam gerar inconsistência na experiência.

9. Banco de Dados
Toda alteração estrutural deve ser acompanhada de:
migration correspondente;
atualização da documentação, quando necessário;
revisão das políticas de acesso.

10. Qualidade
Antes de concluir uma funcionalidade, verificar:
layout consistente;
responsividade;
estados de interface;
permissões corretas;
ausência de erros críticos.

11. Controle de Versão
Recomenda-se organizar o desenvolvimento em pequenas entregas, com commits claros e objetivos, facilitando revisões e rastreabilidade.

12. Evolução do Projeto
Sempre que uma funcionalidade alterar o comportamento esperado da plataforma, a documentação correspondente deve ser revisada para permanecer sincronizada com a implementação.

13. Considerações Finais
Esta documentação representa a referência oficial do MVP da plataforma Isabela Cardoso English Teacher.
Novas funcionalidades deverão preservar os princípios definidos ao longo dos documentos:
foco na experiência do aluno;
simplicidade;
consistência visual;
reutilização de componentes;
arquitetura escalável;
manutenção facilitada.

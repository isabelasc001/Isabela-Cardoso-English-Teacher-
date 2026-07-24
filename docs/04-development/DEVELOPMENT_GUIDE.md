DOCUMENT 10
DEVELOPMENT GUIDE
Projeto: Isabela Cardoso English Teacher
Documento: DOC-10
Versão: 2.0
Status: Oficial

1. Objetivo
Este documento estabelece as diretrizes oficiais para o desenvolvimento da plataforma Isabela Cardoso English Teacher.
Seu propósito é garantir que todas as funcionalidades sejam implementadas de forma consistente, respeitando a arquitetura do projeto, o Design System e as decisões técnicas já definidas.
Este guia deve ser utilizado como referência durante todo o ciclo de desenvolvimento.

2. Princípios Gerais
Todo desenvolvimento deve seguir os seguintes princípios:
simplicidade;
consistência;
reutilização;
legibilidade;
escalabilidade;
manutenção facilitada.
Cada nova funcionalidade deve integrar-se naturalmente à estrutura existente, evitando soluções específicas que dificultem a evolução do projeto.

3. Fluxo de Desenvolvimento
Toda nova funcionalidade deve seguir a sequência abaixo.
Analisar documentação

↓

Validar requisitos

↓

Implementar

↓

Testar

↓

Revisar

↓

Publicar
Nenhuma implementação deve iniciar sem a leitura dos documentos relacionados à funcionalidade.

4. Ordem de Consulta da Documentação
Antes de desenvolver uma funcionalidade, consultar os documentos na seguinte ordem:
Product Vision
MVP Scope
Information Architecture
User Flows
Design Guidelines
Screen Specifications
Database Specification
Architecture
Essa sequência garante que a implementação respeite tanto os requisitos funcionais quanto as decisões técnicas.

5. Convenções de Desenvolvimento
Durante a implementação, seguir as seguintes convenções:
utilizar nomes claros e consistentes;
manter funções pequenas e com responsabilidade única;
evitar duplicação de código;
priorizar reutilização de componentes;
organizar arquivos conforme a arquitetura definida.

6. Desenvolvimento de Componentes
Antes de criar um novo componente, verificar:
já existe um componente semelhante?
o componente existente pode ser reutilizado?
a necessidade pode ser atendida por composição?
Somente criar novos componentes quando não houver alternativa reutilizável.

7. Desenvolvimento de Telas
Toda nova tela deve:
seguir o Design System;
respeitar os User Flows;
utilizar os componentes oficiais;
manter a hierarquia visual definida;
prever todos os estados da interface.

8. Formulários
Todos os formulários da plataforma devem:
validar campos obrigatórios;
apresentar mensagens de erro claras;
preservar os dados informados sempre que possível;
confirmar operações concluídas com sucesso.
Os formulários devem manter comportamento consistente em toda a aplicação.

9. Estados da Interface
Sempre que aplicável, as telas devem prever os seguintes estados:
Loading
Empty
Success
Error
Os componentes utilizados para esses estados devem ser reutilizados em toda a plataforma.

10. Tratamento de Erros
Mensagens de erro devem:
explicar o problema de forma simples;
evitar linguagem técnica;
orientar o usuário sobre a próxima ação.
Sempre que possível, oferecer uma opção para tentar novamente.

11. Navegação
A navegação deve seguir exatamente os fluxos definidos no DOC-04 – User Flows.
Evitar caminhos alternativos que criem inconsistência na experiência do usuário.

12. Banco de Dados
Qualquer alteração estrutural deve incluir:
atualização da migration correspondente;
revisão das políticas de acesso (RLS), quando necessário;
atualização da documentação, caso a alteração impacte o modelo de domínio.

13. Segurança
Toda funcionalidade deve respeitar as permissões do perfil autenticado.
A interface deve ocultar ações não permitidas, mas a validação principal deve ser realizada no backend por meio das políticas de segurança.

14. Revisão Antes da Entrega
Antes de concluir uma funcionalidade, validar:
os requisitos do MVP foram atendidos;
a tela segue o Design System;
os componentes foram reutilizados corretamente;
os estados da interface estão implementados;
a responsividade foi verificada;
as permissões foram respeitadas;
não existem erros conhecidos que impeçam o uso da funcionalidade.

15. Documentação
Sempre que uma funcionalidade alterar o comportamento previsto da plataforma, verificar se algum documento precisa ser atualizado.
A documentação deve permanecer alinhada com a implementação para continuar sendo a referência oficial do projeto.

16. Controle de Versão
Recomenda-se manter um histórico claro de evolução do projeto.
Boas práticas:
realizar commits pequenos e objetivos;
utilizar mensagens descritivas;
concluir uma funcionalidade antes de iniciar outra;
evitar alterações não relacionadas no mesmo commit.

17. Evolução do Projeto
O MVP representa a primeira versão da plataforma.
Novas funcionalidades deverão:
preservar a arquitetura existente;
reutilizar componentes sempre que possível;
manter compatibilidade com o Design System;
respeitar os princípios definidos nesta documentação.

18. Critérios de Qualidade
Uma funcionalidade será considerada concluída quando:
atender aos requisitos definidos;
respeitar os fluxos de navegação;
utilizar os componentes oficiais;
apresentar comportamento consistente;
funcionar corretamente em diferentes resoluções;
estar integrada às demais funcionalidades do sistema.

19. Referência da Documentação
Esta documentação deve ser utilizada como fonte oficial durante todo o desenvolvimento.
Em caso de divergência entre implementação e documentação, a documentação deve ser revisada antes da continuidade do desenvolvimento.

20. Considerações Finais
O objetivo desta documentação é fornecer uma base sólida para o desenvolvimento do MVP, garantindo consistência técnica, organização e facilidade de manutenção.
Cada documento possui uma responsabilidade específica e complementa os demais:
DOC-01 define a visão do produto.
DOC-02 estabelece o escopo do MVP.
DOC-03 organiza a arquitetura da informação.
DOC-04 descreve os fluxos do usuário.
DOC-05 orienta a construção das interfaces.
DOC-06 especifica as telas.
DOC-07 documenta o modelo de dados.
DOC-08 define a arquitetura da aplicação.
DOC-09 organiza a implementação em fases.
DOC-10 reúne as diretrizes práticas para o desenvolvimento.
Seguindo esse conjunto de documentos, o projeto mantém uma base consistente para evoluir de forma organizada, preservando a qualidade da implementação e facilitando futuras expansões do produto.

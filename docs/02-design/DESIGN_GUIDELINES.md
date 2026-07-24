DOCUMENT 05
DESIGN GUIDELINES
Projeto: Isabela Cardoso English Teacher
Documento: DOC-05
Versão: 2.0
Status: Oficial

1. Objetivo
Este documento estabelece as diretrizes oficiais para construção das interfaces da plataforma.
Seu propósito é garantir consistência visual, previsibilidade de navegação e reutilização de componentes, respeitando integralmente o Brand Design System e os UI Principles.
Este documento não substitui esses dois documentos.
Ele explica como aplicá-los durante o desenvolvimento.

2. Princípios Gerais
Toda interface da plataforma deve transmitir:
simplicidade;
organização;
acolhimento;
clareza;
profissionalismo.
A interface nunca deve competir com o conteúdo.
O conteúdo é sempre o elemento principal.

3. Filosofia de Interface
Toda tela deve responder imediatamente três perguntas.
Onde estou?
O usuário identifica imediatamente a página atual.

O que posso fazer?
A ação principal é evidente.

O que aconteceu?
Toda ação produz feedback visual.

Se alguma dessas respostas não for clara, a interface deve ser revisada.

4. Estrutura Universal das Telas
Todas as telas seguem a mesma organização.
Header

↓

Título

↓

Descrição

↓

Conteúdo principal

↓

Ações

↓

Conteúdo complementar
Essa estrutura deve permanecer consistente em toda a aplicação.

5. Hierarquia Visual
Cada tela possui apenas:
um título principal;
uma ação primária;
até três ações secundárias.
Elementos menos importantes nunca devem competir visualmente com a ação principal.

6. Header
O cabeçalho identifica o contexto da página.
Pode conter:
título;
descrição;
avatar;
ações contextuais.
Não deve conter excesso de informações.

7. Conteúdo Principal
É a área de maior importância da tela.
Sempre ocupa a maior área disponível.
Todo layout deve direcionar naturalmente o olhar do usuário para essa região.

8. Conteúdo Secundário
Informações complementares devem aparecer após o conteúdo principal.
Exemplos:
histórico;
sugestões;
conteúdos relacionados;
recomendações.
Nunca devem competir visualmente com o objetivo principal da página.

9. Espaçamento
O espaço em branco faz parte da interface.
Ele deve ser utilizado para:
separar grupos;
facilitar leitura;
reduzir carga cognitiva;
destacar informações.
Evitar agrupamentos excessivos de componentes.

10. Organização por Blocos
Toda tela deve ser composta por blocos independentes.
Exemplo:
Header

Card de progresso

Próxima aula

Trilhas

Materiais

Notas
Cada bloco possui um único objetivo.

11. Cards
Os cards representam agrupamentos de informação.
Todo card deve responder:
o que representa?
qual ação permite?
qual informação é mais importante?
Um card nunca deve existir apenas como elemento decorativo.

12. Botões
Cada seção possui apenas um botão primário.
As demais ações utilizam estilos secundários ou ghost.
Hierarquia recomendada:
Primary
Secondary
Outline
Ghost
Text

13. Inputs
Todos os campos de formulário devem conter:
label;
placeholder quando necessário;
mensagem de ajuda quando aplicável;
validação em tempo real;
mensagem de erro próxima ao campo.
Nunca utilizar apenas placeholder como identificação do campo.

14. Feedback
Toda ação relevante gera retorno visual.
Exemplos:
salvar;
excluir;
concluir;
enviar;
atualizar.
O feedback deve ser imediato e compreensível.

15. Estados
Todas as telas devem prever os seguintes estados.
Loading
Conteúdo sendo carregado.
Utilizar Skeletons.

Empty
Nenhum conteúdo disponível.
Apresentar mensagem amigável e ação recomendada.

Success
Operação concluída.
Exibir confirmação discreta.

Error
Falha na operação.
Explicar claramente o problema e permitir nova tentativa.

Offline (Opcional)
Quando aplicável, informar indisponibilidade temporária e orientar o usuário.

16. Navegação
A navegação deve ser previsível.
O usuário nunca deve sentir que "se perdeu".
Toda tela deve deixar claro:
onde está;
como voltar;
qual o próximo passo.

17. Responsividade
A experiência deve permanecer consistente em todos os dispositivos.
Desktop
Maior aproveitamento horizontal.
Uso de grids.

Tablet
Adaptação proporcional dos blocos.

Mobile
Empilhamento vertical.
Priorizar leitura e ações principais.
Nenhuma funcionalidade poderá existir apenas em desktop.

18. Densidade de Informação
Cada tela deve apresentar apenas as informações necessárias para cumprir seu objetivo.
Evitar:
excesso de textos;
excesso de botões;
excesso de indicadores.
Priorizar simplicidade.

19. Tipografia
A tipografia segue exclusivamente o Brand Design System.
Este documento não redefine:
famílias tipográficas;
pesos;
escalas;
tamanhos.
Toda implementação deve reutilizar os tokens oficiais.

20. Cores
As cores seguem exclusivamente o Brand Design System.
Não criar novas cores diretamente na interface.
Toda cor utilizada deve possuir um token correspondente.

21. Ícones
Todos os ícones devem pertencer à mesma biblioteca.
Os ícones têm função de apoio.
Nunca substituem texto.
Devem ser utilizados para:
reforçar significado;
facilitar reconhecimento;
melhorar escaneabilidade.

22. Animações
As animações devem ser discretas.
Objetivos:
indicar transições;
reforçar feedback;
reduzir sensação de espera.
Nunca utilizar animações apenas como decoração.

23. Acessibilidade
Toda interface deve considerar:
contraste adequado;
navegação por teclado;
foco visível;
textos legíveis;
áreas de clique confortáveis;
mensagens compreensíveis.
A acessibilidade faz parte da experiência padrão do produto.

24. Consistência
Componentes iguais devem possuir:
mesma aparência;
mesmo comportamento;
mesmas animações;
mesmos estados.
Não criar variantes sem necessidade.

25. Reutilização
Antes de desenvolver um novo componente, verificar se já existe um equivalente.
Priorizar sempre:
reutilizar;
estender;
criar novo componente.

26. Estrutura Recomendada para Toda Tela
Toda tela da plataforma deverá seguir, sempre que aplicável, a seguinte composição:
Header

↓

Título da Página

↓

Descrição (opcional)

↓

Conteúdo Principal

↓

Ações Primárias

↓

Conteúdo Complementar

↓

Feedback
Essa estrutura será utilizada como referência nas especificações individuais das telas.

27. Checklist de UX
Antes de aprovar qualquer tela, validar:
Existe apenas uma ação principal?
O objetivo da tela é compreendido em menos de cinco segundos?
A hierarquia visual está clara?
Os componentes seguem o Design System?
Os estados estão previstos?
O layout é responsivo?
Existe feedback para todas as ações?
A navegação é previsível?
Os espaçamentos seguem o padrão?
A tela reutiliza componentes existentes?
Caso qualquer resposta seja negativa, a implementação deve ser revisada.

28. Relação com os Próximos Documentos
Este documento define como construir interfaces.
O próximo documento (DOC-06 – Screen Specifications) utilizará essas diretrizes para especificar cada tela da plataforma.
A partir desse ponto, cada tela terá um padrão único de documentação contendo:
objetivo;
usuário;
regras de negócio;
hierarquia visual;
layout;
componentes utilizados;
estados;
comportamento;
responsividade;
ações disponíveis;
critérios de aceite.

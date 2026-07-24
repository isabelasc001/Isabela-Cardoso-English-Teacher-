DOCUMENT 04
USER FLOWS
Projeto: Isabela Cardoso English Teacher
Documento: DOC-04
Versão: 2.0
Status: Oficial

1. Objetivo
Este documento define todos os fluxos de navegação da plataforma.
Seu propósito é descrever, de forma clara e objetiva, como alunos e administradores percorrem a aplicação para realizar suas tarefas.
Os fluxos aqui definidos servem como referência para:
UX Design;
Desenvolvimento Front-end;
Desenvolvimento Back-end;
Testes;
Documentação funcional.
Este documento descreve a jornada, não a aparência das telas.

2. Convenções
Os fluxos seguem a seguinte notação.
Tela

↓

Ação do usuário

↓

Próxima tela
Quando houver decisões ou condições, elas serão descritas abaixo do fluxo.

3. Fluxo Geral da Plataforma
Todo usuário inicia sua jornada da mesma forma.
Abertura da aplicação

↓

Verificação de sessão

↓

Usuário autenticado?
Se sim:
Dashboard correspondente ao perfil
Se não:
Tela de Login

4. Fluxo de Login
Objetivo:
Permitir acesso seguro à plataforma.
Fluxo:
Login

↓

Informar credenciais

↓

Validar dados

↓

Autenticação

↓

Dashboard
Caso as credenciais sejam inválidas:
Mensagem de erro

↓

Nova tentativa

5. Fluxo de Recuperação de Senha
Login

↓

Esqueci minha senha

↓

Informar e-mail

↓

Enviar recuperação

↓

Confirmação
Após redefinir a senha:
Login

↓

Nova autenticação

6. Fluxo Principal do Aluno
Após autenticação:
Dashboard

↓

Escolha da funcionalidade

↓

Execução da tarefa

↓

Retorno ao Dashboard ou continuidade da navegação
O Dashboard é sempre o ponto inicial da experiência.

7. Fluxo das Trilhas
Objetivo:
Permitir acompanhamento da jornada de aprendizagem.
Fluxo:
Dashboard

↓

Trilhas

↓

Selecionar trilha

↓

Visualizar etapas

↓

Selecionar etapa

↓

Abrir conteúdo
Ao concluir uma etapa:
Atualizar progresso

↓

Retornar para trilha

8. Fluxo dos Materiais
Objetivo:
Disponibilizar conteúdos organizados.
Fluxo:
Dashboard

↓

Materiais

↓

Pesquisar ou navegar

↓

Selecionar material

↓

Visualizar conteúdo
Se permitido:
Download
Após finalizar:
Retornar à lista

9. Fluxo das Aulas
Objetivo:
Permitir consulta das aulas.
Fluxo:
Dashboard

↓

Aulas

↓

Selecionar aula

↓

Visualizar detalhes
O usuário pode retornar ao calendário a qualquer momento.

10. Fluxo das Notas
Objetivo:
Registrar informações pessoais.
Fluxo:
Dashboard

↓

Notas

↓

Criar nova nota

↓

Salvar
Ou:
Selecionar nota existente

↓

Editar

↓

Salvar
Ou:
Selecionar nota

↓

Excluir

↓

Confirmação

11. Fluxo do Assistente IA
Objetivo:
Apoiar o aluno durante os estudos.
Fluxo:
Dashboard

↓

Assistente IA

↓

Enviar pergunta

↓

Receber resposta

↓

Continuar conversa
O histórico permanece disponível durante a sessão conforme as regras definidas para o módulo.

12. Fluxo do Perfil
Objetivo:
Gerenciar informações pessoais.
Fluxo:
Dashboard

↓

Perfil

↓

Editar informações

↓

Salvar alterações
Para alteração de senha:
Perfil

↓

Segurança

↓

Nova senha

↓

Confirmação

13. Fluxo de Logout
Perfil

↓

Logout

↓

Encerrar sessão

↓

Login

14. Fluxo Geral do Administrador
Após autenticação:
Dashboard Administrativo

↓

Selecionar módulo

↓

Executar operação

↓

Retornar ao Dashboard Administrativo

15. Fluxo de Gerenciamento de Usuários
Dashboard Administrativo

↓

Usuários

↓

Selecionar usuário

↓

Visualizar informações
Dependendo da ação:
Editar

↓

Salvar
ou
Novo usuário

↓

Preencher dados

↓

Cadastrar

16. Fluxo de Trilhas (Administrador)
Dashboard Administrativo

↓

Trilhas

↓

Nova trilha
Ou:
Selecionar trilha

↓

Editar

↓

Salvar

17. Fluxo de Materiais (Administrador)
Dashboard Administrativo

↓

Materiais

↓

Novo material

↓

Preencher informações

↓

Salvar
Ou:
Selecionar material

↓

Editar

↓

Salvar

18. Fluxo de Aulas (Administrador)
Dashboard Administrativo

↓

Aulas

↓

Selecionar aula

↓

Editar informações

↓

Salvar

19. Fluxos Secundários
Todos os módulos seguem o mesmo padrão operacional.
Listagem

↓

Detalhes

↓

Ação

↓

Confirmação

↓

Retorno à listagem
Esse padrão reduz a carga cognitiva e cria previsibilidade para o usuário.

20. Fluxos de Erro
Sempre que ocorrer uma falha, a plataforma deve seguir o mesmo comportamento.
Fluxo:
Erro

↓

Mensagem clara

↓

Opção de tentar novamente

↓

Retorno seguro ao fluxo anterior
A navegação nunca deve deixar o usuário em um estado sem saída.

21. Fluxos de Sucesso
Após qualquer operação concluída com sucesso:
Executar ação

↓

Feedback visual

↓

Atualizar dados

↓

Permanecer na tela ou retornar ao fluxo anterior
O usuário deve receber confirmação imediata antes de continuar.

22. Estados da Navegação
Todos os módulos devem considerar os seguintes estados:
carregamento;
sucesso;
vazio;
erro;
sem permissão;
indisponível.
Esses estados serão especificados visualmente no documento Screen Specifications.

23. Princípios dos Fluxos
Todos os fluxos da plataforma devem respeitar os seguintes princípios:
Simplicidade
O menor número possível de etapas para concluir uma tarefa.

Clareza
Cada etapa possui um único objetivo.

Consistência
Fluxos semelhantes devem possuir a mesma estrutura.

Feedback
Toda ação gera retorno visual imediato.

Segurança
Nenhuma ação destrutiva ocorre sem confirmação.

Continuidade
Sempre que possível, o usuário retorna ao contexto anterior após concluir uma ação.

24. Relação com os Próximos Documentos
Este documento define como o usuário navega pela plataforma.
Os próximos documentos utilizarão esses fluxos para especificar:
como cada tela deve ser construída;
como os componentes devem se comportar;
como aplicar o Design System em cada interface;
quais estados cada tela deve apresentar.

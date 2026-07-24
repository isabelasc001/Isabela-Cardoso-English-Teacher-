DOCUMENT 12
BUSINESS RULES
Projeto: Isabela Cardoso English Teacher
Documento: DOC-12
Versão: 2.0
Status: Oficial

1. Objetivo
Este documento define as regras de negócio da plataforma Isabela Cardoso English Teacher.
Seu objetivo é registrar comportamentos esperados do sistema, garantindo que:
telas;
banco de dados;
APIs;
funcionalidades;
sigam a mesma lógica durante o desenvolvimento.

2. Princípios
As regras de negócio devem seguir:
consistência dos dados;
segurança das informações;
separação entre aluno e administrador;
experiência simples para o usuário;
evolução gradual do MVP.

3. Usuários e Permissões
BR-001 — Tipos de Usuário
A plataforma possui dois tipos principais de usuários:
Aluno
Administrador

BR-002 — Acesso por Perfil
Cada usuário deve acessar apenas funcionalidades compatíveis com seu perfil.

Aluno
Pode acessar:
suas trilhas;
seu progresso;
suas aulas;
suas notas;
seus certificados;
suas conquistas.

Administrador
Pode gerenciar:
usuários;
trilhas;
conteúdos;
aulas;
informações administrativas.

4. Autenticação
BR-003 — Usuário autenticado
O acesso às áreas internas da plataforma exige autenticação válida.
Fluxo:
Usuário informa credenciais

↓

Supabase Auth valida

↓

Sessão criada

↓

Usuário acessa plataforma

BR-004 — Sessão inválida
Caso a sessão esteja inválida ou expirada:
O usuário deve ser direcionado novamente para autenticação.

5. Perfil do Usuário
BR-005 — Criação de Perfil
Todo usuário autenticado deve possuir um registro correspondente na tabela users.
Relacionamento:
auth.users

↓

users

BR-006 — Atualização de Perfil
O usuário pode atualizar somente informações permitidas do próprio perfil.

6. Trilhas de Aprendizagem
BR-007 — Associação do Aluno à Trilha
Um aluno pode possuir uma ou mais trilhas associadas.
Relacionamento:
users

↓

student_trails

↓

trail

BR-008 — Controle de Progresso
O progresso da trilha deve ser armazenado individualmente para cada aluno.
O progresso não é global.
Exemplo:
Aluno A
Trilha X
80%

Aluno B
Trilha X
30%

BR-009 — Atualização de Progresso
Sempre que uma etapa for concluída, o progresso da trilha deve ser atualizado.
Fluxo:
Conclusão da etapa

↓

Atualiza student_step_progress

↓

Calcula progresso da trilha

↓

Atualiza student_trails

7. Etapas da Trilha
BR-010 — Controle de Conclusão
Cada etapa deve possuir um registro individual de progresso do aluno.
Tabela:
student_step_progress

BR-011 — Etapa Concluída
Uma etapa é considerada concluída quando o registro correspondente indicar conclusão.

8. Certificados
BR-012 — Geração de Certificado
Um certificado pode ser criado somente após o cumprimento dos critérios definidos para conclusão da trilha.
Fluxo:
Aluno completa trilha

↓

Sistema valida conclusão

↓

Certificado registrado

BR-013 — Propriedade do Certificado
Cada certificado pertence exclusivamente ao aluno que o conquistou.

9. Conquistas
BR-014 — Registro de Achievement
Conquistas representam reconhecimento da evolução do aluno.
Podem estar relacionadas a:
conclusão;
progresso;
participação.

BR-015 — Exibição de Conquistas
As conquistas devem aparecer somente para usuários que possuem o registro correspondente.

10. Aulas
BR-016 — Cadastro de Aula
Uma aula deve possuir informações suficientes para identificação:
aluno relacionado;
data;
informações da aula.

BR-017 — Acesso às Aulas
O aluno deve visualizar apenas suas próprias aulas.

BR-018 — Gerenciamento Administrativo
O administrador pode criar e gerenciar aulas conforme suas permissões.

11. Notas
BR-019 — Criação de Nota
Cada aluno pode criar notas pessoais.

BR-020 — Privacidade das Notas
Uma nota pertence exclusivamente ao usuário criador.
Regra:
Aluno A

não pode acessar

Notas do Aluno B

BR-021 — Alteração de Nota
O usuário pode editar somente suas próprias notas.

12. Materiais
BR-022 — Disponibilidade de Material
Materiais disponibilizados na plataforma devem respeitar a estrutura de aprendizagem definida.

BR-023 — Acesso do Aluno
O aluno pode acessar somente conteúdos liberados para sua jornada.

13. Tema da Aplicação
BR-024 — Preferência de Tema
A aplicação permite três opções:
Light;
Dark;
System.

BR-025 — Aplicação do Tema
Caso exista uma preferência definida:
Preferência salva

↓

Aplicar tema escolhido
Caso não exista:
Sem preferência

↓

Utilizar preferência do sistema operacional

BR-026 — Persistência Atual
No MVP inicial, a preferência de tema é armazenada utilizando:
localStorage;
ThemeProvider.
A persistência no banco permanece como evolução futura.

14. Segurança
BR-027 — Validação no Backend
Toda regra de acesso deve ser garantida pelo backend.
A interface não deve ser considerada uma camada de segurança.

BR-028 — Row Level Security
As tabelas devem utilizar políticas RLS para garantir:
isolamento de dados;
proteção de informações pessoais;
controle por usuário.

15. Estados da Aplicação
BR-029 — Tratamento de Dados
Toda funcionalidade que depende de dados externos deve considerar:
carregamento;
sucesso;
ausência de dados;
erro.

16. Consistência de Dados
BR-030 — Integridade dos Relacionamentos
O sistema deve impedir:
registros órfãos;
associação inválida entre usuários e dados;
acesso cruzado de informações.

17. Evolução das Regras
Novas funcionalidades devem:
adicionar regras neste documento;
atualizar documentos relacionados;
manter compatibilidade com o modelo existente.

18. Relação com Outros Documentos
Este documento complementa:
DOC-06 — Screen Specifications
Define onde as regras são aplicadas na interface.

DOC-07 — Database Specification
Define onde as informações são armazenadas.

DOC-11 — API Specification
Define como as operações são executadas.

DOC-08 — Architecture
Define como a aplicação implementa essas regras.

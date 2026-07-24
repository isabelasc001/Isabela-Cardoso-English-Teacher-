DOCUMENT 11
API SPECIFICATION
Projeto: Isabela Cardoso English Teacher
Documento: DOC-11
Versão: 2.0
Status: Oficial

1. Objetivo
Este documento define o padrão de comunicação entre a aplicação frontend e os serviços backend utilizados pela plataforma Isabela Cardoso English Teacher.
O objetivo é documentar:
integração com Supabase;
acesso aos dados;
operações disponíveis;
responsabilidades de cada camada;
padrões para futuras APIs.

2. Arquitetura de Comunicação
A comunicação da aplicação segue o fluxo:
Interface

↓

React Query / Hooks

↓

Services

↓

Supabase Client

↓

Supabase API

↓

PostgreSQL

3. Backend Principal
A plataforma utiliza o Supabase como backend principal.
Responsabilidades:
autenticação;
banco de dados;
armazenamento de arquivos;
autorização;
APIs geradas automaticamente.

4. Serviços Utilizados
Supabase Auth
Responsável por:
cadastro;
login;
logout;
gerenciamento de sessão;
recuperação de senha.

Supabase Database
Responsável pelo acesso às entidades:
users;
student_trails;
student_step_progress;
lessons;
notes;
certificates;
achievements.

Supabase Storage
Responsável pelo armazenamento de:
imagens de perfil;
arquivos de materiais;
anexos futuros.

5. Padrão de Acesso aos Dados
O acesso aos dados deve seguir:
Component

↓

Custom Hook

↓

Service

↓

Supabase Client

↓

Database

Exemplo conceitual:
Dashboard

↓

useStudentProgress()

↓

studentTrailService

↓

Supabase Query

↓

student_trails

6. Autenticação
Login
Objetivo
Autenticar usuário na plataforma.

Entrada
{
 "email": "usuario@email.com",
 "password": "senha"
}

Processo
Usuário informa credenciais

↓

Supabase Auth valida

↓

Sessão criada

↓

Usuário identificado

↓

Perfil carregado

Resultado esperado
Retorno:
sessão;
usuário autenticado;
permissões disponíveis.

7. Sessão do Usuário
A aplicação deve manter:
usuário autenticado;
token de sessão;
perfil carregado.
A sessão deve ser utilizada para validar acesso aos dados.

8. Usuários
Consulta de Perfil
Objetivo
Carregar informações complementares do usuário.

Operação
GET users

Uso
Utilizado por:
perfil;
dashboard;
navegação global.

9. Trilhas
Listagem de Trilhas do Aluno
Objetivo
Carregar trilhas associadas ao aluno.

Operação
GET student_trails

Retorno esperado
Informações:
trilha;
progresso;
status;
datas.

Atualização de Progresso
Objetivo
Atualizar avanço do aluno.

Operação
UPDATE student_trails

Dados atualizados
percentual;
conclusão;
datas.

10. Progresso das Etapas
Consulta
Objetivo
Identificar quais etapas foram concluídas.

Operação
GET student_step_progress

Uso
Utilizado para:
detalhes da trilha;
indicadores de progresso.

Atualização
Objetivo
Registrar conclusão de uma etapa.

Operação
INSERT / UPDATE student_step_progress

11. Aulas
Consulta de Aulas
Objetivo
Carregar agenda do aluno.

Operação
GET lessons

Retorno
Informações:
data;
horário;
detalhes;
aluno relacionado.

12. Notas
Criar Nota
Objetivo
Salvar uma anotação pessoal.

Operação
INSERT notes

Dados enviados
usuário;
conteúdo.

Atualizar Nota
Operação
UPDATE notes

Excluir Nota
Operação
DELETE notes

13. Certificados
Consulta
Objetivo
Consultar certificados disponíveis.

Operação
GET certificates

Uso
Utilizado na área do aluno.

14. Conquistas
Consulta
Objetivo
Exibir conquistas obtidas pelo aluno.

Operação
GET achievements

Uso
Utilizado para:
dashboard;
perfil;
gamificação.

15. Upload de Arquivos
Processo
Usuário envia arquivo

↓

Aplicação valida arquivo

↓

Upload Supabase Storage

↓

URL armazenada

↓

Banco atualizado

16. Controle de Permissões
A aplicação deve respeitar dois níveis:

Frontend
Responsável por:
esconder ações não permitidas;
controlar navegação;
melhorar experiência.

Backend
Responsável por:
garantir segurança;
aplicar RLS;
validar acesso real.

17. Tratamento de Respostas
Todas as operações devem considerar:
Sucesso
Retorno esperado.

Erro
Informações para apresentação ao usuário.
Exemplos:
falha de autenticação;
ausência de permissão;
erro de conexão.

Loading
Durante operações assíncronas.

18. Estados de Dados
As interfaces devem tratar:
Loading

↓

Success

↓

Empty

↓

Error

19. Futuras APIs Customizadas
Caso novas regras de negócio aumentem a complexidade, poderão ser adicionadas APIs próprias.
Exemplos futuros:
geração de certificados;
processamento de IA;
relatórios administrativos;
integrações externas.

20. Integração com Assistente IA
A funcionalidade de IA poderá utilizar uma camada própria futuramente.
Modelo esperado:
Interface Chat

↓

AI Service

↓

Modelo IA

↓

Resposta

↓

Histórico salvo

21. Segurança
Todas as chamadas devem:
validar sessão;
respeitar permissões;
evitar exposição de dados sensíveis;
utilizar variáveis de ambiente.

22. Variáveis de Ambiente
Informações sensíveis nunca devem ser armazenadas diretamente no código.
Exemplos:
SUPABASE_URL

SUPABASE_ANON_KEY

AI_API_KEY

23. Relação com Outros Documentos
Este documento complementa:
DOC-07 — Database Specification
Define quais dados existem.

DOC-08 — Architecture
Define como os dados são consumidos pela aplicação.

DOC-10 — Development Guide
Define padrões de implementação.

Considerações Finais
A arquitetura de API da plataforma foi desenhada para aproveitar a produtividade do Supabase no MVP, mantendo uma estrutura organizada que permite evolução futura.
O uso de serviços, hooks e uma camada de acesso aos dados mantém o frontend desacoplado do backend, permitindo adicionar novas integrações ou regras de negócio sem grandes alterações estruturais.


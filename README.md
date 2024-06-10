# angular_spring
Repositório para versionamento do trabalho da disciplina MATC84 (Lab. de Programação Web) UFBA 2024.1

# Documentação da Aplicação

## Descrição da Aplicação

Esta aplicação é uma API desenvolvida utilizando Angular 17 para o frontend e Java 17 com Spring Boot para o backend e Maven para gerenciador de dependências, com o banco de dados PostgreSQL. A aplicação oferece funcionalidades CRUD (Create, Read, Update, Delete) para diferentes domínios, como Usuário, Colaborador, Fornecedor e Serviço. A API foi projetada para ser segura e escalável, utilizando várias bibliotecas e frameworks populares.

## Componentes da Equipe

- Marcos Vinicius Cruz dos Santos
- Ryan Reis dos Santos
- Rodrigo Cerqueira Santos Moreira
- Eliel Batista Santos
- Calos Eduardo Lima Botelho Vasconcelos
- Israel Almeida Pedreira
- Pedro Amaral Brandão
- Caiou Cerqueira
- Matheus dos Santos Quevedo

## Tecnologias Utilizadas

- **Frontend:** Angular
- **Backend:** Java com Spring Boot
- **Banco de Dados:** PostgreSQL

## Dependências Utilizadas

### Spring Boot
- **Spring JPA:** Utilizado para a interação com o banco de dados de forma ORM (Object-Relational Mapping).
- **Spring Security:** Responsável pela segurança da aplicação, como autenticação e autorização.
- **Spring Web:** Fornece suporte para a criação de aplicações web, incluindo RESTful APIs.
- **Spring DevTools:** Facilita o desenvolvimento com reinicialização automática, entre outras funcionalidades.
- **Lombok:** Biblioteca que reduz o código boilerplate, como getters, setters, e construtores.
- **JavaJWT:** Utilizado para a geração e validação de tokens JWT (JSON Web Tokens) para autenticação.
- **Jakarta Persistence:** API para a persistência de dados.
- **Hibernate Validator:** Implementação do Bean Validation para validar as entidades do JPA.

## Estrutura dos Domínios

### User
- **Atributos:** 
  - ID
  - Nome
  - Email
  - Senha
  - Tipo de Usuário
- **Métodos:** 
  - Create: Cria um novo usuário.
  - Read: Lê os dados de um usuário.
  - Update: Atualiza os dados de um usuário existente.
  - Delete: Exclui um usuário.
Um  User pode ser Admin ou não, apenas o Admin tem autorização para excluir um User.

### Colaborador
- **Atributos:** 
  - ID
  - Nome
  - Data de Nascimento
  - Função
  - NIS
  - CBO
  - Número da CTPS
  - Número do Título de Eleitor
  - Escolaridade
  - Data de Admissão
  - Valor do Vale Transporte
  - Valor do Salário
- **Métodos:** 
  - Create: Cria um novo colaborador.
  - Read: Lê os dados de um colaborador.
  - Update: Atualiza os dados de um colaborador existente.
  - Delete: Exclui um colaborador.

### Fornecedor
- **Atributos:** 
  - Nome Fantasia
  - Razão Social
  - CPF ou CNPJ
  - Inscrição Estadual
  - Tipo
  - Representante
  - Número do Representante
  - Email
  - Email Financeiro
  - Dados Bancários
  - Outros
- **Métodos:** 
  - Create: Cria um novo fornecedor.
  - Read: Lê os dados de um fornecedor.
  - Update: Atualiza os dados de um fornecedor existente.
  - Delete: Exclui um fornecedor.

### Serviço
- **Atributos:** 
  - ID
  - Título
  - Fornecedor
  - Número da Nota
  - Forma de Pagamento
  - Parcelas
  - Vencimento
  - Centro de Custo
  - Status do Pagamento
- **Métodos:** 
  - Create: Cria um novo serviço.
  - Read: Lê os dados de um serviço.
  - Update: Atualiza os dados de um serviço existente.
  - Delete: Exclui um serviço.

## Instruções para Configuração e Execução

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/mvcs/angular_spring.git
   ```

2. **Backend:**
   - Navegue até o diretório do backend:
     ```sh
     cd backend
     ```
   - Instale as dependências e compile o projeto:
     ```sh
     mvn clean install
     ```
   - Execute a aplicação Spring Boot:
     ```sh
     mvn spring-boot:run
     ```

3. **Frontend:**
   - Navegue até o diretório do frontend:
     ```sh
     cd frontend
     ```
   - Instale as dependências:
     ```sh
     npm install
     ```
   - Execute a aplicação Angular:
     ```sh
     ng serve
     ```

4. **Acesse a aplicação:**
   - Backend: `http://localhost:8080`
   - Frontend: `http://localhost:4200`

## Contato

Para mais informações, entre em contato com qualquer membro da equipe ou abra uma issue no repositório.

---

**Nota:** Certifique-se de que todas as variáveis de ambiente e configurações necessárias para conectar-se ao banco de dados PostgreSQL e outras dependências estejam corretamente configuradas.

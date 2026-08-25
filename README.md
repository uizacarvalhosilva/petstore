# 🧪 API Tests — Jest + Axios

Projeto de automação de testes de API utilizando **JavaScript, Jest, Axios e Dotenv**.

O projeto utiliza a **Swagger Petstore API** como ambiente para praticar testes automatizados de API, cobrindo operações de CRUD:

- GET
- POST
- PUT
- DELETE

---

## 🚀 Tecnologias utilizadas

- **Node.js**
- **JavaScript**
- **Jest** — framework de testes
- **Axios** — cliente HTTP para comunicação com a API
- **Dotenv** — gerenciamento de variáveis de ambiente

---

## 📁 Estrutura do projeto

```text
api-tests/
├── services/
│   └── pet.service.js
│
├── tests/
│   └── petstore.test.js
│
├── .env
├── .gitignore
├── jest.config.js
├── package.json
└── package-lock.json
```

### `services/`

Contém as funções responsáveis pelas requisições HTTP para a API.

### `tests/`

Contém os testes automatizados e suas respectivas validações.

---

# ⚙️ Como criar o projeto

## 1. Inicializar o projeto

```bash
npm init -y
```

Esse comando cria o arquivo `package.json`.

---

## 2. Instalar o Axios

```bash
npm install axios
```

O Axios é utilizado para realizar as requisições HTTP para a API.

---

## 3. Instalar o Jest

```bash
npm install --save-dev jest
```

O Jest é utilizado como framework para execução e validação dos testes automatizados.

---

## 4. Instalar o Dotenv

```bash
npm install dotenv
```

O Dotenv permite carregar variáveis de ambiente armazenadas no arquivo `.env`.

Exemplo:

```env
BASE_URL=https://petstore.swagger.io/v2
```

> ⚠️ O arquivo `.env` não deve ser versionado no Git. Ele está configurado no `.gitignore`.

---

# 🧪 Como executar os testes?

Após instalar todas as dependências, execute:

```bash
npm test
```

O Jest irá localizar e executar os arquivos de teste configurados no projeto.

---

# 🔍 Cenários testados

Atualmente o projeto contempla testes relacionados ao recurso **Pet** da API.

### Buscar pets por status

```http
GET /pet/findByStatus
```

Valida:

- Status code `200`
- Retorno de uma lista
- Filtro por status

### Buscar pet por ID

```http
GET /pet/{petId}
```

Valida:

- Status code `200`
- Existência do ID
- Dados do pet retornado

### Cadastrar pet

```http
POST /pet
```

Valida:

- Status code `200`
- ID retornado
- Dados do pet criado

### Atualizar pet

```http
PUT /pet
```

Valida:

- Status code `200`
- ID do pet
- Nome atualizado
- Status atualizado

### Deletar pet

```http
DELETE /pet/{petId}
```

Valida:

- Status code `200`
- Exclusão do pet

---

# 🔄 Fluxo de teste

O projeto também utiliza um fluxo de CRUD:

```text
POST
 ↓
Criar Pet
 ↓
Capturar ID
 ↓
GET
 ↓
Consultar Pet
 ↓
PUT
 ↓
Atualizar Pet
 ↓
DELETE
 ↓
Excluir Pet
```

O ID utilizado nos testes é obtido dinamicamente a partir da resposta da API, evitando a dependência de um ID fixo.

---

# 📌 Objetivo

Este projeto foi desenvolvido com o objetivo de praticar e demonstrar conhecimentos em:

- Automação de testes de API
- JavaScript
- Jest
- Axios
- HTTP methods
- Status codes
- Validação de responses
- Variáveis de ambiente
- Organização de testes e services
- Fluxos de CRUD

---

## ▶️ Próximos passos

- [ ] Adicionar cenários negativos
- [ ] Validar códigos `400` e `404`
- [ ] Adicionar validações de schema
- [ ] Criar testes independentes para cada endpoint
- [ ] Melhorar tratamento de erros
- [ ] Adicionar relatório de testes
- [ ] Configurar execução dos testes em CI/CD

---

## 📄 Licença

Projeto desenvolvido para fins de estudo e portfólio.
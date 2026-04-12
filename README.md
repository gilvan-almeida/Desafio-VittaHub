# VitalPulse 

Este projeto éde busca de clínicas médicas desenvolvida com **Next.js**, que consome uma API local para listagem e filtragem de especialidades.

## 🛠️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## Como rodar a aplicação

Para que o projeto funcione corretamente, você deve rodar a **API** e o **Frontend** simultaneamente em dois terminais diferentes.

### 1. Rodando a API (Servidor de dados)
  Abra um terminal e entre na pasta da API:
    * cd api
    * npm install
    * npm start
Por defeito a API sobe em http://localhost:3001 (confirma em api/package.json).

### 2.Com a API rodando, abra um novo terminal:
  Entre na pasta do frontend:
    * cd front
    * npm install
    * npm run dev
  
### 3.Acesso ao projeto
Após os passos acima, abra o seu navegador e acesse:
👉 http://localhost:3000

### Funcionalidades Implementadas
Listagem Dinâmica: Consumo de dados reais da API local.

Busca Inteligente: Filtro por nome da clínica, localização ou especialidade através da barra de busca.

Categorização por Botões: Filtros rápidos (Fisioterapia, Cardiologia, etc) com feedback visual de estado ativo.

Responsividade: Interface adaptada para dispositivos móveis e desktop conforme as diretrizes do projeto.

# Processo seletivo — Front-end

Bem-vindo(a). Este repositório contém o **desafio prático** da fase de **Front-end**: deves **construir uma aplicação cliente** (site ou SPA) **alimentada pela API** incluída **neste mesmo repositório** (pasta [`api/`](api/)) e que **siga o layout do Figma** que a equipa VittaHub **irá partilhar contigo mais à frente** no processo.

A interface deve ser **responsiva** e incluir uma **versão mobile** cuidada (breakpoints, legibilidade, interação por toque), em linha com o design do Figma.

---

## O teu trabalho neste processo seletivo

| Etapa | O que fazer |
|--------|----------------|
| **1. Ler este README** | Perceber o desafio e onde está a documentação da API. |
| **2. Consultar a documentação da API** | Toda a referência de **rotas**, contratos JSON e exemplos está em [**`api/docs/README.md`**](api/docs/README.md). |
| **3. Subir a API local** | Na pasta [`api/`](api/), instalar dependências e arrancar o servidor (instruções também em [`api/docs/README.md`](api/docs/README.md)). |
| **4. Construir o front** | Implementar a UI **segundo o Figma** (quando disponível), **responsiva**, com **versão mobile** adequada; stack à tua escolha (HTML/CSS/JS, React, Vue, etc.). |
| **5. Integrar com a API** | Consumir **dados reais** da API conforme documentado em [`api/docs/README.md`](api/docs/README.md). |

**Em resumo:** o desafio avalia **UI alimentada por API**, **fidelidade ao Figma** e **comportamento responsivo / mobile** — não é para alterares o código da pasta [`api/`](api/) (é só backend de apoio).

---

## Figma (design)

O **Figma** com o layout oficial **será enviado ou indicado pela equipa** durante o processo seletivo (não está neste repositório). Até lá, podes usar layout provisório; quando tiveres o Figma, **prioriza o design partilhado** (desktop e mobile, se aplicável).

---

## Documentação da API (rotas)

**Toda a documentação das rotas** — endpoints, parâmetros, corpos de resposta, objeto clínica, CORS e imagem — está na pasta **`api/docs/`**:

**[Documentação da API → `api/docs/README.md`](api/docs/README.md)**

Resumo para arrancar a API:

```bash
cd api
npm install
npm start
```

Por defeito a API sobe em **http://localhost:3001** (confirma em [`api/package.json`](api/package.json)).

# Documentação da API (desafio Front-end)

API de apoio na pasta [`api/`](../). Base URL de exemplo: `http://localhost:3001` (host/porta podem mudar; o campo `imagem` nas respostas JSON usa sempre o **mesmo host** do pedido).

**Como subir:** na pasta `api/`, executar `npm install` e `npm start` (porta em [`package.json`](../package.json)).

---

## Rotas

### `GET /health`

| HTTP | Corpo |
|------|--------|
| **200** | `application/json` |

```json
{ "ok": true }
```

---

### `GET /clinicas`

| HTTP | Corpo |
|------|--------|
| **200** | `application/json` — **array** (pode ser `[]` se o filtro não encontrar nada) |

Cada elemento do array tem a forma **objeto clínica** (ver [Objeto clínica](#objeto-clínica-json)).

**Query opcional:** `?q=texto`

- Se omitido ou só espaços: devolve **todas** as clínicas (com `imagem` preenchida).
- Se preenchido: filtro **case insensitive** em `titulo`, `local`, **cada item** de `especializacao` (array), `nivelPreco` e na representação textual de `avaliacao` (ex.: `"4.8"`).

---

### `GET /clinicas/:id`

| HTTP | Corpo |
|------|--------|
| **200** | `application/json` — **um objeto** clínica (não é array) |
| **404** | `application/json` |

Erro:

```json
{ "error": "Clínica não encontrada" }
```

`id` válidos nos dados em [`data/clinicas.json`](../data/clinicas.json): `"1"`, `"2"`, `"3"`, `"4"`.

---

### `GET /media/clinica.png`

| HTTP | Corpo |
|------|--------|
| **200** | ficheiro **PNG** (bytes da imagem) |
| **404** / erro | (se [`data/image.png`](../data/image.png) não existir) |

`Content-Type`: `image/png`. Esta é a mesma URL que aparece no campo **`imagem`** de cada clínica (URL absoluta, ex.: `http://localhost:3001/media/clinica.png`).

A imagem física partilhada por todas as clínicas é [`data/image.png`](../data/image.png).

---

## Objeto clínica (JSON)

Campos que o front recebe em **lista** e em **detalhe**:

| Campo | Tipo | Origem |
|--------|------|--------|
| `id` | `string` | Ficheiro `clinicas.json` |
| `titulo` | `string` | idem |
| `local` | `string` | idem |
| `especializacao` | `string[]` | Lista de especialidades (ex.: `["Cardiologia", "Clínica geral"]`) |
| `nivelPreco` | `string` | idem (ex.: `$`, `$$`, `$$$`) |
| `avaliacao` | `number` | idem (ex.: `4.8`) |
| `imagem` | `string` | **Calculado pela API** — URL absoluta para `/media/clinica.png` no mesmo servidor |

Exemplo (valores concretos dependem do host):

```json
{
  "id": "1",
  "titulo": "Clínica Vitta Saúde — Pinheiros",
  "local": "São Paulo, SP — Pinheiros",
  "especializacao": ["Clínica geral", "Cardiologia", "Medicina preventiva"],
  "nivelPreco": "$$",
  "avaliacao": 4.8,
  "imagem": "http://localhost:3001/media/clinica.png"
}
```

---

## Referência rápida — todas as rotas

| Método | Caminho | Descrição |
|--------|---------|-----------|
| `GET` | `/health` | Saúde da API |
| `GET` | `/clinicas` | Lista de clínicas; query opcional `?q=texto` |
| `GET` | `/clinicas/:id` | Detalhe de uma clínica |
| `GET` | `/media/clinica.png` | Imagem PNG |

---

## Comportamento geral

**CORS:** pedidos de browser a partir de outra origem (ex.: `localhost` noutra porta) são aceites (`Access-Control-Allow-Origin` reflete o pedido).

**Outros:** não existem `POST`/`PUT`/`DELETE` nesta API; não há autenticação; o corpo das respostas JSON é sempre UTF-8.

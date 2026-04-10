import express from "express";
import cors from "cors";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = 3001;

const clinicas = JSON.parse(
  readFileSync(join(__dirname, "..", "data", "clinicas.json"), "utf-8")
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

/** Imagem única em `api/data/image.png` — a mesma para todas as clínicas. */
const imagePath = join(__dirname, "..", "data", "image.png");

app.get("/media/clinica.png", (req, res) => {
  res.type("png");
  res.sendFile(imagePath);
});

function enrichClinica(req, clinica) {
  const base = `${req.protocol}://${req.get("host")}`;
  return {
    ...clinica,
    imagem: `${base}/media/clinica.png`,
  };
}

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/clinicas", (req, res) => {
  const q = typeof req.query.q === "string" ? req.query.q.trim().toLowerCase() : "";
  let list = clinicas;
  if (q) {
    list = clinicas.filter((c) => {
      const avStr = String(c.avaliacao);
      const matchEsp =
        Array.isArray(c.especializacao) &&
        c.especializacao.some((s) => String(s).toLowerCase().includes(q));
      return (
        c.titulo.toLowerCase().includes(q) ||
        c.local.toLowerCase().includes(q) ||
        matchEsp ||
        c.nivelPreco.toLowerCase().includes(q) ||
        avStr.includes(q)
      );
    });
  }
  res.json(list.map((c) => enrichClinica(req, c)));
});

app.get("/clinicas/:id", (req, res) => {
  const clinica = clinicas.find((c) => c.id === req.params.id);
  if (!clinica) {
    return res.status(404).json({ error: "Clínica não encontrada" });
  }
  res.json(enrichClinica(req, clinica));
});

app.listen(PORT, () => {
  console.log(`API desafio-front em http://localhost:${PORT}`);
});

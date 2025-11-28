// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4040;

// // Caminho para a pasta build do React
const buildPath = path.join(__dirname, "out");

// // Servir arquivos estáticos (JS, CSS, imagens, etc.)
app.use(express.static(buildPath));

// // Rota catch-all para retornar o index.html do React
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'out', "index.html");
  res.sendFile(filePath, { headers: { 'Content-Type': 'text/html' } });
});
  
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

// Carregar o arquivo app.js (que já inclui o middleware CORS)
const app = require("./app");

// Mudança para iniciar o servidor em SSL
const fs = require("fs");
const https = require("https");

// Configure HTTPS options
const options = {
  key: fs.readFileSync("src/cert/key.pem"),    // Caminho para o seu arquivo de chave privada
  cert: fs.readFileSync("src/cert/cert.pem"),  // Caminho para o seu arquivo de certificado
};

// dotenv para carregar as variáveis do arquivo .env
require("dotenv").config();

// Porta onde vai rodar o servidor:
const PORT = process.env.PORT || 9001;

// Configurar o servidor HTTPS com o app
const server = https.createServer(options, app);

// Iniciar o servidor HTTPS
server.listen(PORT, () => {
  console.log(`Servidor rodando com HTTPS na porta: ${PORT}`);
});

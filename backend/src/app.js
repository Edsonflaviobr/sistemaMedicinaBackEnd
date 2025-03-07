// Carregar modulos necessarios
const express = require("express");
const cors = require("cors");

// Carregar o arquivo router.js
const router = require("./router");

const app = express();

// Configuração do CORS para permitir somente a origem específica
const corsOptions = {
  origin: "https://sistemamedicinauti.netlify.app/", // Substitua pelo domínio correto
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
};

// Usar CORS com a configuração específica
app.use(cors(corsOptions));

// Usar API para receber em modo json
app.use(express.json());
app.use(router);

module.exports = app;

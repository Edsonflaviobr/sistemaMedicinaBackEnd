const express = require("express");

const router = express.Router();

// Rotas para o Modulo usuarioController e usuarioMiddleware:
const usuarioController = require("./controllers/usuarioController");
const usuarioMiddleware = require("./middlewares/usuarioMiddleware");

// Rotas para o Modulo avaliacaoController e avaliacaoMiddleware:
const avaliacaoController = require("./controllers/avaliacaoController");
const avaliacaoMiddleware = require("./middlewares/avaliacaoMiddleware");


// Listar todos os usuarios:
router.get("/usuario", usuarioController.getAllUsuarios);

// Listar usuario por ID:
router.get("/usuario/:id", usuarioController.getID);

// Cadastrar um novo usuario:
router.post(
  "/usuario",
  usuarioMiddleware.validateFieldNome,
  usuarioMiddleware.validateFieldEmail,
  usuarioMiddleware.validateFieldSenha,
  usuarioMiddleware.validateFieldMatricula,
  usuarioMiddleware.validateFieldRoles,
  usuarioController.createUsuario
);

// Excluir Usuario informando o ID:
router.delete("/usuario/:id", usuarioController.deleteUsuario);

// Alterar Cadastro de usuario informando o ID :
router.put(
  "/usuario/:id",
  usuarioMiddleware.validateFieldNome,
  usuarioMiddleware.validateFieldEmail,
  usuarioMiddleware.validateFieldSenha,
  usuarioMiddleware.validateFieldMatricula,
  usuarioMiddleware.validateFieldRoles,
  usuarioController.updateUsuario
);

// Login de usuario no sistema:
router.post(
  "/usuario/login",
  usuarioMiddleware.validateFieldEmail,
  usuarioMiddleware.validateFieldSenha,
  usuarioController.validaUsuario
);

// Listar todos os Registros da tabela avaliação:
router.get("/avaliacao", avaliacaoController.getALL);

// Listar Avaliação por ID:
router.get("/avaliacao/:id", avaliacaoController.getID);

// Cadastrar uma nova Avaliação:
router.post(
  "/avaliacao",
  avaliacaoMiddleware.validateFieldData,
  avaliacaoMiddleware.validateFieldHora,
  avaliacaoMiddleware.validateFieldNome,
  avaliacaoController.createAvaliacao
);

// Excluir Avaliacao informando o ID:
router.delete("/avaliacao/:id", avaliacaoController.deleteAvaliacao);

// Alterar cadastro de Avaliação:
router.put(
  "/avaliacao/:id",
  avaliacaoMiddleware.validateFieldData,
  avaliacaoMiddleware.validateFieldHora,
  avaliacaoMiddleware.validateFieldNome,
  avaliacaoController.updateAvaliacao
);

module.exports = router;

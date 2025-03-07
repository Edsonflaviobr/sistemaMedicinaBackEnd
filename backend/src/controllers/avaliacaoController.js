const avaliacaoModel = require("../models/avaliacaoModel");
//------------------------------------------------------------------
// Selecionar todos os cadastros:
const getALL = async (_request, response) => {
  const avaliacao = await avaliacaoModel.getALL();

  return response.status(200).json(avaliacao);

  //return response.status(200).json({ messege: "Controller esta Funcionando!" });
};
//------------------------------------------------------------------
// Selecionar Avaliação por ID:
const getID = async (request, response) => {
  const { id } = request.params;
  const getID = await avaliacaoModel.getID(id);

  return response.status(200).json(getID);
};
//------------------------------------------------------------------
// Criar um novo cadastro de Avaliação:
const createAvaliacao = async (request, response) => {
  const createdAvaliacao = await avaliacaoModel.createAvaliacao(request.body);
  return response.status(201).json(createdAvaliacao);

  // Teste de response:
  //return response.status(201).json(request.body);
};
//------------------------------------------------------------------
// Excluir um cadastro de Avaliação:
const deleteAvaliacao = async (request, response) => {
  const { id } = request.params;

  await avaliacaoModel.deleteAvaliacao(id);
  return response.status(204).json();
};
//------------------------------------------------------------------
// Alterar cadastro de Avaliação:
const updateAvaliacao = async (request, response) => {
  const { id } = request.params;

  await avaliacaoModel.updateAvaliacao(id, request.body);
  return response.status(204).json();
};
//------------------------------------------------------------------
module.exports = {
  getID,
  getALL,
  createAvaliacao,
  deleteAvaliacao,
  updateAvaliacao,
};

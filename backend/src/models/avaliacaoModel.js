const connection = require("./connection");
//------------------------------------------------------------------
// Consultar Avaliacao por ID:
const getID = async (id) => {
  const [getAvaliacao] = await connection.execute(
    "SELECT * FROM avaliacao WHERE id = ?",
    [id]
  );
  return getAvaliacao;
};
//------------------------------------------------------------------
// Consulta todas as avaliações cadastradas no Banco de Dados:
const getALL = async () => {
  const [avaliacao] = await connection.execute("SELECT * FROM avaliacao");
  return avaliacao;
};
//------------------------------------------------------------------
// Criar um novo registro de Avaliação:
const createAvaliacao = async (Avaliacao) => {
  const {
    data_select,
    hora_select,
    nome_paciente,
    hd_paciente,
    pi,
    hand,
    peak,
    ims,
    mrc,
  } = Avaliacao;

  const query =
    "INSERT INTO avaliacao (data_select, hora_select, nome_paciente, hd_paciente, pi, hand, peak, ims, mrc) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

  const [createAvaliacao] = await connection.execute(query, [
    data_select,
    hora_select,
    nome_paciente,
    hd_paciente,
    pi,
    hand,
    peak,
    ims,
    mrc,
  ]);
  return { insertId: createAvaliacao.insertId };
};
//------------------------------------------------------------------
// Excluir cadastro de Avaliação:
const deleteAvaliacao = async (id) => {
  const [removedAvaliacao] = await connection.execute(
    "DELETE FROM avaliacao WHERE id = ?",
    [id]
  );
  return removedAvaliacao;
};
//------------------------------------------------------------------
// Alterar dados cadastrados de Avaliação:
const updateAvaliacao = async (id, Avaliacao) => {
  const {
    data_select,
    hora_select,
    nome_paciente,
    hd_paciente,
    pi,
    hand,
    peak,
    ims,
    mrc,
  } = Avaliacao;

  const query =
    "UPDATE avaliacao SET data_select = ?, hora_select = ?, nome_paciente = ?, hd_paciente = ?, pi = ?, hand = ?, peak = ?, ims = ?, mrc = ? WHERE id = ?";

  const [updatedAvaliacao] = await connection.execute(query, [
    data_select,
    hora_select,
    nome_paciente,
    hd_paciente,
    pi,
    hand,
    peak,
    ims,
    mrc,
    id,
  ]);
  return updatedAvaliacao;
};
//------------------------------------------------------------------
module.exports = {
  getID,
  getALL,
  createAvaliacao,
  deleteAvaliacao,
  updateAvaliacao,
};

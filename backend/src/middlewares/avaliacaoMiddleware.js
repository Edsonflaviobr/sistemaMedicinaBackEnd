//------------------------------------------------------------------
// Validar o campo Data do Formulario de Avaliação:

const validateFieldData = (request, response, next) => {
  const { body } = request;

  if (body.data_select === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Data da Avaliação é obrigatório." });
  }

  if (body.data_select === "") {
    return response
      .status(400)
      .json({ message: "O campo Data da Avaliação não pode estar vazio." });
  }

  next();
};
//------------------------------------------------------------------
// Validar o Campo Hora do Formulario de Avaliação:

const validateFieldHora = (request, response, next) => {
  const { body } = request;

  if (body.hora_select === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Hora da Avaliação é obrigatório." });
  }

  if (body.hora_select === "") {
    return response
      .status(400)
      .json({ message: "O campo Hora da Avaliação não pode estar vazio." });
  }

  next();
};
//------------------------------------------------------------------
const validateFieldNome = (request, response, next) => {
  const { body } = request;

  if (body.nome_paciente === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Nome do paciente é obrigatório." });
  }

  if (body.nome_paciente === "") {
    return response
      .status(400)
      .json({ message: "O campo Nome do paciente não pode estar vazio." });
  }

  next();
};



module.exports = {
  validateFieldData,
  validateFieldHora,
  validateFieldNome,
};

const Usuario = require("../models/schemas/user.schema");
const { hashPassword } = require("../middleware/auth");
const ErrorResponse = require("../utils/errorResponse");

exports.generatePassword = async () => {
  const prefix = "NOVA";
  const random = parseInt(Math.random() * 1000).toString();
  const suffix = "0000".slice(0, 4 - random.length) + random;

  const senha = prefix + suffix;

  return senha;
};

exports.newPassword = async (id, transaction) => {
  const usuario = await Usuario.findByPk(id);
  if (usuario) {
    const password = generatePassword();
    await usuario.update(
      { senha: hashPassword(password) },
      {},
      { transaction }
    );
    await usuario.save({ transaction });

    return password;
  } else {
    throw new ErrorResponse(`O usuário com id ${id} não foi encontrado.`, 401);
  }
};

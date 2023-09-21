const mongoose = require("mongoose");
const { isCpf } = require("../../middleware/validateCpf");

const beneficiarySchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "Por favor, informe o nome do beneficiário"],
    maxlength: [100, "O nome do beneficiário não pode exceder 100 caracteres"],
    trim: true,
    uppercase: true,
  },
  data_nascimento: Date,
  relação: {
    type: String,
    required: [true, "Por favor, informe a relação com o segurado"],
    maxlength: [50, "A relação não pode exceder 50 caracteres"],
    trim: true,
    uppercase: true,
  },
  cpf: {
    type: String,
    unique: true,
    required: [true, "Por favor, informe o cpf do beneficiário"],
    validate: {
      custom(value) {
        if (!isCpf(value)) {
          throw new Error("O CPF informado é inválido.");
        }
      },
    },
    maxlength: [11, "O CPF não pode exceder 11 caracteres"],
    trim: true,
  },
  rg: {
    type: String,
    maxlength: [15, "O RG não pode exceder 15 caracteres"],
    trim: true,
    required: [true, "Por favor, informe o RG do beneficiário"],
  },
  status: {
    type: String,
    enum: ["Ativo", "Inativo"],
    default: "Ativo",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: mongoose.Schema.ObjectId,
    ref: "User", // Referência ao modelo de usuário que criou a ocorrência
    default: null, // Ou outro valor padrão apropriado
  },
});

const Beneficiary = mongoose.model("Beneficiary", beneficiarySchema);

module.exports = Beneficiary;

const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: [true, "Por favor, informe o tipo de ocorrência"],
    enum: ["simple", "serious", "moderate", "extremely_serious", "urgent"],
  },
  descricao: {
    type: String,
    required: [true, "Por favor, informe a descrição da ocorrência"],
    maxlength: [255, "A descrição não pode exceder 255 caracteres"],
    trim: true,
  },
  data_ocorrencia: {
    type: Date,
    required: [true, "Por favor, informe a data da ocorrência"],
  },
  local_ocorrencia: {
    cep: {
      type: String,
      maxlength: [15, "O CEP não pode exceder 15 caracteres"],
      trim: true,
      required: [true, "Por favor, informe o cep de usuário"],
    },
    rua: {
      type: String,
      maxlength: [50, "A rua não pode exceder 50 caracteres"],
      trim: true,
      required: [true, "Por favor, informe o endereço de usuário"],
    },
    numero: {
      type: Number,
      required: [true, "Por favor, informe o endereço de usuário"],
    },
    bairro: {
      type: String,
      maxlength: [30, "O bairro não pode exceder 30 caracteres"],
      trim: true,
      required: [true, "Por favor, informe o endereço de usuário"],
    },
    cidade: {
      type: String,
      maxlength: [50, "A cidade não pode exceder 50 caracteres"],
      trim: true,
      required: [true, "Por favor, informe o endereço de usuário"],
    },
    complemento: {
      type: String,
      maxlength: [30, "O complemento não pode exceder 30 caracteres"],
      trim: true,
    },
    estado: {
      type: String,
      maxlength: [2, "O estado deve conter 2 caracteres"],
      trim: true,
      required: [true, "Por favor, informe o endereço de usuário"],
    },
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User", // Referência ao modelo de usuário
    required: true,
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

const Incident = mongoose.model("Incident", incidentSchema);

module.exports = Incident;

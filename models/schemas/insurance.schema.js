const mongoose = require("mongoose");

const insuranceSchema = new mongoose.Schema({
  tipo: {
    type: String,
    enum: [
      "Life",
      "Personal Accident",
      "Judicial Guarantee",
      "Guarantee",
      "Civil Liability",
      "Service Provision",
      "Health",
      "Dental",
      "Telemedicine",
    ],
    required: [true, "Por favor, informe o tipo de seguro"],
  },
  user_segurado: {
    type: mongoose.Schema.ObjectId,
    ref: "User", // Referência ao modelo de usuário
    required: [true, "Por favor, informe o segurado"],
  },
  validade: Date,
  beneficiario: [beneficiarioSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

const Insurance = mongoose.model("Insurance", insuranceSchema);

module.exports = Insurance;

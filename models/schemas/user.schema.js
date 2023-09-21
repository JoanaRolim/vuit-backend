const mongoose = require("mongoose");
const { isCpf } = require("../../middleware/validateCpf");

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "Por favor, informe o nome"],
    maxlength: [100, "O nome não pode exceder 100 caracteres"],
    trim: true,
    uppercase: true,
    required: [true, "Por favor, informe o nome de usuário"],
  },
  tipo: {
    type: String,
    enum: [
      "master",
      "admin",
      "manager",
      "user_company",
      "user_client",
      "salesman",
      "beneficiary",
    ],
    required: [true, "Por favor, informe o tipo de usuário"],
  },
  cpf: {
    type: String,
    unique: true,
    required: function () {
      return this.tipo === "user_client"; // Apenas para usuários do tipo 'user_client'
    },
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
    required: function () {
      return this.tipo === "user_client"; // Apenas para usuários do tipo 'user_client'
    },
  },
  cnpj: {
    type: String,
    unique: true,
    required: function () {
      return this.tipo === "user_company"; // Apenas para usuários do tipo 'user_company'
    },
    maxlength: [14, "O CNPJ não pode exceder 14 caracteres"],
    trim: true,
  },
  telefone: {
    type: String,
    maxlength: [15, "O telefone não pode exceder 15 caracteres"],
    trim: true,
    required: [true, "Por favor, informe o telefone de usuário"],
  },
  email: {
    type: String,
    maxlength: [100, "O email não pode exceder 100 caracteres"],
    trim: true,
    required: [true, "Por favor, informe o email de usuário"],
  },
  endereco: {
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
  data_nascimento: {
    type: Date,
    required: function () {
      return this.tipo !== "user_company"; // Não é necessário para usuários do tipo 'user_company'
    },
  },
  username: { type: String, trim: true, unique: true, required: true },
  password: {
    type: String,
    required: [true, "Por favor, informe uma senha"],
    minlength: 6,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  created_at: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Ativo", "Inativo"],
    default: "Ativo",
  },
});

// Encrypt password using bcrypt
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = mongoose.model("User", UserSchema);

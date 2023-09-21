const ErrorResponse = require("../utils/errorResponse")

const errorHandler = (err, req, res, next) => {
  let error = { ...err }

  error.message = err.message

  // Log to console for dev
  console.log(err.bold)

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = `Recurso não encontrado com o id ${err.value}`
    err = new ErrorResponse(message, 404)
  }
  // console.log(err.name)

  // Mongoose duplicate key
  if (err.code == 11000) {
    const message = "Dado já inserido"
    error = new ErrorResponse(message, 400)
  }

  //Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map(val => val.message)
    error = new ErrorResponse(message, 400)
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error"
  })
}

module.exports = errorHandler

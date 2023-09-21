const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const colors = require("colors")
const errorHandler = require("./middleware/error")
const cors = require('cors')
const connectDB = require("./config/db")

// Load env vars
dotenv.config({ path: "./config/config.env" })

// Connect to database
// connectDB()

// Route files
const about = require("./routes/about.route")
const advantages = require("./routes/advantages.route")
const contacts = require("./routes/contacts.route")
const cred = require("./routes/cred.route")
const impacts = require("./routes/impacts.route")
const numbers = require("./routes/numbers.route")
const partner = require("./routes/partner.route")
const questions = require("./routes/question.route")
const reasons = require("./routes/reasons.route")
const reviews = require("./routes/review.route")
const services = require("./routes/services.route")
const team = require("./routes/team.route")

const app = express()

// Body parser
app.use(express.json())

// Dev logging middleware
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"))
}

// Enable CORS
app.use(cors())

// Set static folder
app.use(express.static(path.join(__dirname, "public")))

// Mount routers
app.use("/api", about)
app.use("/api", advantages)
app.use("/api", contacts)
app.use("/api", cred)
app.use("/api", impacts)
app.use("/api", numbers)
app.use("/api", partner)
app.use("/api", questions)
app.use("/api", reasons)
app.use("/api", services)
app.use("/api", team)
app.use("/api", reviews)

app.use(errorHandler)

const PORT = process.env.PORT || 5001

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.rainbow.bold))

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red)

  // Close server & exit process
  server.close(() => process.exit(1))
})

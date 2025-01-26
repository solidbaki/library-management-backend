const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swaggerConfig");

const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const borrowedBookRoutes = require("./routes/borrowedBookRoutes");

const cors = require("cors");
const app = express();

// Apply CORS middleware before routes
app.use(
  cors({
    origin: "http://localhost:3001", // Allow frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);

app.use(express.json()); // Middleware for parsing JSON requests

// Define routes
app.use("/users", userRoutes);
app.use("/books", bookRoutes);
app.use("/borrowed-books", borrowedBookRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;

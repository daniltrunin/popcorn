const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Для работы с переменными окружения
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

// Middleware
app.use(express.json()); // Для обработки JSON
app.use("/auth", authRoutes); // Роуты для авторизации

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

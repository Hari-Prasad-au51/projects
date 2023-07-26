const express = require("express");
const app = express();
const passport = require('passport');
const passportsetup = require("./passport");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const session = require("express-session");
require('dotenv').config();

// Connect to MongoDB
const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;
const dbUrl = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.mor8vos.mongodb.net/googleauth?retryWrites=true&w=majority`;
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error("MongoDB Connection Error:", error));

// Configure CORS
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE",
  credentials: true
}));

// Set up Express session
app.use(session({
  secret: "secret_key",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));

// Initialize Passport and set up session support
app.use(passport.initialize());
app.use(passport.session());

// Parse JSON and URL-encoded data
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Import and use the routes
const routersuser = require("./routes/routes.js");
app.use("/auth", routersuser);

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

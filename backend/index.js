require("dotenv").config();
const express = require("express");
const app = express();
const json = express.json();
const cors = require("cors");
const morgan = require("morgan");
const port = 3001;

const noteRoutes = require('./routes/note.js');

app.use(json);
app.use(cors())

morgan.token("json", (request, response) => {
  return JSON.stringify(request.body);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :json")
);

// Put middleware before this line
app.use("/api", noteRoutes)

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});

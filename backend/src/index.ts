require("dotenv").config()
import express, { Request, Application } from "express";
import cors from "cors";
import morgan from "morgan";
import noteRoutes from "./routes/note";

const app: Application = express();
const json = express.json();

const port = 3001;

app.use(json);
app.use(cors());

morgan.token("json", (req: Request) => {
  return JSON.stringify(req.body);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :json")
);

// Put middleware before this line
app.use("/api", noteRoutes);

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});

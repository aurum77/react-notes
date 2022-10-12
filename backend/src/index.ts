import dotenv from "dotenv";
import express, { Request, Application } from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import noteRoutes from "./routes/note";

dotenv.config();

const app: Application = express();

const port = 3001;

app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

morgan.token("json", (req: Request) => {
  return JSON.stringify(req.body);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :json")
);

// Put middleware before this line
app.use("/api", noteRoutes);

// Make express play nice with client side routing
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'), function(err: Error) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});

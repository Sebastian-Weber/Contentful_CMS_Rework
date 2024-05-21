import express from "express";
import { data } from "./src/data.js";
import cors from "cors";

const PORT = 8000;

const app = express();
app.use(cors());
app.use(express.json());

//API for getting json data
app.get("/data", (request, response) => {
  response.json(data);
});

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

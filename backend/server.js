import express from "express";
import { data } from "./data.js";
import cors from "cors";

const PORT = 8000;

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://picapi.netlify.app"], // Specify the exact origin
  })
);
app.use(express.json());

//API for getting json data
app.get("/data", (request, response) => {
  response.json(data);
});

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

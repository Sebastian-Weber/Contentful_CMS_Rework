import express from "express";
import { data } from "./src/data.js";

const PORT = 8000;

const app = express();

app.use(express.json());

//API for getting json data
app.get("/data", (request, response) => {
  //read the data
  // fs.readFile("./src/data.json", "utf-8", (error, data) => {
  //   if (error) {
  //     return console.log("Error reading file:", error);
  //   }
  //   console.log(data);
  //   console.log("Finished reading file asynchronously");
  // });
  console.log(data);

  response.json(data);
});

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

import fs, { read } from "fs";
import express from "express";
import cors from "cors";


// ------------------------------------------------
// to create the project for the first time run in terminal:
// npm init
//
// ------------------------------------------------
//to run this project dont foregt to install:
// run npm install
// npm install nodemon
// to start the project run:
// npm run start

// Dont forget in install Postman to test the API
const app = express();
app.use(express.json());
app.use(cors());

const readData = () => {
  try {
    const data = fs.readFileSync("data.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeData = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2), "utf-8");
}


// get request
app.get("/destinations", (req, res) => {
  // console.log("destination");
  const data = readData();
  res.json(data);
});

app.post("/destinations", (req, res) => {
  // console.log("destination");
  const data = readData();
  const newDestination = req.body;
  // if (data.length) {
  //   newDestination.id = data[data.length - 1].id + 1;
  // } else {
  //   newDestination.id = 1;
  // }
  newDestination.id = data.length ? data[data.length - 1].id + 1 : 1;
  data.push(newDestination);
  writeData(data);
  res.status(201).json(newDestination);

  // const index = data.findIndex((item) => item.id === parseInt(req.params.id));
  console.log(req.body);
  

});



app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

import fs from "fs";
import express from "express";

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

const readData = () => {
  try {
    const data = fs.readFileSync("data.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {}
};

// get request
app.get("/destinations", (req, res) => {
  // console.log("destination"); 
  const data = readData();
  res.json(data);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

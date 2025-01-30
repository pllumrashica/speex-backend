import fs from "fs";
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
  } catch (error) {}
};

const writeData = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2), "utf8");
};

// get request
app.get("/destinations", (req, res) => {
  // console.log("destination");
  const data = readData();
  res.json(data);

  const arr = ["dff", "dfdf", "uyi", "tryret"];
  console.log(arr.length);
  console.log(arr[arr.length - 1]);
});

app.post("/destinations", (req, res) => {
  const data = readData();
  const newDestination = req.body;
  newDestination.id = data.length ? data[data.length - 1].id + 1 : 1;
  // if (data.length) {
  //  newDestination.id = data[data.length - 1].id + 1;
  // } else {
  //   newDestination.id = 1
  // }
  console.log(req.body);
  data.push(newDestination);
  writeData(data);
  res.status(201).json(newDestination);

  
});

app.get("/destinations/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const destination = data.find((d) => d.id === id);

  if (destination) {
    res.json(destination);
  } else {
    res.status(404).json({ error: "Destination not found" });
  };
  });

  app.delete("/destinations/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const destination = data.find((d) => d.id === id);
    const filterData = data.filter((d) => d.id !== id);
  
    if (destination) {
      writeData(filterData);
      res.json({message: "Destination deleted"});
    } else {
      res.status(404).json({ error: "Destination not found" });
    }
  });

  app.get("/destinations/country/:country", (req, res) => {
    const data = readData();
    const country = req.params.country.toLowerCase();
    const filtered = data.filter((d) => d.country.toLowerCase() === country);

    if (filtered) {
      res.json(filtered);
    } else {
      res.status(404).json({ error: "Destination not found" });
    }
  });

  app.get("/destinations/best_season/:best_season", (req, res) => {
    const data = readData();
    const best_season = req.params.best_season.toLowerCase();
    const filtered = data.filter((d) => d.best_season.toLowerCase() === best_season);

    if (filtered) {
      res.json(filtered);
    } else {
      res.status(404).json({ error: "Destination not found" });
    }
  });
 // Homework
 // 1. to find countrys that has more attractions 
 // 2. to find the country that find country that has rating the most.
 // 3. to find the total visitors count for all destinations

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

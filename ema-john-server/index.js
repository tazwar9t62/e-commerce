const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 5000;

const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dupvj.mongodb.net/db-name?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("ema-john").collection("products");
  // perform actions on the collection object
  // console.log("database connected");
  app.post("/addProduct", (req, res) => {
    const product = req.body;
    collection.insertOne(product).then((result) => {
      console.log(result);
    });
  });
});

app.get("/", (req, res) => {
  res.send("Hello Tazwar!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require("express");
const app = express();
const cors = require("cors");
const port = 9000;
const MongoClient = require("mongodb").MongoClient;
const mongo = require("mongodb");

const url = "mongodb://localhost:27017";

const dbName = "customers";

app.use(express.json());
app.use(cors());

MongoClient.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, client) {
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection("Contactus");

    app.get("/contactus", async (req, res) => {
      await collection.find({}).toArray(function (err, result) {
        res.json({ data: result, status: 200 });
      });
    });

    app.get("/contactus/:id", async (req, res) => {
      const { id } = req.params;
      await collection.find({ name: id }).toArray(function (err, result) {
        res.json({ data: result, status: 200 });
      });
    });

    app.post("/contactus", async (req, res) => {
      const { name, phonenumber, email, message } = req.body;
      await collection.insertOne(
        {
          name: name,
          phonenumber: phonenumber,
          email: email,
          message: message,
          created: dateTime(),
        },
        function (err, response) {
          if (err) throw err;
          res.json({ status: 201, data: "1 document inserted" });
        }
      );
    });

    app.put("/contactus/:id", async (req, res) => {
      const { id } = req.params;
      const { message } = req.body;
      await collection.updateOne(
        { name: id },
        { $set: { message: message } },
        function (err, result) {
          res.json({
            data: "Updated the Contactus with the message ",
            status: 200,
          });
        }
      );
    });

    app.delete("/contactus/:id", async (req, res) => {
      const { id } = req.params;
      await collection.deleteOne(
        { _id: new mongo.ObjectID(id) },
        function (err, result) {
          if (err) throw err;
          if (result.result.n === 1) {
            res.json({
              data: "Delete the contact success. ",
              status: 200,
            });
          } else {
            res.json({
              data: result.result,
            });
          }
        }
      );
    });
  }
);

app.listen(port, () => {
  console.log("Application is running on port 9000");
});

function dateTime() {
  return new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
}

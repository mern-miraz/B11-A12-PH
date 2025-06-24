const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 3000;
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(cors());

// userName: course-management
// password: RagUv6d3Vok6kN9D

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.BD_PASS}@cluster0.0xf8q6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const courseCollection = client.db("coursesDB").collection("courses");

    app.post("/courses", async (req, res) => {
      const coursesDoc = req.body;
      const result = await courseCollection.insertOne(coursesDoc);
      res.send(result);
    });

    app.get("/courses", async (req, res) => {
      const getCourses = await courseCollection.find().toArray();
      res.send(getCourses);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}

run().catch(console.dir);

// API

app.get("/", (req, res) => {
  res.send("Hello Courses");
});

app.listen(port, () => {
  console.log(`server running on this ${port} port`);
});

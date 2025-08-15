const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

// mongodb username: amitekumersarkar
// p.w :XbRa6cr7mjyREB1T
// middleware
app.use(cors());
app.use(express.json());

// code from mongodb start here


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://amitekumersarkar:<db_password>@cluster0.xqgbxlh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

//mongodb code end here

app.get('/', (req, res) => {
    res.send('simple CRUD is running');
})

app.listen(port, () => {
    console.log(`simple CRUD is running on port:${port}`)
})
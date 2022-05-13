import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// To verfiy is our server is running or not
app.get("/", (req, res) => res.send("Hello From Express"));

app.listen(port, () => console.log(`Server is running on port: http://localhost:${port}`));
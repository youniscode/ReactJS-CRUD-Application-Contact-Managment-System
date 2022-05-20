import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/users.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);

// To verfiy if our server is running or not
app.get("/", (req, res) => res.send("Hello From Express"));
app.all("*", (req, res)=> res.send("That route dosn't exist"))

app.listen(port, () => console.log(`Server is running on port: http://localhost:${port}`));


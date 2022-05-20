import express from "express";

import { getUsers, createUser } from "../controllers/users.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUser);

export default router;
import express from "express";
import { changeJsonToArr, writeToJsonFile } from "../fsFunction/fsFunc.js";
import { getData, uploadScore } from "../controllers/controller.js";

const router = express.Router();

const PATH = "src/data/terrorData.csv";
const PATHJSON = "src/data/playerScores.json";
router.get("/data", getData);

router.post("/score", uploadScore);

export default router;


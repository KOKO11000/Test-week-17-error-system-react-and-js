import { readFileCsv } from "../fsFunction/fsFunc.js";

const PATH = "src/data/terrorData.csv";
export async function getData(_, res) {
  try {
    const readCsv = await readFileCsv(PATH);
    console.log(readCsv.slice(1, 50));
    res.json(readCsv.slice(1, 50));
  } catch (error) {
    res.status(500);
  }
}

export async function uploadScore(req, res) {
  try {
    const { score } = req.body;

    const jsonData = await changeJsonToArr(PATHJSON);
    const playerScoreObj = {
      playerScore: score,
      createAt: new Date(),
    };
    jsonData.push(playerScoreObj);
    await writeToJsonFile(PATHJSON, jsonData);
    return res.json(jsonData);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
}

import csv from "async-csv";
import fs from "fs/promises";

export async function readFileCsv(path) {
  try {
    const csvStr = await fs.readFile(path, "utf-8");
    const convToObj = await csv.parse(csvStr, { columns: true });
    return convToObj;
  } catch (error) {
    console.error(error);
  }
}

export async function changeJsonToArr(path) {
  try {
    const readFile = await fs.readFile(path, "utf-8");
    const getFile = JSON.parse(readFile);
    return getFile;
  } catch (err) {
    console.error(err);
  }
}

export async function writeToJsonFile(path, data) {
  try {
    const convToStr = JSON.stringify(data);
    await fs.writeFile(path, convToStr);

  } catch (error) {
    console.error(error);
  }
}

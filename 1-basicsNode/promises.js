const { readFile, writeFile } = require("fs").promises;

async function start(path1, path2) {
  try {
    const value1 = await readFile(path1, "utf8");
    const value2 = await readFile(path2, "utf8");
    console.log(value1);
    console.log(value2);
    await writeFile("./prueba/texto.txt", "Nuevo texto de prueba");
  } catch (error) {
    console.log(error);
  }
}

start("./prueba/newfile.txt", "./prueba/textio.txt");
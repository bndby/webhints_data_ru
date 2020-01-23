const jdown = require("jdown");
const fs = require("fs");
// const copy = require("copy");

/**
 * Convert md files to json
 */
jdown("src/data", { fileInfo: true })
  .then(content => {
    console.log("Content:", content);
    let result = [];
    for (let i in content)
      result.push({
        name: content[i].name,
        title: content[i].title.toLocaleLowerCase(),
        theme: content[i].theme ? content[i].theme.toLocaleLowerCase() : "",
        lang: content[i].lang.toLocaleLowerCase(),
        keys: content[i].keys ? content[i].keys.toLocaleLowerCase() : "",
        filter:
          content[i].title.toLocaleLowerCase() +
          " " +
          (content[i].theme ? content[i].theme.toLocaleLowerCase() : "") +
          " " +
          content[i].lang.toLocaleLowerCase()
      });

    //
    fs.writeFile("docs/data.json", JSON.stringify(result), er => {
      if (er) {
        console.log("Write file error:", er);
      }
      console.log("Done.");
    });
  })
  .catch(er => console.log("JDown error:", er));

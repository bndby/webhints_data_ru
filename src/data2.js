const markdownJson = require("markdown-json");
const fs = require("fs");

//
const settings = {
  name: "markdown-json",
  cwd: "./",
  src: "src/data/",
  filePattern: "**/*.md",
  ignore: "*(icon|input)*",
  dist: "../docs/output.json",
  server: false,
  port: 3001
};

markdownJson(settings)
  .then(data => {
    // console.log("data:", data.data);
    const content = data;
    // console.log("Content", content);
    let result = [];
    for (let i in content)
      result.push({
        id: content[i].id,
        path: i,
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
    // console.log("Result:", result);

    //
    fs.writeFile("docs/data.json", JSON.stringify(result), er => {
      if (er) {
        console.log("Write file error:", er);
      }
      console.log("Done.");
    });
  })
  .catch(err => {
    console.log("error:", err);
  });

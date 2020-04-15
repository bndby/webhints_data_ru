const markdownJson = require("markdown-json");
const fs = require("fs");
const path = require("path");
const cpy = require("cpy");

//
const settings = {
  name: "markdown-json",
  cwd: "./",
  src: "src/",
  filePattern: "**/*.md",
  ignore: "*(icon|input)*",
  dist: "../docs/output.json",
  server: false,
  port: 3001,
};

markdownJson(settings)
  .then((data) => {
    // console.log("data:", data.data);
    const content = data;
    //console.log("Content", content);
    let result = [];

    //
    for (let i in content) {
      result.push({
        id: content[i].id,
        path: i,
        name: content[i].name,
        nameIndex: content[i].name.toLocaleLowerCase(),
        theme: content[i].theme ? content[i].theme : "",
        themeIndex: content[i].theme
          ? content[i].theme.toLocaleLowerCase()
          : "",
        lang: content[i].lang,
        langIndex: content[i].lang.toLocaleLowerCase(),
        filter:
          content[i].name.toLocaleLowerCase() +
          " " +
          (content[i].theme ? content[i].theme.toLocaleLowerCase() + " " : "") +
          content[i].lang.toLocaleLowerCase(),
        title: content[i].title,
      });
      // console.log(content[i].name);
    }

    // console.log("Result:", result);

    //
    fs.writeFile("docs/data.json", JSON.stringify(result), (er) => {
      if (er) {
        console.log("Write file error:", er);
      }
      console.log("Done.");
    });
  })
  .catch((err) => {
    console.log("error:", err);
  });

// copy md files
(async () => {
  await cpy("**/*.md", "../../docs/data", {
    parents: true,
    cwd: "./src/data",
    rename: (basename) => {
      console.log("basename:", basename);
      return path.basename(basename, ".md") + ".dat";
    },
  });
})();

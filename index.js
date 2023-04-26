const fs = require("fs");

fs.readFile("data.json", "utf8", (err, data) => {
  if (err) throw err;

  const jsonData = JSON.parse(data);

  let html = "\n";
  jsonData.forEach((item) => {
    html += `<div>\n<hr>\n <img src="${item.artwork}">\n Title: ${item.title}\n Artist: ${item.artist}\n <audio controls><source src="${item.url}" type="audio/mpeg"></audio>\n\n</div>\n\n`;
  });

  fs.writeFile("output.html", html, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});

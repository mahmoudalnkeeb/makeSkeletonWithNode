const fs = require("fs");

fs.mkdir("./views", (err) => {
  if (err) {
    console.log(err);
  }
});
fs.appendFile("./views/app.js", ``, (err) => {
  if (err) {
    console.log(err);
  }
});
fs.appendFile("./views/style.css", ``, (err) => {
  if (err) {
    console.log(err);
  }
});
fs.appendFile(
  "./views/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`,
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/test", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`dirname: ${__dirname}`);
  console.log(`color-kobrin app listening on port ${port}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});

const express = require("express");
const QRCode = require("qrcode");
const app = express();
const port = 4000;
const path = require("path");
app.use(express.static("public"));
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));
app.post("/generator", (req, res) => {
  var text = req.body.text;
  if (text) {
    QRCode.toDataURL(text, function (err, code) {
      if (err) {
        res.status(403);
      } else {
        res.json({ image: code });
      }
    });
  } else {
    res.status(403);
  }
});
app.listen(port, () => {
  console.log("server is start at post " + port);
});

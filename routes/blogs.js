const express = require("express");
const router = express.Router();
const { connection } = require("../database/sql");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

var upload = multer({ storage });
// const multipleupload=upload.fields([{name:{data}}])
router.post("/", (req, res) => {
  const para = req.query.data;
  // const file=req.files.data.filename;
  console.log(para);
  if (para !== "") {
    const data2 = {
      para: para,
      // file:file,
    };
    connection.query("INSERT into blogs SET ?", data2, (error, result) => {
      if (error) {
        throw error;
      } else {
        console.log("Data stored in database");
        res.redirect("http://localhost:3000");
      }
    });
  } else {
    console.log("Cannot submit empty blog");
    res.redirect("http://localhost:3000");
  }
});

module.exports = router;

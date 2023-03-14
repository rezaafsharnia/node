const express = require("express");
const users = require("./users.js");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

//
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});
//
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const MelipayamakApi = require("melipayamak-api");

const { Smsir } = require("smsir-js");
/**
 *
 * @param {string} api_key
 * @param {int} line_number
 */
const smsir = new Smsir(
  "lOb7CFVigvBGc9wqhK23thEBLm4d9h64xXYmwscJSrFP87aApcNwvip0fRAK8XsB",
  "30007732004112"
);

//

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post("/sendOtp", (req, res) => {
  const value = Math.floor(Math.random() * 8999 + 1000);
  smsir.SendVerifyCode(`${req.body.phone}`, 182711, [
    { name: "CODE", value: `${value}` },
  ]);
  res.send()
  console.log(req.body);
});

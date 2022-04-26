const express = require("express");
const cors = require("cors");
const { exit } = require("process");
const app = express();
const { anchorDeposit, anchorWithdraw } = require("./helpers");
app.use(cors());
const PORT = process.env?.PORT || 3000;

let lastDate = new Date();
let lastWithdrawDate = new Date();
app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  fetchInterval();
});

async function fetchInterval() {
  // await anchorWithdraw();
  setTimeout(async () => {
    await processLogic();
    fetchInterval();
  }, 86400000);
  // }, 1000);
}

async function processLogic() {
  let currentDate = new Date();
  if (currentDate.getMonth() !== lastDate.getMonth()) {
    // if (currentDate.getMinutes() !== lastDate.getMinutes()) {
    await anchorDeposit();
    lastDate = currentDate;
    console.log("timeInterval: ", lastDate);
  }
  if (currentDate.getFullYear() !== lastWithdrawDate.getFullYear()) {
    await anchorWithdraw();
    lastWithdrawDate = currentDate;
  }
}

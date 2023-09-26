const mongoose = require("mongoose");

const mongo = mongoose;

mongo
  .connect(
    `mongodb+srv://monika:I5N2eJzU9kpEnWFT@monika.ilclynt.mongodb.net/cine`
  )
  .then(() => {
    console.log("Connection DB Mongo - OK");
  })
  .catch((error) => console.log("Connection DB Mongo - Error: ", error));

  module.exports = {
    mongo
  }
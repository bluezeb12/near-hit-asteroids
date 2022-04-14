/*
  Jack Oporto
  Alula junior dev interview task
  https://www.alula.com/
*/

const axios = require("axios");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const targetData = {
  dateStart: "2019-01-01",
  dateEnd: "2019-01-07",
  within: {
    value: 9000000,
    units: "kilometers",
  },
};

//Axios get response
axios
  .get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY:id")
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

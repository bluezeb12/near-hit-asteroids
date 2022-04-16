/*
  Jack Oporto
  Junior dev interview task
*/

//config
require("dotenv").config();
const axios = require("axios");
const url =
  "https://www.neowsapp.com/rest/v1/feed?start_date=2019-01-01&end_date=2019-01-07&detailed=false&api_key=" +
  process.env.NASA_API_KEY;
var total_asteroids = 0;
var returned_asteroids = [];

//Get Nasa data
axios
  .get(url)
  .then((res) => {
    //iterate for 7 days
    for (let i = 0; i < 7; i++) {
      // iterate for total count of asteroids on specific date
      for (
        let j = 0;
        j < res.data.near_earth_objects["2019-01-0" + (i + 1)].length;
        j++
      ) {
        //Add asteroid name to array if miss_distance > 9,000,000
        if (
          res.data.near_earth_objects["2019-01-0" + (i + 1)][j]
            .close_approach_data[0].miss_distance.kilometers < 9000000
        ) {
          returned_asteroids.push(
            res.data.near_earth_objects["2019-01-0" + (i + 1)][j].name
          );
        }
      }
    }

    //print asteroid names
    console.log(returned_asteroids);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });

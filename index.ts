/*
  Jack Oporto
  Junior dev interview task
*/

//config
require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/hello', (req, res, next) => {
  res.status(200);
  res.send('Hello world')
});

app.listen(port, () => {
  console.log(`Web server is running on port `, port);
});

module.exports = app;
// const axios = require("axios");
// const url =
//   "https://www.neowsapp.com/rest/v1/feed?start_date=2019-01-01&end_date=2019-01-07&detailed=false&api_key=" +
//   process.env.NASA_API_KEY;

// //Get Nasa data
// axios
//   .get(url)
//   .then((res) => {
//     var returned_asteroids = [];

//     //Loops through each day
//     //Contents of near_earth_objects is an object so we must get the keys to loop through
//     Object.keys(res.data.near_earth_objects)
//       //We reverse the order of the keys so we can loop through them in chronological order
//       .reverse()
//       .forEach((date) => {
//         //Loops through each asteroid in the day
//         res.data.near_earth_objects[date].forEach((asteroid) => {
//           //Checks if the asteroid was within 9m km
//           if (
//             asteroid.close_approach_data[0].miss_distance.kilometers < 9000000
//           ) {
//             returned_asteroids.push(asteroid.name);
//           }
//         });
//       });
//     // //print asteroid names
//     console.log(returned_asteroids);
//   })
//   .catch((error) => {
//     console.log("An error occurred: ", error);
//   });

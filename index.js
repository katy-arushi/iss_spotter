const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('Error fetch details:', error);
    return;
  } 
  console.log(ip);
});

fetchCoordsByIP("38.117.81.112", (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coordinates:' , coordinates);
});

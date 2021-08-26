const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

const ipAddress = "38.117.81.112"
const coords = { latitude: 43.8762, longitude: -78.9261 }

fetchMyIP((error, ip) => {
  if (error) {
    console.log('Error details:', error);
    return;
  } 
  console.log(ip);
});

fetchCoordsByIP(ipAddress, (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coordinates:' , coordinates);
});

fetchISSFlyOverTimes(coords, (error, issPasses) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned ISS Passes:' , issPasses);
});

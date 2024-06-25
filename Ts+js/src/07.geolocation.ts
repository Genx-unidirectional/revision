function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function getUserLocation() {
  try {
    const location = await getCurrentLocation();
    console.log(location);
  } catch (err) {
    console.error(err);
  }
}

getUserLocation();

console.log("Javscript is connected");

fetch(
  "https://raw.githubusercontent.com/pavloskii/SEDC-GROUP1-PROJECT-SETUP/master/data/smothies.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

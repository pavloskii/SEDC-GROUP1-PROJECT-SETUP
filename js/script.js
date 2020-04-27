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

//За запишување на податоци во firebase
fetch("https://ime-na-proektot.firebaseio.com/students.json", {
  method: "POST",
  body: JSON.stringify({
    name: "Igor",
    age: 28,
  }),
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

//За преземање на податоци од firebase
fetch("https://ime-na-proektot.firebaseio.com/students.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

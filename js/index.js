var allSmoothies = [];

//За да ги земете податоците ќе го повикате URL-то шо го копиравте со помош на FETCH
fetch(
  "https://raw.githubusercontent.com/pavloskii/SEDC-GROUP1-PROJECT-SETUP/master/data/smoothies.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    allSmoothies = data;
    drawSmoothiesInHtml(allSmoothies);
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

//ГИ црта смутињата во хтмлот
function drawSmoothiesInHtml(arrayOfSmoothies) {
  const smoothiesDiv = document.querySelector("#smoothies");
  smoothiesDiv.innerHTML = "";

  arrayOfSmoothies.forEach(function (smoothie) {
    smoothiesDiv.innerHTML += `
      <div class="card">
        <img src="${smoothie.image}" class="card-img-top">
        <div class="card-body">
          <h2>${smoothie.name}</h2>
          <p class="card-text">${smoothie.ingredients}</p>
        </div>
      </div>
    `;
  });
}

//Ги филтрира смутината и ги црта во хтмлот
function searchSmoothiesByIngredient() {
  const searchInputValue = document
    .getElementById("search-input")
    .value.toLowerCase()
    .trim();

  const filteredArrayOfSmoothies = allSmoothies.filter(function (smoothie) {
    return smoothie.ingredients.toLowerCase().indexOf(searchInputValue) >= 0;
  });

  drawSmoothiesInHtml(filteredArrayOfSmoothies);
}

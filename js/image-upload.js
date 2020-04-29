function showSelectedImage(imageUrl, error) {
  //Ako slucajno se pojavi nekoj error mojata funkcija ke go stavi tekstot vo error parametarot
  //inaku ke bide null. Namesto alert moze da go ispisete errorot na drugo mesto
  if (error !== null) {
    alert(error);
  }

  document.getElementById("selected-image").src = imageUrl;
}

function submitForm(e) {
  e.preventDefault();
  //zemete gi podatocite od formata
  const form = e.target;
  const title = form.title.value;
  const description = form.description.value;
  const image = document.getElementById("selected-image").src;

  //stavete gi vo objekt
  const newInstagramPost = {
    title: title,
    description: description,
    image: image,
  };

  console.log(newInstagramPost);

  //zapisete gi podatocite na firebase
  fetch("urlto-od-vasiot-proekt.firebaseio.com/instagram-posts.json", {
    method: "POST",
    body: JSON.stringify(newInstagramPost),
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
}

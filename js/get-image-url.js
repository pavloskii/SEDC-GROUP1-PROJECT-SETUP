function getImageUrl(resizePercent, quality, callbackFunction) {
  const element = event.target;

  if (element.files.length == 0) {
    callbackFunction(null, "Please choose a file");
    return;
  }

  const file = element.files[0];
  if (!["image/jpeg", "image/png"].includes(file["type"])) {
    callbackFunction(null, "Please choose a valid image");
    return;
  }

  resizePercent = resizePercent || 30;
  quality = quality || 0.3;
  const reader = new FileReader();

  reader.onload = function (e) {
    const img = new Image();
    img.src = e.target.result;

    img.onload = function () {
      const canvas = document.createElement("canvas");

      img.width = (img.width * resizePercent) / 100;
      img.height = (img.height * resizePercent) / 100;

      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      const imageURL = canvas.toDataURL("image/jpeg", quality);

      callbackFunction(imageURL, null);
    };
  };

  reader.readAsDataURL(file);
}

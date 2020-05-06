function setHeader() {
  var header = document.querySelector("header");

  header.innerHTML = `
          <nav class="navbar fixed-top navbar-dark bg-primary">
            <a class="navbar-brand" href="index.html">LOGO</a>
            <a class="navbar-brand" href="image-upload.html">Image Upload</a>
            <a class="navbar-brand" href="product-details.html">Product Details</a>
            <a class="navbar-brand" href="products.html">Products</a>
          </nav>
        `;
}

function setFooter() {
  var footer = document.querySelector("footer");

  footer.innerHTML = `
          <nav class="navbar fixed-bottom navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Copyright © SEDC Ohrid</a>
          </nav>
        `;
}

setHeader();
setFooter();

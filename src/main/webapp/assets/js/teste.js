window.onload = function () {
    var fileInput = document.getElementById ('fileInput');
    var fileDisplayArea = document.getElementById ('fileDisplayArea');

    fileInput.addEventListener ('change', function (e) {
      // Coloque o resto do código de demonstração aqui.
    });
}

var file = fileInput.files[0];
var imageType = /image.*/;

if (file.type.match(imageType)) {
  var reader = new FileReader();

  reader.onload = function(e) {
    fileDisplayArea.innerHTML = "";

    // Create a new image.
    var img = new Image();
    // Set the img src property using the data URL.
    img.src = reader.result;

    // Add the image to the page.
    fileDisplayArea.appendChild(img);
  }

  reader.readAsDataURL(file); 
} else {
  fileDisplayArea.innerHTML = "File not supported!";
}
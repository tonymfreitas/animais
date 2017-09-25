angular.module('animais').controller('AnimalController', AnimalController);

function AnimalController($scope, $base64) {

    var files = event.target.files;
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        $scope.imageUrl = reader.result;
    }, false);

    if (files) {
        reader.readAsDataURL(files[0]);
    }

}
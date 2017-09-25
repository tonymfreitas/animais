angular.module('animais').controller('AnimalController', AnimalController);

function AnimalController($scope) {


    $scope.alterarFoto = function() {
        $scope.imgPreview = $scope.amigo.foto;
    }

}
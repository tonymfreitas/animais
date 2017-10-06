angular.module('animais').controller('AnimalCategoriaController', AnimalCategoriaController);

function AnimalCategoriaController($scope) {

    $scope.categorias = [
        {nome: 'bird', url: 'assets/img/animais/bird.png'},
        {nome: 'dog', url: 'assets/img/animais/dog.png'}
    ]

} 
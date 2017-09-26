angular.module('animais').controller('AnimalDetalheController', AnimalDetalheController);

function AnimalDetalheController($scope, bauService) {

    function init() {
        $scope.animal = bauService.get('animal-detalhe');
        bauService.deletar('animal-detalhe');
    }

    init();

}
angular.module('animais').controller('AnimalDetalheController', AnimalDetalheController);

function AnimalDetalheController($scope, bauService, requisicoesService) {

    function init() {
        $scope.animal = bauService.get('animal-detalhe');
        bauService.deletar('animal-detalhe');
        buscarTutorAnimal($scope.animal);
    }

    function buscarTutorAnimal(animal) {
        requisicoesService.buscarTutorAnimal(animal)
            .then(function (response) {
                if (response.data !== null && response.data !== '') {
                    $scope.animal.tutor = response.data;
                }
            }, function (error) {
                console.log(error);
            });
    }

    init();

}
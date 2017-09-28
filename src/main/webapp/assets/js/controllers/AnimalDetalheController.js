angular.module('animais').controller('AnimalDetalheController', AnimalDetalheController);

function AnimalDetalheController($scope, bauService, requisicoesService) {

    function init() {
        $scope.animal = bauService.get('animal-detalhe');
        $scope.logado = bauService.get('logado');
        bauService.deletar('animal-detalhe');
        buscarTutorAnimal($scope.animal);
    }

    function buscarTutorAnimal(animal) {
        requisicoesService.buscarTutorAnimal(animal)
            .then(function (response) {
                if (response.data !== null && response.data !== '') {
                    $scope.animal.tutor = response.data;
                    $scope.animal.comentarios =[];
                    $scope.animal.tutor.telefone = aplicarMascaraTelefone($scope.animal.tutor.telefone);
                }
            }, function (error) {
                console.log(error);
            });
    }

    init();

}
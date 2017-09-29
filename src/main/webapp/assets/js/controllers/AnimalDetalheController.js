angular.module('animais').controller('AnimalDetalheController', AnimalDetalheController);

function AnimalDetalheController($scope, bauService, requisicoesService) {

    function init() {
        $scope.animal = bauService.get('animal-detalhe');
        $scope.logado = bauService.get('logado');
        $scope.comentarioInserido = {};
        bauService.deletar('animal-detalhe');
        buscarTutorAnimal($scope.animal);
        listarComentarios();
    }

    function buscarTutorAnimal(animal) {
        requisicoesService.buscarTutorAnimal(animal)
            .then(function (response) {
                if (response.data !== null && response.data !== '') {
                    $scope.animal.tutor = response.data;
                    $scope.animal.comentarios = [];
                    $scope.animal.tutor.telefone = aplicarMascaraTelefone($scope.animal.tutor.telefone);
                }
            }, function (error) {
                console.log(error);
            });
    }

    init();

    function listarComentarios() {
        requisicoesService.listarComentarios($scope.animal)
            .then(function (response) {
                $scope.animal.comentarios = response.data;
            }, function (error) {
                console.log(error);
            });
    }

    $scope.inserirComentario = function () {
        $scope.comentarioInserido.usuario = {
            "id": bauService.get('id')
        }
        $scope.comentarioInserido.animal = $scope.animal;
        requisicoesService.inserirComentario($scope.comentarioInserido)
            .then(function (response) {
                if (response.data !== null && response.data !== '') {
                    console.log('Comentário inserido com sucesso!');
                }
            }, function (error) {
                console.log(error);
            });
    };

}
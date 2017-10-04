angular.module('animais').controller('AnimalDetalheController', AnimalDetalheController);

function AnimalDetalheController($scope, bauService, requisicoesService, socket) {

    function init() {
        $scope.animal = bauService.get('animal-detalhe');
        $scope.animal.usuario.telefone = aplicarMascaraTelefone($scope.animal.usuario.telefone);
        $scope.logado = bauService.get('logado');
        $scope.comentarioInserido = {};
        bauService.deletar('animal-detalhe');
        $scope.message = 'Comentário enviado';
    }

    init();

    function consultarAnimal() {
        var animal = {
            id: $scope.animal.id
        };
        requisicoesService.consultarAnimal(animal)
            .then(function (response) {
                $scope.animal = response.data;
            }, function (error) {
                console.log(error);
            });
    }

    $scope.inserirComentario = function () {
        $scope.comentarioInserido.usuario = {
            "id": bauService.get('id')
        };
        $scope.comentarioInserido.animal = {
            "id": $scope.animal.id
        };
        $scope.comentarioInserido.dtCadastro = new Date();
        requisicoesService.inserirComentario($scope.comentarioInserido)
            .then(function (response) {
                if (response.data !== null && response.data !== '') {
                    console.log('Comentário inserido com sucesso!');
                    socket.send(null);

                }
            }, function (error) {
                console.log(error);
            });
    };


    // handle received messages
    socket.onmessage = function (event) {
        consultarAnimal();
        $scope.$apply();
    };

    // send a message
    $scope.sendMessage = function () {
        $scope.interactions.push({
            direction: "SENT",
            message: $scope.message
        });
        socket.send($scope.message);
        $scope.message = "";
    };

    $scope.getClass = function(index) {
        return {
            comment: (index % 2) === 1
        };
    };

}
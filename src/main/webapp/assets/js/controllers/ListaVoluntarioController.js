angular.module('animais').controller('ListaVoluntarioController', ListaVoluntarioController);

function ListaVoluntarioController($scope, requisicoesService, feedbackService, bauService, $location) {

    function init() {
        listarVoluntarios();
    }

    init();

    function listarVoluntarios() {
        requisicoesService.listarVoluntarios()
            .then(function (response) {
                if (response.data !== null) {
                    $scope.voluntarios = response.data;
                } else {
                    feedbackService.error('Falha ao listar voluntários');
                }
            }, function (error) {
                console.log(error);
            });
    }

    $scope.consultarVoluntarioExistente = function() {
        var usuario = {
            id: bauService.get('id')
        }
        requisicoesService.consultarVoluntario(usuario)
            .then(function (response) {
                if (response.data !== null && response.data !== '') {
                    feedbackService.info('Este usuário ja é um voluntário!!');
                } else {
                   $location.path('/animais/cadastrar-voluntario');
                }
            }, function (error) {
                console.log(error);
                return false;
            });
    }
    
    $scope.detalharVoluntario = function(voluntario) {
        bauService.set('voluntario-detalhe', voluntario);
        $location.path('/animais/voluntario/detalhe');
    };

}
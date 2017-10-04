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
    
    $scope.detalharVoluntario = function(voluntario) {
        bauService.set('voluntario-detalhe', voluntario);
        $location.path('/animais/voluntario/detalhe');
    };

}
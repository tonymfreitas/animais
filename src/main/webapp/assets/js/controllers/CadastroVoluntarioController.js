angular.module('animais').controller('CadastroVoluntarioController', CadastroVoluntarioController);

function CadastroVoluntarioController($scope, bauService, requisicoesService) {

    function carregarInformacoesUsuario() {
        var id = bauService.get('id');
        var usuario = {
            'id': id
        }

        requisicoesService.listarInformacoesUsuario(usuario)
            .then(function (response) {
                console.log(response.data);
            }, function (error) {
                console.log(error);
            });
    }


    function init() {
        $scope.animais = [
            'Cachorro',
            'Gato'
        ]
        carregarInformacoesUsuario();
    }

    init();



}
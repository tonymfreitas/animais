angular.module('animais').controller('CadastroVoluntarioController', CadastroVoluntarioController);

function CadastroVoluntarioController($scope, growl, bauService, requisicoesService, $location) {

    function carregarInformacoesUsuario() {
        var id = bauService.get('id');
        var usuario = {
            'id': id
        }

        requisicoesService.listarInformacoesUsuario(usuario)
            .then(function (response) {
                if (response.data !== null && response.data !== '') {
                    $scope.usuario = response.data;
                    aplicarMascaras();
                } else {
                    growl.error('Usuário não encontrado');
                }
            }, function (error) {
                console.log(error);
            });
    }

    function aplicarMascaras() {
        MascaraCPF($scope.usuario.cpf);
        MascaraTelefone($scope.usuario.telefone);
    }


    function init() {
        if (localStorage.getItem('token')) {
            $scope.animais = [
                'Cachorro',
                'Gato'
            ]
            carregarInformacoesUsuario();
        } else {
            $location.path('/animais/login');
        }
    }

    init();



}
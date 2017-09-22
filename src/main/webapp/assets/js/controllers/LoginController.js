angular.module('animais').controller('LoginController', LoginController);

function LoginController($scope, requisicoesService, bauService, growl, $location) {

    function init() {
        $scope.usuario = {
            usuario: '',
            senha: ''
        }
    }

    init();

    $scope.efetuarLogin = function () {
        if(!verificarAlgumCampoVazio()) {
            logar();
        } 
    }

    function logar() {
        requisicoesService.autenticarUsuario($scope.usuario)
            .then(function (response) {
                if (response.data === null || response.data === '') {
                    growl.error('Usuário ou senha inválidos!');
                } else {
                    $scope.$emit('usuarioLogado', { logado: true, usuario: response.data.usuario, id: response.data.id });
                    localStorage.setItem('token', response.data.senha);
                    mudarRota();
                }
            }, function (error) {
                console.log(error);
            });
    }

    function mudarRota() {
        var voluntario = bauService.get('cadastrar-voluntario');
        if(voluntario) {
            $location.path('/animais/cadastrar-voluntario');
        } else {
            $location.path('/animais');
        }
    }

    function verificarAlgumCampoVazio() {
        var userEmpty = $scope.usuario.usuario === '';
        var passwordEmpty = $scope.usuario.senha === '';
        if(userEmpty) {
            growl.error('O campo usuário é obrigatório');
        } else if(passwordEmpty) {
            growl.error('O campo senha é obrigatório');
        }
        return userEmpty || passwordEmpty;
    }

}

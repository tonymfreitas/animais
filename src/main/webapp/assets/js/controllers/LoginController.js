angular.module('animais').controller('LoginController', LoginController);

function LoginController($scope, requisicoesService, growl, $location) {

    $scope.efetuarLogin = function () {
        requisicoesService.autenticarUsuario($scope.usuario)
            .then(function (response) {
                if (response.data === null || response.data === '') {
                    growl.error('Usuário ou senha inválidos!');
                } else {
                    $scope.$emit('usuarioLogado', { logado: true, usuario: response.data.usuario, id: response.data.id });
                    localStorage.setItem('token', response.data.senha);
                    $location.path('#!/animais');
                }
            }, function (error) {
                console.log(error);
            });
    }

}

angular.module('animais').controller('IndexController', IndexController);

function IndexController($scope, feedbackService, bauService, logoutService, requisicoesService, $location) {

    function init() {
        $scope.logado = false;
        $scope.nomeUsuario = '';
    }

    init();


    $scope.$on('usuarioLogado', function (event, args) {
        bauService.set('logado', args.logado);
        bauService.set('usuarioLogado', args.usuario);
        bauService.set('id', args.id);
        $scope.logado = args.logado;
        if (args !== undefined && args !== null && args.logado) {
            $scope.nomeUsuario = args.usuario;
        }
    });

    function deslogarView() {
        $scope.logado = false;
        $scope.nomeUsuario = '';
        bauService.deletar('cadastrar-voluntario');
    }

    $scope.efetuarLogout = function () {
        logoutService.logout();
        deslogarView();
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

}
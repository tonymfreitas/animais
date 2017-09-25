angular.module('animais').controller('IndexController', IndexController);

function IndexController($scope, bauService, logoutService) {
    
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

}
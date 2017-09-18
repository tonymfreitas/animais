angular.module('animais').controller('IndexController', IndexController);

function IndexController($scope, bauService) {

    function init() {
        $scope.logado = false;
        $scope.nomeUsuario = '';
    }


    $scope.$on('usuarioLogado', function (event, args) {
        // growl.success('Bem vindo ' + args.usuario + '!');
        bauService.set('logado', args.logado);
        bauService.set('usuarioLogado', args.usuario);
        bauService.set('id', args.id);
        $scope.logado = args.logado;
        if (args !== undefined && args !== null && args.logado) {
            $scope.nomeUsuario = args.usuario;
        }
    });


}
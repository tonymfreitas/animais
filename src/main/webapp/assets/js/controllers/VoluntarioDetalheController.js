angular.module('animais').controller('VoluntarioDetalheController', VoluntarioDetalheController);

function VoluntarioDetalheController($scope, bauService) {

    function init() {
        $scope.voluntario = bauService.get('voluntario-detalhe');
    }

    init();

}
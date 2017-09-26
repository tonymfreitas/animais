angular.module('animais').controller('PrincipalController', PrincipalController);

function PrincipalController($scope, requisicoesService, bauService, $location) {

    $scope.fotos = [
        { nome: 'Gorila', url: 'http://www.fundosanimais.com/Imagens/gorila.jpg' },
        { nome: 'Cão', url: 'http://www.fundosanimais.com/Imagens/caes.jpg' },
        { nome: 'Cavalo', url: 'http://www.fundosanimais.com/Imagens/cavalos.jpg' },
        { nome: 'Coelho', url: 'http://www.fundosanimais.com/Imagens/coelho.jpg' },
        { nome: 'Elefante', url: 'http://www.fundosanimais.com/Imagens/elefantes-castanhos.jpg' },
        { nome: 'Tigre', url: 'http://www.fundosanimais.com/Imagens/tigre.jpg' }
    ];

    $scope.logoParceiros = [
        'assets/img/logo-abpa.png',
        'assets/img/logo-apa.png',
        'assets/img/logo-ibama.png',
        'assets/img/logo-prefeitura.png',
        'assets/img/logo-uipa.png',
        'assets/img/logo-tvanhanguera.png',
        'assets/img/logo-tvcultura.png'
    ]

    function init() {
        buscarAnimais();
    }

    init();

    $scope.enviarAnimalDetalhe = function(animal) {
        bauService.set('animal-detalhe', animal);
        $location.path('/animais/detalhes');
    }

    function buscarAnimais() {
        requisicoesService.listarTodosAnimais()
            .then(function (response) {
                if (response.data !== null && response.data !== '') {
                    $scope.animais = response.data;
                } else {
                    console.log('Nenhum animal cadastrado');
                }
            }, function (error) {
                console.log(error);
            });
    }




}
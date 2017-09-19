angular.module('animais').controller('PrincipalController', PrincipalController);

function PrincipalController($scope) {

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


}
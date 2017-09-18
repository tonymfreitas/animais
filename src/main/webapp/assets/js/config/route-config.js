angular.module('animais').config(configurarRotas);

function configurarRotas($routeProvider) {
    
    $routeProvider

    .when('/animais', {
        templateUrl: '/assets/views/principal.html',
        controller: 'PrincipalController'
    })

    .when('/animais/cadastrar', {
        templateUrl: 'assets/views/cadastro-animal.html',
        controller: 'CadastroAnimalController'
    })
    
    .when('/animais/login', {
        templateUrl: 'assets/views/login.html',
        controller: 'LoginController'
    })

    .when('/animais/cadastrar-usuario',{
        templateUrl: 'assets/views/cadastro-usuario.html',
        controller: 'UsuarioController'
    })
    ;

    $routeProvider.otherwise({redirectTo: '/animais'});

}
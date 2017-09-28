angular.module('animais')
.config(interceptor)
.config(configurarRotas);

function configurarRotas($routeProvider) {
    
    $routeProvider

    .when('/animais', {
        templateUrl: '/assets/views/principal.html',
        controller: 'PrincipalController'
    })

    .when('/animais/cadastrar', {
        templateUrl: 'assets/views/animais/cadastro.html',
        controller: 'AnimalController',
        authorize: true
    })
    
    .when('/animais/detalhes', {
        templateUrl: 'assets/views/animais/detalhes.html',
        controller: 'AnimalDetalheController'
    })

    .when('/animais/login', {
        templateUrl: 'assets/views/login.html',
        controller: 'LoginController'
    })

    .when('/animais/cadastrar-usuario',{
        templateUrl: 'assets/views/cadastro-usuario.html',
        controller: 'UsuarioController'
    })

    .when('/animais/cadastrar-voluntario', {
        templateUrl: 'assets/views/cadastro-voluntario.html',
        controller: 'VoluntarioController',
        authorize: true
    })
    ;

    $routeProvider.otherwise({redirectTo: '/animais'});

}

function interceptor($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
}
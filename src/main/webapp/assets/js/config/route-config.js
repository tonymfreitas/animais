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

        .when('/animais/categorias', {
            templateUrl: 'assets/views/animais/categorias.html',
            controller: 'AnimalCategoriaController'
        })

        .when('/animais/login', {
            templateUrl: 'assets/views/login.html',
            controller: 'LoginController'
        })

        .when('/animais/cadastrar-usuario', {
            templateUrl: 'assets/views/usuario/cadastro.html',
            controller: 'UsuarioController'
        })

        .when('/animais/cadastrar-voluntario', {
            templateUrl: 'assets/views/voluntario/cadastro.html',
            controller: 'VoluntarioController',
            authorize: true
        })

        .when('/animais/voluntarios', {
            templateUrl: 'assets/views/voluntario/voluntarios.html',
            controller: 'ListaVoluntarioController'
        })

        .when('/animais/voluntario/detalhe', {
            templateUrl: 'assets/views/voluntario/detalhe.html',
            controller: 'VoluntarioDetalheController'
        })

        ;

    $routeProvider.otherwise({ redirectTo: '/animais' });

}

function interceptor($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
}
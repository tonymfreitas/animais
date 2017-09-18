(function() {
    angular.module('animais').factory('requisicoesService', requisicoesService);

    function requisicoesService($http, urlConfig) {

        var _novoUsuario = function(usuario) {
            return $http.post(urlConfig.baseUrl + '/usuario/novo', usuario);
        };

        return {
            novoUsuario: _novoUsuario
        };  
    }
})();
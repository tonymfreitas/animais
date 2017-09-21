(function() {
    angular.module('animais').factory('requisicoesService', requisicoesService);

    function requisicoesService($http, urlConfig, $q) {

        var _novoUsuario = function(usuario) {
            return $http.post(urlConfig.baseUrl + '/usuario/novo', usuario);
        };

        var _autenticarUsuario = function(usuario) {
            return $http.post(urlConfig.baseUrl + '/usuario/autenticar', usuario);
        }

        var _listarInformacoesUsuario = function(usuario) {
            return $http.post(urlConfig.baseUrl + '/usuario/listar-informacoes', usuario);
        }

        return {
            novoUsuario: _novoUsuario,
            autenticarUsuario: _autenticarUsuario,
            listarInformacoesUsuario: _listarInformacoesUsuario
        };  
    }
})();
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

        var _novoVoluntario = function(voluntario) {
            return $http.post(urlConfig.baseUrl + '/voluntario/novo', voluntario);
        }
        
        var _consultarVoluntario = function(usuario) {
            return $http.post(urlConfig.baseUrl + '/voluntario/consultar', usuario);
        }

        var _novoAnimal = function(animal, config) {
            return $http.post(urlConfig.baseUrl + '/animal/novo', animal, config);
        }

        var _listarTodosAnimais = function() {
            return $http.get(urlConfig.baseUrl + '/animal/listar-todos');
        }

        var _buscarTutorAnimal = function(animal) {
            return $http.post(urlConfig.baseUrl + '/animal/buscar-tutor', animal);
        }

        var _inserirComentario = function(comentario) {
            return $http.post(urlConfig.baseUrl + '/comentario/inserir-comentario', comentario);
        }

        var _listarComentarios = function(animal) {
            return $http.post(urlConfig.baseUrl + '/comentario/listar-comentarios', animal);
        }

        return {
            novoUsuario: _novoUsuario,
            autenticarUsuario: _autenticarUsuario,
            listarInformacoesUsuario: _listarInformacoesUsuario,
            novoVoluntario: _novoVoluntario,
            consultarVoluntario: _consultarVoluntario,
            novoAnimal: _novoAnimal,
            listarTodosAnimais: _listarTodosAnimais,
            buscarTutorAnimal:  _buscarTutorAnimal,
            inserirComentario: _inserirComentario,
            listarComentarios: _listarComentarios
        };  
    }
})();
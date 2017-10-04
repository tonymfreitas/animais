angular.module('animais').controller('VoluntarioController', VoluntarioController);

function VoluntarioController($scope, feedbackService, bauService, requisicoesService, $location, routeService) {

    function carregarInformacoesUsuario() {
        var id = bauService.get('id');
        var usuario = {
            'id': id
        }

        requisicoesService.listarInformacoesUsuario(usuario)
            .then(function (response) {
                if (response.data !== null && response.data !== '') {
                    $scope.usuario = response.data;
                    aplicarMascaras();
                } else {
                    feedbackService.error('Usuário não encontrado');
                }
            }, function (error) {
                console.log(error);
            });
    }

    function aplicarMascaras() {
        $scope.usuario.cpf = aplicarMascaraCpf($scope.usuario.cpf);
        $scope.usuario.telefone = aplicarMascaraTelefone($scope.usuario.telefone);
    }


    function init() {
        if (localStorage.getItem('token')) {
            $scope.animais = [
                'Cachorro',
                'Gato',
                'Ramister',
                'Coelho',
                'Papagaio',
                'Outros'
            ]
            carregarInformacoesUsuario();
            $scope.voluntario = {
                interesse: '',
                categorias: []
            };
        } else {
            bauService.set('cadastrar-voluntario', true);
            $location.path('/animais/login');
        }
    }

    init();

    $scope.cadastrarVoluntario = function () {
        consultarVoluntarioExistente($scope.usuario);
    }

    function novoVoluntario() {
        $scope.voluntario.usuario = $scope.usuario;
        requisicoesService.novoVoluntario($scope.voluntario)
            .then(function (response) {
                if (response.data !== null && response.data !== '') {
                    feedbackService.success('Parabens ' + $scope.usuario.usuario + ' você acaba de ser tornar um voluntário!!');
                    routeService.mudarRotaTimeout('/animais');
                } else {
                    feedbackService.error('Falha na solicitação');
                }
            }, function (error) {
                console.log(error);
            });
    }

    function consultarVoluntarioExistente(usuario) {
        requisicoesService.consultarVoluntario(usuario)
            .then(function (response) {
                if (response.data !== null && response.data !== '') {
                    feedbackService.error('Já existe um registro de voluntário para este usuário');
                } else {
                    novoVoluntario();
                }
            }, function (error) {
                console.log(error);
                return false;
            });
    }

    $scope.adicionarCategorias = function (categoria) {
        var idx = $scope.voluntario.categorias.indexOf(categoria);
        if (idx > -1) {
            $scope.voluntario.categorias.splice(idx, 1);
        } else {
            $scope.voluntario.categorias.push(categoria);
        }
        console.log($scope.voluntario.categorias);
    }

    




}
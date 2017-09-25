angular.module('animais').controller('UsuarioController', UsuarioController);

function UsuarioController($scope, requisicoesService, clearMaskService, growl) {

    function init() {

        $scope.usuario = {
            nome: '',
            email: '',
            telefone: '',
            cpf: '',
            usuario: '',
            senha: '',
            senhaConfirmacao: ''
        };

    }

    init();

    $scope.cadastrarUsuario = function () {
        if (validarCamposVazios()) {
            if (!validarCpf()) {
                growl.error('CPF inválido');
            } else if (!validarTelefone()) {
                growl.error('Telefone inválido');
            } else {
                if (validarSenhasIguais()) {
                    clearMasks();
                    cadastrarNovoUsuario();
                } else {
                    growl.error('Senhas diferentes');
                }
            }
        }

    };

    function validarSenhasIguais() {
        return $scope.usuario.senha === $scope.usuario.senhaConfirmacao;
    }

    function validarCamposVazios() {
        var nome = $scope.usuario.nome === '';
        var cpf = $scope.usuario.cpf === '';
        var telefone = $scope.usuario.telefone === '';
        var usuario = $scope.usuario.usuario === '';
        var senha = $scope.usuario.senha === '';
        var email = $scope.usuario.email === '';
        var senhaConfirmacao = $scope.usuario.senhaConfirmacao === '';
        if (nome) {
            growl.error('O campo nome é obrigatório');
        } else if (cpf) {
            growl.error('O campo cpf é obrigatório');
        } else if (telefone) {
            growl.error('O campo telefone é obrigatório');
        } else if (email) {
            growl.error('O campo email é obrigatório');
        } else if (usuario) {
            growl.error('O campo usuário é obrigatório');
        } else if (senha) {
            growl.error('O campo senha é obrigatório');
        } else if (senhaConfirmacao) {
            growl.error('O campo senha de confirmação é obrigatório');
        }
        return !nome && !cpf && !telefone && !usuario && !senha && !email && !senhaConfirmacao;
    }

    function validarCpf() {
        return ValidarCPF($scope.usuario.cpf);
    }

    function validarTelefone() {
        return ValidarTelefone($scope.usuario.telefone)
    }

    function cadastrarNovoUsuario() {
        requisicoesService.novoUsuario($scope.usuario)
            .then(function (response) {
                if (response.data !== null) {
                    if (response.data !== '') {
                        growl.success('Usuário ' + $scope.usuario.usuario + ' foi cadastrado com sucesso!');
                        $scope.usuario = null;
                    } else {
                        growl.error('Falha no cadastro do usúario ' + $scope.usuario.usuario);
                    }
                }
            }, function (error) {
                console.log(error);
            });
    }

    function clearMasks() {
        $scope.usuario.cpf = clearMaskService.clearMaskCpf($scope.usuario.cpf);
        $scope.usuario.telefone = clearMaskService.clearMaskTelefone($scope.usuario.telefone);
        $scope.usuario.endereco.cep = clearMaskService.clearMaskCep($scope.usuario.endereco.cep);
    }

}
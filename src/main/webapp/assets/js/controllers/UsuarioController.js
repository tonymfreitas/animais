angular.module('animais').controller('UsuarioController', UsuarioController);

function UsuarioController($scope, requisicoesService, routeService, clearMaskService, feedbackService, fileUploadService) {

    var files = event.target.files;
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        $scope.fotoPreview = reader.result;
    }, false);

    if (files) {
        reader.readAsDataURL(files[0]);
    }

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
                feedbackService.error('CPF inválido');
            } else if (!validarTelefone()) {
                feedbackService.error('Telefone inválido');
            } else {
                if (validarSenhasIguais()) {
                    clearMasks();
                    cadastrarNovoUsuario();
                } else {
                    feedbackService.error('Senhas diferentes');
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
            feedbackService.error('O campo nome é obrigatório');
        } else if (cpf) {
            feedbackService.error('O campo cpf é obrigatório');
        } else if (telefone) {
            feedbackService.error('O campo telefone é obrigatório');
        } else if (email) {
            feedbackService.error('O campo email é obrigatório');
        } else if (usuario) {
            feedbackService.error('O campo usuário é obrigatório');
        } else if (senha) {
            feedbackService.error('O campo senha é obrigatório');
        } else if (senhaConfirmacao) {
            feedbackService.error('O campo senha de confirmação é obrigatório');
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
        var config = {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        };
        var formData = fileUploadService.uploadFileToUrl('usuario', $scope.usuario, $scope.myFile);
        requisicoesService.novoUsuario(formData, config)
            .then(function (response) {
                if (response.data !== null) {
                    if (response.data !== '') {
                        enviarEmailUsuario();
                        feedbackService.success('Usuário ' + $scope.usuario.usuario + ' foi cadastrado com sucesso!');
                        $scope.usuario = null;
                        routeService.mudarRotaTimeout('/animais/login');
                    } else {
                        feedbackService.error('Falha no cadastro do usúario ' + $scope.usuario.usuario);
                    }
                }
            }, function (error) {
                console.log(error);
            });
    }

    function enviarEmailUsuario() {
        requisicoesService.enviarEmailUsuario()
            .then(function (response) {
                console.log(response.data);
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
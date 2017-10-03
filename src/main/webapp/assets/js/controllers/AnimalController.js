angular.module('animais').controller('AnimalController', AnimalController);

function AnimalController($scope, requisicoesService, growl, fileUploadService, bauService) {

    var files = event.target.files;
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        $scope.fotoPreview = reader.result;
    }, false);

    if (files) {
        reader.readAsDataURL(files[0]);
    }

    function init() {
        $scope.animal = {
            nome: '',
            raca: '',
            peso: '',
            cor: '',
            dtnascimento: '',
            sexo: '',
            observacao: '',
            usuario: {
                id: bauService.get('id')
            }
        }
    }

    init();

    $scope.novoAnimal = function () {
        var config = {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        };
        if (!validarCampoPeso()) {
            if (validarCamposVazios()) {
                if (!validarCampoFoto()) {
                    $scope.animal.dtnascimento = new Date($scope.animal.dtnascimento);
                    $scope.animal.dtcadastro = new Date();
                    var formData = fileUploadService.uploadFileToUrl('animal', $scope.animal, $scope.myFile);
                    cadastrarAnimal(formData, config);
                }
            }
        } else {
            growl.error('O campo peso deve ser numérico');
        }
    }

    function cadastrarAnimal(formData, config) {
        requisicoesService.novoAnimal(formData, config)
            .then(function (response) {
                if (response !== null && response !== '') {
                    growl.success($scope.animal.nome + ' foi cadastrado com sucesso');
                    $scope.animal = null;
                    $scope.animal.myFile = null;
                    $scope.fotoPreview = null;
                } else {
                    growl.error('Falha ao cadastrar um amigo');
                }
            }, function (error) {
                console.log(error);
            });
    }

    function validarCampoPeso() {
        return isNaN($scope.animal.peso);
    }

    function validarCamposVazios() {
        var camposVazios = isEmpytPropetsyObj($scope.animal);
        var campo;
        for (campo in camposVazios) {
            growl.error('O campo ' + camposVazios[campo] + "  deve ser preenchido");
            break;
        }
        return camposVazios.length === 0 ? true : false;
    }

    function validarCampoFoto() {
        if ($scope.myFile === undefined) {
            growl.error('O campo foto deve ser preenchido');
        }
        return $scope.myFile === undefined ? true : false;
    }

}
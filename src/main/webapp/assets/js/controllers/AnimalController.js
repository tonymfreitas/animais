angular.module('animais').controller('AnimalController', AnimalController);

function AnimalController($scope, $base64, requisicoesService, growl, fileUploadService, bauService) {

    var files = event.target.files;
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        $scope.fotoPreview = reader.result;
    }, false);

    if (files) {
        reader.readAsDataURL(files[0]);
    }

    $scope.novoAnimal = function () {
        var config = {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        };
        $scope.animal.dtnascimento = new Date($scope.animal.dtnascimento);
        $scope.animal.usuario = {
            id: bauService.get('id')
        }
        var formData = fileUploadService.uploadFileToUrl('animal', $scope.animal, $scope.myFile);
        requisicoesService.novoAnimal(formData, config)
            .then(function (response) {
                if (response !== null && response !== '') {
                    growl.success($scope.animal.nome + ' foi cadastrado com sucesso');
                    $scope.animal = null;
                    $scope.myFile = null;
                    $scope.fotoPreview = null;
                } else {
                    growl.error('Falha ao cadastrar um amigo');
                }
            }, function (error) {
                console.log(error);
            });
    }

}
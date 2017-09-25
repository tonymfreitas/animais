angular.module('animais').controller('AnimalController', AnimalController);

function AnimalController($scope, $base64, requisicoesService, growl) {

    var files = event.target.files;
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        $scope.amigo.foto = reader.result;
    }, false);

    if (files) {
        reader.readAsDataURL(files[0]);
    }

    $scope.novoAnimal = function () {
        $scope.amigo.dtnascimento = $scope.amigo.dtnascimento.replace('/','').replace('/','');
        requisicoesService.novoAnimal($scope.animal)
            .then(function (response) {
                if(response !== null && response !== '') {
                    growl.success($scope.amigo.nome + ' foi cadastrado com sucesso');
                } else {
                    growl.error('Falha ao cadastrar um amigo');
                }
            }, function (error) {
                console.log(error);
            });
    }

}
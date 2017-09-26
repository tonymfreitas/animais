(function () {
    'use strict';
    angular.module('animais').service('fileUploadService', function () {

        function filesArray(files) {
            var fileFormData = new FormData();
            var file;
            for (var i = 0; i < files.length; i++) {
                file = files.item(i);
                fileFormData.append('file', file);
            }
            return fileFormData;
        }

        this.uploadFileToUrl = function (tipoObj, animal, file) {
            var fileFormData = filesArray(file);
            fileFormData.append(tipoObj, JSON.stringify(animal));
            return fileFormData;
        };
    });
})();
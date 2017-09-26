(function () {
    'use strict';
    var myApp = angular.module('animais');

    /*
     A directive to enable two way binding of file field
     */
    myApp.directive('fileUpload', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var model = $parse(attrs.fileUpload);
                var modelSetter = model.assign;
                element.bind('change', function () {
                    scope.$apply(function () {
                        modelSetter(scope, element[0].files);
                    });
                });
            }
        };
    }]);
})();
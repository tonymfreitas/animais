(function () {
    angular.module('animais').factory('bauService', bauService);

    function bauService() {

        var bau = {};

        return {
            set: function (key, value) {
                bau[key] = value;
            },
            get: function (key) {
                return bau[key];
            }
        }

    }
})();
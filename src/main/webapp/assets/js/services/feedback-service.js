(function () {
    angular.module('animais').service('feedbackService', feedbackService);

    function feedbackService($anchorScroll, growl) {

        this.error = function (mensagem) {
            growl.error(mensagem);
            $anchorScroll();
        };

        this.success = function (mensagem) {
            growl.success(mensagem);
            $anchorScroll();
        };

        this.info = function (mensagem) {
            growl.info(mensagem);
            $anchorScroll();
        };

        this.warning = function (mensagem) {
            growl.warning(mensagem);
            $anchorScroll();
        };

    }

})();
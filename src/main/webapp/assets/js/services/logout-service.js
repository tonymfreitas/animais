angular.module('animais').service('logoutService', logoutService);

function logoutService(bauService, $q, $location) {

    this.logout = function() {
        localStorage.clear();
        $q.when();
        bauService.set('logado', false);
        bauService.set('usuario', null);
        bauService.set('id', null);
        $location.path('/animais/login');
    }

}
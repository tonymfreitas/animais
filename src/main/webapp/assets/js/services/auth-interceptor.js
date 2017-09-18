angular.module('animais')
.factory('authInterceptor', authInterceptor);

function authInterceptor($q, $location, $rootScope, growl, $timeout) {
return {
  request: function (config) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');

    return config;
  },
  responseError: function (response) {
    if (response.status === 401 || response.status === 403) {
      growl.error('Usuário não autenticado, será redirecionado para a tela de login');
      $timeout(function () {
        $location.path('/animais/login');
      }, 5000);
    }
    return $q.reject(response);
  }

};
}
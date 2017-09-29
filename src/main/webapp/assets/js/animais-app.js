$(function () {
    $(document).keydown(function (e) {
        return (e.which || e.keyCode) != 116;
    });
});

angular.module('animais', ['ngRoute', 'angular-growl', 'base64', 'ngAnimate'])
    .config(['growlProvider', function (growlProvider) {
        growlProvider.globalTimeToLive(5000);
        growlProvider.globalPosition('top-right');
    }])
    .run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (next.authorize) {
                if (!localStorage.getItem('token')) {
                    /* Ugly way
                    event.preventDefault();
                    $location.path('/login');
                    ========================== */

                    $rootScope.$evalAsync(function () {
                        $location.path('/animais/login');
                    })
                }
            }
        });

    });
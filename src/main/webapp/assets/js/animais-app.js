angular.module('animais', ['ngRoute', 'angular-growl'])
    .config(['growlProvider', function (growlProvider) {
        growlProvider.globalTimeToLive(5000);
        growlProvider.globalPosition('top-right');
    }]);
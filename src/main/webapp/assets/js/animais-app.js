$(function () {
    $(document).keydown(function (e) {
        return (e.which || e.keyCode) != 116;
    });
});

angular.module('animais', ['ngRoute', 'angular-growl', 'base64'])
    .config(['growlProvider', function (growlProvider) {
        growlProvider.globalTimeToLive(5000);
        growlProvider.globalPosition('top-right');
    }]);
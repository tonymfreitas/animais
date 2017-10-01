(function () {
    angular.module('animais')
        .factory('socket', function () {
            var loc = window.location;
            var wsUri;
            if (loc.protocol === 'https:') {
                wsUri = 'wss:';
            } else {
                wsUri = 'ws:';
            }
            wsUri += "//" + loc.host + loc.pathname.substring(0, loc.pathname.lastIndexOf('/')) + '/echo';
            return new WebSocket(wsUri);
        })
})();
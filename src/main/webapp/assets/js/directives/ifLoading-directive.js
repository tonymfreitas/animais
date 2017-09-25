(function () {
  angular
    .module('animais')
    .directive('ifLoading', ifLoading);

  ifLoading.$injector = ['$http'];

  function ifLoading($http) {

    return {
      restrict: 'A',
      link: function (scope, elem) {
        scope.isLoading = isLoading;

        scope.$watch(scope.isLoading, toggleElement);

        function toggleElement(loading) {

          if (loading) {
            elem[0].style.display = "block";
          } else {
            elem[0].style.display = "none";
          }
        }

        function isLoading() {
          return $http.pendingRequests.length > 0;
        }
      }
    }
  };

})();
(function () {
  angular.module('animais')
    .directive('owlCarouselItem', [function () {
      return {
        restrict: 'A',
        transclude: false,
        link: function (scope, element) {
          // wait for the last item in the ng-repeat then call init
          if (scope.$last) {
            scope.initCarousel(element.parent());
          }
        }
      };
    }]);
})();
/**
 * 
 */
(function () {
	var angularApp = angular.module ("hello", []);
	
	var homeCtrl = angularApp.controller ("HomeCtrl", ['$scope', function ($scope) {
		$scope.greeting.id = 1;
		$scope.greeting.content = "Hello World";
	}]);
})();
/**
 * 
 */
(function () {
	
	var angularApp = angular.module ("hello", ['ngRoute']);
	
	angularApp.config (['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
		$routeProvider.when ('/', {
			templateUrl: 'home.html',
			controller: 'home'
		})
		.when ('/login', {
			templateUrl: 'login.html',
			controller: 'navigation'
		})
		.otherwise ('/');
		
		$httpProvider.defaults.header.common ["X-Requested-With"] = 'XMLHttpRequest';
	}]);
	
	
	var homeCtrl = angularApp.controller ("HomeCtrl", ['$scope', '$http', function ($scope, $http) {
		
		$http.get ('/resource').success (function (data) {
			$scope.greeting = data;
		});
		
		
	}]);
	
	var navCtrl = angularApp.controller ("navigation", ['$rootScope','$scope', '$http', '$location', function ($rootScope, $scope, $http, $location) {
		
		var authenticate = function (credentials, callback) {
			
			var headers = credentials ? {authorization: "Basic " + btoa (credentials.username + ":" + credentials.password )} : {};
			
			$http.get ('user', {headers: headers}). success (function (data) {
				if (data.name) {
					$rootScope.authenticated = true;
				} else {
					$rootScope.authenticated = false;
				}
				callback && callback ();
				
			}).error (function () {
				$rootScope.authenticated = false;
				callback && callback ();
			});
			
		};
		
	}]);
		
		
	}]);
})();
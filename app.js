"use strict"

const app = angular.module('saasy', ['ui.router', 'login', 'grad'])

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise("/")

	$stateProvider
		.state({
			name: 'login',
			url: '/',
			component: 'login'
		})
		.state({
			name: 'grad',
			url: '/form',
			component: 'grad',
			params: {
				user: null
			},
			resolve: {
				user: ['$stateParams', '$http', function ($stateParams, $http) {
					return $http.get("data/" + $stateParams.user.id + ".json")
						.then(response => {
							return response.data
						})
				}]
			}
		})
}])

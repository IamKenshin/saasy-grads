"use strict"

angular
	.module('login', [])
	.component('login', {
		templateUrl: "login/login.template.html",

		controller: ['$state', function ($state) {
			this.user = {}

			this.login = function () {
				$state.go('grad', { user: this.user })
			}
		}]
	})

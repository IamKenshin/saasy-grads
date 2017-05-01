"use strict"

angular
	.module('grad', [])
	.component('grad', {
		templateUrl: "grad/grad.template.html",

		bindings: {
			user: '<'
		},
		controller: ['$http', '$state', function ($http, $state) {
			this.$onInit = function () {
				this.years = []
				for (let i = -2; i <= 2; i++) this.years.push(Number(this.user.year) + i)

				console.log(this.user)
			}
		}]
	})

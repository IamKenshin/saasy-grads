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

				this.passedAll = function () {
					let passedAll = true

					for (let i = 0; i < this.user.courses.length; i++) {
						if (!this.passed(this.user.courses[i])) {
							passedAll = false
							break
						}
					}
					return passedAll
				}
				this.passed = function (course) {
					return ['A+', 'A', 'A-',
									'B+', 'B', 'B-',
									'C+', 'C', 'C-'].indexOf(course.grade) >= 0
				}

				console.log(this.user)
			}
		}]
	})

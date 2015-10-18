function LoginCtrl(api, $location) {
  this.api=api;
  this.$location=$location;
}

LoginCtrl.prototype.sendToProfile = function()
{
	console.log(this.username);
	console.log(this.password);formCtrl
	var self = this;
	return this.api.login(this.username, this.password).then(function()
	{
		self.$location.path('/profile');
	});
}

LoginCtrl.prototype.createNewAcc = function()
{
	return this.api.createAccount();
}
angular.module('userApp').controller('LoginCtrl', LoginCtrl);
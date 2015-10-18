function ProfileCtrl(api, UserStuff, $location) 
{
	this.$location = $location;
	this.api = api;
	this.name = UserStuff.name;
	this.age = UserStuff.age;
	this.email = UserStuff.email;
	this.favouriteColor = UserStuff.favouriteColor;
	this.profilePic = UserStuff.profilePic;
	this.username = UserStuff.username;
}
ProfileCtrl.prototype.logMeOut = function()
{
	var self = this;
	return this.api.logOut().then(function()
	{
		self.$location.path('/login');
	});
}


angular.module('userApp').controller('ProfileCtrl', ProfileCtrl);
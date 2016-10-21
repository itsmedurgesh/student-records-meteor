/* redirect to home after login and logout
*/
if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('home');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

// if the user is not logged in redirect to home

FlowRouter.triggers.enter([function(context, redirect) {
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

// three routes
FlowRouter.route('/', {
	name: 'home',
	action(){
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/addstudent', {
	name: 'add-student',
	action(){
		BlazeLayout.render('MainLayout', {main: 'AddStudent'});
	}
});

FlowRouter.route('/liststudents', {
	name: 'list-students',
	action(){
		BlazeLayout.render('MainLayout', {main: 'ListStudents'});
	}
});
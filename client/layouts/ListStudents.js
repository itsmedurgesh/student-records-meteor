

Template.ListStudents.onCreated(function(){
	Session.set('sortby', 'name');
	Session.set('order', 1);
	Session.set('recently-added', 0);
});

Template.ListStudents.helpers({
	recent(){
		return Session.get('recently-added') === 1;
	}
});

Template.ListStudents.helpers({
	student(){
		var sortby = Session.get('sortby');
		var order = Session.get('order');
		switch(sortby){
			case "name":	
				return Records.find({}, {sort: {name: order}});
			case "phone":
				return Records.find({}, {sort: {phone: order}});
			case "class":
				return Records.find({}, {sort: {class: order}});
			default:
				return Records.find({}, {sort: {city: order}});		
		}
	},
});

Template.Tr.helpers({
	isRecentRow(bool){
		if(bool){
			Session.set('recently-added', 1);
			Meteor.setTimeout(function(){
				Session.set('recently-added', 0);
			}, 5000);	
		}		
		return bool;
	}
})


Template.ListStudents.events({
	'click .sort-name': function(event){
		event.preventDefault();
		Session.set('sortby', 'name');
		// Meteor.setTimeout(function(){
		// 	console.log(new Date());
		// }, 5000);
		Session.set('order', Session.get('order')*(-1));

		// $('#name-up').removeClass('hidden');

		const order = Session.get('order');
		if(order === 1){
			if($('#name-up').hasClass('hidden')) $('#name-up').removeClass('hidden');
			if(!$('#name-down').hasClass('hidden')) $('#name-down').addClass('hidden');
		}
		else{
			if($('#name-down').hasClass('hidden')) $('#name-down').removeClass('hidden');
			if(!$('#name-up').hasClass('hidden')) $('#name-up').addClass('hidden');
		}

		if(!$('#phone-up').hasClass('hidden')) $('#phone-up').addClass('hidden');
		if(!$('#phone-down').hasClass('hidden')) $('#phone-down').addClass('hidden');
		if(!$('#class-up').hasClass('hidden')) $('#class-up').addClass('hidden');
		if(!$('#class-down').hasClass('hidden')) $('#class-down').addClass('hidden');
		if(!$('#city-up').hasClass('hidden')) $('#city-up').addClass('hidden');
		if(!$('#city-down').hasClass('hidden')) $('#city-down').addClass('hidden');

		// $('.sort-name').addClass('arrow-up');
		if(!$('.sort-name').hasClass('yellow')) $('.sort-name').addClass('yellow');
		if($('.sort-phone').hasClass('yellow')) $('.sort-phone').removeClass('yellow');
		if($('.sort-class').hasClass('yellow')) $('.sort-class').removeClass('yellow');
		if($('.sort-city').hasClass('yellow')) $('.sort-city').removeClass('yellow');
	},

	'click .sort-phone': function(event){
		event.preventDefault();
		Session.set('sortby', 'phone');
		Session.set('order', Session.get('order')*(-1));
		const order = Session.get('order');
		if(order == 1){
			if($('#phone-up').hasClass('hidden')) $('#phone-up').removeClass('hidden');
			if(!$('#phone-down').hasClass('hidden')) $('#phone-down').addClass('hidden');
		}
		else{
			if($('#phone-down').hasClass('hidden')) $('#phone-down').removeClass('hidden');
			if(!$('#phone-up').hasClass('hidden')) $('#phone-up').addClass('hidden');
		}

		if(!$('#name-up').hasClass('hidden')) $('#name-up').addClass('hidden');
		if(!$('#name-down').hasClass('hidden')) $('#name-down').addClass('hidden');
		if(!$('#class-up').hasClass('hidden')) $('#class-up').addClass('hidden');
		if(!$('#class-down').hasClass('hidden')) $('#class-down').addClass('hidden');
		if(!$('#city-up').hasClass('hidden')) $('#city-up').addClass('hidden');
		if(!$('#city-down').hasClass('hidden')) $('#city-down').addClass('hidden');
		
		if($('.sort-name').hasClass('yellow')) $('.sort-name').removeClass('yellow');
		if(!$('.sort-phone').hasClass('yellow')) $('.sort-phone').addClass('yellow');
		if($('.sort-class').hasClass('yellow')) $('.sort-class').removeClass('yellow');
		if($('.sort-city').hasClass('yellow')) $('.sort-city').removeClass('yellow');
	},

	'click .sort-class': function(event){
		event.preventDefault();
		Session.set('sortby', 'class');
		Session.set('order', Session.get('order')*(-1));
		const order = Session.get('order');
		if(order == 1){
			if($('#class-up').hasClass('hidden')) $('#class-up').removeClass('hidden');
			if(!$('#class-down').hasClass('hidden')) $('#class-down').addClass('hidden');
		}
		else{
			if($('#class-down').hasClass('hidden')) $('#class-down').removeClass('hidden');
			if(!$('#class-up').hasClass('hidden')) $('#class-up').addClass('hidden');
		}

		if(!$('#name-up').hasClass('hidden')) $('#name-up').addClass('hidden');
		if(!$('#name-down').hasClass('hidden')) $('#name-down').addClass('hidden');
		if(!$('#phone-up').hasClass('hidden')) $('#phone-up').addClass('hidden');
		if(!$('#phone-down').hasClass('hidden')) $('#phone-down').addClass('hidden');
		if(!$('#city-up').hasClass('hidden')) $('#city-up').addClass('hidden');
		if(!$('#city-down').hasClass('hidden')) $('#city-down').addClass('hidden');
		
		if($('.sort-name').hasClass('yellow')) $('.sort-name').removeClass('yellow');
		if($('.sort-phone').hasClass('yellow')) $('.sort-phone').removeClass('yellow');
		if(!$('.sort-class').hasClass('yellow')) $('.sort-class').addClass('yellow');
		if($('.sort-city').hasClass('yellow')) $('.sort-city').removeClass('yellow');
	},

	'click .sort-city': function(event){
		event.preventDefault();
		Session.set('sortby', 'city');
		Session.set('order', Session.get('order')*(-1));
		const order = Session.get('order');
		if(order == 1){
			if($('#city-up').hasClass('hidden')) $('#city-up').removeClass('hidden');
			if(!$('#city-down').hasClass('hidden')) $('#city-down').addClass('hidden');
		}
		else{
			if($('#city-down').hasClass('hidden')) $('#city-down').removeClass('hidden');
			if(!$('#city-up').hasClass('hidden')) $('#city-up').addClass('hidden');
		}

		if(!$('#name-up').hasClass('hidden')) $('#name-up').addClass('hidden');
		if(!$('#name-down').hasClass('hidden')) $('#name-down').addClass('hidden');
		if(!$('#class-up').hasClass('hidden')) $('#class-up').addClass('hidden');
		if(!$('#class-down').hasClass('hidden')) $('#class-down').addClass('hidden');
		if(!$('#phone-up').hasClass('hidden')) $('#phone-up').addClass('hidden');
		if(!$('#phone-down').hasClass('hidden')) $('#phone-down').addClass('hidden');
		
		if($('.sort-name').hasClass('yellow')) $('.sort-name').removeClass('yellow');
		if($('.sort-phone').hasClass('yellow')) $('.sort-phone').removeClass('yellow');
		if($('.sort-class').hasClass('yellow')) $('.sort-class').removeClass('yellow');
		if(!$('.sort-city').hasClass('yellow')) $('.sort-city').addClass('yellow');
	},

});

Template.AddStudent.onCreated(function(){
	Session.set('recently-added', 0);
});


Template.AddStudent.helpers({
	recent(){
		return Session.get('recently-added') === 1;
	}
});


Template.AddStudent.events({
	'submit .add-form': function(event){
		event.preventDefault();
		const s_name = event.target.add_name.value.toString();
		const s_phone = event.target.phone.value.toString();
		const s_class = event.target.class.value.toString();
		const s_city = event.target.city.value.toString();

		// console.log(s_name + s_phone + s_class + s_city);
		// check(s_name, String);
		// check(s_phone, String);
		// check(s_class, String);
		// check(s_city, String);

		const rid = Records.insert({
			name: s_name,
			phone: s_phone,
			class: s_class,
			city: s_city,
			isRecent: true
		});

		
		event.target.add_name.value = '';
		event.target.phone.value = '';
		event.target.class.value = '';
		event.target.city.value = '';

		// document.getElementsByTagName('.added-btn').style.display = 'none';
		
		Session.set('recently-added', 1);
		
		// async call
		Meteor.setTimeout(function(){
			Session.set('recently-added', 0);
			
			Records.update({'_id': rid}, {
				$set: {'isRecent': false}
			});
		}, 5000);
	}
});

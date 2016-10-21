// publishing the records collection to client side
Meteor.publish('Records', function() {
	return Records.find({});																																																																																																																																																					
});
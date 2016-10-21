Records = new Mongo.Collection('Records');

// defining a simple schema for the collection
infoSchema = new SimpleSchema({
	name: {
		type: String
	},
	phone: {
		type: String
	},
	class: {
		type: String
	},
	city: {
		type: String
	},
	isRecent: {
		type: Boolean
	}
});

// attaching the schema to the collection
Records.attachSchema(infoSchema);

// allowing loggid in user to make inserts
Records.allow({
	insert: function(userId, doc){
		// when userId is valid allow to insert
		return !!userId;
	},

	update: function(userId, doc){
		return !!userId;
	}
});
@Things = new Mongo.Collection "things"

if Meteor.isServer
	Meteor.startup ->
		if Things.find().count() is 0
			for i in [0...20]
				Things.insert
					name:"Thing #{i}"

	Meteor.publish "things", (v={}) ->
		_.defaults v,
			filters:{}
			options:{}

		Counts.publish this,"things",
			Things.find v.filters

		Things.find v.filters,v.options



if Meteor.isClient
	Meteor.subscribe "things",
		options:
			limit:10

	Template.basic.helpers
		"things": ->
			Things.find()




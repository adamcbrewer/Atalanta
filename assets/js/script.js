(function (A, $) {

	A = A || {};

	Object.prototype.combine = function(_args){
		for(var i in this) {
			if(typeof _args[i] == "undefined") {
				_args[i] = this[i];
			}
		}
	};


	A.Run = function (run) {
		
		run = run || {};
		
		// default values
		var defaults = {
			favourite: false,
			name: 'no name',
			activity: '',
			course: '',
			date: false,
			duration: null,
			distance: null,
			elevationGain: null,
			averagePace: null,
			maxPace: null,
			calories: null
		};

		// merging our default values
		// defaults.combine(run);

		// pre-processing of data before we serve it up to some nodes
		var dateString = run.date ? run.date.toString() : 'no date';
		
		// console.log(run.date.unix());

		// creating our dDOM nodes
		var runNode = $('<article>').addClass('run'),
			innerNode = $('<div>').addClass('run-details'),
			markerNode = $('<div>').addClass('marker'),
			nameNode = $('<h1>').addClass('run-name').html(run.name),
			favouriteNode = $('<span>').addClass('run-favourite').addClass(run.favourite).html( (run.favourite == 'true') ? '&#9733;' : '&#9734;' ),
			dateNode = $('<time>').addClass('run-date').html(dateString),
			durationNode = $('<time>').addClass('run-duration').html(run.duration.seconds).attr('title', run.duration.raw);
			distanceNode = $('<span>').addClass('run-distance').html(run.distance),
			avgPaceNode = $('<time>').addClass('run-avgpace').html(run.averagePace),
			maxPaceNode = $('<time>').addClass('run-maxpace').html(run.maxPace),
			elevationGainNode = $('<span>').addClass('run-elevation-gain').html(run.elevationGain),
			caloriesNode = $('<span>').addClass('run-calories').html(run.calories);

		innerNode.append(nameNode, favouriteNode, dateNode, durationNode, distanceNode, avgPaceNode, maxPaceNode, elevationGainNode, caloriesNode);
		runNode.append(markerNode, innerNode);

		this.el = runNode;

		return this;

	};


	A.Grid = function () {

		// Private methods
		var now;

		// Public methods
		var pub = {
			initTime: function () {
				var d = new Date(),
					t = d.getTime();
				now = Math.ceil(t/1000);
			},
			getTime: function () {
				return now;
			}
		};

		pub.initTime();

		// Returning only an instance of stuff we want public
		return pub;

	};


	return A;


}(A, $));

$(function () {

	var csvUrl = "activities.all.csv",
		rows = [],
		csv,
		dataLocation = $('#data');



	// MISO DATASET STUFF

	// Load running CSV's
	//
	var ds = new Miso.Dataset({
		url : "/activities.all.csv",
		delimiter : ";",
		columns: [
			{
				name: 'favourite',
				type: 'string',
				before: function (value) {
					return value.trim();
				}
			},
			{
				name: 'name',
				type: 'string'
			},
			{
				name: 'activity',
				type: 'string'
			},
			{
				name: 'course',
				type: 'string'
			},
			{
				name: 'date',
				type: 'time',
				before: function (value) {
					return moment(value);
				}
			},
			{
				name: 'duration',
				type: 'mixed',
				before: function (duration) {

					var result = {
						raw: null,
						seconds: null
					};

					if (duration) {

						var hms = duration.split(':'),
							units = hms.length,
							seconds = 0;

						for (var i = 0; i < units; i++) {
							hms[i] = parseInt(hms[i], 10);
						}

						if (units === 3) {
							seconds = (hms[0] * 60 * 60) + (hms[1] * 60) + hms[2];
						} else {
							seconds = (hms[0] * 60) + hms[1];
						}

						result.raw = duration;
						result.seconds = seconds;
					}

					return result;
				}
			},
			{
				name: 'distance',
				type: 'number'
			},
			{
				name: 'elevationGain',
				type: 'number'
			},
			{
				name: 'averagePace',
				type: 'mixed'
			},
			{
				name: 'maxPace',
				type: 'mixed'
			},
			{
				name: 'calories',
				type: 'number',
				before: function (value) {
					return (value) ? parseInt(value.replace(/,/g, ''), 10) : null;
				}
			}
		]
		// sync: true
	});

	ds.fetch({
		success: function() {

			var rows = this.rows(function (row) {
				var run = new A.Run(row);
				dataLocation.append(run.el);

			});

			A.grid = new A.Grid();
			var time = A.grid.getTime();
			console.log(time);

			// TODO: I need the oldest date when parsing the rows


		}
	});
	
}());
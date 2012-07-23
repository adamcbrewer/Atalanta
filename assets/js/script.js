(function (A, $) {

	A = A || {};

	Object.prototype.combine = function(_args){
		for(var i in this) {
			if(typeof _args[i] == "undefined") {
				_args[i] = this[i];
			}
		}
	};


	A.Run = function (params) {
		
		params = params || {};
		
		// default values
		// var o = {
		// 	favourite: false,
		// 	name: 'no name',
		// 	activity: '',
		// 	course: '',
		// 	date: null,
		// 	duration: null,
		// 	distance: null,
		// 	elevationGain: null,
		// 	averagePace: null,
		// 	maxPace: null,
		// 	calories: null
		// };

		// o.combine(params);
		// console.log(o);

		var runNode = $('<article>'),
			nameNode = $('<h1>'),
			dateNode = $('<time>');

		dateNode.html(params.date.toString());
		nameNode.html(params.name);

		runNode.append(nameNode, dateNode);

		this.el = runNode;

		return this;

	};

	return A;


}(A, $));

$(function () {

	var csvUrl = "activities.all.csv",
		rows = [],
		csv,
		dataLocation = $('#data');

	// D3 STUFF

	// $.get(csvUrl, function (data) {
	// 	csv = data;
	// 	var rows = d3.csv.parseRows(csv);
	// 	$.each(rows, function (i, row) {
	// 		// console.log(row);

	// 	});
	// });





	// MISO DATASET STUFF

	// Load running CSV's
	//
	var ds = new Miso.Dataset({
		url : "/activities.all.csv",
		delimiter : ";",
		columns: [
			{
				name: 'favourite',
				type: 'string'
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
				type: 'number',
				before: function (duration) {

					var result = null;

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

						result = seconds;
					}
					return result;
				}
			},
			{
				name: 'distance',
				type: 'number'
			},
			{
				name: 'elevation gain',
				type: 'number'
			},
			{
				name: 'average pace',
				type: 'mixed'
			},
			{
				name: 'max pace',
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
				console.log(row);
				var run = new A.Run(row);

				dataLocation.append(run.el);

			});
			// console.log(dataLocation);
		}
	});
	
}());
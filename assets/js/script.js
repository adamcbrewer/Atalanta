$(function () {

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

			var columnNames = this.columnNames(),
				rows = this.length,
				data = this,
				col;

			columnNames.forEach(function (el, i) {
				col = data.column(el);
				console.log(col.name + ' - ' + col.type);
			});

			// console.log(this.sum('Distance'));

			// this.sum('Distance').bind('change', function () {
			// 	console.log('The sum has changed to: ' + this.sum());
			// });

			// var maxDist = this.max('Distance');
			
			// var row = this.where({
			// 	column: 'Distance',
			// 	rows: function (row) {
			// 		return row.Distance == maxDist;
			// 	}
			// });
			console.log(this.rows());
			
		}
	});

	
}());
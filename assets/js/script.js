$(function () {

	// Load running CSV's
	//
	var ds = new Miso.Dataset({
		url : "/csv/Activities.01.csv",
		delimiter : ";",
		sync: true
	});

	ds.fetch({
		success: function() {
			
			var columnNames = this.columnNames(),
				rows = this.length,
				data = this,
				col;

			columnNames.forEach(function (el, i) {
				col = data.column(el);
				// console.log(col.name + ' - ' + col.type);
			});

			// console.log(this.sum('Distance'));

			this.sum('Distance').bind('change', function () {
				console.log('The sum has changed to: ' + this.sum());
			});

			var maxDist = this.max('Distance');
			
			var row = this.where({
				column: 'Distance',
				rows: function (row) {
					return row.Distance == maxDist;
				}
			});
			console.log(row);
			
		}
	});

	
}());
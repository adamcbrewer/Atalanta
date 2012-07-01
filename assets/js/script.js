$(function () {

	// Load running CSV's
	//
	var ds = new Miso.Dataset({
		url : "/csv/Activities.01.csv",
		// columns : [
			// Activity Name,Activity Type,Course,Start,Time,Distance,Elevation Gain,Avg Speed(Avg Pace),Max Speed(Best Pace),Avg HR,Max HR,Calories,Total Strokes,Avg Strokes,Min Strokes,Avg SWOLF,Best SWOLF,Best Efficiency,Training Effect,
			// { name : "favorite", type : "time", format : "YYYY" } // Favorite
		// ],
		delimiter : ","
	});

	ds.fetch({
		success: function() {
			
			console.log(this);
			
		}
	});

	
}());
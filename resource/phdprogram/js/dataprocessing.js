function getUniversityCount(countryName) {
	//if country is length 0, get everything
	
	//filter information based on the request of the degree attribute
	//if degree = 0 -- BS + MS
	//if degree = 1 -- BS only
	//if degree = 2 -- MS only
	
	var countObj = {};
	//var countries = ["Taiwan", "USA", "China"]
	//var countries = ["Taiwan"]
	var countries = countryName
	//var countries = []
	var degreeCheck = 1
	var uniSelect = 0
	
	var universities = ["../data/All.csv", "../data/Stanford.csv", "../data/Cornell.csv", "../data/GT.csv", "../data/Princeton.csv", "../data/UT.csv", "../data/Washington.csv"]
	//var universities = ["../data/Stanford.csv"]

	function undergradFilter(d) {
		return countries.indexOf(d.undergradcountry) != -1;
	}
	
	function mastersFilter(d) {
		return countries.indexOf(d.undergradcountry) != -1 && d.msinstit.length > 1;
	}
	
	var results = [];

	d3.csv(universities[uniSelect], function(data) {
		var fdata;
		if (degreeCheck === 1) {
			fdata = data.filter(undergradFilter);
			var uniCount = d3.nest().key(function(d) { return d.undergradinstit; })
			.rollup(function(v) { return v.length; }).entries(fdata).forEach(function(d) {
				var key = d.key
				var value = d.values
				var obj = {key, value};
				results.push(obj);
			}); 
		}
		else if (degreeCheck === 2) {
			fdata = data.filter(mastersFilter);
			var uniCount = d3.nest().key(function(d) { return d.msinstit; })
			.rollup(function(v) { return v.length; }).entries(fdata)
			.forEach(function(d) {
			var key = d.key;
			var value = d.values;
			var obj = {key, value};
			results.push(obj);
		});
		}
		else {
			var tempResult = [];
			ugdata = data.filter(undergradFilter);
			var ugCount = d3.nest().key(function(d) { return d.undergradinstit; })
			.rollup(function(v) { return v.length; }).entries(ugdata)
			.forEach(function(d) {
			var key = d.key;
			var value = d.value;
			var obj = {key, values};
			tempResult.push(obj);
			});
			
			msdata = data.filter(mastersFilter);
			var msCount = d3.nest().key(function(d) { return d.msinstit; })
			.rollup(function(v) { return v.length; }).entries(msdata)
			.forEach(function(d) {
			var key = d.key;
			var value = d.value;
			var obj = {key, values};
			tempResult.push(obj);
			});
			
			var reduce = d3.nest().key(function(d) { return d.key; })
			.rollup(function(v) { return d3.sum(v, function(d) { return d.value; }); })
			.entries(tempResult)
			
			
			var magic = d3.nest().key(function(d) { return d.key; })
			.rollup(function(v) { return v.length; }).entries(reduce)
			.forEach(function(d) {
				var key = d.key;
				var value = d.values;
				console.log(value);
				var obj = {key, value};
				results.push(obj);
			});
		}
	});
	
	return results
}

function getGenders() {
	var genders = [];
	
	var universities = ["../data/All.csv", "../data/Stanford.csv", "../data/Cornell.csv", "../data/GT.csv", "../data/Princeton.csv", "../data/UT.csv", "../data/Washington.csv"]
	//var universities = ["../data/Stanford.csv"]
	d3.csv(universities[0], function(data) {
		var uniCount = d3.nest().key(function(d) { return d.gender; })
			.rollup(function(v) { return v.length; }).entries(data)
			.forEach(function(d) {
			var key = d.key;
			var value = d.value;
			var obj = {key, value};
			genders.push(obj);
		});
	});
	console.log(genders);
}

function getAreas() {
	var areas = [];
	var universities = ["../data/All.csv", "../data/Stanford.csv", "../data/Cornell.csv", "../data/GT.csv", "../data/Princeton.csv", "../data/UT.csv", "../data/Washington.csv"]
	
	d3.csv(universities[0], function(data) {
		var uniCount = d3.nest().key(function(d) { return d.area; })
			.rollup(function(v) { return v.length; }).entries(data)
			.forEach(function(d) {
			var key = d.key;
			var value = d.value;
			var obj = {key, value};
			areas.push(obj);
		});
	});
	console.log(areas);
	
}

function pairFreq() {
	var pairs = [];
	var universities = ["../data/All.csv", "../data/Stanford.csv", "../data/Cornell.csv", "../data/GT.csv", "../data/Princeton.csv", "../data/UT.csv", "../data/Washington.csv"]
	
	d3.csv(universities[0], function(data) {
		var uniCount = d3.nest().key(function(d) { return d.publications; })
			.rollup(function(v) { return v.countinternships; }).entries(data)
			.forEach(function(d) {
			var key = d.key;
			var value = d.value;
			var obj = {key, value};
			pairs.push(obj);
		});
	});
	console.log(pairs)
	
}
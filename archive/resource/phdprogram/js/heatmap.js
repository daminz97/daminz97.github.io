function create_heatmap(school_name, year){
    console.log('heatmap', school_name, year)

    // Remove old chart
    d3.select("#heatmap").selectAll("svg").remove();

    // set the dimensions and margins of the graph
    var margin = {top: 5, right: 5, bottom: 20, left: 25},
        width = 320,
        height = width;

    // append the svg object to the body of the page
    var svg = d3.select("#heatmap").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Labels of row and columns
    var myGroups = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"]
    var myVars = ["0", "1", "2", "3", "4", "5", "6"]

    // Build X scales and axis:
    var x = d3.scaleBand()
      .range([ 0, width ])
      .domain(myGroups)
      .padding(0.01);
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (height) + ")")
      .call(d3.axisBottom(x))
      .attr("fill", "black")
      .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Publications");

    // Build X scales and axis:
    var y = d3.scaleBand()
      .range([ height, 0 ])
      .domain(myVars)
      .padding(0.01);
    svg.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(y))
      .attr("fill", "black")
      .append("text")
          .attr("class", "label")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
      .text("Internships")

    // Build color scale
    var myColor = d3.scaleLinear()
      .range(["white", "#6d0f0f"])
      .domain([1,100])

    // Process data
    if (school_name == "All"){
        if (year == "All"){
            var filtered_data = alldata;
        }
        else{
            var filtered_data = alldata.filter(function(d){return d.phdadmissionyear==year});
        }
    }
    else{
        if (year == "All"){
            var filtered_data = alldata.filter(function(d){return d.currentuniversity==school_name})
        }
        else{
            var filtered_data = alldata.filter(function(d){return d.phdadmissionyear==year})
                                       .filter(function(d){return d.currentuniversity==school_name});
        }
    }

    var tmp_data = d3.nest()
        .key(function(d) { return d.publications+'+'+d.countinternships; })
        .rollup(function(v) { return v.length; })
        .object(filtered_data);

    var data = []
    for (var key in tmp_data){
        data.push({
            x: parseInt(key.split('+')[0]),
            y: parseInt(key.split('+')[1]),
            freq: tmp_data[key]
        });
    };

    svg.selectAll()
        .data(data, function(d) {return d.x+':'+d.y;})
        .enter()
        .append("rect")
        .attr("x", function(d) { return x(d.x) })
        .attr("y", function(d) { return y(d.y) })
        .attr("width", x.bandwidth() )
        .attr("height", y.bandwidth() )
        .style("fill", function(d) { return myColor(d.freq * 10)} )
        .on("mouseover", function(d) {
            var xPosition = $("#heatmap").offset().left-10;
            var yPosition = $("#heatmap").offset().top-500;
            //var xPosition = d3.event.pageX - 50;
            //var yPosition = d3.event.pageY - 500;

            //Update the tooltip position and value
            d3.select("#tooltipScatter")
                .style("left", xPosition + "px")
                .style("top", yPosition + "px")
                .select("#value")
                .text("Students: " + d.freq);
            d3.select("#pub")
                .text("Publications: " + d.x);
            d3.select("#intern")
                .text("Internships: " + d.y);
       
            //Show the tooltip
            d3.select("#tooltipScatter").classed("hidden", false);
        })
        .on("mouseout", function(d) {
            d3.select("#tooltipScatter").classed("hidden", true);
        });
        


}

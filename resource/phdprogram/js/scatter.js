function create_scatter(school_name, year){
    console.log('scatter', school_name, year)

    // Remove old chart
    d3.select("#scatter").selectAll("svg").remove();

    var margin = {top: 5, right: 5, bottom: 20, left: 25},
        width = 320,
        height = width;

    /* 
     * value accessor - returns the value to encode for a given data object.
     * scale - maps value to a visual display encoding, such as a pixel position.
     * map function - maps from data value to display value
     * axis - sets up axis
     */ 
    // setup x 
    var xValue = function(d) { return d.x;}, // data -> value
        xScale = d3.scale.linear().range([0, width]), // value -> display
        xMap = function(d) { return xScale(xValue(d));}, // data -> display
        xAxis = d3.axisBottom(xScale);

    // setup y
    var yValue = function(d) { return d.y;}, // data -> value
        yScale = d3.scale.linear().range([height, 0]), // value -> display
        yMap = function(d) { return yScale(yValue(d));}, // data -> display
        yAxis = d3.axisLeft(yScale).tickFormat(d3.format(".1f"));

    // setup fill color
    var cValue = function(d) { return d.currentuniversity;},
        color = d3.scale.category10();
        
    var radiSize = function(d) { return d.freq * 1.5; };

    // Create svg object
    var svg = d3.select("#scatter").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

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
    
    // don't want dots overlapping axis, so add in buffer to data domain
    xScale.domain([d3.min(data, xValue), d3.max(data, xValue)+1]);
    yScale.domain([d3.min(data, yValue), d3.max(data, yValue)+1]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (height) + ")")
        .call(xAxis)
        .attr("fill", "black");

    svg.append("text")
        .attr("class", "label")
        .attr("x", width)
        .attr("y", -6)
        .style("text-anchor", "end")
        .text("Publications");

    // y-axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .attr("fill", "black");

    svg.append("text")
        .attr("class", "label")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Internships");

    // draw dots
    svg.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", function(d) { return radiSize(d) })
        .attr("cx", xMap)
        .attr("cy", yMap)
        .style("fill", "#0000ff")
        .on("mouseover", function(d) {
            //var xPosition = $("#scatter").offset().left-10;
            //var yPosition = $("#scatter").offset().top-500;
            var xPosition = d3.event.pageX - 50;
            var yPosition = d3.event.pageY - 500;

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

    // draw legend
    var legend = svg.selectAll(".legend")
                    .data(color.domain())
                    .enter().append("g")
                    .attr("class", "legend")
                    .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

      // draw legend colored rectangles
      legend.append("rect")
          .attr("x", width - 18)
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", color);

      // draw legend text
      legend.append("text")
          .attr("x", width - 24)
          .attr("y", 9)
          .attr("dy", ".35em")
          .style("text-anchor", "end")
          .text(function(d) { return d;})

}

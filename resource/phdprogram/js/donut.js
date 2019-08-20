function create_donut(school_name, year){
    console.log('donut', school_name, year)

    // Remove old chart
    d3.select("#donutchart").selectAll("svg").remove();

    // set the dimensions and margins of the graph
    var width = 320,
        height = width,
        margin = 5;

    // The radius of the pieplot is half the width or half the height (smallest one). I substract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select("#donutchart")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
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

    var data = d3.nest()
        .key(function(d) { return d.gender; })
        .rollup(function(v) { return v.length; })
        .object(filtered_data);

    // set the color scale
    var color = d3.scaleOrdinal()
                  .domain(data)
                  .range(["#89cff0", "#ffc0cb"])

    // Compute the position of each group on the pie:
    var pie = d3.pie()
                .value(function(d) {return d.value; })
    var arc = d3.arc()
                .innerRadius(30)         // This is the size of the donut hole
                .outerRadius(radius);

    var data_ready = pie(d3.entries(data))

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll()
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function(d){ if(d.data.key === "Male") { return "#89cff0"; } else { return "#ffc0cb"; }})
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)
      .on("mouseover", function(d) {
            //Get this bar's x/y values, then augment for the tooltip
            var xPosition = d3.event.pageX - 500;
            var yPosition = d3.event.pageY;
            //var xPosition = $("#donutchart").offset().left-10;
            //var yPosition = $("#donutchart").offset().top;

            //Update the tooltip position and value
            d3.select("#tooltip")
                .style("left", xPosition + "px")
                .style("top", yPosition + "px")						
                .select("#university")
                .text(d.data.key);
            d3.select("#tooltip")
                .select("#value")
                .text(d.data.value);
       
            //Show the tooltip
            d3.select("#tooltip").classed("hidden", false);
          })
        .on("mouseout", function(d) {
            //Hide the tooltip
            d3.select("#tooltip").classed("hidden", true);
        });

    // Text inside
    svg.append("text")
        .attr("text-anchor", "middle")
        .attr('font-size', '2em')
        .attr('y', 15)
        .text(filtered_data.length);

    //svg.append("text")
    //    .attr("transform", function(d) {
    //        var _d = arc.centroid(d);
    //        _d[0] *= 1.5;//multiply by a constant factor
    //        _d[1] *= 1.5;//multiply by a constant factor
    //        return "translate(" + _d + ")";
    //    })
    //    .attr("dy", ".50em")
    //    .style("text-anchor", "middle")
    //    .text(function(d) {
    //        if(d.data.value < 8) { return '';}
    //        return d.data.value;
    //    });
}


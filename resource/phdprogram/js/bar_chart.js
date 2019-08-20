function create_barchart(country_name, year){
    // Draw bar chart
    console.log(country_name, year)
    
    // Remove old bar chart
    d3.select("#barchart_university").selectAll("svg").remove();

    //Create SVG element
    var svg = d3.select("#barchart_university")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

    // Process data
    if (country_name == "All"){
        if (year == "All"){
            var filtered_data = alldata;
        }
        else{
            var filtered_data = alldata.filter(function(d){return d.phdadmissionyear==year})
        }
    }
    else{
        if (year == "All"){
            var filtered_data = alldata.filter(function(d){return d.undergradcountry==country_name})
        }
        else{
            var filtered_data = alldata.filter(function(d){return d.undergradcountry==country_name})
                                       .filter(function(d){return d.phdadmissionyear==year})
        }
    }

    var groupByUnderInstit = d3.nest()
        .key(function(d) { return d.undergradinstit; })
        .rollup(function(v) { return v.length; })
        .object(filtered_data);

    var data = []
    var universityNames = Object.keys(groupByUnderInstit)
    for(var key in groupByUnderInstit){
        data.push({school:key, count:groupByUnderInstit[key]});
    };
    data = data.sort(function(a,b){return a.count-b.count});

    var maxCount = d3.max(data, function(d){return d.count})

    var xScale = d3.scaleBand()
                .domain(universityNames)
                .rangeRound([0, w])
                .paddingInner(0.05);

    var yScale = d3.scaleLinear()
                .domain([maxCount, 0])
                .range([0, h]);

    //Create bars
    svg.selectAll("rect")
       .data(data)
       .enter()
       .append("rect")
       .attr("x", function(d) {
            return xScale(d.school);
       })
       .attr("y", function(d) {
            return yScale(d.count);
       })
       .attr("width", xScale.bandwidth())
       .attr("height", function(d) {
            return h - yScale(d.count);
       })
       .attr("fill", function(d) {
            return "rgb(0, 0, 250)";
            //return "rgb(0, 0, " + Math.round(800/ d.count) + ")";
       })
       .on("mouseover", function(d) {

            //Get this bar's x/y values, then augment for the tooltip
            var xPosition = parseFloat(d3.select(this).attr("x")) + xScale.bandwidth() / 2;
            var yPosition = parseFloat(d3.select(this).attr("y")) / 2 + h / 2;

            //Update the tooltip position and value
            d3.select("#tooltip")
                .style("left", xPosition + "px")
                .style("top", yPosition + "px")						
                .select("#university")
                .text(d.school);

            d3.select("#tooltip")
                .select("#value")
                .text(d.count);
       
            //Show the tooltip
            d3.select("#tooltip").classed("hidden", false);

       })
       .on("mouseout", function() {
       
            //Hide the tooltip
            d3.select("#tooltip").classed("hidden", true);
            
       })
    // TODO: Doesn't work now
 //    svg.selectAll("rect")
 //       .sort(function(a, b) {
 //           return d3.descending(a[1], b[1]);
 //       })
 //      .attr("x", function(d, i) {
 //           return xScale(d.school);
 //      });
}

(function (d3$1) {
  'use strict';

  // set the initial margin, width, height
  var margin = { top: 50, right: 50, bottom: 47, left: 200 };
  var svg = d3$1.select('svg');	
  var width = +svg.attr('width');
  var height = +svg.attr('height');
  var innerWidth = width - margin.left - margin.right;
  var innerHeight = height - margin.top - margin.bottom;

  // set title and axis names
  const titleText = 'Proposals in Primary Departments';
  const xAxisLabelText = 'Number of Proposals';

  // set x-scale and x-axis
  const xAxisTickFormat = number => d3$1.format('.0s')(number).replace('G', 'B');
  var xScale = d3$1.scaleLinear().range([0, innerWidth]);
  var xAxis = d3$1.axisBottom(xScale).tickFormat(xAxisTickFormat).tickSize(-innerHeight);

  svg.append("g")
    .attr("class", "x_axis")
    .attr("transform", `translate(${margin.left},${height - margin.bottom})`)
    .call(xAxis);  

  // set y-scale and y-axis
  var yScale = d3$1.scaleBand().range([0, innerHeight]).padding(0.1);
  var yAxis = d3.axisLeft(yScale).tickSizeOuter(0);
    
  svg.append("g")
    .attr("class", "y_axis")
    .attr("transform", `translate(${margin.left},${margin.top})`)
    .call(yAxis);  

    svg.append('text')
        .attr('class', 'xAxisLabelText')
    		.attr('x',315)
        .attr('y', 440)
        .text(xAxisLabelText);
    svg.append('text')
        .attr('class', 'title')
    		.attr('x',240)
        .attr('y', 35)
        .text(titleText);



  // initialize buttons
  const button = d3$1.select("#primary-responsible-departments").select('div#container3');
  button.append('div').attr('id','year2013').text("2013").style("text-align","center");
  button.append('div').attr('id','year2014').text("2014").style("text-align","center");
  button.append('div').attr('id','year2015').text("2015").style("text-align","center");
  button.append('div').attr('id','year2016').text("2016").style("text-align","center");
  button.append('div').attr('id','year2017').text("2017").style("text-align","center");
  button.append('div').attr('id','year2018').text("2018").style("text-align","center");
  button.append('div').attr('id','year2019').text("2019").style("text-align","center");
  button.append('div').attr('id','year2020').text("2020").style("text-align","center");
  button.append('div').attr('id','year2021').text("2021").style("text-align","center");

  var str = "PRIMARY,TITLE\nENG CCLS Research,14\nENG CCLS,1\nENG DATA SCIENCE General,1\nDSI Research General,0\nDSI Research STATS,0\nENG DATA SCIENCE,0\nENG DATA SCIENCE Research,0";
  draw(str);
  d3.select("#year2013").style("background-color","palevioletred");

  // call functions when click
  d3.selectAll("div")
      .on("click", function () {
        var paraID = d3.select(this).attr("id");
        if (paraID == "year2013") {
          	d3.select("#year2013").style("background-color","palevioletred");
          	d3.select("#year2014").style("background-color","pink");
          	d3.select("#year2015").style("background-color","pink");
          	d3.select("#year2016").style("background-color","pink");
          	d3.select("#year2017").style("background-color","pink");
          	d3.select("#year2018").style("background-color","pink");
          	d3.select("#year2019").style("background-color","pink");
          	d3.select("#year2020").style("background-color","pink");
          	d3.select("#year2021").style("background-color","pink");
  					var str = "PRIMARY,TITLE\nENG CCLS Research,14\nENG CCLS,1\nENG DATA SCIENCE General,1\nDSI Research General,0\nDSI Research STATS,0\nENG DATA SCIENCE,0\nENG DATA SCIENCE Research,0";
            draw(str);
          } else if (paraID == "year2014") {
          	d3.select("#year2014").style("background-color","palevioletred");
          	d3.select("#year2013").style("background-color","pink");
          	d3.select("#year2015").style("background-color","pink");
          	d3.select("#year2016").style("background-color","pink");
          	d3.select("#year2017").style("background-color","pink");
          	d3.select("#year2018").style("background-color","pink");
          	d3.select("#year2019").style("background-color","pink");
          	d3.select("#year2020").style("background-color","pink");
          	d3.select("#year2021").style("background-color","pink");
  					var str = "PRIMARY,TITLE\nENG DATA SCIENCE Research,15\nENG CCLS Research,12\nENG DATA SCIENCE General,1\nDSI Research General,0\nDSI Research STATS,0\nENG CCLS,0\nENG DATA SCIENCE,0";
            draw(str);
            d3.select("rect")
    .on("click", function(event) {
      d3.select("svg").append("text").attr("x","700").attr("y","200")
        .text(`(${d3.pointer(event).map(Math.round)})`);
        });
          } else if (paraID == "year2015") {
          	d3.select("#year2015").style("background-color","palevioletred");
          	d3.select("#year2013").style("background-color","pink");
          	d3.select("#year2014").style("background-color","pink");
          	d3.select("#year2016").style("background-color","pink");
          	d3.select("#year2017").style("background-color","pink");
          	d3.select("#year2018").style("background-color","pink");
          	d3.select("#year2019").style("background-color","pink");
          	d3.select("#year2020").style("background-color","pink");
          	d3.select("#year2021").style("background-color","pink");
  					var str = "PRIMARY,TITLE\nENG DATA SCIENCE Research,60\nENG CCLS Research,17\nENG DATA SCIENCE General,6\nENG DATA SCIENCE,1\nDSI REsearch General,0\nDSI Research STATS,0\nENG CCLS,0";
            draw(str);
          } else if (paraID == "year2016") {
            d3.select("#year2016").style("background-color","palevioletred");
            d3.select("#year2013").style("background-color","pink");
          	d3.select("#year2014").style("background-color","pink");
          	d3.select("#year2015").style("background-color","pink");
          	d3.select("#year2017").style("background-color","pink");
          	d3.select("#year2018").style("background-color","pink");
          	d3.select("#year2019").style("background-color","pink");
          	d3.select("#year2020").style("background-color","pink");
          	d3.select("#year2021").style("background-color","pink");
  					var str = "PRIMARY,TITLE\nENG DATA SCIENCE Research,66\nENG CCLS Research,13\nENG DATA SCIENCE General,1\nDSI REsearch General,0\nDSI Research STATS,0\nENG CCLS,0\nENG DATA SCIENCE,0";
            draw(str);
          } else if (paraID == "year2017") {
          	d3.select("#year2017").style("background-color","palevioletred");
          	d3.select("#year2013").style("background-color","pink");
          	d3.select("#year2014").style("background-color","pink");
          	d3.select("#year2015").style("background-color","pink");
          	d3.select("#year2016").style("background-color","pink");
          	d3.select("#year2018").style("background-color","pink");
          	d3.select("#year2019").style("background-color","pink");
          	d3.select("#year2020").style("background-color","pink");
          	d3.select("#year2021").style("background-color","pink");
  					var str = "PRIMARY,TITLE\nENG DATA SCIENCE Research,101\nENG CCLS Research,4\nENG DATA SCIENCE,1\nENG DATA SCIENCE General,1\nDSI REsearch General,0\nDSI Research STATS,0\nENG CCLS,0";
            draw(str);
          } else if (paraID == "year2018") {
          	d3.select("#year2018").style("background-color","palevioletred");
          	d3.select("#year2013").style("background-color","pink");
          	d3.select("#year2014").style("background-color","pink");
          	d3.select("#year2015").style("background-color","pink");
          	d3.select("#year2016").style("background-color","pink");
          	d3.select("#year2017").style("background-color","pink");
          	d3.select("#year2019").style("background-color","pink");
          	d3.select("#year2020").style("background-color","pink");
          	d3.select("#year2021").style("background-color","pink");
  					var str = "PRIMARY,TITLE\nENG DATA SCIENCE Research,104\nENG CCLS Research,0\nENG DATA SCIENCE,0\nENG DATA SCIENCE General,0\nDSI REsearch General,0\nDSI Research STATS,0\nENG CCLS,0";
            draw(str);
          } else if (paraID == "year2019") {
          	d3.select("#year2019").style("background-color","palevioletred");
            d3.select("#year2013").style("background-color","pink");
          	d3.select("#year2014").style("background-color","pink");
          	d3.select("#year2015").style("background-color","pink");
          	d3.select("#year2016").style("background-color","pink");
          	d3.select("#year2017").style("background-color","pink");
          	d3.select("#year2018").style("background-color","pink");
          	d3.select("#year2020").style("background-color","pink");
          	d3.select("#year2021").style("background-color","pink");
  					var str = "PRIMARY,TITLE\nENG DATA SCIENCE Research,87\nDSI Research General,11\nDSI Research STATS,4\nENG CCLS Research,1\nENG CCLS,0\nENG DATA SCIENCE,0\nENG DATA SCIENCE General,0";
            draw(str);
          } else if (paraID == "year2020") {
          	d3.select("#year2020").style("background-color","palevioletred");
          	d3.select("#year2013").style("background-color","pink");
          	d3.select("#year2014").style("background-color","pink");
          	d3.select("#year2015").style("background-color","pink");
          	d3.select("#year2016").style("background-color","pink");
          	d3.select("#year2017").style("background-color","pink");
          	d3.select("#year2018").style("background-color","pink");
          	d3.select("#year2019").style("background-color","pink");
          	d3.select("#year2021").style("background-color","pink");
  					var str = "PRIMARY,TITLE\nENG DATA SCIENCE Research,73\nDSI Research General,12\nDSI Research STATS,1\nENG DATA SCIENCE General,1\nENG CCLS,0\nENG CCLS Research,0\nENG DATA SCIENCE,0";
            draw(str);
          } else if (paraID == "year2021") {
          	d3.select("#year2021").style("background-color","palevioletred");
          	d3.select("#year2013").style("background-color","pink");
          	d3.select("#year2014").style("background-color","pink");
          	d3.select("#year2015").style("background-color","pink");
          	d3.select("#year2016").style("background-color","pink");
          	d3.select("#year2017").style("background-color","pink");
          	d3.select("#year2018").style("background-color","pink");
          	d3.select("#year2019").style("background-color","pink");
          	d3.select("#year2020").style("background-color","pink");
  					var str = "PRIMARY,TITLE\nENG DATA SCIENCE Research,68\nDSI Research General,13\nDSI Research STATS,0\nENG DATA SCIENCE General,0\nENG CCLS,0\nENG CCLS Research,0\nENG DATA SCIENCE,0";
            draw(str);
          } 
        });


  function draw(str) {
    
    var data = getdata(str);
    
    var prewidth = {};
  	svg.selectAll('rect.bars')
   		 .each(function(d, i) {
      	 // prewidth.push({key: d.Occupations,value:d.year});
      prewidth[d.Occupations] = d.year;
    	 });
    const xValue = data => data.year;
    const yValue = data => data.Occupations;
    
    xScale.domain([0, 110]); 
    yScale.domain(data.map(yValue));


    var bars = svg.selectAll(".bars")
      .data(data, yValue);
      

    d3.select(".y_axis")
      .transition()
      .duration(1000)
      .call(yAxis);

    d3.select(".x_axis")
      .transition()
      .duration(1000)
      .delay(20)
      .call(xAxis); 
    
    bars.exit()
      .transition()
      .duration(2000)
    	.delay(0)
      .attr("width", 0)
      .remove();
   
    var merged_bars = bars.enter()
      .append("rect") 
      .attr("class", "bars")
    	.attr("transform", `translate(0,${margin.top})`)
      .attr("x", margin.left)
      .attr("y", d => yScale(yValue(d)))
      .attr("width", 0)
      .attr("height", yScale.bandwidth())
      .merge(bars);
      
    	var present_value = {};
    
      merged_bars.transition()
      .duration(2000)
    	.attr("fill",function(d,i){
        present_value[d.Occupations] = d.year;
        console.log(d.Occupations);
        console.log("present",i,present_value[d.Occupations]);
        console.log("pre",i,prewidth[d.Occupations]);
      if (present_value[d.Occupations] > prewidth[d.Occupations] || prewidth[d.Occupations] == 0 || typeof prewidth[d.Occupations] == "undefined")
        {return "palevioletred"}
       else {return "pink"}
     })
      .attr("y", d => yScale(yValue(d)))
      .attr("width", d => xScale(xValue(d)));  
  }

  function getdata(str){
    
  var data = d3.csvParse(str,function(d){
  	    return {
        	Occupations: d.PRIMARY, 
          year:+d.TITLE
      }; 
  });
    return data;
    
  }

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHNlbGVjdCxcbiAgY3N2LFxuICBzY2FsZUxpbmVhcixcbiAgbWF4LFxuICBzY2FsZUJhbmQsXG4gIGF4aXNMZWZ0LFxuICBheGlzQm90dG9tLFxuICBmb3JtYXQsXG4gIG1hcFxufSBmcm9tICdkMyc7XG5cblxuLy8gc2V0IHRoZSBpbml0aWFsIG1hcmdpbiwgd2lkdGgsIGhlaWdodFxudmFyIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDQ3LCBsZWZ0OiAyMDAgfTtcbnZhciBzdmcgPSBzZWxlY3QoJ3N2ZycpO1x0XG52YXIgd2lkdGggPSArc3ZnLmF0dHIoJ3dpZHRoJyk7XG52YXIgaGVpZ2h0ID0gK3N2Zy5hdHRyKCdoZWlnaHQnKTtcbnZhciBpbm5lcldpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbnZhciBpbm5lckhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4vLyBzZXQgdGl0bGUgYW5kIGF4aXMgbmFtZXNcbmNvbnN0IHRpdGxlVGV4dCA9ICdOdW1iZXIgb2YgUHJvcG9zYWxzIGZvciBQcmltYXJ5IERlcGFydG1lbnRzJztcbmNvbnN0IHhBeGlzTGFiZWxUZXh0ID0gJ1BvcHVsYXRpb24nO1xuXG4vLyBzZXQgeC1zY2FsZSBhbmQgeC1heGlzXG5jb25zdCB4QXhpc1RpY2tGb3JtYXQgPSBudW1iZXIgPT4gZm9ybWF0KCcuMHMnKShudW1iZXIpLnJlcGxhY2UoJ0cnLCAnQicpO1xudmFyIHhTY2FsZSA9IHNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIGlubmVyV2lkdGhdKTtcbnZhciB4QXhpcyA9IGF4aXNCb3R0b20oeFNjYWxlKS50aWNrRm9ybWF0KHhBeGlzVGlja0Zvcm1hdCkudGlja1NpemUoLWlubmVySGVpZ2h0KTtcblxuc3ZnLmFwcGVuZChcImdcIilcbiAgLmF0dHIoXCJjbGFzc1wiLCBcInhfYXhpc1wiKVxuICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7aGVpZ2h0IC0gbWFyZ2luLmJvdHRvbX0pYClcbiAgLmNhbGwoeEF4aXMpOyAgXG5cbi8vIHNldCB5LXNjYWxlIGFuZCB5LWF4aXNcbnZhciB5U2NhbGUgPSBzY2FsZUJhbmQoKS5yYW5nZShbMCwgaW5uZXJIZWlnaHRdKS5wYWRkaW5nKDAuMSk7XG52YXIgeUF4aXMgPSBkMy5heGlzTGVmdCh5U2NhbGUpLnRpY2tTaXplT3V0ZXIoMCk7XG4gIFxuc3ZnLmFwcGVuZChcImdcIilcbiAgLmF0dHIoXCJjbGFzc1wiLCBcInlfYXhpc1wiKVxuICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYClcbiAgLmNhbGwoeUF4aXMpOyAgXG5cbiAgc3ZnLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAneEF4aXNMYWJlbFRleHQnKVxuICBcdFx0LmF0dHIoJ3gnLDU1MClcbiAgICAgIC5hdHRyKCd5JywgNDQwKVxuICAgICAgLnRleHQoeEF4aXNMYWJlbFRleHQpO1xuICBzdmcuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd0aXRsZScpXG4gIFx0XHQuYXR0cigneCcsMjgwKVxuICAgICAgLmF0dHIoJ3knLCAzNSlcbiAgICAgIC50ZXh0KHRpdGxlVGV4dCk7XG5cblxuXG4vLyBpbml0aWFsaXplIGJ1dHRvbnNcbmNvbnN0IGJ1dHRvbiA9IHNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JykuYXR0cihcImlkXCIsXCJjb250YWluZXJcIilcbmJ1dHRvbi5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywneWVhcjIwMTMnKS50ZXh0KFwiMjAxM1wiKS5zdHlsZShcInRleHQtYWxpZ25cIixcImNlbnRlclwiKVxuYnV0dG9uLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCd5ZWFyMjAxNCcpLnRleHQoXCIyMDE0XCIpLnN0eWxlKFwidGV4dC1hbGlnblwiLFwiY2VudGVyXCIpXG5idXR0b24uYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsJ3llYXIyMDE1JykudGV4dChcIjIwMTVcIikuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsXCJjZW50ZXJcIilcbmJ1dHRvbi5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywneWVhcjIwMTYnKS50ZXh0KFwiMjAxNlwiKS5zdHlsZShcInRleHQtYWxpZ25cIixcImNlbnRlclwiKVxuYnV0dG9uLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCd5ZWFyMjAxNycpLnRleHQoXCIyMDE3XCIpLnN0eWxlKFwidGV4dC1hbGlnblwiLFwiY2VudGVyXCIpXG5idXR0b24uYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsJ3llYXIyMDE4JykudGV4dChcIjIwMThcIikuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsXCJjZW50ZXJcIilcbmJ1dHRvbi5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywneWVhcjIwMTknKS50ZXh0KFwiMjAxOVwiKS5zdHlsZShcInRleHQtYWxpZ25cIixcImNlbnRlclwiKVxuYnV0dG9uLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCd5ZWFyMjAyMCcpLnRleHQoXCIyMDIwXCIpLnN0eWxlKFwidGV4dC1hbGlnblwiLFwiY2VudGVyXCIpXG5idXR0b24uYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsJ3llYXIyMDIxJykudGV4dChcIjIwMjFcIikuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsXCJjZW50ZXJcIilcblxudmFyIHN0ciA9IFwiUFJJTUFSWSxUSVRMRVxcbkVORyBDQ0xTIFJlc2VhcmNoLDE0XFxuRU5HIENDTFMsMVxcbkVORyBEQVRBIFNDSUVOQ0UgR2VuZXJhbCwxXFxuRFNJIFJlc2VhcmNoIEdlbmVyYWwsMFxcbkRTSSBSZXNlYXJjaCBTVEFUUywwXFxuRU5HIERBVEEgU0NJRU5DRSwwXFxuRU5HIERBVEEgU0NJRU5DRSBSZXNlYXJjaCwwXCJcbmRyYXcoc3RyKVxuZDMuc2VsZWN0KFwiI3llYXIyMDEzXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGFsZXZpb2xldHJlZFwiKVxuXG4vLyBjYWxsIGZ1bmN0aW9ucyB3aGVuIGNsaWNrXG5kMy5zZWxlY3RBbGwoXCJkaXZcIilcbiAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGFyYUlEID0gZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJpZFwiKTtcbiAgICAgIGlmIChwYXJhSUQgPT0gXCJ5ZWFyMjAxM1wiKSB7XG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDEzXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGFsZXZpb2xldHJlZFwiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTVcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE2XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxN1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMThcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE5XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAyMFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjFcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG5cdFx0XHRcdFx0dmFyIHN0ciA9IFwiUFJJTUFSWSxUSVRMRVxcbkVORyBDQ0xTIFJlc2VhcmNoLDE0XFxuRU5HIENDTFMsMVxcbkVORyBEQVRBIFNDSUVOQ0UgR2VuZXJhbCwxXFxuRFNJIFJlc2VhcmNoIEdlbmVyYWwsMFxcbkRTSSBSZXNlYXJjaCBTVEFUUywwXFxuRU5HIERBVEEgU0NJRU5DRSwwXFxuRU5HIERBVEEgU0NJRU5DRSBSZXNlYXJjaCwwXCJcbiAgICAgICAgICBkcmF3KHN0cilcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhSUQgPT0gXCJ5ZWFyMjAxNFwiKSB7XG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE0XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGFsZXZpb2xldHJlZFwiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxM1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTVcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE2XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxN1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMThcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE5XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAyMFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjFcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG5cdFx0XHRcdFx0dmFyIHN0ciA9IFwiUFJJTUFSWSxUSVRMRVxcbkVORyBEQVRBIFNDSUVOQ0UgUmVzZWFyY2gsMTVcXG5FTkcgQ0NMUyBSZXNlYXJjaCwxMlxcbkVORyBEQVRBIFNDSUVOQ0UgR2VuZXJhbCwxXFxuRFNJIFJlc2VhcmNoIEdlbmVyYWwsMFxcbkRTSSBSZXNlYXJjaCBTVEFUUywwXFxuRU5HIENDTFMsMFxcbkVORyBEQVRBIFNDSUVOQ0UsMFwiXG4gICAgICAgICAgZHJhdyhzdHIpXG4gICAgICAgICAgZDMuc2VsZWN0KFwicmVjdFwiKVxuICAub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGQzLnNlbGVjdChcInN2Z1wiKS5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsXCI3MDBcIikuYXR0cihcInlcIixcIjIwMFwiKVxuICAgICAgLnRleHQoYCgke2QzLnBvaW50ZXIoZXZlbnQpLm1hcChNYXRoLnJvdW5kKX0pYClcbiAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcmFJRCA9PSBcInllYXIyMDE1XCIpIHtcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTVcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwYWxldmlvbGV0cmVkXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDEzXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTZcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE3XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxOFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTlcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDIwXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAyMVwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcblx0XHRcdFx0XHR2YXIgc3RyID0gXCJQUklNQVJZLFRJVExFXFxuRU5HIERBVEEgU0NJRU5DRSBSZXNlYXJjaCw2MFxcbkVORyBDQ0xTIFJlc2VhcmNoLDE3XFxuRU5HIERBVEEgU0NJRU5DRSBHZW5lcmFsLDZcXG5FTkcgREFUQSBTQ0lFTkNFLDFcXG5EU0kgUkVzZWFyY2ggR2VuZXJhbCwwXFxuRFNJIFJlc2VhcmNoIFNUQVRTLDBcXG5FTkcgQ0NMUywwXCJcbiAgICAgICAgICBkcmF3KHN0cilcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhSUQgPT0gXCJ5ZWFyMjAxNlwiKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KFwiI3llYXIyMDE2XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGFsZXZpb2xldHJlZFwiKVxuICAgICAgICAgIGQzLnNlbGVjdChcIiN5ZWFyMjAxM1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTRcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE1XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxN1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMThcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE5XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAyMFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjFcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG5cdFx0XHRcdFx0dmFyIHN0ciA9IFwiUFJJTUFSWSxUSVRMRVxcbkVORyBEQVRBIFNDSUVOQ0UgUmVzZWFyY2gsNjZcXG5FTkcgQ0NMUyBSZXNlYXJjaCwxM1xcbkVORyBEQVRBIFNDSUVOQ0UgR2VuZXJhbCwxXFxuRFNJIFJFc2VhcmNoIEdlbmVyYWwsMFxcbkRTSSBSZXNlYXJjaCBTVEFUUywwXFxuRU5HIENDTFMsMFxcbkVORyBEQVRBIFNDSUVOQ0UsMFwiXG4gICAgICAgICAgZHJhdyhzdHIpXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYUlEID09IFwieWVhcjIwMTdcIikge1xuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxN1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBhbGV2aW9sZXRyZWRcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTNcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE0XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNVwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTZcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE4XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxOVwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjBcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDIxXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuXHRcdFx0XHRcdHZhciBzdHIgPSBcIlBSSU1BUlksVElUTEVcXG5FTkcgREFUQSBTQ0lFTkNFIFJlc2VhcmNoLDEwMVxcbkVORyBDQ0xTIFJlc2VhcmNoLDRcXG5FTkcgREFUQSBTQ0lFTkNFLDFcXG5FTkcgREFUQSBTQ0lFTkNFIEdlbmVyYWwsMVxcbkRTSSBSRXNlYXJjaCBHZW5lcmFsLDBcXG5EU0kgUmVzZWFyY2ggU1RBVFMsMFxcbkVORyBDQ0xTLDBcIlxuICAgICAgICAgIGRyYXcoc3RyKVxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFJRCA9PSBcInllYXIyMDE4XCIpIHtcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMThcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwYWxldmlvbGV0cmVkXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDEzXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTVcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE2XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxN1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTlcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDIwXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAyMVwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcblx0XHRcdFx0XHR2YXIgc3RyID0gXCJQUklNQVJZLFRJVExFXFxuRU5HIERBVEEgU0NJRU5DRSBSZXNlYXJjaCwxMDRcXG5FTkcgQ0NMUyBSZXNlYXJjaCwwXFxuRU5HIERBVEEgU0NJRU5DRSwwXFxuRU5HIERBVEEgU0NJRU5DRSBHZW5lcmFsLDBcXG5EU0kgUkVzZWFyY2ggR2VuZXJhbCwwXFxuRFNJIFJlc2VhcmNoIFNUQVRTLDBcXG5FTkcgQ0NMUywwXCJcbiAgICAgICAgICBkcmF3KHN0cilcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhSUQgPT0gXCJ5ZWFyMjAxOVwiKSB7XG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE5XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGFsZXZpb2xldHJlZFwiKVxuICAgICAgICAgIGQzLnNlbGVjdChcIiN5ZWFyMjAxM1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTRcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE1XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNlwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTdcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE4XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAyMFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjFcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG5cdFx0XHRcdFx0dmFyIHN0ciA9IFwiUFJJTUFSWSxUSVRMRVxcbkVORyBEQVRBIFNDSUVOQ0UgUmVzZWFyY2gsODdcXG5EU0kgUmVzZWFyY2ggR2VuZXJhbCwxMVxcbkRTSSBSZXNlYXJjaCBTVEFUUyw0XFxuRU5HIENDTFMgUmVzZWFyY2gsMVxcbkVORyBDQ0xTLDBcXG5FTkcgREFUQSBTQ0lFTkNFLDBcXG5FTkcgREFUQSBTQ0lFTkNFIEdlbmVyYWwsMFwiXG4gICAgICAgICAgZHJhdyhzdHIpXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYUlEID09IFwieWVhcjIwMjBcIikge1xuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAyMFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBhbGV2aW9sZXRyZWRcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTNcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE0XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNVwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTZcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE3XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxOFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTlcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDIxXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuXHRcdFx0XHRcdHZhciBzdHIgPSBcIlBSSU1BUlksVElUTEVcXG5FTkcgREFUQSBTQ0lFTkNFIFJlc2VhcmNoLDczXFxuRFNJIFJlc2VhcmNoIEdlbmVyYWwsMTJcXG5EU0kgUmVzZWFyY2ggU1RBVFMsMVxcbkVORyBEQVRBIFNDSUVOQ0UgR2VuZXJhbCwxXFxuRU5HIENDTFMsMFxcbkVORyBDQ0xTIFJlc2VhcmNoLDBcXG5FTkcgREFUQSBTQ0lFTkNFLDBcIlxuICAgICAgICAgIGRyYXcoc3RyKVxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFJRCA9PSBcInllYXIyMDIxXCIpIHtcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjFcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwYWxldmlvbGV0cmVkXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDEzXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTVcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE2XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxN1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMThcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE5XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAyMFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcblx0XHRcdFx0XHR2YXIgc3RyID0gXCJQUklNQVJZLFRJVExFXFxuRU5HIERBVEEgU0NJRU5DRSBSZXNlYXJjaCw2OFxcbkRTSSBSZXNlYXJjaCBHZW5lcmFsLDEzXFxuRFNJIFJlc2VhcmNoIFNUQVRTLDBcXG5FTkcgREFUQSBTQ0lFTkNFIEdlbmVyYWwsMFxcbkVORyBDQ0xTLDBcXG5FTkcgQ0NMUyBSZXNlYXJjaCwwXFxuRU5HIERBVEEgU0NJRU5DRSwwXCJcbiAgICAgICAgICBkcmF3KHN0cilcbiAgICAgICAgfSBcbiAgICAgIH0pO1xuXG5cbmZ1bmN0aW9uIGRyYXcoc3RyKSB7XG4gIFxuICB2YXIgZGF0YSA9IGdldGRhdGEoc3RyKVxuICBcbiAgdmFyIHByZXdpZHRoID0ge307XG5cdHN2Zy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpXG4gXHRcdCAuZWFjaChmdW5jdGlvbihkLCBpKSB7XG4gICAgXHQgLy8gcHJld2lkdGgucHVzaCh7a2V5OiBkLk9jY3VwYXRpb25zLHZhbHVlOmQueWVhcn0pO1xuICAgIHByZXdpZHRoW2QuT2NjdXBhdGlvbnNdID0gZC55ZWFyXG4gIFx0IH0pO1xuICBjb25zdCB4VmFsdWUgPSBkYXRhID0+IGRhdGEueWVhcjtcbiAgY29uc3QgeVZhbHVlID0gZGF0YSA9PiBkYXRhLk9jY3VwYXRpb25zO1xuICBcbiAgeFNjYWxlLmRvbWFpbihbMCwgMTEwXSkgXG4gIHlTY2FsZS5kb21haW4oZGF0YS5tYXAoeVZhbHVlKSlcblxuXG4gIHZhciBiYXJzID0gc3ZnLnNlbGVjdEFsbChcIi5iYXJzXCIpXG4gICAgLmRhdGEoZGF0YSwgeVZhbHVlKTtcbiAgICBcblxuICBkMy5zZWxlY3QoXCIueV9heGlzXCIpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigxMDAwKVxuICAgIC5jYWxsKHlBeGlzKTtcblxuICBkMy5zZWxlY3QoXCIueF9heGlzXCIpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigxMDAwKVxuICAgIC5kZWxheSgyMClcbiAgICAuY2FsbCh4QXhpcyk7IFxuICBcbiAgYmFycy5leGl0KClcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDIwMDApXG4gIFx0LmRlbGF5KDApXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCAwKVxuICAgIC5yZW1vdmUoKTtcbiBcbiAgdmFyIG1lcmdlZF9iYXJzID0gYmFycy5lbnRlcigpXG4gICAgLmFwcGVuZChcInJlY3RcIikgXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhcnNcIilcbiAgXHQuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsJHttYXJnaW4udG9wfSlgKVxuICAgIC5hdHRyKFwieFwiLCBtYXJnaW4ubGVmdClcbiAgICAuYXR0cihcInlcIiwgZCA9PiB5U2NhbGUoeVZhbHVlKGQpKSlcbiAgICAuYXR0cihcIndpZHRoXCIsIDApXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgeVNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIC5tZXJnZShiYXJzKVxuICAgIFxuICBcdHZhciBwcmVzZW50X3ZhbHVlID0ge307XG4gIFxuICAgIG1lcmdlZF9iYXJzLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigyMDAwKVxuICBcdC5hdHRyKFwiZmlsbFwiLGZ1bmN0aW9uKGQsaSl7XG4gICAgICBwcmVzZW50X3ZhbHVlW2QuT2NjdXBhdGlvbnNdID0gZC55ZWFyO1xuICAgICAgY29uc29sZS5sb2coZC5PY2N1cGF0aW9ucyk7XG4gICAgICBjb25zb2xlLmxvZyhcInByZXNlbnRcIixpLHByZXNlbnRfdmFsdWVbZC5PY2N1cGF0aW9uc10pXG4gICAgICBjb25zb2xlLmxvZyhcInByZVwiLGkscHJld2lkdGhbZC5PY2N1cGF0aW9uc10pO1xuICAgIGlmIChwcmVzZW50X3ZhbHVlW2QuT2NjdXBhdGlvbnNdID4gcHJld2lkdGhbZC5PY2N1cGF0aW9uc10gfHwgcHJld2lkdGhbZC5PY2N1cGF0aW9uc10gPT0gMCB8fCB0eXBlb2YgcHJld2lkdGhbZC5PY2N1cGF0aW9uc10gPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgIHtyZXR1cm4gXCJwYWxldmlvbGV0cmVkXCJ9XG4gICAgIGVsc2Uge3JldHVybiBcInBpbmtcIn1cbiAgIH0pXG4gICAgLmF0dHIoXCJ5XCIsIGQgPT4geVNjYWxlKHlWYWx1ZShkKSkpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBkID0+IHhTY2FsZSh4VmFsdWUoZCkpKSAgXG59XG5cbmZ1bmN0aW9uIGdldGRhdGEoc3RyKXtcbiAgXG52YXIgZGF0YSA9IGQzLmNzdlBhcnNlKHN0cixmdW5jdGlvbihkKXtcblx0ICAgIHJldHVybiB7XG4gICAgICBcdE9jY3VwYXRpb25zOiBkLlBSSU1BUlksIFxuICAgICAgICB5ZWFyOitkLlRJVExFXG4gICAgfTsgXG59KTtcbiAgcmV0dXJuIGRhdGE7XG4gIFxufVxuIl0sIm5hbWVzIjpbInNlbGVjdCIsImZvcm1hdCIsInNjYWxlTGluZWFyIiwiYXhpc0JvdHRvbSIsInNjYWxlQmFuZCJdLCJtYXBwaW5ncyI6Ijs7O0VBYUE7RUFDQSxJQUFJLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztFQUMzRCxJQUFJLEdBQUcsR0FBR0EsV0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ3hCLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUMvQixJQUFJLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7RUFDakMsSUFBSSxVQUFVLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztFQUNwRCxJQUFJLFdBQVcsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ3REO0VBQ0E7RUFDQSxNQUFNLFNBQVMsR0FBRyw2Q0FBNkMsQ0FBQztFQUNoRSxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUM7QUFDcEM7RUFDQTtFQUNBLE1BQU0sZUFBZSxHQUFHLE1BQU0sSUFBSUMsV0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDMUUsSUFBSSxNQUFNLEdBQUdDLGdCQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztFQUNsRCxJQUFJLEtBQUssR0FBR0MsZUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNsRjtFQUNBLEdBQUcs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RUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsZUFBZSxFQUFDO0VBQ3pFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLEtBQUssSUFBSSxHQUFHLEdBQUcsNktBQTRLO0VBQzNMLFVBQVUsSUFBSSxDQUFDLEdBQUcsRUFBQztFQUNuQixTQUFTLE1BQU0sSUFBSSxNQUFNLElBQUksVUFBVSxFQUFFO0VBQ3pDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsZUFBZSxFQUFDO0VBQ3pFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLEtBQUssSUFBSSxHQUFHLEdBQUcsOEtBQTZLO0VBQzVMLFVBQVUsSUFBSSxDQUFDLEdBQUcsRUFBQztFQUNuQixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQzNCLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLEtBQUssRUFBRTtFQUMvQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7RUFDbkUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO0VBQ3JELE9BQU8sQ0FBQyxDQUFDO0VBQ1QsU0FBUyxNQUFNLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtFQUN6QyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBQztFQUN6RSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxLQUFLLElBQUksR0FBRyxHQUFHLDhLQUE2SztFQUM1TCxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUM7RUFDbkIsU0FBUyxNQUFNLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtFQUN6QyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBQztFQUMxRSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNqRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxLQUFLLElBQUksR0FBRyxHQUFHLDhLQUE2SztFQUM1TCxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUM7RUFDbkIsU0FBUyxNQUFNLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtFQUN6QyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBQztFQUN6RSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxLQUFLLElBQUksR0FBRyxHQUFHLDhLQUE2SztFQUM1TCxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUM7RUFDbkIsU0FBUyxNQUFNLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtFQUN6QyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBQztFQUN6RSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxLQUFLLElBQUksR0FBRyxHQUFHLDhLQUE2SztFQUM1TCxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUM7RUFDbkIsU0FBUyxNQUFNLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtFQUN6QyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBQztFQUN6RSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNqRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxLQUFLLElBQUksR0FBRyxHQUFHLDhLQUE2SztFQUM1TCxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUM7RUFDbkIsU0FBUyxNQUFNLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtFQUN6QyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBQztFQUN6RSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxLQUFLLElBQUksR0FBRyxHQUFHLDhLQUE2SztFQUM1TCxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUM7RUFDbkIsU0FBUyxNQUFNLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtFQUN6QyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBQztFQUN6RSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztF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QUMsT0FBTyxNQUFNLENBQUM7RUFDekIsSUFBSSxDQUFDO0VBQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdEMsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7RUFDMUMsQ0FBQztBQUNEO0VBQ0EsU0FBUyxPQUFPLENBQUMsR0FBRyxDQUFDO0VBQ3JCO0VBQ0EsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDdEMsS0FBSyxPQUFPO0VBQ1osT0FBTyxXQUFXLEVBQUUsQ0FBQyxDQUFDLE9BQU87RUFDN0IsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztFQUNyQixLQUFLLENBQUM7RUFDTixDQUFDLENBQUMsQ0FBQztFQUNILEVBQUUsT0FBTyxJQUFJLENBQUM7RUFDZDtFQUNBOzs7OyJ9
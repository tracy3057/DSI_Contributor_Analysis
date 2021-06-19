(function (d3$1) {
  'use strict';

  // set the initial margin, width, height
  var margin = { top: 50, right: 40, bottom: 47, left: 200 };
  var svg = d3$1.select('div#svg-container').append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 600 400")
  .classed("svg-content", true);
  var width = 600;
  var height = 400;
  var innerWidth = width - margin.left - margin.right;
  var innerHeight = height - margin.top - margin.bottom;

  // set title and axis names
  const titleText = 'Proposals in Home Departments';
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
    		.attr('x',300)
        .attr('y', 390)
        .text(xAxisLabelText);
    svg.append('text')
        .attr('class', 'title')
    		.attr('x',190)
        .attr('y', 35)
        .text(titleText);



  // initialize buttons
  const button = d3$1.select("#proposals-per-year-1").select('div#container');
  button.append('div').attr('id','year2013').text("2013").style("text-align","center");
  button.append('div').attr('id','year2014').text("2014").style("text-align","center");
  button.append('div').attr('id','year2015').text("2015").style("text-align","center");
  button.append('div').attr('id','year2016').text("2016").style("text-align","center");
  button.append('div').attr('id','year2017').text("2017").style("text-align","center");
  button.append('div').attr('id','year2018').text("2018").style("text-align","center");
  button.append('div').attr('id','year2019').text("2019").style("text-align","center");
  button.append('div').attr('id','year2020').text("2020").style("text-align","center");
  button.append('div').attr('id','year2021').text("2021").style("text-align","center");

  var str = "PRIMARY,TITLE\nDSI General,11\nENG Computer Science,10\nA&S Columbia Astrophysics Lab,1\nENG Electrical Engineering,1\nENG Industrial Engr & OR,0";
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
  					var str = "PRIMARY,TITLE\nDSI General,11\nENG Computer Science,10\nA&S Columbia Astrophysics Lab,1\nENG Electrical Engineering,1\nENG Industrial Engr & OR,0";
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
  					var str = "PRIMARY,TITLE\nDSI General,21\nENG Computer Science,17\nA&S Columbia Astrophysics Lab,14\nENG Electrical Engineering,3\nENG Industrial Engr & OR,2";
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
  					var str = "PRIMARY,TITLE\nDSI General,79\nENG Computer Science,43\nA&S Columbia Astrophysics Lab,21\nENG Industrial Engr & OR,8\nENG Electrical Engineering,7";
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
  					var str = "PRIMARY,TITLE\nDSI General,78\nENG Computer Science,38\nA&S Columbia Astrophysics Lab,33\nENG Electrical Engineering,14\nENG Industrial Engr & OR,9";
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
  					var str = "PRIMARY,TITLE\nDSI General,107\nENG Computer Science,39\nA&S Columbia Astrophysics Lab,38\nENG Electrical Engineering,34\nENG Industrial Engr & OR,10";
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
  					var str = "PRIMARY,TITLE\nDSI General,104\nA&S Columbia Astrophysics Lab,102\nENG Computer Science,33\nENG Electrical Engineering,26\nENG Industrial Engr & OR,10";
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
  					var str = "PRIMARY,TITLE\nDSI General,103\nA&S Columbia Astrophysics Lab,101\nENG Computer Science,36\nENG Electrical Engineering,32\nENG Industrial Engr & OR,15";
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
  					var str = "PRIMARY,TITLE\nDSI General,87\nENG Computer Science,27\nENG Electrical Engineering,24\nA&S Columbia Astrophysics Lab,12\nENG Industrial Engr & OR,11";
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
  					var str = "PRIMARY,TITLE\nDSI General,81\nENG Electrical Engineering,25\nENG Computer Science,23\nENG Industrial Engr & OR,11\nA&S Columbia Astrophysics Lab,0";
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHNlbGVjdCxcbiAgY3N2LFxuICBzY2FsZUxpbmVhcixcbiAgbWF4LFxuICBzY2FsZUJhbmQsXG4gIGF4aXNMZWZ0LFxuICBheGlzQm90dG9tLFxuICBmb3JtYXQsXG4gIG1hcFxufSBmcm9tICdkMyc7XG5cblxuLy8gc2V0IHRoZSBpbml0aWFsIG1hcmdpbiwgd2lkdGgsIGhlaWdodFxudmFyIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDQwLCBib3R0b206IDQ3LCBsZWZ0OiAyMDAgfTtcbnZhciBzdmcgPSBzZWxlY3QoJ3N2ZyNmaXJzdCcpO1x0XG52YXIgd2lkdGggPSArc3ZnLmF0dHIoJ3dpZHRoJyk7XG52YXIgaGVpZ2h0ID0gK3N2Zy5hdHRyKCdoZWlnaHQnKTtcbnZhciBpbm5lcldpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbnZhciBpbm5lckhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4vLyBzZXQgdGl0bGUgYW5kIGF4aXMgbmFtZXNcbmNvbnN0IHRpdGxlVGV4dCA9ICdQcm9wb3NhbHMgdmlhIEhvbWUgU2Nob29scyc7XG5jb25zdCB4QXhpc0xhYmVsVGV4dCA9ICdOdW1iZXIgb2YgUHJvcG9zYWxzJztcblxuLy8gc2V0IHgtc2NhbGUgYW5kIHgtYXhpc1xuY29uc3QgeEF4aXNUaWNrRm9ybWF0ID0gbnVtYmVyID0+IGZvcm1hdCgnLjBzJykobnVtYmVyKS5yZXBsYWNlKCdHJywgJ0InKTtcbnZhciB4U2NhbGUgPSBzY2FsZUxpbmVhcigpLnJhbmdlKFswLCBpbm5lcldpZHRoXSk7XG52YXIgeEF4aXMgPSBheGlzQm90dG9tKHhTY2FsZSkudGlja0Zvcm1hdCh4QXhpc1RpY2tGb3JtYXQpLnRpY2tTaXplKC1pbm5lckhlaWdodCk7XG5cbnN2Zy5hcHBlbmQoXCJnXCIpXG4gIC5hdHRyKFwiY2xhc3NcIiwgXCJ4X2F4aXNcIilcbiAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke2hlaWdodCAtIG1hcmdpbi5ib3R0b219KWApXG4gIC5jYWxsKHhBeGlzKTsgIFxuXG4vLyBzZXQgeS1zY2FsZSBhbmQgeS1heGlzXG52YXIgeVNjYWxlID0gc2NhbGVCYW5kKCkucmFuZ2UoWzAsIGlubmVySGVpZ2h0XSkucGFkZGluZygwLjEpO1xudmFyIHlBeGlzID0gZDMuYXhpc0xlZnQoeVNjYWxlKS50aWNrU2l6ZU91dGVyKDApO1xuICBcbnN2Zy5hcHBlbmQoXCJnXCIpXG4gIC5hdHRyKFwiY2xhc3NcIiwgXCJ5X2F4aXNcIilcbiAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApXG4gIC5jYWxsKHlBeGlzKTsgIFxuXG4gIHN2Zy5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3hBeGlzTGFiZWxUZXh0JylcbiAgXHRcdC5hdHRyKCd4JywzMzApXG4gICAgICAuYXR0cigneScsIDQyNSlcbiAgICAgIC50ZXh0KHhBeGlzTGFiZWxUZXh0KTtcbiAgc3ZnLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAndGl0bGUnKVxuICBcdFx0LmF0dHIoJ3gnLDIyMClcbiAgICAgIC5hdHRyKCd5JywgMzUpXG4gICAgICAudGV4dCh0aXRsZVRleHQpO1xuXG5cblxuLy8gaW5pdGlhbGl6ZSBidXR0b25zXG5jb25zdCBidXR0b24gPSBzZWxlY3QoXCIuc2VjdGlvbiAubGV2ZWwyXCIpLnNlbGVjdCgnZGl2I2NvbnRhaW5lcicpXG5idXR0b24uYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsJ3llYXIyMDEzJykudGV4dChcIjIwMTNcIikuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsXCJjZW50ZXJcIilcbmJ1dHRvbi5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywneWVhcjIwMTQnKS50ZXh0KFwiMjAxNFwiKS5zdHlsZShcInRleHQtYWxpZ25cIixcImNlbnRlclwiKVxuYnV0dG9uLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCd5ZWFyMjAxNScpLnRleHQoXCIyMDE1XCIpLnN0eWxlKFwidGV4dC1hbGlnblwiLFwiY2VudGVyXCIpXG5idXR0b24uYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsJ3llYXIyMDE2JykudGV4dChcIjIwMTZcIikuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsXCJjZW50ZXJcIilcbmJ1dHRvbi5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywneWVhcjIwMTcnKS50ZXh0KFwiMjAxN1wiKS5zdHlsZShcInRleHQtYWxpZ25cIixcImNlbnRlclwiKVxuYnV0dG9uLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCd5ZWFyMjAxOCcpLnRleHQoXCIyMDE4XCIpLnN0eWxlKFwidGV4dC1hbGlnblwiLFwiY2VudGVyXCIpXG5idXR0b24uYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsJ3llYXIyMDE5JykudGV4dChcIjIwMTlcIikuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsXCJjZW50ZXJcIilcbmJ1dHRvbi5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywneWVhcjIwMjAnKS50ZXh0KFwiMjAyMFwiKS5zdHlsZShcInRleHQtYWxpZ25cIixcImNlbnRlclwiKVxuYnV0dG9uLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCd5ZWFyMjAyMScpLnRleHQoXCIyMDIxXCIpLnN0eWxlKFwidGV4dC1hbGlnblwiLFwiY2VudGVyXCIpXG5cbnZhciBzdHIgPSBcIlBSSU1BUlksVElUTEVcXG5EU0kgR2VuZXJhbCwxMVxcbkVORyBDb21wdXRlciBTY2llbmNlLDEwXFxuQSZTIENvbHVtYmlhIEFzdHJvcGh5c2ljcyBMYWIsMVxcbkVORyBFbGVjdHJpY2FsIEVuZ2luZWVyaW5nLDFcXG5FTkcgSW5kdXN0cmlhbCBFbmdyICYgT1IsMFwiXG5kcmF3KHN0cilcbmQzLnNlbGVjdChcIiN5ZWFyMjAxM1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBhbGV2aW9sZXRyZWRcIilcblxuLy8gY2FsbCBmdW5jdGlvbnMgd2hlbiBjbGlja1xuZDMuc2VsZWN0QWxsKFwiZGl2XCIpXG4gICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhcmFJRCA9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwiaWRcIik7XG4gICAgICBpZiAocGFyYUlEID09IFwieWVhcjIwMTNcIikge1xuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxM1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBhbGV2aW9sZXRyZWRcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTRcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE1XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNlwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTdcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE4XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxOVwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjBcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDIxXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuXHRcdFx0XHRcdHZhciBzdHIgPSBcIlBSSU1BUlksVElUTEVcXG5EU0kgR2VuZXJhbCwxMVxcbkVORyBDb21wdXRlciBTY2llbmNlLDEwXFxuQSZTIENvbHVtYmlhIEFzdHJvcGh5c2ljcyBMYWIsMVxcbkVORyBFbGVjdHJpY2FsIEVuZ2luZWVyaW5nLDFcXG5FTkcgSW5kdXN0cmlhbCBFbmdyICYgT1IsMFwiXG4gICAgICAgICAgZHJhdyhzdHIpXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYUlEID09IFwieWVhcjIwMTRcIikge1xuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBhbGV2aW9sZXRyZWRcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTNcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE1XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNlwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTdcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE4XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxOVwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjBcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDIxXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuXHRcdFx0XHRcdHZhciBzdHIgPSBcIlBSSU1BUlksVElUTEVcXG5EU0kgR2VuZXJhbCwyMVxcbkVORyBDb21wdXRlciBTY2llbmNlLDE3XFxuQSZTIENvbHVtYmlhIEFzdHJvcGh5c2ljcyBMYWIsMTRcXG5FTkcgRWxlY3RyaWNhbCBFbmdpbmVlcmluZywzXFxuRU5HIEluZHVzdHJpYWwgRW5nciAmIE9SLDJcIlxuICAgICAgICAgIGRyYXcoc3RyKVxuICAgICAgICAgIGQzLnNlbGVjdChcInJlY3RcIilcbiAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBkMy5zZWxlY3QoXCJzdmdcIikuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLFwiNzAwXCIpLmF0dHIoXCJ5XCIsXCIyMDBcIilcbiAgICAgIC50ZXh0KGAoJHtkMy5wb2ludGVyKGV2ZW50KS5tYXAoTWF0aC5yb3VuZCl9KWApXG4gICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhSUQgPT0gXCJ5ZWFyMjAxNVwiKSB7XG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE1XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGFsZXZpb2xldHJlZFwiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxM1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTRcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE2XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxN1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMThcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE5XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAyMFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjFcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG5cdFx0XHRcdFx0dmFyIHN0ciA9IFwiUFJJTUFSWSxUSVRMRVxcbkRTSSBHZW5lcmFsLDc5XFxuRU5HIENvbXB1dGVyIFNjaWVuY2UsNDNcXG5BJlMgQ29sdW1iaWEgQXN0cm9waHlzaWNzIExhYiwyMVxcbkVORyBJbmR1c3RyaWFsIEVuZ3IgJiBPUiw4XFxuRU5HIEVsZWN0cmljYWwgRW5naW5lZXJpbmcsN1wiXG4gICAgICAgICAgZHJhdyhzdHIpXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYUlEID09IFwieWVhcjIwMTZcIikge1xuICAgICAgICAgIGQzLnNlbGVjdChcIiN5ZWFyMjAxNlwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBhbGV2aW9sZXRyZWRcIilcbiAgICAgICAgICBkMy5zZWxlY3QoXCIjeWVhcjIwMTNcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE0XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNVwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTdcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE4XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxOVwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjBcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDIxXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuXHRcdFx0XHRcdHZhciBzdHIgPSBcIlBSSU1BUlksVElUTEVcXG5EU0kgR2VuZXJhbCw3OFxcbkVORyBDb21wdXRlciBTY2llbmNlLDM4XFxuQSZTIENvbHVtYmlhIEFzdHJvcGh5c2ljcyBMYWIsMzNcXG5FTkcgRWxlY3RyaWNhbCBFbmdpbmVlcmluZywxNFxcbkVORyBJbmR1c3RyaWFsIEVuZ3IgJiBPUiw5XCJcbiAgICAgICAgICBkcmF3KHN0cilcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhSUQgPT0gXCJ5ZWFyMjAxN1wiKSB7XG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE3XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGFsZXZpb2xldHJlZFwiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxM1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTRcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE1XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNlwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMThcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE5XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAyMFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjFcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG5cdFx0XHRcdFx0dmFyIHN0ciA9IFwiUFJJTUFSWSxUSVRMRVxcbkRTSSBHZW5lcmFsLDEwN1xcbkVORyBDb21wdXRlciBTY2llbmNlLDM5XFxuQSZTIENvbHVtYmlhIEFzdHJvcGh5c2ljcyBMYWIsMzhcXG5FTkcgRWxlY3RyaWNhbCBFbmdpbmVlcmluZywzNFxcbkVORyBJbmR1c3RyaWFsIEVuZ3IgJiBPUiwxMFwiXG4gICAgICAgICAgZHJhdyhzdHIpXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYUlEID09IFwieWVhcjIwMThcIikge1xuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxOFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBhbGV2aW9sZXRyZWRcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTNcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE0XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNVwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTZcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE3XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxOVwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjBcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDIxXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuXHRcdFx0XHRcdHZhciBzdHIgPSBcIlBSSU1BUlksVElUTEVcXG5EU0kgR2VuZXJhbCwxMDRcXG5BJlMgQ29sdW1iaWEgQXN0cm9waHlzaWNzIExhYiwxMDJcXG5FTkcgQ29tcHV0ZXIgU2NpZW5jZSwzM1xcbkVORyBFbGVjdHJpY2FsIEVuZ2luZWVyaW5nLDI2XFxuRU5HIEluZHVzdHJpYWwgRW5nciAmIE9SLDEwXCJcbiAgICAgICAgICBkcmF3KHN0cilcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhSUQgPT0gXCJ5ZWFyMjAxOVwiKSB7XG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE5XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGFsZXZpb2xldHJlZFwiKVxuICAgICAgICAgIGQzLnNlbGVjdChcIiN5ZWFyMjAxM1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTRcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE1XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNlwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTdcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE4XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAyMFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjFcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG5cdFx0XHRcdFx0dmFyIHN0ciA9IFwiUFJJTUFSWSxUSVRMRVxcbkRTSSBHZW5lcmFsLDEwM1xcbkEmUyBDb2x1bWJpYSBBc3Ryb3BoeXNpY3MgTGFiLDEwMVxcbkVORyBDb21wdXRlciBTY2llbmNlLDM2XFxuRU5HIEVsZWN0cmljYWwgRW5naW5lZXJpbmcsMzJcXG5FTkcgSW5kdXN0cmlhbCBFbmdyICYgT1IsMTVcIlxuICAgICAgICAgIGRyYXcoc3RyKVxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFJRCA9PSBcInllYXIyMDIwXCIpIHtcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjBcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwYWxldmlvbGV0cmVkXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDEzXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTVcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE2XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxN1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMThcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE5XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAyMVwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcblx0XHRcdFx0XHR2YXIgc3RyID0gXCJQUklNQVJZLFRJVExFXFxuRFNJIEdlbmVyYWwsODdcXG5FTkcgQ29tcHV0ZXIgU2NpZW5jZSwyN1xcbkVORyBFbGVjdHJpY2FsIEVuZ2luZWVyaW5nLDI0XFxuQSZTIENvbHVtYmlhIEFzdHJvcGh5c2ljcyBMYWIsMTJcXG5FTkcgSW5kdXN0cmlhbCBFbmdyICYgT1IsMTFcIlxuICAgICAgICAgIGRyYXcoc3RyKVxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFJRCA9PSBcInllYXIyMDIxXCIpIHtcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMjFcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwYWxldmlvbGV0cmVkXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDEzXCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxNFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMTVcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE2XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAxN1wiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcbiAgICAgICAgXHRkMy5zZWxlY3QoXCIjeWVhcjIwMThcIikuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJwaW5rXCIpXG4gICAgICAgIFx0ZDMuc2VsZWN0KFwiI3llYXIyMDE5XCIpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLFwicGlua1wiKVxuICAgICAgICBcdGQzLnNlbGVjdChcIiN5ZWFyMjAyMFwiKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIixcInBpbmtcIilcblx0XHRcdFx0XHR2YXIgc3RyID0gXCJQUklNQVJZLFRJVExFXFxuRFNJIEdlbmVyYWwsODFcXG5FTkcgRWxlY3RyaWNhbCBFbmdpbmVlcmluZywyNVxcbkVORyBDb21wdXRlciBTY2llbmNlLDIzXFxuRU5HIEluZHVzdHJpYWwgRW5nciAmIE9SLDExXFxuQSZTIENvbHVtYmlhIEFzdHJvcGh5c2ljcyBMYWIsMFwiXG4gICAgICAgICAgZHJhdyhzdHIpXG4gICAgICAgIH0gXG4gICAgICB9KTtcblxuXG5mdW5jdGlvbiBkcmF3KHN0cikge1xuICBcbiAgdmFyIGRhdGEgPSBnZXRkYXRhKHN0cilcbiAgXG4gIHZhciBwcmV3aWR0aCA9IHt9O1xuXHRzdmcuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKVxuIFx0XHQgLmVhY2goZnVuY3Rpb24oZCwgaSkge1xuICAgIFx0IC8vIHByZXdpZHRoLnB1c2goe2tleTogZC5PY2N1cGF0aW9ucyx2YWx1ZTpkLnllYXJ9KTtcbiAgICBwcmV3aWR0aFtkLk9jY3VwYXRpb25zXSA9IGQueWVhclxuICBcdCB9KTtcbiAgY29uc3QgeFZhbHVlID0gZGF0YSA9PiBkYXRhLnllYXI7XG4gIGNvbnN0IHlWYWx1ZSA9IGRhdGEgPT4gZGF0YS5PY2N1cGF0aW9ucztcbiAgXG4gIHhTY2FsZS5kb21haW4oWzAsIDExMF0pIFxuICB5U2NhbGUuZG9tYWluKGRhdGEubWFwKHlWYWx1ZSkpXG5cblxuICB2YXIgYmFycyA9IHN2Zy5zZWxlY3RBbGwoXCIuYmFyc1wiKVxuICAgIC5kYXRhKGRhdGEsIHlWYWx1ZSk7XG4gICAgXG5cbiAgZDMuc2VsZWN0KFwiLnlfYXhpc1wiKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTAwMClcbiAgICAuY2FsbCh5QXhpcyk7XG5cbiAgZDMuc2VsZWN0KFwiLnhfYXhpc1wiKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTAwMClcbiAgICAuZGVsYXkoMjApXG4gICAgLmNhbGwoeEF4aXMpOyBcbiAgXG4gIGJhcnMuZXhpdCgpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigyMDAwKVxuICBcdC5kZWxheSgwKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgMClcbiAgICAucmVtb3ZlKCk7XG4gXG4gIHZhciBtZXJnZWRfYmFycyA9IGJhcnMuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJyZWN0XCIpIFxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJzXCIpXG4gIFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7bWFyZ2luLnRvcH0pYClcbiAgICAuYXR0cihcInhcIiwgbWFyZ2luLmxlZnQpXG4gICAgLmF0dHIoXCJ5XCIsIGQgPT4geVNjYWxlKHlWYWx1ZShkKSkpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCAwKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHlTY2FsZS5iYW5kd2lkdGgoKSlcbiAgICAubWVyZ2UoYmFycylcbiAgICBcbiAgXHR2YXIgcHJlc2VudF92YWx1ZSA9IHt9O1xuICBcbiAgICBtZXJnZWRfYmFycy50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMjAwMClcbiAgXHQuYXR0cihcImZpbGxcIixmdW5jdGlvbihkLGkpe1xuICAgICAgcHJlc2VudF92YWx1ZVtkLk9jY3VwYXRpb25zXSA9IGQueWVhcjtcbiAgICAgIGNvbnNvbGUubG9nKGQuT2NjdXBhdGlvbnMpO1xuICAgICAgY29uc29sZS5sb2coXCJwcmVzZW50XCIsaSxwcmVzZW50X3ZhbHVlW2QuT2NjdXBhdGlvbnNdKVxuICAgICAgY29uc29sZS5sb2coXCJwcmVcIixpLHByZXdpZHRoW2QuT2NjdXBhdGlvbnNdKTtcbiAgICBpZiAocHJlc2VudF92YWx1ZVtkLk9jY3VwYXRpb25zXSA+IHByZXdpZHRoW2QuT2NjdXBhdGlvbnNdIHx8IHByZXdpZHRoW2QuT2NjdXBhdGlvbnNdID09IDAgfHwgdHlwZW9mIHByZXdpZHRoW2QuT2NjdXBhdGlvbnNdID09IFwidW5kZWZpbmVkXCIpXG4gICAgICB7cmV0dXJuIFwicGFsZXZpb2xldHJlZFwifVxuICAgICBlbHNlIHtyZXR1cm4gXCJwaW5rXCJ9XG4gICB9KVxuICAgIC5hdHRyKFwieVwiLCBkID0+IHlTY2FsZSh5VmFsdWUoZCkpKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgZCA9PiB4U2NhbGUoeFZhbHVlKGQpKSkgIFxufVxuXG5mdW5jdGlvbiBnZXRkYXRhKHN0cil7XG4gIFxudmFyIGRhdGEgPSBkMy5jc3ZQYXJzZShzdHIsZnVuY3Rpb24oZCl7XG5cdCAgICByZXR1cm4ge1xuICAgICAgXHRPY2N1cGF0aW9uczogZC5QUklNQVJZLCBcbiAgICAgICAgeWVhcjorZC5USVRMRVxuICAgIH07IFxufSk7XG4gIHJldHVybiBkYXRhO1xuICBcbn1cbiJdLCJuYW1lcyI6WyJzZWxlY3QiLCJmb3JtYXQiLCJzY2FsZUxpbmVhciIsImF4aXNCb3R0b20iLCJzY2FsZUJhbmQiXSwibWFwcGluZ3MiOiI7OztFQWFBO0VBQ0EsSUFBSSxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7RUFDM0QsSUFBSSxHQUFHLEdBQUdBLFdBQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztFQUM5QixJQUFJLEtBQUss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TUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDO0VBQ3BGLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUM7RUFDcEYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQztFQUNwRixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDO0VBQ3BGLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUM7RUFDcEYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQztFQUNwRixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDO0VBQ3BGLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUM7RUFDcEYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQztBQUNwRjtFQUNBLElBQUksR0FBRyxHQUFHLG9KQUFtSjtFQUM3SixJQUFJLENBQUMsR0FBRyxFQUFDO0VBQ1QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsZUFBZSxFQUFDO0FBQ2hFO0VBQ0E7RUFDQSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztFQUNuQixLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtFQUM3QixNQUFNLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzlDLE1BQU0sSUFBSSxNQUFNLElBQUksVUFBVSxFQUFFO0VBQ2hDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsZUFBZSxFQUFDO0VBQ3pFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLEtBQUssSUFBSSxHQUFHLEdBQUcsb0pBQW1KO0VBQ2xLLFVBQVUsSUFBSSxDQUFDLEdBQUcsRUFBQztFQUNuQixTQUFTLE1BQU0sSUFBSSxNQUFNLElBQUksVUFBVSxFQUFFO0VBQ3pDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsZUFBZSxFQUFDO0VBQ3pFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDO0VBQ2hFLEtBQUssSUFBSSxHQUFHLEdBQUcscUpBQW9KO0VBQ25LLFVBQVUsSUFBSSxDQUFDLEdBQUcsRUFBQztFQUNuQixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQzNCLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLEtBQUssRUFBRTtFQUMvQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7RUFDbkUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO0VBQ3JELE9BQU8sQ0FBQyxDQUFDO0VBQ1QsU0FBUyxNQUFNLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtFQUN6QyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBQztFQUN6RSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxLQUFLLElBQUksR0FBRyxHQUFHLHFKQUFvSjtFQUNuSyxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUM7RUFDbkIsU0FBUyxNQUFNLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtFQUN6QyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBQztFQUMxRSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNqRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxLQUFLLElBQUksR0FBRyxHQUFHLHNKQUFxSjtFQUNwSyxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUM7RUFDbkIsU0FBUyxNQUFNLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtFQUN6QyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBQztFQUN6RSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxLQUFLLElBQUksR0FBRyxHQUFHLHdKQUF1SjtFQUN0SyxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUM7RUFDbkIsU0FBUyxNQUFNLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtFQUN6QyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBQztFQUN6RSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxLQUFLLElBQUksR0FBRyxHQUFHLHlKQUF3SjtFQUN2SyxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUM7RUFDbkIsU0FBUyxNQUFNLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtFQUN6QyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBQztFQUN6RSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNqRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxLQUFLLElBQUksR0FBRyxHQUFHLHlKQUF3SjtFQUN2SyxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUM7RUFDbkIsU0FBUyxNQUFNLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtFQUN6QyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBQztFQUN6RSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxLQUFLLElBQUksR0FBRyxHQUFHLHVKQUFzSjtFQUNySyxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUM7RUFDbkIsU0FBUyxNQUFNLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtFQUN6QyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBQztFQUN6RSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQztFQUNoRSxLQUFLLElBQUksR0FBRyxHQUFHLHNKQUFxSjtFQUNwSyxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUM7RUFDbkIsU0FBUztFQUNULE9BQU8sQ0FBQyxDQUFDO0FBQ1Q7QUFDQTtFQUNBLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRTtFQUNuQjtFQUNBLEVBQUUsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBQztFQUN6QjtFQUNBLEVBQUUsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0VBQ3BCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7RUFDM0IsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0VBQ3pCO0VBQ0EsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJO0VBQ3BDLEtBQUssQ0FBQyxDQUFDO0VBQ1AsRUFBRSxNQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztFQUNuQyxFQUFFLE1BQU0sTUFBTSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0VBQzFDO0VBQ0EsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFDO0VBQ3pCLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFDO0FBQ2pDO0FBQ0E7RUFDQSxFQUFFLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO0VBQ25DLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztFQUN4QjtBQUNBO0VBQ0EsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztFQUN0QixLQUFLLFVBQVUsRUFBRTtFQUNqQixLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDbkIsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakI7RUFDQSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0VBQ3RCLEtBQUssVUFBVSxFQUFFO0VBQ2pCLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQztFQUNuQixLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7RUFDZCxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUNqQjtFQUNBLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtFQUNiLEtBQUssVUFBVSxFQUFFO0VBQ2pCLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQztFQUNuQixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDWixLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQ3JCLEtBQUssTUFBTSxFQUFFLENBQUM7RUFDZDtFQUNBLEVBQUUsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtFQUNoQyxLQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDbkIsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztFQUMxQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNuRCxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQztFQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN0QyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQ3JCLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7RUFDdkMsS0FBSyxLQUFLLENBQUMsSUFBSSxFQUFDO0VBQ2hCO0VBQ0EsR0FBRyxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7RUFDMUI7RUFDQSxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUU7RUFDNUIsS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDO0VBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDN0IsTUFBTSxhQUFhLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7RUFDNUMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztFQUNqQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFDO0VBQzNELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztFQUNuRCxJQUFJLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXO0VBQy9JLE1BQU0sQ0FBQyxPQUFPLGVBQWUsQ0FBQztFQUM5QixVQUFVLENBQUMsT0FBTyxNQUFNLENBQUM7RUFDekIsSUFBSSxDQUFDO0VBQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdEMsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7RUFDMUMsQ0FBQztBQUNEO0VBQ0EsU0FBUyxPQUFPLENBQUMsR0FBRyxDQUFDO0VBQ3JCO0VBQ0EsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDdEMsS0FBSyxPQUFPO0VBQ1osT0FBTyxXQUFXLEVBQUUsQ0FBQyxDQUFDLE9BQU87RUFDN0IsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztFQUNyQixLQUFLLENBQUM7RUFDTixDQUFDLENBQUMsQ0FBQztFQUNILEVBQUUsT0FBTyxJQUFJLENBQUM7RUFDZDtFQUNBOzs7OyJ9
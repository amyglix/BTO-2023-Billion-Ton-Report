Highcharts.setOptions({lang:{thousandsSep:","}}),Highcharts.chart("today",{colors:["#fbd603"],chart:{type:"column"},legend:{align:"right",verticalAlign:"top",layout:"vertical",x:0,y:100},title:{text:"Currently Used Biomass"},xAxis:{categories:["Currently Used"]},yAxis:{min:0,title:{text:"Dry Short Tons (millions)"},stackLabels:{style:{fontSize:"20px"},enabled:!0}},tooltip:{headerFormat:"",pointFormat:"<strong>{series.name}</strong>:<br />{point.y} million tons/year"},plotOptions:{column:{stacking:"normal",dataLabels:{enabled:!1}}},series:[{name:"Currently Used Biomass",data:[342]}]}),Highcharts.chart("nearterm",{colors:["#f67f2b","#2d863f","#5d0600","#fbd603"],chart:{type:"column"},legend:{align:"right",verticalAlign:"top",layout:"vertical",x:0,y:100},title:{text:"Near-Term Biomass Potential"},xAxis:{categories:["Near-Term"]},yAxis:{min:0,title:{text:"Dry Short Tons (millions)"},stackLabels:{style:{fontSize:"20px"},enabled:!0}},tooltip:{headerFormat:"",pointFormat:"<strong>{series.name}</strong>:<br />{point.y} million tons/year"},plotOptions:{column:{stacking:"normal",dataLabels:{enabled:!0}}},series:[{name:"Agriculture: Residues and Wastes",data:[140]},{name:"Forestland",data:[31]},{name:"Wastes and Byproducts",data:[179]},{name:"Currently Used Biomass",data:[342]}]}),Highcharts.chart("maturemarket",{colors:["#f9be94","#f67f2b","#2d863f","#5d0600","#fbd603"],chart:{type:"column"},legend:{align:"right",verticalAlign:"top",layout:"vertical",x:0,y:100},title:{text:"Mature Market Biomass Potential"},xAxis:{categories:["Mature-Market Medium"]},yAxis:{min:0,title:{text:"Dry Short Tons (millions)"},stackLabels:{style:{fontSize:"20px"},enabled:!0}},tooltip:{headerFormat:"",pointFormat:"<strong>{series.name}</strong>:<br />{point.y} million tons/year"},plotOptions:{column:{stacking:"normal",dataLabels:{enabled:!0}}},series:[{name:"Agriculture: Energy Crops",data:[426]},{name:"Agriculture: Residues and Wastes",data:[189]},{name:"Forestland",data:[63]},{name:"Wastes and Byproducts",data:[218]},{name:"Currently Used Biomass",data:[342]}]}),Highcharts.chart("emerging",{colors:["#1a5d7a","#3eb5ef","#f9be94","#f67f2b","#2d863f","#5d0600","#fbd603"],chart:{type:"column"},legend:{align:"right",verticalAlign:"top",layout:"vertical",x:0,y:100},title:{text:"Emerging Biomass Potential"},xAxis:{categories:["Emerging"]},yAxis:{min:0,title:{text:"Dry Short Tons (millions)"},stackLabels:{style:{fontSize:"20px"},enabled:!0}},tooltip:{headerFormat:"",pointFormat:"<strong>{series.name}</strong>:<br />{point.y} million tons/year"},plotOptions:{column:{stacking:"normal",dataLabels:{enabled:!0}}},series:[{name:"Macroalgae",data:[80]},{name:"Microalgae",data:[170]},{name:"Agriculture: Energy Crops",data:[666]},{name:"Agriculture: Residues and Wastes",data:[211]},{name:"Forestland",data:[63]},{name:"Wastes and Byproducts",data:[218]},{name:"Currently Used Biomass",data:[342]}]});
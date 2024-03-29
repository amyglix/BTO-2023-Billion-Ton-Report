Highcharts.setOptions({
	lang: {
  	thousandsSep: ','
  }
})
Highcharts.chart('emerging', {
    colors:['#1a5d7a','#3eb5ef','#f9be94','#f67f2b','#2d863f','#5d0600', '#fbd603'],
  chart: {
        type: 'column'
    },
  legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        x: 0,
        y: 100
    },
    title: {
        text: 'Emerging Biomass Potential'
    },
    xAxis: {
        categories: ['Emerging']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Dry Short Tons (millions)'
        },
        stackLabels: {
            style: {fontSize: '20px'},
            enabled: true
        }
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<strong>{series.name}</strong>:<br />{point.y} million tons/year'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Macroalgae',
        data: [80]
      },{
        name: 'Microalgae',
        data: [170]
      },{
         name: 'Agriculture: Energy Crops',
        data: [666]
      },{
         name: 'Agriculture: Residues and Wastes',
        data: [211]
      },{
        name: 'Forestland',
        data: [63]
     },{
        name: 'Wastes and Byproducts',
        data: [218]
      },{
        name: 'Currently Used Biomass',
        data: [342]
    }]
});
// JavaScript Document
Highcharts.setOptions({
	lang: {
  	thousandsSep: ','
  }
})
Highcharts.chart('nearterm', {
    colors:['#f9be94', '#2d863f','#5d0600', '#fbd603'],
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
        categories: ['Emerging Potential']
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
        name: 'Agriculture: Residues and Wastes',
        data: [211]
      },{
        name: 'Forestland',
        data: [63]
     },{
        name: 'Wastes and Byproducts',
        data: [217]
      },{
        name: 'Currently Used Biomass',
        data: [342]
    }]
});
// JavaScript Document
Highcharts.setOptions({
	lang: {
  	thousandsSep: ','
  }
})
Highcharts.chart('today', {
  colors:['#fbd603'],
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
        text: 'Currently Used Biomass'
    },
    xAxis: {
        categories: ['Currently Used']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Dry Short Tons (millions)'
        },
        stackLabels: {
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
                enabled: false
            }
        }
    },
    series: [{
        name: 'Currently Used Biomass',
        data: [342]
    }]
});
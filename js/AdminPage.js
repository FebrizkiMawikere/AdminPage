new Chartist.Line('.ct-visitor', {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [[62, 51, 74, 32, 40, 42, 50, 62]]
}, {
    lineSmooth:false,
    height:300,
    low: 10,
    high: 90,
});

new Chartist.Bar('.ct-yearly', {
    labels: ['2013', '2014', '2015', '2016'],
    series: [[351, 338, 382, 413]]
}, {
    height:300,
    high: 500,
    low: 300
});


//FOR CHARTS PAGE
new Chartist.Line('.ct-line1', {
    labels: ['2009','2010','2011','2012','2013','2014','2015','2016'],
    series: [[98, 88, 86, 82, 90, 89, 97, 87]]
}, {
    lineSmooth:true,
    height:350,
});
new Chartist.Line('.ct-line2', {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [[20,28,24,30,31,29,32,35,41,37,32,35,37],[20,25,21,22,24,24,32,33,35,37,30,30,33,35]]
}, {
    lineSmooth:false,
    height:350,
});

new Chartist.Bar('.ct-bar1', {
  labels: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
  series: [
    [60000, 40000, 80000, 70000],
    [40000, 30000, 70000, 65000],
    [8000, 3000, 10000, 6000]
  ]
}, {
  seriesBarDistance: 10,
    height:350,
  axisX: {
    offset: 60
  },
  axisY: {
    offset: 80,
    labelInterpolationFnc: function(value) {
      return value + ' CHF'
    },
    scaleMinSpace: 15
  }
});

new Chartist.Bar('.ct-bar2', {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  series: [
    [800000, 1200000, 1400000, 1300000],
    [200000, 400000, 500000, 300000],
    [100000, 200000, 400000, 600000]
  ]
}, {
  stackBars: true,
  axisY: {
    labelInterpolationFnc: function(value) {
      return (value / 1000) + 'k';
    }
  },
    height:350
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 30px'
    });
  }
});


var data = {
  series: [5, 3, 4]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-pie1', {
  series: [6, 3, 4]
}, {
  height:300,
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

var datadonut = {
  series: [5, 3, 4]
};

var sumdonut = function(a, b) { return a + b };

new Chartist.Pie('.ct-donut1', {
  series: [6, 3, 4]
}, {
  donut:true,
  height:300,
  labelInterpolationFnc: function(value) {
    return Math.round(value / datadonut.series.reduce(sumdonut) * 100) + '%';
  }
});
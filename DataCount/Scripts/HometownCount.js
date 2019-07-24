var myChart = echarts.init(document.getElementById('main'));

option = {
    backgroundColor: '#fff',
    title: {
        text: '籍贯分布',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['广西钦州','广西玉林','广西南宁','广西柳州','广西贺州']
    },
    series:
        {
            name: '籍贯',
            type: 'bar',
            data: [100, 45, 100, 250,63 ]
        },



};
myChart.setOption(option);

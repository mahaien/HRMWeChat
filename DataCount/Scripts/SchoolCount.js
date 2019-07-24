var myChart = echarts.init(document.getElementById('main'));

option = {
    backgroundColor: '#fff',
    title: {
        text: '学校分布',
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
        data: ['广西大学','南宁职业技术学院','北京大学','广州大学','清华大学']
    },
    series:
        {
            name: '工龄',
            type: 'bar',
            data: [100, 45, 100, 250,63 ]
        },



};
myChart.setOption(option);

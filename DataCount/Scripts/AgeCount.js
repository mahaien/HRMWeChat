var myChart = echarts.init(document.getElementById('main'));

option = {
    backgroundColor: '#fff',
    title: {
        text: '年龄统计',
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
        data: ['18-25岁','26-30岁','31-35岁','36-40岁','40-50岁']
    },
    series:
        {
            name: '年龄',
            type: 'bar',
            data: [100, 45, 100, 250,63 ]
        },



};
myChart.setOption(option);

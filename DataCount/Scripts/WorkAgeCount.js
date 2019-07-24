var myChart = echarts.init(document.getElementById('main'));

option = {
    backgroundColor: '#fff',
    title: {
        text: '工龄统计',
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
        data: ['1-5年','6-10年','11-15年','16-20年','21-25年']
    },
    series:
        {
            name: '工龄',
            type: 'bar',
            data: [100, 45, 100, 250,63 ]
        },



};
myChart.setOption(option);

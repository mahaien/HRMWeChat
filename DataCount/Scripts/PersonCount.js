var myChart = echarts.init(document.getElementById('main'));

option = {
    backgroundColor: '#fff',
    title: {
        text: '人员统计',
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
        data: ['在职人员','离职人员','退休人员','辞退人员','病休人员']
    },
    series:
        {
            name: '人员类型',
            type: 'bar',
            data: [100, 45, 100, 250,63 ]
        },



};
myChart.setOption(option);

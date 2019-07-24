var myChart = echarts.init(document.getElementById('main'));

option = {
    backgroundColor: '#fff',
    title: {
        text: '警级统计',
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
        data: ['一级辅警','二级辅警','三级辅警','四级辅警','五级辅警','六级辅警','七级辅警','八级辅警','九级辅警']
    },
    series:
        {
            name: '警级',
            type: 'bar',
            data: [100, 45, 100, 250, 125, 352,100, 45, 100]
        },



};
myChart.setOption(option);

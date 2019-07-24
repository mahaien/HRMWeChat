var myChart = echarts.init(document.getElementById('main'));
option = {
    backgroundColor: '#fff',
    title : {
        text: '婚姻状况',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['已婚','未婚']
    },
    series : [
        {
            name: '婚姻',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:33, name:'已婚'},
                {value:60, name:'未婚'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);
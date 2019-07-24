var myChart = echarts.init(document.getElementById('main'));
option = {
    backgroundColor: '#fff',
    title : {
        text: '职称部分',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['会计','信息员','出销']
    },
    series : [
        {
            name: '职称',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'会计'},
                {value:310, name:'信息员'},
                {value:36, name:'出销'},
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
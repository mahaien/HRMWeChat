var myChart = echarts.init(document.getElementById('main'));
option = {
    backgroundColor: '#fff',
    title : {
        text: '学历分布',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['初中','高中','大专','本科','硕士','博士']
    },
    series : [
        {
            name: '学历',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:358, name:'初中'},
                {value:123, name:'高中'},
                {value:135, name:'大专'},
                {value:142, name:'本科'},
                {value:20, name:'硕士'},
                {value:10, name:'博士'},
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
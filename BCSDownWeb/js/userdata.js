
var workinfor1 = echarts.init(document.getElementById("workinfo1"));


var option = {
    title : {
        text: '用户数据统计',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['培训','作业','考核','讨论','使用']
    },
    series : [
        {
            name: '表现',
            type: 'pie',
            radius : '90%',
            center: ['50%', '52.5%'],
            data:[
                {value:435, name:'培训'},
                {value:310, name:'作业'},
                {value:235, name:'考核'},
                {value:135, name:'讨论'},
                {value:248, name:'使用'}
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
workinfor1.setOption(option);


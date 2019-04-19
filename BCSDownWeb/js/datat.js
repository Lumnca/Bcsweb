var yuan1 = echarts.init(document.getElementsByClassName("yuan")[0]);
var yuan2 = echarts.init(document.getElementsByClassName("yuan")[1]);

var option1 = {
    title : {
        text: '小组培训任务安排',
        subtext: '任务比重',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Html','Css','JavaScript','C++','JSP','ASP','mysql','server']
    },
    series : [
        {
            name: '培训事项',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:5, name:'Html'},
                {value:5, name:'Css'},
                {value:30, name:'JavaScript'},
                {value:20, name:'C++'},
                {value:10, name:'ASP'},
                {value:10, name:'JSP'},
                {value:10, name:'mysql'},
                {value:10, name:'server'},
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



var option2 = {
    angleAxis: {
        type: 'category',
        data: ['Html', 'Css', 'JavaScript', 'C++', 'ASP', 'JSP', 'mysql','server'],
        z: 10
    },
    radiusAxis: {
    },
    polar: {
    },
    tooltip: {
        show: true,
        formatter: '{b0}: {c0}0%'
    },
    series: [{
        type: 'bar',
        data: [10, 10, 1 , 4, 0, 0, 0,0],
        coordinateSystem: 'polar',
        name: '完成度',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['完成度']
    }
};


yuan1.setOption(option1);
yuan2.setOption(option2);


function changexa(i){
    var dom = document.getElementsByClassName("xa")[i];
    
    var domValue = dom.getAttribute("class");
    var domfalg = dom.getAttribute("flag");

    if(dom.getAttribute("flag")=="false"){
        domValue = domValue.replace("glyphicon-list","glyphicon-align-justify");
        dom.setAttribute("class",domValue);
        domfalg = domfalg.replace("false","true");
        dom.setAttribute("flag",domfalg);
    }
    else{
        domValue = domValue.replace("glyphicon-align-justify","glyphicon-list");
        dom.setAttribute("class",domValue); 
        domfalg = domfalg.replace("true","false");     
        dom.setAttribute("flag",domfalg);
    }

}

var peoinfo1 = echarts.init(document.getElementsByClassName("peoto")[0]);

var option3 = {
    title : {
        text: '人数信息',
        subtext: '人数',
        x:'center'
    },
    xAxis: {
        type: 'category',
        data: ['2011','2012', '2013', '2014', '2015', '2016', '2017', '2018']
    },
    tooltip:{

        show: true,
        trigger : 'axis',
        formatter: '{b0}年人数: {c0}人',
        axisPointer:{
            type : 'cross',
            axis : 'auto'
        }      
    },
    toolbox:{

    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [1,1,1,2,1,8,10,13],
        type: 'bar'
    }]
};

peoinfo1.setOption(option3);
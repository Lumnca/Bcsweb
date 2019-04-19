/*
var xml = new XMLHttpRequest();
xml.open("GET","json/talklog.json",true);
xml.send(null);
var  fileText = xml.responseText;
var jsonvalue = JSON.parse(fileText);


var talkinfo1 = document.getElementsByClassName("talkinfo1")[0];

talkinfo1.innerHTML = jsonvalue[0].infor;

*/
var app1 = new Vue({
    el: '#app1',
    data: {
            good : 2,
            bad : 9875,
            flag: false
    },
    methods: {
            change: function (event) {
                if(event==1){
                    this.good+=1;
                }
                else if(event==2)
                {
                    this.bad+=1;
                }
                else{

                }
            }
    }
})
var app2 = new Vue({
    el: '#app2',
    data: {
            good : 250,
            bad : 7,
            flag: false
    },
    methods: {
            change: function (event) {
                if(event==1){
                    this.good+=1;
                }
                else if(event==2)
                {
                    this.bad+=1;
                }
                else{

                }
            }
    }
})

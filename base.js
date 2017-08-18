/**
 * Created by chen-mac on 2017/6/19.
 */
//介绍
    var app= new Vue({
     el: '#app',
     data: {
        message: 'Hello Vue!'
    }
    })

    var app2= new Vue({
        el:'#app-2',
        data:{
            message:'页面加载于' + new Date()
        }
    })

    var app3= new Vue({
        el:'#app-3',
        data:{
            seen:true
        }
    })

    var app4= new Vue({
        el:'#app-4',
        data:{
            todos:[
                {text:'abc'},
                {text:'abc'},
                {text:'bcd'},
                {text:'cde'}
            ]
        }
    })

    var app5= new Vue({
        el:'#app-5',
        data:{
            message:"hello Vue.js!"
        },
        methods:{
            reverseMessage: function(){
                this.message= this.message.split(' ').reverse().join(' ');
            }
        }
    })

    var app6= new Vue({
        el:'#app-6',
        data:{
            message:'hello Vue.js!'
        }
    })

    Vue.component('todo-item',{
        template:'<li>这是一个待办项</li>'
    })

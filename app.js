new Vue({
    el:'#new-app1',
    data:{
        name:'fery',
        job:'student',
        website:'https://github.com/JridyFery',
        websiteTag:'<a href="https://github.com/JridyFery"> This is my github account </a>'

    }

})

new Vue(
{
    el:'#new-app2',
    data:{
        age: '21',
        x:0,
        y:0
    },
    methods:{
        add:function(age){
          return this.age+=age;
        },
        subtract:function(age){
           return this.age-=age;
        },
        updateXY:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;                    
        }
    }
})

new Vue({
    el:'#new-app3',
    data:{

        name:'',
        age:''
    },
    methods:{
        logName:function(){
            console.log('you entered your name ! ');
        },
        logAge:function(){
            console.log('you entered your age !');

        }
    }
})
new Vue({
    el:'#new-app4',
    data:{
        available:false,
        nearby:false
    },
    methods:{
    },
    computed:{
        compClasses:function(){
            return {
            available:this.available,
            nearby:this.nearby
                    }
            
        }

    }
})
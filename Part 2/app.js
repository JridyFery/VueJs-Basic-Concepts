Vue.component('sayhello',{
    template: '<p> Hello ! I am a new component, my name is {{name}}.<button v-on:click="changename()"> You can change your name </button> </p>',
    data() {
        return {
            name:'fery',
        }
    },
    methods: {
        changename(){
            return this.name='Ed';
        }
    },
});

new Vue({
    el:'#Vue-app-one',
});

new Vue({
    el:'#Vue-app-two'
});
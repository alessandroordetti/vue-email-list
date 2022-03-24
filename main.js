const app = new Vue ({
    el: '#app',
    data: {
        risultato: '',
    },
    methods: {},
    created(){},
    mounted(){
        const self = this;
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function(response){
        self.risultato = response.data.response;
        });
    },
})


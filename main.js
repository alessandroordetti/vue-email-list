const app = new Vue ({
    el: '#app',
    data: {
        risultato: [],
    },
    methods: {},
    created(){},
    mounted(){
        for (let i = 0; i < 10; i++) {
            const self = this;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(response){
            const result = response.data.response;
            self.risultato.push(result);
            console.log(self.risultato);
            });
        };
    },
})


var pessoas = new Vue({

  el: '#app',
  data () {
    return {
      personagens: this.personagens,
      planeta:[],
      naves:[]

    }
  },
  mounted () {
    axios
      .get('https://swapi.dev/api/people')
      .then(response => (this.personagens = response))

    axios
      .get('https://swapi.dev/api/planets')
      .then(response => (this.planeta = response))

    axios
      .get('https://swapi.dev/api/starships')
      .then(response => (this.naves = response))
  }

})

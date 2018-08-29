import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Player from '@/components/Player'
import Opponent from '@/components/Opponent'
import Card from '@/components/Card'

let api = axios.create({
  baseUrl: '',
  timeout: 3000
})

let playerCards = axios.create({
  baseUrl: '',
  timeout: 3000
})

let eneymCards = axios.create({
  baseUrl: '',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: new Player ({

    }),
    opponent: new Opponent ({

    }),
    card: new Card ({
      "id": "",

    })
  },
  mutations: {
    setHealth() {

    },
    setCard() {

    }
  },
  actions: {
    getCards({commit, dispatch}) {
      api.get('cards')
      cards.get('').then(res=> {
        commit('setCard', res.data)
      })
    },
    fight({state}, out) {
      let newHealth = state.card.health - state.card.attack[out]
      commit('setHealth', newHealth)
    }
  }
})

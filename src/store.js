import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let api = axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

// let playerCards = axios.create({
//   baseUrl: '',
//   timeout: 3000
// })

// let enemyCards = axios.create({
//   baseUrl: '',
//   timeout: 3000
// })

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {}
  },
  mutations: {
    setPlayerCards(state, playerCards) {
      state.playerCards = playerCards
    },
    setGame(state, game) {
      state.game = game
    }
  },
  actions: {
    startGame({commit, dispatch}, gameConfig/*can name anything*/) {
      api.post('', gameConfig).then(res => {
        commit('setGame', res.data)
      })
    },
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

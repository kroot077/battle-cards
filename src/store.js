import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let api = axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {},
    playerCards: {},
    opponentCards: {}
  },
  mutations: {
    setGame(state, game) {
      state.game = game
    },
    setPlayerCards(state, playerCards) {
      state.playerCards = playerCards
    },
    setOpponentCards(state, opponentCards) {
      state.opponentCards = opponentCards
    }
  },
  actions: {
    startGame({commit, dispatch}, gameConfig/*can name anything*/) {
      api.post('', gameConfig).then(res => {
        commit('setGame', res.data)
      })
    },
    setPlayer({commit, dispatch}) {
      api.get('hand').then(res=> {
        commit('setPlayerCard', res.data)
      })
    },
    fight({state}, out) {
      let newHealth = state.card.health - state.card.attack[out]
      commit('setHealth', newHealth)
    }
  }
})

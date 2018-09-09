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
    players: [],
    opponents: []
  },
  mutations: {
    setGame(state, game) {
      state.game = game
    },
    setPlayer(state, card){
      state.players = card
    },
    setOpponent(state, card){
      state.opponents = card
    }
  },
  actions: {
    startGame({commit, dispatch}, gameConfig/*can name anything*/) {
      api.post('', gameConfig).then(res => {
        commit('setGame', res.data)
      })
    },
    getGame({commit, dispatch}, gameId) {
      api.get('/' + gameId) .then(res => {
        commit('setGame', res.data)
      })
    },
    getPlayer({commit, dispatch}) {
      api.get('player').then(res=> {
        commit('setPlayer', res.data)
      })
    },
    // fight({state}, out) {
    //   let newHealth = state.card.health - state.card.attack[out]
    //   commit('setHealth', newHealth)
    // }
  }
})

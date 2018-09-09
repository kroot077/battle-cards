<template>
  <div class="home">
    <div v-if="game.id">
      <player/>
      <opponent/>
    </div>
    <form @submit.prevent="startGame" v-else>
      <input type="text" v-model="gameConfig.playerName">
      <input type="text" v-model="gameConfig.opponents">
      <button type="submit" @click="startGame">Start Game</button>
    </form>
    <div>
      <button type="button" @click="fight">Fight</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Player from '@/components/Player.vue'
import Opponent from '@/components/Opponent.vue'

export default {
  name: 'Game',
  data(){
    return{
      gameConfig: {
        opponents: 1,
        set: 2
      },
      attackInfo: {
        	"playerId": "",
          "playerCardId": "",
          "opponentId": "",
          "opponentCardId": ""
      }
    }
  },
  computed: {
    game() {
      return this.$store.state.game
    },
    playerCards() {
      return this.$store.state.game
    },
    opponentCards() {
      return this.$store.state.opponentCards
    }
  },
  methods: {
    startGame() {
      this.$store.dispatch("startGame", this.gameConfig/*this. as we already have a gameConfig*/)
    },
    // fight() {
      
    // }
  },
  components: {
      Player,
      Opponent
  }
}
</script>

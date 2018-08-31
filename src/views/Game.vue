<template>
  <div class="home">
    <div v-if="game.id">
      <player/>
      <opponent/>
    </div>
    <!-- <form @submit.prevent="startGame" v-else>
      <input type="text" v-model="gameConfig.playerName">
      <input type="text" v-model="gameConfig.opponents">
      <button type="submit" @click="startGame">Start Game</button>
    </form> -->
    <div v-if="setPlayer && setOpponent">
      <button type="button" @click="Fight">Fight</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import player from '@/components/Player.vue'
import opponent from '@/components/Opponent.vue'

export default {
  name: 'Game',
  data(){
    return{
      gameConfig: {
        opponents: 1,
        set: 2
      }
    }
  },
  computed: {
    game() {
      return this.$store.state.game
    },
    playerCards() {
      return this.$store.state.playerCards
    },
    opponentCards() {
      return this.$store.state.opponentCards
    }
  },
  methods: {
    startGame() {
      this.$store.dispatch("startGame", this.gameConfig/*this. as we already have a gameConfig*/)
    }
    // fight() {
    //   "playerId": "",
    //   "playerCardId": "",
    //   "opponentId": "",
    //   "opponentCardId": ""
    // }
  },
  components: {
      player,
      opponent
  }
}
</script>

<template>
  <div class="home">
    <div v-if="game.id">
      <player/>
      <opponent/>
    </div>
    <form @submit.prevent="startGame">
      <input type="text" v-model="gameConfig.playerName" placeholder="Input Name">
      <button type="submit">Start Game</button>
    </form>
    <!-- <div>
      <button type="button" @click="fight">Fight</button>
    </div> -->
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
        playerName: "",
        opponents: 1,
        set: 2
      }
      // attackInfo: {
      //   	"playerId": "",
      //     "playerCardId": "",
      //     "opponentId": "",
      //     "opponentCardId": ""
      // }
    }
  },
  computed: {
    game() {
      return this.$store.state.game
    }
  },
  methods: {
    startGame() {
      this.$store.dispatch("startGame", this.gameConfig/*this. as we already have a gameConfig*/)
    }
    // fight() {
      
    // }
  },
  components: {
      Player,
      Opponent
  }
}
</script>

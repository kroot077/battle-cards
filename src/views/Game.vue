<template>
  <div class="home">
    <div v-if="game.id">
      <player/>
      <opponent/>
    <!-- <button @click="Fight"></button> -->
    </div>
    <form @submit.prevent="startGame" v-else>
      <input type="text" v-model="gameConfig.playerName">
      <button type="submit">Start Game</button>
    </form>
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
    }
  },
  methods: {
    startGame() {
      this.$store.dispatch("startGame", this.gameConfig)
    }
  },
  components: {
      player,
      opponent
  }
}
</script>

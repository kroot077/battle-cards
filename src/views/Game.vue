<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <player-cards />
    <enemy-cards />
  </div>
</template>

<script>
// @ is an alias to /src
import playerCards from '@/components/Player.vue'
import enemyCards from '@/components/Opponent.vue'

export default {
  name: 'home',
  components: {
    playerCards,
    enemyCards
  }
    computed: {
      // cards() {
      //   return this.$store.state.cards
      // }
      // playerCard(){
      //   return this.$store.state.cards
      // }
    }
}
</script>

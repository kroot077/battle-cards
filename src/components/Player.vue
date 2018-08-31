<template>
    <div class="player">
        {{player.name}}
        {{player.img}}
        <div class="playerCards" v-for="player in playerCards" :key="player.id" @click="setCard(player)">
            {{player.attack}}
            {{player.health}}
            {{player.defense}}
        </div>
        <!--<div v-if="player.playerCards.total = 0">
            <button></button>
        </div>-->
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch("player")
        },
        computed: {
            playerCards() {
                return this.$store.state.game.players[0].hand
            }
        },
        methods: {
            setPlayer() {
                this.$store.dispatch("setPlayer", player)
            },
            defeatedCard() {
                if(this.setPlayer.health = 0) {
                    
                }
                this.$store.remainingCards--
            }
        }
    }
</script>

<style>

</style>
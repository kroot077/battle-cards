<template>
    <div class="player">
        {{card.name}}
        {{card.img}}
        <div class="playerCards" v-for="card in playerCards" :key="card.id" @click="setPlayer(hand)">
            {{card.attack}}
            {{card.health}}
            {{card.defense}}
        </div>
        <!--<div v-if="player.playerCards.total = 0">
            <button></button>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "Player",
        mounted() {
            this.$store.dispatch("getPlayer")
        },
        computed: {
            playerCards() {
                return this.$store.state.game.players[0]
            }
        },
        methods: {
            setPlayer(card) {
                this.$store.dispatch("setPlayer", card)
            }
        }
    }
</script>

<style>

</style>
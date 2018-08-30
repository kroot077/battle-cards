<template>
    <div class="player">
        {{player.name}}
        <div class="playerCards" v-for="player in playerCards" :key="player.id" @click="setCard(player)">
            {{player.playerCards.hand.name}}
            {{player.playerCards.hand.img}}
            <div>
                {{player.playerCards.hand.attack}}
                {{player.playerCards.hand.health}}
                {{player.playerCards.hand.defense}}
            </div>
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
                return this.$store.state.playerCards
            }
        },
        methods: {
            setPlayer() {
                this.$store.dispatch("setPlayer", player)
            },
            defeatedCard() {
                this.$store.remainingCards--
            }
        }
    }
</script>

<style>

</style>
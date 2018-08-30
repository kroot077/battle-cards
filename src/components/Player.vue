<template>
    <div class="players">
        <div class="players" v-for="player in players" :key="player.id" @click="setCard">
            {{player.players.hand.name}}
            {{player.players.hand.img}}
            <div>
                {{player.players.hand.attack}}
                {{player.players.hand.health}}
                {{player.players.hand.defense}}
            </div>
        </div>
        <!--<div v-if="total = 0">
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
                
            }
        },
        methods: {
            setCard() {
                this.$store.dispatch("setCard", player)
            },
            defeatedCard() {
                this.$store.remainingCards--
            }
        }
    }
</script>

<style>

</style>
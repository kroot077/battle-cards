<template>
    <div class="opponent">
        {{opponent.name}}
        {{opponent.img}}
        <div class="opponentCards" v-for="opponent in opponentCards" :key="opponent.id" @click="setCard(opponent)">
            {{opponent.attack}}
            {{opponent.health}}
            {{opponent.defense}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Opponent",
        mounted() {
            this.$store.dispatch("opponent")
        },
        // data() {
        //     flip() {
                
        //     }
        // },
        computed: {
            opponentCards() {
                return this.$store.state.game.opponents[1]
            }
        },
        methods: {
            setCard() {
                this.$store.dispatch("setCard", opponent)
            }
        }
    }
</script>

<style>

</style>

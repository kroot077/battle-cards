<template>
    <div class="opponents">
        <div class="opponents" v-for="opponent in opponents" :key="opponent.id" @click="setCard">
            {{opponent.opponentCards.hand.name}}
            {{opponent.opponentCards.hand.img}}
            <div>
                {{opponent.opponentCards.hand.attack}}
                {{opponent.opponentCards.hand.health}}
                {{opponent.opponentCards.hand.defense}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch("opponent")
        },
        // data() {
        //     flip() {
                
        //     }
        // },
        computed: {
            opponentCards() {
                return this.$store.state.opponentCards
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

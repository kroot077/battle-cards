<template>
    <div class="players">
        <div class="players" v-for="players in players" :key="player.id">
            {{player.players.hand.name}}
            {{player.players.hand.img}}
            <div>
                {{player.players.hand.attack}}
                {{player.players.hand.health}}
                {{player.players.hand.defense}}
            </div>
        </div>
    </div>
</template>

<script>
export default class Player {
    constructor(data) {
        
    }
}
</script>

<style>

</style>

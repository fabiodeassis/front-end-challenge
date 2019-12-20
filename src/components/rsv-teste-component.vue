<script>
export default {
    name: 'RsvTesteComponent', // vue component name
    data() {
        return {
            counter: 5,
            initCounter: 5,
        };
    },
}
</script>

<template>
    <div class="rsv-teste-component bg-secondary">
        <p>The counter is set to <b>{{counter}}</b>.</p>
        <button @click="counter += 1">Click +1</button>
        <button @click="counter -= 1">Click -1</button>
        <button class="bg-color-info" @click="counter = initCounter">Reset</button>
    </div>
</template>


<style scoped>
    .rsv-teste-component {
        display: block;
        width: 400px;
        margin: 25px auto;
        border: 1px solid var(--primary);
        background: var(--grey-lighter);
        text-align: center;
        padding: 25px;
    }
    .rsv-teste-component p {
        margin: 0 0 1em;
    }
</style>
<template>
    <div>
        <p>{{ count }}</p>
        <button v-on:click="countUp">++</button>
    </div>
</template>

<script>
export default{
    data() {
        return{
            count: 0
        }
    },
    methods: {
        countUp: function() {
            this.count++
        }
    }
}
</script>

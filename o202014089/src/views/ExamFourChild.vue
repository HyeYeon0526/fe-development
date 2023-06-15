<template>
  <div id="child">
    <p>Exam Four Child</p>
    <input type="text" v-model="value" />
    <button type="button" v-on:click="addTodo">전달</button>
  </div>
</template>

<script>
export default {
    name: "ExamFourChild",
    data() {
    return {
      index: 0,
      value: ''
    };
  },
  methods: {
    addTodo: function () {
      this.todos.push({ id: ++this.index, value: this.value });
      this.value = "";
    },
  },

}
</script>

<style>
#child {
  background-color: #ffa;
  margin: 30px auto;
  width: 400px;
  border: 1px solid #ccc;
}
input[type="text"] {
  padding: 5px;
  margin-right: 5px;
  width: 300px;
}
button {
  padding: 0.3em 1.5em;
}
</style>
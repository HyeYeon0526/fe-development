<template>
  <div class="examFour">
    <h1>Exam Four</h1>
    <table>
      <tr>
        <td>index</td>
        <td>value</td>
      </tr>
    </table>
    <ExamFourChild />
  </div>
</template>
  
  <script>
import ExamFourChild from "./ExamFourChild.vue";
export default {
  name: "ExamFour",
  components: {
    ExamFourChild,
  },
  data() {
    return {
      index: 0,
      value: 'one'
    };
  },
  methods: {
    addTodo: function () {
      this.todos.push({ id: ++this.index, value: this.value });
      this.value = "";
    },
  },
};
</script>

<style scoped>
div {
  padding: 20px;
  margin: 30px auto;
  width: 400px;
}
table {
  border-collapse: collapse;
  margin: 20px 0;
  width: 100%;
}
tr {
  background-color: #eee;
  text-align: center;
}
td {
  border: 1px solid gray;
  padding: 6px;
}
td {
  text-align: center;
  width: 30px;
}
</style>
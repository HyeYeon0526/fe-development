<template>
  <div class="exmaTwo">
    <h1>Exam Two</h1>
    <table>
      <tr>
        <td>ID</td>
        <td>이름</td>
        <td>나이</td>
        <td> </td>
      </tr>
      <tr v-for="(todo, index) in todos" v-bind:key="todo.id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.name }}</td>
        <td>{{ todo.age }}</td>
        <td>
          <span v-on:click="deleteTodo(index)">x</span>
        </td>
      </tr>
    </table>
  </div>
</template>
  
  <script>
export default {
  name: "ExamTwo",
  data() {
    return {
      todos: [
        { id: 101, name: "홍길동", age: 16 },
        { id: 102, name: "임꺽정", age: 18 },
        { id: 103, name: "장길산", age: 19 },
        { id: 104, name: "이몽룡", age: 17 },
      ],
    };
  },
  method:{
    deleteTodo(index) {
      if (confirm("삭제하시겠습니까?")) 
        this.todos.splice(index, 1);
    }
  }
};
</script>
  
<style scoped>

div {
  padding: 30px;
  margin: 30px auto;
  width: 400px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}
table {
  border-collapse: collapse;
  margin: 20px 0;
  width: 100%;
}
tr:nth-child(1) {
  background-color: #eee;
  text-align: center;
}
td {
  border: 1px solid gray;
  padding: 6px;
}
td:nth-child(1) {
  text-align: center;
  width: 30px;
}
</style>
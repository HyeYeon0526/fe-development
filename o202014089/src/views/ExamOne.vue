<template>
    <div class="examOne">
      <h1>Exam1</h1>
      <p>202014089</p>
      <p>김혜연</p>
      <div>{{ time }}</div>
    </div>
  </template>
  
  <script>
  import moment from 'moment';
  export default {
    name: 'ExamOne',
    data(){
      return { time:null };
    },
    mounted() {
      let callback = () => this.time = moment().format("HH:mm:ss"); 
      callback(); 
    }
  }
  </script>
  
<template>
  <nav>
    <router-link to="/ExamOne">ExamOne</router-link> |
    <router-link to="/ExamTwo">ExamTwo</router-link> |
    <router-link to="/ExamThree">ExamThree</router-link> |
    <router-link to="/ExamFour">ExamFour</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
  import Navbar from './components/Navbar.vue';
  import Sidebar from './components/Sidebar.vue';
  import TodoList from './components/TodoList.vue';
  
  export default {
    components: {
      Navbar,
      Sidebar,
      TodoList
    },
    data() {
      return {
        currentFilter: 'all'
      };
    },
    methods: {
      filterTasks(filter) {
        this.currentFilter = filter;
      }
    }
  };
  </script>

<template>
    <div id="app">
      <Navbar />
      <div class="main">
        <Sidebar @filter="filterTasks" />
        <TodoList :filter="currentFilter" />
      </div>
    </div>
  </template>
  
  <style>
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .main {
    display: flex;
    flex: 1;
    background-color: white
  }
  </style>
  
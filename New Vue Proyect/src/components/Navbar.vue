  <script>
  export default {
    data() {
      return {
        user: 'Admin'
      };
    }
  };
  </script>

<template>
    <nav class="navbar">
      <img src="" alt="Logo" class="logo" />
      <div class="user-info">
        <span>{{ user }}</span>
      </div>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #333;
    color: white;
  }
  .logo {
    height: 40px;
  }
  .user-info {
    align-self: center;
  }
  </style>
  
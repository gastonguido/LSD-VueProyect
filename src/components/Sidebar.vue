<script>
export default {
  data() {
    return {
      departments: [
        'All Departaments',
        'Artist Bookings',
        'Gastronomy',
        'Legal',
        'Security & Control',
        'Marketing & Sponsors',
        'Ticketing and Pre-sale',
        'Stage & Equipment'
      ]
    };
  }
};
</script>

<template>
    <div class="sidebar">
      <ul>
        <li v-for="department in departments" :key="department" @click="$emit('filter', department)">
          {{ department }}
        </li>
      </ul>
    </div>
</template>

<style scoped>
.sidebar {
  width: 200px;
  padding: 20px;
  background-color: #9b9b9b;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  padding: 10px;
  cursor: pointer;
  background-color: #ffffff;
  color: black;
  margin-bottom: 5px;
  border-radius: 4px;
  text-align: center;
}
.sidebar li:hover {
  background-color: #d0d0d0;
}
</style>
  
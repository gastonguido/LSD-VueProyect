<script>
export default {
  props: {
    task: Object
  }
};
</script>

<template>
  <div>
    <input type="checkbox" v-model="task.completed" />
    <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
      {{ task.text }}
    </span>
    <button @click="$emit('remove')">Eliminar</button>
  </div>
</template>

<style scoped>
span {
  color: black;
  font-weight: bold;
}

button {
  margin-left: 10px;
  background-color: white;
  color: black;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
}
</style>
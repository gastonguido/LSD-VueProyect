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
      <button @click="$emit('remove')">X</button>
    </div>
</template>
  
<style scoped>
  
</style>
  
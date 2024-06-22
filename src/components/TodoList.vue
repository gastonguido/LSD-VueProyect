<script>
import Task from './Task.vue';
import Dropdown from 'primevue/dropdown';

export default {
  components: { Task, Dropdown },
  data() {
    return {
      newTask: '',
      selectedDepartment: null,
      departments: [
        { label: 'Artist Bookings', value: 'Artist Bookings' },
        { label: 'Gastronomy', value: 'Gastronomy' },
        { label: 'Legal', value: 'Legal' },
        { label: 'Security & Control', value: 'Security & Control' },
        { label: 'Marketing & Sponsors', value: 'Marketing & Sponsors' },
        { label: 'Ticketing and Pre-sale', value: 'Ticketing and Pre-sale' },
        { label: 'Stage & Equipment', value: 'Stage & Equipment' }
      ],
      tasks: [],
      filter: 'all'
    };
  },
  computed: {
    filteredTasks() {
      if (this.filter === 'all') {
        return this.tasks;
      } else {
        return this.tasks.filter(task => task.department === this.filter);
      }
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '' && this.selectedDepartment) {
        this.tasks.push({
          id: Date.now(),
          text: this.newTask.trim(),
          completed: false,
          department: this.selectedDepartment.value
        });
        this.newTask = '';
        this.selectedDepartment = null;
      }
    },
    removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  }
};
</script>

<template>
    <div>
      <div class="task-input">
        <input v-model="newTask" @keyup.enter="addTask" placeholder="Agregar una nueva tarea" />
        <Dropdown v-model="selectedDepartment" :options="departments" optionLabel="label" placeholder="Seleccionar Departamento" />
        <button @click="addTask">Add</button>
      </div>
      <div v-for="task in filteredTasks" :key="task.id">
        <Task :task="task" @remove="removeTask(task.id)" />
      </div>
    </div>
  </template>
  
  <style scoped>
  .task-input {
    display: flex;
    align-items: center;
  }
  .task-input input {
    flex: 1;
    margin-right: 10px;
  }
  .task-input button {
    margin-left: 10px;
  }
  
  </style>
  
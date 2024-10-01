<template>
    <div class="theme-selector">
      <label for="theme">Válaszd ki a témát:</label>
      <select id="theme" v-model="selectedTheme" @change="themeChanged">
        <option value="dark">Sötét</option>
        <option value="light">Világos</option>
        <option value="blue">Kék</option>
        <option value="green">Zöld</option>
        <option value="red">Piros</option>
        <option value="yellow">Sárga</option>
        <option value="purple">Lila</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedTheme: 'dark', // Alapértelmezett téma
      };
    },
    methods: {
      themeChanged() {
        this.$emit('themeChanged', this.selectedTheme);
      },
    },
  };
  </script>
  
  <style scoped>
  .theme-selector {
    margin-bottom: 20px;
  }
  </style>
  
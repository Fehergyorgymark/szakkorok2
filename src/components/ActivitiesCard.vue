<template>
    <div class="activity">
      <h3>{{ activityName }}</h3>
      <ul class="scrollable-list">
        <li v-for="student in students" :key="student.studentID">{{ student.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      activityName: {
        type: String,
        required: true,
      },
      students: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .activity {
    border: 1px solid #ccc;
    padding: 10px;
    width: 23%;
    min-height: 200px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
  }
  
  .scrollable-list {
    max-height: 150px;
    overflow-y: auto;
    overflow-x: hidden;
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }
  
  h3 {
    text-align: center;
  }
  </style>
  
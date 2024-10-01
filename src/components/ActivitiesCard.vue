<template>
    <div class="activity">
      <h3>{{ activity.name }}</h3>
      <ul class="scrollable-list">
        <li v-for="student in studentsOfActivity" :key="student.studentID">{{ student.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ["students", "activity"],
    computed: {
      studentsOfActivity(){
        return this.students.filter(student => student.selectedActivity === this.activity.id);
      }
    }
      
  };
  </script>
  
  <style scoped>

  
  .scrollable-list {
    max-height: auto;
    /* list-style-type: none; */
    padding-left: 0px;
    margin: 10px;
  }
  
  h3 {
    text-align: center;
  }
  </style>
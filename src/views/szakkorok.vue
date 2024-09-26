<template>
    <div class="container">
      <h2>Tanulók és szakkörök</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Név</th>
            <th>Osztály</th>
            <th>Szakkör</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="index">
            <td>{{ student.name }}</td>
            <td>{{ student.class }}</td>
            <td>
              <select v-model="student.selectedActivity" class="form-select">
                <option v-for="activity in activities" :key="activity" :value="activity">
                  {{ activity }}
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- <pre>{{ students }}</pre>  -->
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        students: [
          { name: 'Kiss Péter', class: '10A', selectedActivity: null },
          { name: 'Nagy Anna', class: '11B', selectedActivity: null },
          { name: 'Szabó Béla', class: '12C', selectedActivity: null },
        ],
        activities: ['Foci', 'Kosárlabda', 'Dráma', 'Nincs szakkör'],
      };
    },
  };
  </script>
  
  <style scoped>

  </style>
  
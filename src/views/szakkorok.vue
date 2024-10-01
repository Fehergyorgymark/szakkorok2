<template>
  <div class="container">
    <h2>Tanulók és szakkörök</h2>

    <div class="main-container">
      <div class="table-container">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Név</th>
              <th>Osztály</th>
              <th>Szakkör</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in filteredStudents" :key="student.studentID">
              <td>{{ student.name }}</td>
              <td>{{ student.class }}</td>
              <td>
                <select v-model="student.selectedActivity" class="form-select" @change="updateActivities()">
                  <option v-for="activity in activities" :key="activity.id" 
                  :value="activity.id">
                  {{activity.name }}
                </option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="activities-box">

        <ActivitiesCard
        v-for="activity in activities" :key="activity.id"
        :students="students"
        :activity="activity"
        
        />


        
      </div>
    </div>
  </div>
</template>

<script>
import ActivitiesCard from '../components/ActivitiesCard.vue';

export default {
  components: {
    ActivitiesCard,
  },
  data() {
    return {
      students: [
        { studentID: 1, name: 'Kiss Péter', class: '10A', selectedActivity: 4},
        { studentID: 2, name: 'Nagy Anna', class: '11B', selectedActivity: 4},
        { studentID: 3, name: 'Szabó Béla', class: '12C', selectedActivity: 4},
        { studentID: 4, name: 'Tóth Eszter', class: '10D', selectedActivity: 4},
        { studentID: 5, name: 'Horváth Gábor', class: '11A', selectedActivity: 4},
        { studentID: 6, name: 'Kovács Lívia', class: '12B', selectedActivity: 4},
        { studentID: 7, name: 'Varga Zoltán', class: '10C', selectedActivity: 4},
        { studentID: 8, name: 'Farkas Réka', class: '11D', selectedActivity: 4},
        { studentID: 9, name: 'Papp Máté', class: '12A', selectedActivity:  4},
        { studentID: 10, name: 'Molnár Katalin', class: '10B', selectedActivity: 4},
        { studentID: 11, name: 'Szalay András', class: '11C', selectedActivity: 4},
        { studentID: 12, name: 'Balogh Júlia', class: '12D', selectedActivity: 4},
        { studentID: 13, name: 'Kis István', class: '10A', selectedActivity: 4},
        { studentID: 14, name: 'Németh Orsolya', class: '11B', selectedActivity: 4 },
        { studentID: 15, name: 'Fodor Dániel', class: '12C', selectedActivity: 4},
      ],
      activities: [
        { id: 1, name: 'Foci' },
        { id: 2, name: 'Kosárlabda' },
        { id: 3, name: 'Dráma' },
        { id: 4, name: 'Nem jár' }
      ],
    };
  },
  computed: {
    filteredStudents() {
      return this.students;
    },
  },
  methods: {
    getStudentsByActivity(activitiesname) {
      return this.students.filter(student => student.selectedActivity.name === activitiesname);
    },
    updateActivities() {
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: space-between;
  margin-top: 0px;
}

.table-container {
  flex: 1;
  max-height: 700px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: 20px; 
}

.activities-box {
  flex: 1;
  background-color: #fffefe1a; 
  border-radius: 10px; 
  padding: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.activity-list {
  margin-bottom: 10px; 
}

.scrollable-list {
  max-height: flex;
  overflow-y: auto;
  overflow-x: hidden;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

.filter-input {
  margin-bottom: 100px;
  padding: 50px;
  width: 100%;
}
</style>

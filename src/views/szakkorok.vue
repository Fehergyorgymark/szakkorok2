<template>
  <div class="container">
    <h2 :style="{ color: headingColor }">Tanulók és szakkörök</h2>
    <input type="text" v-model="filterText" placeholder="Szűrés név alapján" class="filter-input" />

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
                  <option v-for="activity in activities" :key="activity.id" :value="activity">{{ activity.name }}</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="activities-box">
        <div class="activity-list" v-for="activity in activities" :key="activity.id">
          <h3>{{ activity.name }}</h3>
          <ul class="scrollable-list">
            <li v-for="student in getStudentsByActivity(activity.name)" :key="student.studentID">{{ student.name }}</li>
          </ul>
        </div>
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
      filterText: '',
      headingColor: 'rgb(255, 0, 0)',
      colorChangeInterval: null,
      activities: [
        { id: 1, name: 'Foci' },
        { id: 2, name: 'Kosárlabda' },
        { id: 3, name: 'Dráma' },
        { id: 4, name: 'Robotika' },
        { id: 5, name: 'Nem jár' },
      ],
      students: [
        { studentID: 1, name: 'Kiss Péter', class: '10A', selectedActivity: { id: 5, name: 'Nem jár' } },
        { studentID: 2, name: 'Nagy Anna', class: '11B', selectedActivity: { id: 5, name: 'Nem jár' } },
        { studentID: 3, name: 'Szabó Béla', class: '12C', selectedActivity: { id: 5, name: 'Nem jár' } },
        { studentID: 4, name: 'Tóth Eszter', class: '10D', selectedActivity: { id: 5, name: 'Nem jár' } },
        { studentID: 5, name: 'Horváth Gábor', class: '11A', selectedActivity: { id: 5, name: 'Nem jár' } },
        { studentID: 6, name: 'Kovács Lívia', class: '12B', selectedActivity: { id: 5, name: 'Nem jár' } },
        { studentID: 7, name: 'Varga Zoltán', class: '10C', selectedActivity: { id: 5, name: 'Nem jár' } },
        { studentID: 8, name: 'Farkas Réka', class: '11D', selectedActivity: { id: 5, name: 'Nem jár' } },
        { studentID: 9, name: 'Papp Máté', class: '12A', selectedActivity: { id: 5, name: 'Nem jár' } },
        { studentID: 10, name: 'Molnár Katalin', class: '10B', selectedActivity: { id: 5, name: 'Nem jár' } },
        { studentID: 11, name: 'Szalay András', class: '11C', selectedActivity: { id: 5, name: 'Nem jár' } },
        { studentID: 12, name: 'Balogh Júlia', class: '12D', selectedActivity: { id: 5, name: 'Nem jár' } },
        { studentID: 13, name: 'Kis István', class: '10A', selectedActivity: { id: 5, name: 'Nem jár' } },
        { studentID: 14, name: 'Németh Orsolya', class: '11B', selectedActivity: { id: 5, name: 'Nem jár' } },
        { studentID: 15, name: 'Fodor Dániel', class: '12C', selectedActivity: { id: 5, name: 'Nem jár' } },
      ],
    };
  },
  computed: {
    filteredStudents() {
      return this.students.filter(student =>
        student.name.toLowerCase().includes(this.filterText.toLowerCase())
      );
    },
  },
  methods: {
    getStudentsByActivity(activityName) {
      return this.students.filter(student => student.selectedActivity.name === activityName);
    },
    updateActivities() {
      // Itt frissítheted a tevékenységeket, ha szükséges
    },
    changeHeadingColor() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      this.headingColor = `rgb(${r}, ${g}, ${b})`;
    },
  },
  mounted() {
    this.colorChangeInterval = setInterval(this.changeHeadingColor, 1000);
  },
  beforeDestroy() {
    clearInterval(this.colorChangeInterval);
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
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: 20px; /* Adjust margin to create space between sections */
}

.activities-box {
  flex: 1;
  background-color: #fffefe1a; /* Light background color for activities */
  border-radius: 10px; /* Rounded corners */
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: slight shadow for depth */
}

.activity-list {
  margin-bottom: 10px; /* Space between activity lists */
}

.scrollable-list {
  max-height: auto;
  overflow-y: auto;
  overflow-x: hidden;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

.filter-input {
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
}
</style>

<template>
  <div class="container">
    <h2>Tanulók és szakkörök</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Név</th>
          <th>Osztály</th>
          <th>Foci</th>
          <th>Kosárlabda</th>
          <th>Dráma</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="index">
          <td>{{ student.name }}</td>
          <td>{{ student.class }}</td>
          <td>
            <select v-model="student.activities.foci" class="form-select" @change="updateActivities()">
              <option value="Nem jár">Nem jár</option>
              <option value="Jár">Jár</option>
            </select>
          </td>
          <td>
            <select v-model="student.activities.kosarlabda" class="form-select" @change="updateActivities()">
              <option value="Nem jár">Nem jár</option>
              <option value="Jár">Jár</option>
            </select>
          </td>
          <td>
            <select v-model="student.activities.drama" class="form-select" @change="updateActivities()">
              <option value="Nem jár">Nem jár</option>
              <option value="Jár">Jár</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Szakkörökhöz tartozó dobozok -->
    <div class="activities-box">
      <div class="activity">
        <h3>Foci</h3>
        <ul>
          <li v-for="student in selectedFoci" :key="student">{{ student }}</li>
        </ul>
      </div>
      <div class="activity">
        <h3>Kosárlabda</h3>
        <ul>
          <li v-for="student in selectedKosarlabda" :key="student">{{ student }}</li>
        </ul>
      </div>
      <div class="activity">
        <h3>Dráma</h3>
        <ul>
          <li v-for="student in selectedDrama" :key="student">{{ student }}</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        { name: 'Kiss Péter', class: '10A', activities: { foci: 'Nem jár', kosarlabda: 'Nem jár', drama: 'Nem jár' } },
        { name: 'Nagy Anna', class: '11B', activities: { foci: 'Nem jár', kosarlabda: 'Nem jár', drama: 'Nem jár' } },
        { name: 'Szabó Béla', class: '12C', activities: { foci: 'Nem jár', kosarlabda: 'Nem jár', drama: 'Nem jár' } },
      ],
      selectedFoci: [],
      selectedKosarlabda: [],
      selectedDrama: [],
    };
  },
  methods: {
    updateActivities() {
      // Frissítjük a kiválasztott szakkörökre járók listáját
      this.selectedFoci = this.students
        .filter(student => student.activities.foci === 'Jár')
        .map(student => student.name);

      this.selectedKosarlabda = this.students
        .filter(student => student.activities.kosarlabda === 'Jár')
        .map(student => student.name);

      this.selectedDrama = this.students
        .filter(student => student.activities.drama === 'Jár')
        .map(student => student.name);
    },
  },
  mounted() {
    // Első betöltéskor frissítjük a kiválasztott tanulókat
    this.updateActivities();
  },
};
</script>

<style scoped>
.activities-box {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.activity {
  border: 1px solid #ccc;
  padding: 10px;
  width: 30%;
}

h3 {
  text-align: center;
}
</style>

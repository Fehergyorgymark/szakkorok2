<template>
  <div class="container" >
    <h1>Szakkörök</h1>
    <div class="row justify-content-center">
        <!-- táblázat -->
         <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Név</th>
                    <th>Osztály</th>
                    <th>Szakkör</th>
                </tr>
            </thead>
            <tbody>
                <!-- Felsorolás a data-binding segítségével -->
                <tr v-for="item in users" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.class }}</td>
                    <td>{{ item.studygroupID }}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                { id: 1, name: 'Kovács Boglárka', class: '12A', studygroupID: null },
                { id: 2, name: 'Nagy Levente', class: '12B', studygroupID: null },
                { id: 3, name: 'Szabó Zoltán', class: '13C', studygroupID: null },
                { id: 4, name: 'Lakatos Levente', class: '13D', studygroupID:null}
                
            ]
        }
    }

}
</script>

<style>

</style>
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
                { id: 1, name: 'John Doe', class: '1A', studygroupID: '123' },
                { id: 2, name: 'Jane Doe', class: '2B', studygroupID: '456' },
                { id: 3, name: 'Mike Doe', class: '3C', studygroupID: '789' }
            ]
        }
    }

}
</script>

<style>

</style>
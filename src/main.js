import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Bootstrap CSS importálása
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// Bootstrap ikonok importálása
import "bootstrap-icons/font/bootstrap-icons.min.css";

// Saját CSS importálása
import './assets/main.css'; // A CSS fájl importálása

const app = createApp(App);

app.use(router);

app.mount('#app');

import {
    createApp
} from 'vue'
import {
    createRouter,
    createWebHashHistory
} from "vue-router";


import store from "./store";
import routes from "./router/index";
// import App from './App.vue'
import KnowledgeBaseGenerator from './views/knowledge-base-generator/knowledge-base-generator.vue'

const app = createApp(KnowledgeBaseGenerator).mount('#app')

app.use(store);
app.use(router);

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
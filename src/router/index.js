import {createRouter, createWebHistory} from 'vue-router'
import Main from "../pages/Main.vue";
import Index from "../pages/axios/Index.vue";
import Show from "../pages/axios/Show.vue";
import Edit from "../pages/axios/Edit.vue";
import Create from "../pages/axios/Create.vue";
 const router = createRouter({
     history: createWebHistory(),
     routes: [
         {
             path: '/',
             component: Main,
             name: 'axios'
         },
         {
             path: '/index',
             component: Index,
             name: 'axios.index'
         },
         {
             path: '/index/show/:id',
             component: Show,
             name : 'axios.show'
         },
         {
             path: '/index/edit/:id',
             component: Edit,
             name: 'axios.edit'
         },
         {
             path: '/index/create',
             component: Create,
             name: ' axios.create'
         }
     ]
 })
export default router
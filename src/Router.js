import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CochesComponent from "./components/CochesComponent.vue";
import CustomersComponent from "./components/CustomersComponent.vue";
import EmpleadosDetalle from "./components/EmpleadosDetalle.vue";

const myRoutes = [
  { path: "/", component: HomeComponent },
  { path: "/coches", component: CochesComponent },
  { path: "/customers", component: CustomersComponent },
  { path: "/empleados", component: EmpleadosDetalle },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;

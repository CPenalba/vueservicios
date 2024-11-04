<template>
  <div>
    <h1>Empleados oficios</h1>
    <table class="table table-primary">
      <thead>
        <tr>
          <th>Apellido</th>
          <th>Oficio</th>
          <th>Salario</th>
          <th>Deapartamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp in empleados" :key="emp">
          <td>{{ emp.apellido }}</td>
          <td>{{ emp.oficio }}</td>
          <td>{{ emp.salario }}</td>
          <td>{{ emp.departamento }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceEmpleados from "@/services/SericeEmpleados";

const service = new ServiceEmpleados();

export default {
  name: "EmpleadosOficios",
  methods: {
    loadEmpleados() {
      let oficio = this.$route.params.oficio;
      service.getEmpleadosOficio(oficio).then((result) => {
        this.empleados = result;
      });
    },
  },
  data() {
    return {
      empleados: [],
    };
  },
  mounted() {
    this.loadEmpleados();
  },
  watch: {
    "$route.params.oficio"(valorNuevo, valorAntiguo) {
      if (valorNuevo != valorAntiguo) {
        this.loadEmpleados();
      }
    },
  },
};
</script>

<style></style>

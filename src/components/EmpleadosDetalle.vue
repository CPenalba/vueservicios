<template>
  <div>
    <h1>Empleados detalle</h1>
    <form v-on:submit.prevent="buscarEmpleado()">
      <label>Seleccion empleado</label>
      <select class="form-control" v-model="idEmpleado">
        <option v-for="em in empleados" :key="em" :value="em.idEmpleado">
          {{ em.apellido }}
        </option>
      </select>
      <button class="btn btn-info">Detalles empleado</button>
    </form>
    <hr />
    <div v-if="empleado">
      <h2>Oficio: {{ empleado.oficio }}</h2>
      <h2>Salario: {{ empleado.salario }}</h2>
      <h2>Iddepart: {{ empleado.departamento }}</h2>
    </div>
  </div>
</template>

<script>
import ServiceEmpleados from "@/services/SericeEmpleados";

const service = new ServiceEmpleados();

export default {
  name: "EmpleadosDetalle",
  methods: {
    buscarEmpleado() {
      service.findEmpleado(this.idEmpleado).then((result) => {
        this.empleado = result;
      });
    },
  },
  data() {
    return {
      empleados: [],
      idEmpleado: 0,
      empleado: null,
    };
  },
  mounted() {
    service.getEmpleados().then((result) => {
      this.empleados = result;
    });
  },
};
</script>

<style></style>

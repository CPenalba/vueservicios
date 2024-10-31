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
    <hr/>
    <div v-if="empleado">
        <h2>Oficio: {{ empleado.oficio }}</h2>
        <h2>Salario: {{ empleado.salario }}</h2>
        <h2>Iddepart: {{ empleado.departamento }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "@/Global";

export default {
  name: "EmpleadosDetalle",
  methods:{
buscarEmpleado() {
    let request = "api/empleados/" + this.idEmpleado;
    var url = Global.urlApiEmpleados + request;
    axios.get(url).then((response) => {
      console.log("Leyendo servicio");
      this.empleado = response.data;
    });


}
  },
  data() {
    return {
      empleados: [],
      idEmpleado: 0,
      empleado:null
    };
  },
  mounted() {
    let request = "api/empleados";
    let url = Global.urlApiEmpleados + request;
    axios.get(url).then((response) => {
      console.log("Leyendo servicio");
      this.empleados = response.data;
    });
  },
};
</script>

<style></style>

<template>
  <div>
    <h1>Servicio API Coches</h1>
    <div v-for="car in coches" :key="car">
      <h2 style="color: blue">{{ car.marca }} {{ car.modelo }}</h2>
      <p>Conductor {{ car.conductor }}</p>
      <img :src="car.imagen" style="width: 150px; height: 150px" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "@/Global";
//si necesitamos variables declaradas para utilizarlas en todos los metodos (mounted, created, methods) la declaramos aqui

export default {
  name: "CochesComponent",
  data() {
    return {
      coches: [],
    };
  },
  mounted() {
    let request = "webresources/coches";
    //las variables declaradas por encima de export default no utilizan la palabra this
    let url = Global.urlApiCoches + request;
    axios.get(url).then((response) => {
      console.log("Leyendo servicio");
      this.coches = response.data;
    });
  },
};
</script>

<style></style>

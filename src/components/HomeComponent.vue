<template>
  <div>
    <h1>Home component</h1>
    <img src="./../assets/images/home.png" width="150px" height="150px" />
    <h2 style="color: red">{{ mensaje }}</h2>
  </div>
</template>

<script>
import ServiceEjemplo from "./../services/ServiceEjemplo";

//PARA PODER UTILIZAR EL SERVICIO, NECESITAMOS UNA CONSTANTE
//INSTANCIADA CON LA CLASE DEL SERVICIO NECESARIO
const service = new ServiceEjemplo();
export default {
  name: "HomeComponent",
  mounted() {
    this.mensaje = service.getSaludo("Alumno");
  },
  data() {
    return {
      mensaje: "",
    };
  },
};
</script>

<style></style>

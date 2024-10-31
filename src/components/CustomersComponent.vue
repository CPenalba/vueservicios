<template>
  <div>
    <h1>Servicio API Customers</h1>
    <form v-on:submit.prevent="buscarCustomer()">
      <label>ID customer: </label>
      <input type="text" v-model="id" />
      <hr />
      <button>Buscar customer</button>
    </form>
    <div v-if="customerBuscado">
      <h2>Compañia: {{ customerBuscado.companyName }}</h2>
      <h2>Nombre: {{ customerBuscado.contactName }}</h2>
      <h2>Ciudad: {{ customerBuscado.city }}</h2>
    </div>
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Company name</th>
          <th>Contact name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cus in customers" :key="cus">
          <td>{{ cus.id }}</td>
          <td>{{ cus.companyName }}</td>
          <td>{{ cus.contactName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Global from "@/Global";

export default {
  name: "CustomersComponent",
  data() {
    return {
      customers: [],
      id: "",
      customerBuscado: null,
    };
  },
  methods: {
    buscarCustomer() {
      let idCustomer = this.id;
      console.log(idCustomer);
      let request = "customers/" + idCustomer + ".json";
      let url = Global.urlApiCustomers + request;
      axios.get(url).then((response) => {
        this.customerBuscado = response.data.customer;
      });
    },
  },
  mounted() {
    let request = "customers.json";
    let url = Global.urlApiCustomers + request;
    axios.get(url).then((response) => {
      console.log("Leyendo servicio");
      this.customers = response.data.results;
    });
  },
};
</script>

<style></style>

<template>
  <component :is="layout" />
</template>

<script>
import CleanLayout from "@/layouts/CleanLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

export default {
  components: {
    CleanLayout,
    DashboardLayout,
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      // set layout by route meta
      if (to.meta.layout !== undefined) {
        console.log(" to.meta.layout :", to.meta.layout);
        this.layout = to.meta.layout;
      } else {
        this.layout = "DashboardLayout"; // this is default layout if route meta is not set
      }
    },
  },
};
</script>

<!--<template>-->
<!--  <div id="head">-->
<!--    <HeaderComponent></HeaderComponent>-->
<!--  </div>-->
<!--  <FooterComponent></FooterComponent>-->
<!--</template>-->

<!--<script>-->
<!--import HeaderComponent from "@/components/Template/Base/Header";-->
<!--import FooterComponent from "@/components/Template/Base/Footer";-->

<!--export default {-->
<!--  name: "Root",-->
<!--  components: {-->
<!--    FooterComponent,-->
<!--    HeaderComponent,-->
<!--  },-->
<!--};-->
<!--</script>-->

<style>
body {
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.todo {
  color: red;
  text-decoration: line-through;
}
/*#head {*/
/*  background-color: yellowgreen;*/
/*}*/
</style>

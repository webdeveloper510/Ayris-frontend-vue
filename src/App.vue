<template>
  <component :is="layout" />
</template>

<style>
  @font-face {
    font-family: 'Old London';
    src: url('../public/font/OldLondon.woff2') format('woff2'),
        url('../public/font/OldLondon.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

  @font-face {
      font-family: 'Old London Alternate';
      src: url('../public/font/OldLondonAlternate.woff2') format('woff2'),
          url('../public/font/OldLondonAlternate.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: block;
  }
  @font-face {
    font-family: 'Trajan';
    src: url('../public/font/TrajanPro-Regular.woff2') format('woff2'),
        url('../public/font/TrajanPro-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
      font-family: 'Trajan-Bold';
      src: url('../public/font/TrajanPro-Bold.woff2') format('woff2'),
          url('../public/font/TrajanPro-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }
</style>

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

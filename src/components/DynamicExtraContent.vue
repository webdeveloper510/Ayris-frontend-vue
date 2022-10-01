<template>
  <!--  <h5>{{ path }}</h5>-->
  <!--  <h1>{{ getActivePage() }}</h1>-->
  <!--  <h1>From extra dyn</h1>-->
  <!--  <h1>{{ currentPath }} -</h1>-->

  <!--  {{ currentComponent }} ++-->
  <keep-alive>
    <component :is="currentComponent" v-bind="currentProperties" />
  </keep-alive>

  <!--  <router-view />-->
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "DynamicExtraContentComponent",
  components: {
    CategoryListComponent: defineAsyncComponent(() =>
      import("./Template/Pages/Category/CategoryList")
    ),
  },
  props: {
    currentPath: String,
  },
  data() {
    return {
      currentComponent: null,
      currentPage: null,
    };
  },
  created() {
    this.currentPage = this.getActivePage();
    this.currentComponent = this.getActiveComponent(this.currentPage);
  },
  computed: {
    currentProperties() {
      let page = this.$store.getters["data/getCurrentPage"];
      if (page === "page") {
        return {
          categories: {
            cat: this.$store.state.data.categories,
          },
        };
      }
      return null;
    },
  },
  updated() {
    this.currentPage = this.getActivePage();
    this.currentComponent = this.getActiveComponent(this.currentPage);
  },
  methods: {
    getActivePage() {
      return this.$store.getters["data/getCurrentPage"];
    },
    getActiveComponent(page) {
      if (page === "page") {
        this.currentComponent = "CategoryListComponent";
      } else {
        this.currentComponent = "None";
      }
      return this.currentComponent;
    },
  },
};
</script>

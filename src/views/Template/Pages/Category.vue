<template>
  <div id="category">
    <h1>Category Page</h1>
    <CategoryShowComponent v-bind="getSlug" />
  </div>
</template>

<script>
import CategoryShowComponent from "@/components/Template/Pages/Category/CategoryShow";
// import MyPrefCat from "@/components/Template/Pages/Category/MyPrefCatBtn";

export default {
  name: "CategoryView",
  components: {
    CategoryShowComponent,
    // MyPrefCat,
  },
  created() {
    console.log("$route.params.slug :", this.$route.params.slug);
    // this.slug = this.$route.params.slug;
    // console.warn("this.slug :", this.slug);

    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        console.warn("toParams :", toParams);
        console.warn("previousParams :", previousParams);
      }
    );
  },
  computed: {
    getSlug() {
      return { slug: this.$route.params.slug };
    },
  },
};
</script>

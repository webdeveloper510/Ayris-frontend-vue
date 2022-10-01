<template>
  <!--  Category FOR MENU-->
  <div class="cat-menu" v-if="categories && categories.menu">
    <div
      class="cat-links"
      :id="cat.cat_id"
      v-for="cat in categories.menu"
      v-bind:key="cat.cat_id"
      @click="setSelectedCatId(cat.cat_id)"
    >
      <router-link :to="{ name: 'Category', params: { slug: cat.cat_slug } }">
        {{ cat.cat_name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryMenuComponent",
  components: {},
  data() {
    return {
      catId: null,
      cat: null,
    };
  },
  props: {
    slug: String,
    categories: Object,
  },
  mounted() {
    console.log("MOUNTERD");
    this.catId = this.$store.state.data.selectedCatId;
    console.log("this.catId :", this.catId);
  },
  methods: {
    setSelectedCatId(catId) {
      console.log("setCatId");
      console.log("catId :", catId);
      console.log("this.getSelectedCatId() :", this.getSelectedCatId());
      if (this.getSelectedCatId() !== catId) {
        console.log("Different");

        this.$store.dispatch("data/changeSelectedCatId", catId);
        this.catId = catId;
        this.getAllCatOrById();
      } else {
        console.log("SAME");
      }
    },
    getSelectedCatId() {
      console.log("getCatId");
      console.log(
        " this.$store.state.data.selectedCatId :",
        this.$store.state.data.selectedCatId
      );
      return this.$store.state.data.selectedCatId;
    },
    getAllCatOrById() {
      console.warn("getAllCatOrById : ");
      // console.log("this.catId :", typeof this.catId);
      console.log(
        "this.$store.state.data.selectedCatId :",
        this.$store.state.data.selectedCatId
      );
      console.log("this.catId :", this.catId);
      console.warn("==============================");
      // this.catId = this.getCatId;
      this.$store.dispatch("data/getAllCategories", this.catId).then(
        (response) => {
          console.log("response : ", response);
          this.cat = response;
          // console.warn("this.allCat :", this.allCat);
        },
        (error) => {
          console.log(error);

          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style scoped>
.cat-menu {
  /*background-color: green;*/
  /*opacity: 0.5;*/
  width: 8vw;
  height: 23vw;
  margin: auto;
  margin-top: 7.8vw;
}

.cat-links {
  font-size: 1vw;
  padding-top: 0.5vw;
  padding-bottom: 0.9vw;
  /*background-color: red;*/
  /*border: 1px solid black;*/
}
.cat-links > a {
  color: white;
}
.cat-links > a:hover {
  color: blue;
}
.cat-links a.active {
  background-color: indianred;
}
.sub-cat {
  background-color: yellowgreen;
}
.sub-cat-obj {
  background-color: darkgray;
  width: 75%;
  margin: auto;
}
</style>

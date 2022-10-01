<template>
  <h3>Cat Show</h3>
  <div v-if="slug">this slug : {{ slug }}</div>
  cat Id :
  <div v-if="getCatId">{{ getCatId }}</div>
  <br />
  <div v-if="getCat">
    <h5>{{ getCat.name }}</h5>
    Counter : {{ getCat.counter }}

    <!--    cat : {{ getCat }}-->
  </div>
</template>

<script>
export default {
  name: "CategoryShowComponent",
  components: {},
  data() {
    return {
      catId: null,
      cat: null,
    };
  },
  props: {
    slug: String,
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    getCatId() {
      // TODO get and check url to find cat if no data

      console.warn("GET CAT ID");
      console.warn("this.catId :", this.catId);
      console.log(
        "this.$store.state.data.selectedCatId : ",
        this.$store.state.data.selectedCatId
      );

      return this.$store.state.data.selectedCatId;
    },
    getCat() {
      console.warn("getCat ---------------");
      console.log("this.cat :", this.cat);
      console.log(this.$store.state.data.categories);
      return this.$store.state.data.categories;
    },
  },
  created() {
    this.setCat();
    // this.getCatId();
    // this.getAllCatOrById();
  },
  updated() {
    this.setCat();
    //   this.getCatId();
  },
  methods: {
    setCat() {
      this.cat = this.getCat;
    },
  },
};
</script>

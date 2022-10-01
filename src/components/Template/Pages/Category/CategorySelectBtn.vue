<template>
  <h3>all category</h3>

  <div v-if="allCat">
    <div v-for="cat in allCat" v-bind:key="cat.id">
      <p>
        <a :href="cat.slug"> {{ cat.name }} - Counter : ({{ cat.counter }})</a>
      </p>
      <div v-if="cat.children.length > 0" style="margin-left: 155px">
        <p v-for="c in cat.children" v-bind:key="c.id">
          <a :href="c.slug">
            {{ getFullCatName(cat, c) }} - Counter : ({{ c.counter }})
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorySelectBtnComponent",
  components: {},
  data() {
    return {
      loading: false,
      myCategories: null,
      allCat: null,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.getMyCategories();
    }
    this.getAllCat();
  },
  methods: {
    getMyCategories() {
      console.log("this.$store.state.data.user :", this.$store.state.data.user);
      this.myCategories = this.$store.state.data.user[0].menu;
    },
    getFullCatName(parentCat, childCat) {
      console.log("parentCat.name :", parentCat.name);
      console.log("childCat.name :", childCat.name);
      console.log(parentCat.name + " -> " + childCat.name);
      console.log("---------------------------------------------------");
      return parentCat.name + " -> " + childCat.name;
    },

    getAllCat() {
      this.$store.dispatch("data/getAllCategories").then(
        (response) => {
          console.log("response : ", response);
          this.allCat = response;
          console.warn("this.allCat :", this.allCat);
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

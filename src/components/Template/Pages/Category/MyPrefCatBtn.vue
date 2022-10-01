<template>
  <h2>My Pref Cat Btn</h2>
  <div v-if="myCategories">
    <h3>My Prefered Categories</h3>

    {{ myCategories }}

    <!--    CHECKBOX-->
    <!--    <div v-for="cat in myCategories" v-bind:key="cat.id">-->
    <!--      <input type="checkbox" :id="cat.cat_id" />-->
    <!--      <label :for="cat.cat_id">{{ cat.category }}</label> {{ cat }}-->
    <!--    </div>-->

    <!--    <div-->
    <!--      id="v-model-select-dynamic"-->
    <!--      class="demo"-->
    <!--      v-for="cat in myCategories"-->
    <!--      v-bind:key="cat.id"-->
    <!--    >-->
    <!--      Order :-->
    <!--      <select v-model="myCategories">-->
    <!--        <option-->
    <!--          v-for="option in catSize"-->
    <!--          :value="option"-->
    <!--          v-bind:key="option"-->
    <!--          :selected="getOrder(cat)"-->
    <!--        >-->
    <!--          {{ option }}-->
    <!--        </option>-->
    <!--      </select>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "MyPrefCatComponent",
  components: {},
  data() {
    return {
      loading: false,
      myCategories: null,
      allCat: null,
      catSize: 0,
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
      this.catSize = this.myCategories.length;
    },
    getFullCatName(parentCat, childCat) {
      console.log("parentCat.name :", parentCat.name);
      console.log("childCat.name :", childCat.name);
      console.log(parentCat.name + " -> " + childCat.name);
      console.log("---------------------------------------------------");
      return parentCat.name + " -> " + childCat.name;
    },
    getOrder(cat) {
      console.warn(cat.cat_name);
      console.warn(cat.order);
      console.log("------------------------");
      return cat.order;
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

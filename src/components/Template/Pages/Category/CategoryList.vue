<template>
  <h2>Cat Show</h2>
  <!--  DISPLAY SUBCAT & CHILDS-->
  {{ categories }}
  <div v-if="categories && categories.cat">
    cat
    <div
      class="sub-cat"
      v-for="subCat in categories.cat.children"
      v-bind:key="subCat.id"
    >
      <!--      @click="getCatId(subCat.id)"-->
      <!--    >-->
      <div :id="'sub-cat-' + subCat.id">
        {{ subCat.name }}
        <button @click.prevent="showAndHide">UNFOLD</button>
        Counter : {{ subCat.counter }}

        <button @click.prevent="setLinks(subCat)">MAIN</button>
      </div>
      <!--            <hr />-->

      <!--      <a :href="subCat.slug" :id="subCat.id"-->
      <!--        >{{ subCat.name }} - Count : {{ subCat.counter }}<br />-->
      <!--      </a>-->
      <!--      {{ subCat }}-->
      <div class="sub-cat-obj" :id="'sub-cat-obj-' + subCat.id">
        <div v-if="subCat.peoples" class="obj">
          poeples :
          <button @click="showAndHide">UNFOLD</button>
          Counter : {{ subCat.counter }}

          <button @click="setLinks(subCat.id)">MAIN</button>
          <p v-for="people in subCat.peoples" v-bind:key="people.id">
            {{ people.name }}
            Counter : {{ people.counter }}

            <button @click="setLinks(subCat.id)">MAIN</button>
          </p>
        </div>
        <div v-if="subCat.things" class="obj">
          things : <button>UNFOLD</button> Counter : {{ subCat.counter }}

          <button @click="setLinks(subCat.id)">MAIN</button>
          <p v-for="thing in subCat.things" v-bind:key="thing.id">
            {{ thing.name }}
            Counter : {{ thing.counter }}

            <button @click="setLinks(subCat.id)">MAIN</button>
          </p>
        </div>
        <div v-if="subCat.periods" class="obj">
          periods : <button>UNFOLD</button> Counter : {{ subCat.counter }}

          <button @click="setLinks(subCat.id)">MAIN</button>
          <p v-for="period in subCat.periods" v-bind:key="period.id">
            {{ period.name }}
            Counter : {{ period.counter }}

            <button @click="setLinks(subCat.id)">MAIN</button>
          </p>
        </div>
        <div v-if="subCat.places" class="obj">
          places : <button>UNFOLD</button> Counter : {{ subCat.counter }}

          <button @click="setLinks(subCat.id)">MAIN</button>
          <p v-for="place in subCat.places" v-bind:key="place.id">
            {{ place.name }}
            Counter : {{ place.counter }}

            <button @click="setLinks(subCat.id)">MAIN</button>
          </p>
        </div>
      </div>

      <hr />
    </div>
    <!--    <a-->
    <!--      :href="subCat.slug"-->
    <!--      :id="subCat.id"-->
    <!--      v-for="subCat in categories.cat.children"-->
    <!--      v-bind:key="subCat.id"-->
    <!--      @click="getCatId(subCat.id)"-->
    <!--      >{{ subCat.name }} - Count : {{ subCat.counter }}<br />-->
    <!--    </a>-->
  </div>
</template>

<script>
export default {
  name: "CategoryListComponent",
  components: {},
  data() {
    return {
      catId: null,
      loading: false,
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
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    // getCatId(catId) {
    //   console.log("getCatId");
    //   console.log("catId :", catId);
    //   this.$store.dispatch("data/changeSelectedCatId", catId);
    // },
    setLinks(SubCat) {
      console.log("SubCatId :", SubCat);
      let slug = SubCat.slug;
      console.log("slug :", slug);
      // this.getCatId(SubCat.id);
      let nextLink = "/page/" + SubCat.slug;
      this.$router.push(nextLink);
      // return { slug: this.$route.params.slug };
    },
    showAndHide(e) {
      console.log("e :", e);
      console.log("e :", e.target);
      console.log("e.target.parentElement :", e.target.parentElement);
      console.log("id :", e.target.parentElement.id);
      let parent = e.target.parentElement;
      console.log("parent :", parent);
      let gdParent = parent.parentElement;
      console.log("gdParent :", gdParent);
      let query = gdParent.querySelector(".sub-cat-obj");
      console.log("query :", query);
      if (query) {
        console.log("ésubcatobj");
        query.style.display = query.style.display === "none" ? "block" : "none";
        console.log("nextElem :", query);
      } else {
        console.log("NOT FOUND");
      }
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
.sub-cat {
  background-color: yellowgreen;
}
.sub-cat-obj {
  background-color: darkgray;
  width: 75%;
  margin: auto;
}
</style>

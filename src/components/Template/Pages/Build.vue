<template>
  <h1>Build Page</h1>
  {{ loading }}
  <div v-if="myBuild">
    {{ myBuild }}
    <div
      v-for="(value, key, index) in myBuild"
      v-bind:item="value"
      v-bind:index="index"
      v-bind:key="value.id"
    >
      {{ key }} :
      <div v-if="key !== 'object_name'">
        <input type="text" :value="value" />
      </div>
      {{ value }}
      <div v-if="key === 'object_name'">
        <div id="v-model-select-dynamic" class="demo">
          <select v-model="selectedObjName" multiple>
            <option
              v-for="option in selectedObjName"
              :value="option.name"
              v-bind:key="option.name"
            >
              {{ option }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuildComponent",
  components: {},
  data() {
    return {
      loading: false,
      myBuild: null,
      selectedObjName: null,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.getMyBuild();
      this.getObjectName(this.myBuild.object_name);
    }
  },

  methods: {
    getMyBuild() {
      console.log("this.$store.state.data.user :", this.$store.state.data.user);
      this.myBuild = this.$store.state.data.user[0].build;
    },
    getObjectName(objectNames) {
      this.selectedObjName = objectNames.map((x) => x.name);
    },
    // getAllCat() {
    //   this.$store.dispatch("data/getAllCategories").then(
    //     (response) => {
    //       console.log("response : ", response);
    //       this.allCat = response;
    //     },
    //     (error) => {
    //       console.log(error);
    //
    //       this.message =
    //         (error.response && error.response.data) ||
    //         error.message ||
    //         error.toString();
    //     }
    //   );
    // },
  },
};
</script>

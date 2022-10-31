<template>
  <div class="build-container">
    <div class="main-heading">
      <h1>Build</h1>
    </div>
    <div class="input-container">
      <input type="text" placeholder="INSERT DETAILS" />
    </div>
    <button>Save</button>
  </div>
</template>

<style lang="scss">
.content {
  display: inline-flex;
}
  .build-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 50px 0;
    align-items: center;
    justify-content: center;
    background-image: url(../../../assets/build-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    .main-heading {
      h1 {
        font-family: "Old London";
        font-size: 60px;
        margin: 0;
        color: #fff;
      }
    }
    .input-container {
      margin: 10vh 0;
      width: 100%;
      max-width: 350px;
      display: flex;
      input {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 15px;
        line-height: 1.6;
        position: relative;
        background: #000;
        color: #fff;
        font-family: "Trajan-Bold";
        outline: none;
        border: 1px solid #fff;
        box-shadow: none;
        font-size: 16px;
        &::-webkit-input-placeholder {
          font-size: 1.4rem;
          position: absolute;
          top: 9px;
          color: #fff;
          text-align: center;
          width: 100%;
          margin-left: -15px;
        }
      }
    }
    button {
      font-family: "Old London";
      font-size: 30px;
    }
  }
</style>

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

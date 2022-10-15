<template>
  <div class="home-page">
    <span>
      <img src="../../../assets/home-img.gif" alt="home-img">
    </span>
  </div>
   <!-- <ContainerComponent></ContainerComponent> -->
</template>

<style lang="scss">
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    .home-page {
      display: flex;
      width: 100%;
      height: 100%;
    span {
      display: flex;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        object-fit: fill;
      }
    }
  }
  }
  
</style>

<script>
// import ContainerComponent from "@/components/Template/Base/Container";

export default {
  name: "HomeComponent",
  components: {
    // ContainerComponent,
  },
  data() {
    return {
      // dataIndex: "",
      isMenuUser: false,
      username: "matt",
    };
  },
  // created() {
  // this.handleIndex();
  // },
  computed: {
    loggedIn() {
      console.log("loggedIn");
      console.log(this.$store.state.auth.status.loggedIn);
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    // handleIndex() {
    //   console.log("handleIndex");
    //   console.log(
    //     "this.$store.state.data.machine :",
    //     this.$store.state.data.machine
    //   );
    //   console.log(this.dataIndex);
    //
    //   // this.dataIndex = this.$store.state.data.machine
    //   //   ? this.$store.state.data.machine[0]
    //   //   : null;
    //   //
    //   // console.log(this.dataIndex);
    //   //
    //   // if (this.$store.state.data.machine == null) {
    //   console.warn("LOAD MACHINE DATA API");
    //   this.$store.dispatch("data/getHome").then(
    //     (response) => {
    //       console.log("response : ", response);
    //       this.dataIndex = response;
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

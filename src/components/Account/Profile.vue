<template>
  <h3>edit profile</h3>
  <div id="links">
    <pre>
      <a href="/build">Build Page</a>
      <a href="/category">Edit Category</a>
      <br>
      <a href="" class="todo">Change password</a>
    </pre>
  </div>
  <!--  <div v-if="loggedIn">load</div>-->
  <div v-if="userProfile">
    {{ userProfile }}
  </div>
</template>

<script>
export default {
  name: "ProfileComponent",
  components: {},
  data() {
    return {
      loading: false,
      message: "",
      userProfile: null,
    };
  },
  computed: {
    loggedIn() {
      console.log("loggedIn");
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      console.log("coucou profile");
      this.handleProfile();
    }
  },
  methods: {
    handleProfile() {
      console.log("handleProfile");

      console.warn(this.$store.state.data.user);

      // this.userProfile = this.$store.state.data.user
      //   ? this.$store.state.data.user[0]
      //   : null;
      //
      // if (this.userProfile === null) {
      console.warn("LOAD DATA API");
      this.$store.dispatch("data/getProfile").then(
        (response) => {
          console.log("response : ", response);
          this.loading = true;

          this.userProfile = response;
        },
        (error) => {
          this.loading = false;
          // console.log(error.response);
          // console.log(error.response.data);
          // console.log(error.response.data.message);
          // console.log(error.message);
          // this.message =
          //   (error.response &&
          //     error.response.data &&
          //     error.response.data.message) ||
          //   error.message ||
          //   error.toString();
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
      // } else {
      //   this.loading = true;
      //   console.warn("NOT LOAD DATA API");
      // }
    },
  },
};
</script>

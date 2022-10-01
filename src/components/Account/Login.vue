<template>
  <form @submit.prevent="handleLogin">
    <div id="login-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="form.email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="form.password" />
      </div>
      <br />
      <br />
      <div class="form-group">
        <button type="submit">Login</button>
      </div>
      <div class="form-group" id="message">
        {{ message }}
      </div>
    </div>
  </form>
  <br />
  <br />
  <a href="/reset">Reset account</a>
</template>

<script>
export default {
  name: "LoginComponent",
  components: {},
  data() {
    let form = {
      email: "aaa@aaa.com",
      password: "aaa",
    };

    return {
      loading: false,
      message: "",
      form,
    };
  },
  computed: {
    loggedIn() {
      console.log("loggedIn");
      console.log(this.$store.state.auth.status.loggedIn);
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/index");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      console.log(this.form);
      this.$store.dispatch("auth/login", this.form).then(
        (response) => {
          console.log("response : ", response);
          this.$router.push("/profile");
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
    },
  },
};
</script>

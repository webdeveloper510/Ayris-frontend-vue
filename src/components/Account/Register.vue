<template>
  <form @submit.prevent="handleRegister">
    <div id="login-form">
      <div class="form-group">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" v-model="form.username" />
        </div>
        <label for="email">Email</label>
        <input type="email" v-model="form.email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="form.password" />
      </div>
      <div class="form-group">
        <label for="password2">Repeat Password</label>
        <input type="password" v-model="form.password2" />
      </div>
      <div class="form-group">
        <button type="submit">Login</button>
      </div>
      <div class="form-group" id="message">
        {{ message }}
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "RegisterComponent",
  components: {},
  data() {
    let form = {
      email: "aaa@aaa.com",
      username: "aaa",
      password: "aaa",
      password2: "aaa",
    };

    return {
      loading: false,
      message: "",
      form,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    handleRegister() {
      this.loading = true;
      console.log(this.form);
      this.$store.dispatch("auth/register", this.form).then(
        (response) => {
          console.log("response : ", response);
          console.log(response);
          this.message = response.email ? response.email : response.data.email;
          this.message += " Are Registered";
        },
        (error) => {
          this.loading = false;
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

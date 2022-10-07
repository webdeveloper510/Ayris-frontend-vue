<template>
  <form @submit.prevent="handleRegister">
    <div id="register-form">
      <div class="form-group">
          <label for="username">Username</label>
          <input type="text" v-model="form.username" />
        </div>
      <div class="form-group">
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

<style>
  div#register-form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  div#register-form .form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 48%;
  }

  div#register-form .form-group:nth-child(5) {
    width: 100%;
  }

  div#register-form .form-group label {
    display: flex;
    font-family: "Old London";
    font-size: 20px;
  }

  div#register-form .form-group input {
    margin: 5px 0 20px;
    outline: none;
    border-radius: 3px;
    box-shadow: none;
    border: 1px solid #7e7e7e;
    padding: 12px 10px;
  }

  div#register-form .form-group button {
    padding: 10px 20px;
    width: fit-content;
    min-width: 150px;
    margin: 10px auto 15px;
    cursor: pointer;
  }
</style>

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

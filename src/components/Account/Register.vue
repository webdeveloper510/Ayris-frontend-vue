<template>
  <form class="register" @submit.prevent="handleRegister">
    <div id="register-form">
      <div class="form-group user">
        <img src="../../assets/input-bg.png" alt="input-bg">
          <input type="text" placeholder="User name" v-model="form.username" />
      </div>
      <div class="bottom-fields">
        <div class="form-group email">
          <img src="../../assets/field-input.png" alt="input-bg">
            <input type="text" placeholder="Email" v-model="form.email" />
        </div>

        <div class="form-group btns">
          <img src="../../assets/register-field.png" alt="register-field">
          <button type="submit">Register</button>
        </div>

        <div class="form-group password">
          <img src="../../assets/field-input.png" alt="input-bg">
            <input type="text" placeholder="Password" v-model="form.password" />
        </div>
      </div>
      <div class="form-group" id="message">
        {{ message }}
      </div>
    </div>
  </form>
</template>

<style>
 form.register {
  background-image: url(../../assets/form-bg.png);
  background-repeat: no-repeat;
  background-size: 73% 62%;
  background-position: top center;
  display: flex;
  height: 100%;
 }

  div#register-form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }

  div#register-form .form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div#register-form .form-group.user {
    padding: 16px 0px;
    margin-top: 7.5rem;
    position: relative;
  }

  div#register-form .form-group.user img {
    object-fit: contain;
    width: 125px;
    object-position: center;
    margin: 0 auto;
  }

  div#register-form .form-group.user input,
  div#register-form .bottom-fields .email input,
  div#register-form .bottom-fields .password input{
    background-color: transparent;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    position: absolute;
    width: 84px;
    padding: 0 8px;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 45%;
    z-index: 2;
    color: #fff;
    font-family: "Trajan-Bold";
    outline: none;
  }

  div#register-form .form-group.user input::placeholder,
  div#register-form .bottom-fields .email input::placeholder,
  div#register-form .bottom-fields .password input::placeholder {
    color: #951617;
    font-family: "Old London";
    text-align: center;
    font-size: 18px;
  }

  div#register-form .bottom-fields .email input::placeholder,
  div#register-form .bottom-fields .password input::placeholder {
    font-size: 22px;
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
    padding: 12px 10px;
  }

  div#register-form .bottom-fields {
    margin-top: 8.5rem;
    display: flex;
    justify-content: space-between;
  }

  div#register-form .bottom-fields .email,
  div#register-form .bottom-fields .password {
    width: 16%;
    position: relative;
    margin-top: 4.6rem;
  }

  div#register-form .bottom-fields .email img,
  div#register-form .bottom-fields .password img {
    height: 42px;
  }

  div#register-form .bottom-fields .email input,
  div#register-form .bottom-fields .password input {
    margin: 0;
    width: 112px;
    height: 36px;
    border: none;
  }

  div#register-form .form-group.btns img {
    width: 72%;
    margin: 0 auto;
    object-position: 3px;
  }

  div#register-form .form-group button {
    padding: 10px 20px;
    width: fit-content;
    min-width: 158px;
    margin: -65px auto 0px;
    cursor: pointer;
    background: none;
    color: #951617;
    font-family: "Old London";
    font-size: 30px;
    line-height: 16px;
    border: none;
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

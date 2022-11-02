<template>
  <div class="heading-main">
      <img src="../../assets/field-input.png" alt="input-bg">
      <h3>Register</h3>
  </div>
  <div class="register-main">
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
  </div>
  <div class="footer-main">
      <h3><router-link to="/home">Main Page</router-link></h3>
  </div>
</template>

<style>
.heading-main, .footer-main {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
}

.footer-main {
  margin-top: -7vw;
}

.heading-main h3, .footer-main h3{
  position: absolute;
  top: 5.2vw;
  left: 1.5vw;
  right: 0;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
  color: #fff;
}

.footer-main h3 {
  top: 1.2vw;
  left: 1.6vw;
  font-size: 2vw;
  color: #951617;
  font-family: "Old London";
}

.footer-main h3 a {
  color: #951617;
  text-decoration: none;
}

.heading-main img {
  margin-bottom: -14vw;
  position: relative;
  width: 20vw;
  margin-left: 1.4vw;
  height: 5.5vw;
}
.register-main {
  background-image: url(../../assets/register-form.png);
  background-repeat: no-repeat;
  background-size: 95vw 67vw;
  min-height: 67vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
}

 form.register {
  background-image: url(../../assets/form-bg.png);
  background-repeat: no-repeat;
  background-size: 46vw 24vw;
  background-position: top center;
  display: flex;
  height: 100%;
  margin-top: -5vw;
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

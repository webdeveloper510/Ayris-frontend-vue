<template>
  <HeaderComponent></HeaderComponent>
  <div class="login">
    <div class="menu menu-left">
      <div class="text-left">
        <p><router-link to="">Year</router-link></p>
        <p><router-link to="">Era/Style</router-link></p>
        <p><router-link to="">Location</router-link></p>
        <p><router-link to="">Medium</router-link></p>
        <p><router-link to="/mythology">Mythology</router-link></p>
        <p><router-link to="">Empresses</router-link></p>
        <p><router-link to="">Philosophy</router-link></p>
        <p><router-link to="">Dream Engine</router-link></p>
        <p><router-link to="">Etherith</router-link></p>
      </div>
      <!-- <CategoryMenuComponent :categories="this.getMenu(true)" /> -->
    </div>

    <div class="content log-container">
      <form @submit.prevent="handleLogin">
        <div id="login-form">
          <div class="form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <div class="log-buttons">
          <div class="form-group">
            <button type="submit">Login</button>
          </div>
          <div class="form-group">
            <button type="submit">New Password</button>
          </div>
        </div>
        </div>
      </form>
    </div>

    <div class="menu menu-right">
      <div class="text-right">
        <p><router-link to="">Banners</router-link></p>
        <p><router-link to="">Heaven</router-link></p>
        <p><router-link to="/music">Music</router-link></p>
        <p><router-link to="">Library</router-link></p>
        <p><router-link to="">Court</router-link></p>
        <p><router-link to="">Empire</router-link></p>
        <p><router-link to="">Army</router-link></p>
        <p><router-link to="">Market</router-link></p>
        <p><router-link to="">Treasury</router-link></p>
      </div>
      <!-- <CategoryMenuComponent :categories="this.getMenu(false)" /> -->
    </div>
  </div>
  <FooterComponent></FooterComponent>
</template>

<style lang="scss">
.login {
  display: flex;
  .log-container {
    background-image: url(../../assets/build-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form {
      background-image: url(../../assets/login-main.png);
      background-repeat: no-repeat;
      background-size: 70% 95%;
      width: 100%;
      display: flex;
      flex-direction: column;
      background-position: top center;
      height: 100%;
      div#login-form {
        width: 41vw;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        .form-group {
          display: flex;
          flex-direction: column;
          justify-content: center;
          &:nth-child(1), &:nth-child(2) {
            padding: 0px;
          }

          &:nth-child(1) {
            margin-bottom: 0.8vw;
            margin-top: -1.7vw;
          }

          &:nth-child(2) {
            margin-top: 11vw;
          }
          label {
            display: flex;
            font-family: "Old London";
            font-size: 20px;
          }

          input {
            outline: none;
            border-radius: 3px;
            box-shadow: none;
            border: none;
            background: none;
            color: #fff;
            width: 8vw;
            margin: 0 auto;
            font-family: "Old London";
            font-size: 1.8vw;
            &::placeholder {
              color: #951617;
            }
          }

          button {
            padding: 10px 20px;
            width: fit-content;
            min-width: 150px;
            margin: 10px auto 15px;
            cursor: pointer;
          }
        }
      }
      .log-buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
        position: absolute;
        bottom: 5.4vw;
        margin: 0 auto;
        .form-group {
          margin: 0 !important;
          button {
            margin: 0 !important;
            border: none;
            background: none;
            outline: none;
            font-family: "Old London";
          }
          button {
            color: #fff;
            min-width: 12vw !important;
            font-size: 1.6vw;
          }
          &:nth-child(2) {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 12vw;
          }
        }
      }
    }
    
  }
}

  .content {
    width: 100vw;
  }

  .header-img {
    height: get-vw(316px);
    width: get-vw(1920px);
  }

  .menu {
    /*389x 743*/
    width: 34.260417vw;
    height: get-vw(743px);
  }

  #nav-footer {
    /*1920 x 302*/
    width: get-vw(1920px);
    height: get-vw(302px);
  }

  .menu.menu-left .text-left,
  .menu.menu-right .text-right {
    margin-left: 7vw;
    width: 6.3vw;
    height: 6.3vw;
    margin-top: 8.2vw;
    font-size: 1vw;
  }

  .menu.menu-left .text-left p,
  .menu.menu-right .text-right p {
    font-size: 1vw;
  }

  .menu.menu-left .text-left p a,
  .menu.menu-right .text-right p a {
    color: #fff;
  }

  .menu.menu-left .text-left p:not(:first-child),
  .menu.menu-right .text-right p:not(:first-child) {
    margin-top: 1.5vw;
  }
  .menu {
    /*border: 1px solid blue;*/
    /*background-color: grey !important;*/
    background: url('../Template/Base/img/cat-menu.jpg')
      no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>

<script>
import HeaderComponent from "@/components/Template/Base/Header";
import FooterComponent from "@/components/Template/Base/Footer";
export default {
  name: "LoginComponent",
  components: {
    FooterComponent,
    HeaderComponent,
  },
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

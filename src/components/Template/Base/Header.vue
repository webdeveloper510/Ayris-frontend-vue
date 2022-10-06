<template>
  <div id="nav">
    <div class="header-img">
      <div class="header">
        <div class="header-menu">
          <div class="text-header left">
            <p><router-link to="/home">Temple</router-link></p>
            <p>Gate</p>
          </div>
        </div>
        <div class="header-mid-left">
          <div class="text-mid-left-right text-left">
            <p><router-link to="/build">Build</router-link></p>
          </div>
        </div>

        <div class="header-mid-center">
          <div class="text-mid-center">
            <p>Ayris Beauty Machine Temple</p>
            <p>Earth Esthetic and Ecologic Restoration Machine</p>
            <p>Ayris Academy of Decorative Art</p>
          </div>
        </div>

        <div class="header-mid-right">
          <div class="text-mid-left-right text-right">
            <p>
              <router-link to="/test">Search</router-link>
            </p>
          </div>
        </div>
        <div class="header-menu">
          <div class="text-header right">
            <p>
              <router-link to="/login" v-if="!currentUser">Login </router-link>
            </p>
            <p>
              <router-link to="/register" v-if="!currentUser"
                >Register</router-link
              >
              <a v-if="currentUser && loggedIn" @click.prevent="logOut"
                >LogOut</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    title: String,
  },
  computed: {
    loggedIn() {
      console.log("loggedIn");
      console.log(this.$store.state.auth.status.loggedIn);
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      console.log("currentUser");
      console.log(this.$store.state.data.user);
      return this.$store.state.data.user
        ? this.$store.state.data.user[0]
        : null;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss">
@import "./src/scss/_func.scss";

p {
  a {
    font-family: "Old London";
  }
}

#nav {
  /*background-color: red;*/
  font-size: 2vw;
  /*border: 1px solid red;*/
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.header {
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  height: get-vw(316px);
}
.header-menu {
  //background-color: red;
  width: get-vw(1920px/5);
}
.header-mid-right,
.header-mid-left {
  //background-color: blue;
  //opacity: 0.4;
  width: get-vw(1920px/5);
}
.header-mid-center {
  //background-color: yellow;
  //opacity: 0.5;
  width: get-vw(1920px/5);
}
.text-mid-center {
  height: get-vw(126px);
  width: get-vw((1920px/5)-20px);
  margin-top: get-vw(120px);
  margin-left: get-vw(12px);
  //background-color: green;
}
.text-mid-center > p {
  //line-height: 1.5vw;
  font-size: .7vw;
  padding-top: 0.8vw;
  color: white;
  padding-left: 16px;
  font-family: "Old London Alternate";
}

.text-header {
  border: 1px solid white;
  width: 6.3vw;
  height: 6.3vw;
  margin-top: 9.8vw;
  font-size: 1vw;
  //line-height: 2vw;
  //background-color: blue !important;
  //opacity: 0.5;
  &.left {
    margin-left: 7vw;
    p {
      padding-top: 0vw;
      padding-bottom: 1vw;
      color: #fff;
      font-family: 'Old London';
    }
  }
  &.right {
    margin-left: 6.6vw;
    p {
      padding-top: 0.1vw;
      padding-bottom: 1vw;
    }
  }
}
.text-mid-left-right {
  margin: get-vw((1920px/5) / 2.1) auto;
  width: 11vw;
  height: 3.3vw;
  font-size: 1.5vw;
  line-height: 3vw;
  //background-color: red;
}

.text-left {
  margin-left: get-vw(65px);
}
.text-right {
  margin-right: get-vw(65px);
}

.header-img {
  /*min-height: 16vw;*/
  /*height: 16vw;*/
  background: url("../Base/img/header.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

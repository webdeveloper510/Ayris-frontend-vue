<template>
  <div id="nav-footer">
    <div class="footer-ext">
      <div class="footer-ext-elem left">
        <p><a href="#">Manifesto</a></p>
        <p><a href="#">Manual</a></p>
      </div>
    </div>
    <div class="footer-center">
      <div class="footer-center-elem">
        <div class="footer-center-text ext-left">
          <p><a href="#">Edit Profile</a></p>
        </div>
      </div>
      <div class="footer-center-elem">
        <div class="footer-center-text mid-text mid-text-left">
          <p><a href="#">Live</a></p>
        </div>
      </div>
      <div class="footer-center-elem center">
        <div class="footer-center-text mid-text-center">
          <p><a href="#">Intro</a></p>
        </div>
      </div>
      <div class="footer-center-elem">
        <div class="footer-center-text mid-text mid-text-right">
          <p><router-link to="/home">Home</router-link></p>
        </div>
      </div>
      <div class="footer-center-elem">
        <div class="footer-center-text ext-right">
          <p><a href="#">Edit Category</a></p>
        </div>
      </div>
    </div>
    <div class="footer-ext">
      <div class="footer-ext-elem right">
        <p><a href="#">3D</a></p>
        <p><a href="#">Entrance</a></p>
      </div>
    </div>

    <!--    <div v-if="currentUser">Welcome {{ currentUser.username }}</div>-->
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
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
};
</script>

<style lang="scss">
@import "./src/scss/_func.scss";

#nav-footer {
  background: url("../Base/img/footer.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  p {
    font-size: 1vw;
    padding-top: 0.7vw;
  }
}

#nav-footer a {
  font-weight: bold;
  color: white;
}

#nav-footer a.router-link-exact-active {
  color: #42b983;
}

$size-ext: 324;
$size-ext-double: $size-ext * 2;
$rest-without_ext: 1920px - ($size-ext-double * 1px);

.footer-center {
  width: get-vw($rest-without_ext);
  //background-color: grey !important;
  //opacity: 0.4;
  display: flex;
  //justify-content: space-evenly;
  align-items: center;
}

$center-element-size: 25;

.center {
  width: $center-element-size * 1vw;
  //margin-top: 1.4vw;
  //border: 1px solid blue;
}

.footer-center-elem:not(.center) {
  width: get-vw(($rest-without_ext - $center-element-size) / 4);
  //width: get-vw(1920px - (324px * 2) /5);
  //margin-top: 1.4vw;
  //border: 1px solid blue;
}

.footer-center-text {
  //background-color: #c82333;
  height: 2.4vw;
  margin-top: 1.3vw;
}
.mid-text {
  width: 6.4vw;
}
.mid-text-left {
  margin-left: 1vw;
}
.mid-text-right {
  margin-left: 4.6vw;
}
.mid-text-center {
  width: 4.6vw;
  height: 4.6vw;
  margin-left: 6.85vw;
  & > p {
    padding-top: 1.6vw !important;
  }
}
.ext-left {
  width: 10vw;
  margin-left: 1.4vw;
}
.ext-right {
  width: 10vw;
  margin-left: 0.6vw;
}
.footer-ext {
  width: get-vw($size-ext * 1px);
  //background-color: green !important;
  //opacity: 0.4;
  & > .footer-ext-elem {
    //background-color: red;
    height: 6.3vw;
    width: 6.3vw;
    margin-top: -0.6vw;
    & > p {
      padding-top: 0.8vw;
      padding-bottom: 0.75vw;
    }
    &.left {
      margin-left: 7.2vw;
    }
    &.right {
      margin-left: 3.6vw;
    }
  }
}
</style>

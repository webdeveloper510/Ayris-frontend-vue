<template>

  <HeaderComponent></HeaderComponent>
      <div class="build">
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

        <div class="build-container content">
          <div class="main-heading">
            <h1>Build</h1>
          </div>
          <div class="input-container">
            <input type="text" placeholder="INSERT DETAILS" />
          </div>
          <button>Save</button>
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

.build {
    display: flex;
  }
  .content {
    width: 100vw;
  }

  .header-img {
    height: get-vw(316px);
    width: get-vw(1920px);
  }

  .build-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 50px 0;
    align-items: center;
    justify-content: center;
    background-image: url(../../../assets/build-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    .main-heading {
      h1 {
        font-family: "Old London";
        font-size: 60px;
        margin: 0;
        color: #fff;
      }
    }
    .input-container {
      margin: 10vh 0;
      width: 100%;
      max-width: 350px;
      display: flex;
      input {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 15px;
        line-height: 1.6;
        position: relative;
        background: #000;
        color: #fff;
        font-family: "Trajan-Bold";
        outline: none;
        border: 1px solid #fff;
        box-shadow: none;
        font-size: 16px;
        &::-webkit-input-placeholder {
          font-size: 1.4rem;
          position: absolute;
          top: 9px;
          color: #fff;
          text-align: center;
          width: 100%;
          margin-left: -15px;
        }
      }
    }
    button {
      font-family: "Old London";
      font-size: 30px;
    }
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
    background: url("../../Template/Base/img/cat-menu.jpg")
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
  name: "BuildComponent",
  data() {
    return {
      loading: false,
      myBuild: null,
      selectedObjName: null,
    };
  },

  components: {
    FooterComponent,
    HeaderComponent,
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.getMyBuild();
      this.getObjectName(this.myBuild.object_name);
    }
  },

  methods: {
    getMyBuild() {
      console.log("this.$store.state.data.user :", this.$store.state.data.user);
      this.myBuild = this.$store.state.data.user[0].build;
    },
    getObjectName(objectNames) {
      this.selectedObjName = objectNames.map((x) => x.name);
    },
    // getAllCat() {
    //   this.$store.dispatch("data/getAllCategories").then(
    //     (response) => {
    //       console.log("response : ", response);
    //       this.allCat = response;
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

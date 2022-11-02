<template>

    <HeaderComponent></HeaderComponent>
      <div class="home">
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

      <div class="content">
        <div class="home-page">
          <span>
            <img src="../../../assets/home-img.gif" alt="home-img">
          </span>
        </div>
      </div>

      <div class="menu menu-right">
        <div class="text-right">
          <p><router-link to="">Banners</router-link></p>
          <p><router-link to="">Heaven</router-link></p>
          <p><router-link to="">Music</router-link></p>
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
  
 
  
 
  
   <!-- <ContainerComponent></ContainerComponent> -->
</template>

<style lang="scss">
  .header-img {
    height: get-vw(316px);
    width: get-vw(1920px);
  }
  .home {
    display: flex;
  }
  .menu {
    /*389x 743*/
    width: 34.260417vw;
    height: get-vw(743px);
  }
  .content {
    width: 100vw;
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

  .content {
    
    .home-page {
      display: flex;
      width: 100%;
      height: 100%;
    span {
      display: flex;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        object-fit: fill;
      }
    }
  }
  }
  
</style>

<script>
// import ContainerComponent from "@/components/Template/Base/Container";
import HeaderComponent from "@/components/Template/Base/Header";
import FooterComponent from "@/components/Template/Base/Footer";
// import CategoryMenuComponent from "@/components/Template/Pages/Category/CategoryMenu";

export default {
  name: "HomeComponent",
  data() {
    return {
      // dataIndex: "",
      isMenuUser: false,
      username: "matt",
    };
  },
  // created() {
  // this.handleIndex();
  // },

  components: {
    FooterComponent,
    HeaderComponent,
    // CategoryMenuComponent,
  },

  computed: {
    loggedIn() {
      console.log("loggedIn");
      console.log(this.$store.state.auth.status.loggedIn);
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    // handleIndex() {
    //   console.log("handleIndex");
    //   console.log(
    //     "this.$store.state.data.machine :",
    //     this.$store.state.data.machine
    //   );
    //   console.log(this.dataIndex);
    //
    //   // this.dataIndex = this.$store.state.data.machine
    //   //   ? this.$store.state.data.machine[0]
    //   //   : null;
    //   //
    //   // console.log(this.dataIndex);
    //   //
    //   // if (this.$store.state.data.machine == null) {
    //   console.warn("LOAD MACHINE DATA API");
    //   this.$store.dispatch("data/getHome").then(
    //     (response) => {
    //       console.log("response : ", response);
    //       this.dataIndex = response;
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

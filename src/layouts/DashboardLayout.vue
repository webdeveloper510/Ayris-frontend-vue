<template>
  <div id="dashboard" :class="[checkFullSize ? 'fullSize' : '']">
    <!-- <HeaderComponent></HeaderComponent> -->
    <div id="container">
      <div class="content">
        <DynamicContentComponent />
      </div>
      
    </div>
    <!-- <FooterComponent></FooterComponent> -->
    <DynamicExtraContent :currentPath="getCurrentPath" />
  </div>
</template>

<script>
// import HeaderComponent from "@/components/Template/Base/Header";
// import FooterComponent from "@/components/Template/Base/Footer";
// import CategoryMenuComponent from "@/components/Template/Pages/Category/CategoryMenu";
// import CategoryListComponent from "@/components/Template/Pages/Category/CategoryList";
import DynamicContentComponent from "@/components/DynamicContent";
import DynamicExtraContent from "@/components/DynamicExtraContent";

export default {
  name: "DashboardLayoutComponent",
  data() {
    return {
      menu: null,
      catId: null,
      cat: null,
      isFullSize: false,
    };
  },
  components: {
    // FooterComponent,
    // HeaderComponent,
    // CategoryMenuComponent,
    // CategoryListComponent,
    DynamicContentComponent,
    DynamicExtraContent,
  },
  created() {
    this.getMachine();
    this.catId = this.$store.state.data.selectedCatId;
    this.cat = this.$store.state.data.categories;
  },
  updated() {
    console.warn("updated");
    this.cat = this.$store.state.data.categories;
    this.getSize();
  },
  computed: {
    getCurrentPath() {
      return this.$route.path;
    },
    loggedIn() {
      console.warn("loggedIn");
      // console.log(this.$store.state.auth.status.loggedIn);
      return this.$store.state.auth.status.loggedIn;
    },
    getcatId() {
      return this.$store.state.data.selectedCatId;
    },
    getCat() {
      return this.$store.state.data.categories;
    },
    checkFullSize() {
      return this.$store.state.data.categories &&
        this.$store.state.data.categories.children.length > 0
        ? !this.isFullSize
        : this.isFullSize;
    },
    // getCatChildren() {
    //   return {
    //     categories: {
    //       cat: this.$store.state.data.categories,
    //     },
    //   };
    // },
  },
  methods: {
    getSize() {
      let win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName("body")[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight || docElem.clientHeight || body.clientHeight;

      console.log("win.innerWidth :", win.innerWidth);
      console.log("win.innerHeight :", win.innerHeight);
      console.log("body.clientWidth :", body.clientWidth);
      console.log("body.clientHeight :", body.clientHeight);
      console.log("docElem.clientWidth :", docElem.clientWidth);
      console.log("docElem.clientHeight :", docElem.clientHeight);
      console.log(" resolution :" + x + " x " + y);
      console.log("header-img :", body.querySelector(".header-img"));
      console.log("======================");
    },
    convertPXToVW(px) {
      return px * (100 / document.documentElement.clientWidth);
    },
    getMachine() {
      console.log("getMachine");
      console.log(
        "this.$store.state.data.machine :",
        this.$store.state.data.machine
      );

      console.warn("LOAD MACHINE DATA API");
      this.$store.dispatch("data/getHome").then(
        (response) => {
          console.log("response : ", response);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getMenu(isFirst) {
      console.warn("getMenu");
      if (this.$store.state.data.machine) {
        let menuTmp = this.$store.state.data.machine[0].menu;
        let limit = menuTmp.length / 2;
        if (menuTmp) {
          // console.log("limit :", limit);
          let data = {
            menu: isFirst ? menuTmp.slice(0, limit) : menuTmp.slice(limit),
          };
          return data;
        } else {
          console.log("NO MACHINE DATA");
        }
      }
    },
  },
};
</script>
<style lang="scss">
@import "./src/scss/_variables.scss"; // $text-primary would be defined in that file
@import "./src/scss/_func.scss"; // $text-primary would be defined in that file

//to get px or convert in vw with get_vw
//$vw-enable: true;

//.font20{
//    font-size: get-vw(1920px);
//}

.header-img {
  height: get-vw(316px);
  width: get-vw(1920px);
}
.menu {
  /*389x 743*/
  width: get-vw(389px);
  height: get-vw(743px);
}
.content {
  width: get-vw(1920px - (389px * 2));
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
</style>

<style scoped>
#dashboard {
  border: 0;
  margin: 0;
  padding: 0;
  /*height: 100vw;*/
  width: 100%;
}
.fullSize {
  height: 100vw;
}
#container {
  /*background-color: yellow !important;*/
  display: flex;
}
.menu {
  /*border: 1px solid blue;*/
  /*background-color: grey !important;*/
  background: url("../../src/components/Template/Base/img/cat-menu.jpg")
    no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

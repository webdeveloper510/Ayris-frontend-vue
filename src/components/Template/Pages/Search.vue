<template>
  <HeaderComponent></HeaderComponent>
  <div class="search">
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

    <div class="content search-container">
        <div class="search-content">
            <h2>search</h2>
            <div class="input-container">
                <input type="text" placeholder="Search">
            </div>
        </div>
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
.search {
  display: flex;
  .search-container {
    background-image: url(../../../assets/build-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .search-content {
        background-image: url(../../../assets/form-bg.png);
        background-repeat: no-repeat;
        background-size: 44vw 55vh;
        background-position: top center;
        display: flex;
        height: 74vh;
        margin-top: 0vw;
        width: 100%;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        h2 {
            background-image: url(../../../assets/field-input.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: top 27px center;
            display: flex;
            height: fit-content;
            width: fit-content;
            padding: 2rem 3rem;
            height: 40px;
            align-items: center;
            justify-content: center;
            color: #fff;
            padding-bottom: 0;
            margin-bottom: 0;
        }
        .input-container {
            display: flex;
            padding: 4rem 3rem;
            background: rgba(255, 255, 255, .8);
            width: 50%;
            justify-content: center;
            align-items: center;
            input {
                width: 100%;
                background: #000;
                color: #fff;
                padding: 15px 15px;
                border: none;
                outline: none;
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
    background: url('../../Template/Base/img/cat-menu.jpg')
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
  name: "SearchComponent",
  components: {
    FooterComponent,
    HeaderComponent,
  },
  data() {},
  computed: {},
  created() {},
  methods: {},
};
</script>

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
  <div class="insert-bg">
    <div class="insert-container">

      <div class="buttons">
        <button type="button">Insert</button>
      </div>

      <div class="insert-form-container title">
        <div class="input-container">
          <p>Title Field</p>
        </div>
      </div>
      <form class="insert-fields-container">
        <div class="input-fields">
          <label for="">Insert Title</label>
          <input type="text" placeholder="Title">
        </div>
        <div class="input-fields">
          <label for="">Insert Object Name</label>
          <input type="text" placeholder="Object">
        </div>
        <div class="input-fields">
          <label for="">Insert Artist Name</label>
          <input type="text" placeholder="Artist">
        </div>
      </form>

      <div class="insert-form-container">
        <div class="input-container heather">
          <p>Heather Format</p>
        </div>
      </div>
      <form class="insert-fields-container">
        <div class="input-fields">
          <label for="">Insert Video Link</label>
          <input type="file" placeholder="Title">
        </div>
        <div class="input-fields">
          <label for="">Insert Image Link</label>
          <input type="file" placeholder="Object">
        </div>
        <div class="input-fields">
          <label for="">Insert Image</label>
          <input type="file" placeholder="Artist">
        </div>
        <div class="input-fields">
          <label for="">Insert Gif</label>
          <input type="file" placeholder="Artist">
        </div>
      </form>

      <div class="insert-form-container">
        <div class="input-container heather">
          <p>Links</p>
        </div>
      </div>
      <form class="insert-fields-container">
        <div class="input-fields">
          <label for="">Insert Live Link</label>
          <input type="file" placeholder="Title">
        </div>
        <div class="input-fields">
          <label for="">Insert Homepage Link</label>
          <input type="file" placeholder="Object">
        </div>
      </form>

      <div class="file-container">
        <h2>File As</h2>
        <div class="file-list">
          <div class="file-box">
            <p>Individual Artist Soldier</p>
            <img src="../../../assets/green-button.png" alt="green-button">
          </div>
          <div class="file-box">
            <p>Group Movement Legion</p>
            <img src="../../../assets/green-button.png" alt="green-button">
          </div>
          <div class="file-box">
            <p>Nation Culture Army</p>
            <img src="../../../assets/green-button.png" alt="green-button">
          </div>
        </div>
      </div>

    </div>
  </div>
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
  .insert-bg {
    background-image: url('../../../assets/build-bg.png');
    background-size: 100% 100%;
    min-height: 100vh;
    background-repeat: no-repeat;
    width: 99%;
    overflow: hidden;
    padding-bottom: 20px;
    .insert-container {
      background-image: url('../../../assets/insert-bg.png');
      background-size: contain;
      min-height: 145vh;
      background-repeat: no-repeat;
      width: 98%;
      overflow: hidden;
      position: relative;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .buttons {
        background-image: url('../../../assets/field-input.png');
        background-repeat: no-repeat;
        background-size: 23% 100%;
        margin-top: 3.6vw;
        padding: 18px 0;
        background-position: center center;
        position: absolute;
        top: 0;
        left: 18px;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          background-color: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-family: "Old London";
          font-size: 3rem;
          cursor: pointer;
        }
      }
      .insert-form-container {
        background-image: url('../../../assets/form-bg.png');
        background-size: 100% 100%;
        min-height: 45vh;
        background-repeat: no-repeat;
        width: 65vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 6vw;
        .input-container {
          width: 13.3vw;
          display: flex;
          justify-content: center;
          p {
            background-color: #000;
            outline: none;
            width: 100%;
            box-shadow: none;
            border: 1px solid #6c6a5a;
            min-height: 4.5vh;
            color: red;
            padding: 2px 10px;
            font-family: "Trajan-Bold";
            text-transform: uppercase;
            font-size: 1.2vw;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .input-container.heather {
          width: 16.3vw;
        } 
      }
      .title {
        margin-top: 15vw;
      }
      .insert-fields-container {
        display: flex;
        flex-direction: column;
        width: 45vw;
        margin-top: 5vw;
        .input-fields {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2vw;
          label {
            background: #000;
            border: 2px solid #6c6a5a;
            color: #6c6a5a;
            font-family: "Old London";
            min-width: 20vw;
            font-size: 1.6vw;
            font-weight: bold;
            padding: 6px;
          }
          input {
            background: #000;
            border: 1px solid #6c6a5a;
            color: #6c6a5a;
            text-transform: uppercase;
            font-family: "Trajan-Bold";
            text-align: center;
            &::file-selector-button {
              width: 100%;
              height: 100%;
              background: none;
              color: #6c6a5a;
              cursor: pointer;
            }
          }
        }
      }
      .file-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
          color: #fff;
          font-size: 3vw;
        }
        .file-list {
          width: 30vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .file-box {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            p {
              color: #fff;
              min-width: 14vw;
              text-align: left;
              font-size: 1.5vw;
              font-family: "Trajan-Bold";
            }
            img {
              width: 35px;
              object-fit: contain;
              cursor: pointer;
            }
          }
        }
      }
    }
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
      // loggedIn() {
      //   return this.$store.state.auth.status.loggedIn;
      // },
    },
    created() {
      // if (this.loggedIn) {
      //   this.getMyBuild();
      //   this.getObjectName(this.myBuild.object_name);
      // }
    },

    methods: {
      // getMyBuild() {
      //   console.log("this.$store.state.data.user :", this.$store.state.data.user);
      //   this.myBuild = this.$store.state.data.user[0].build;
      // },
      // getObjectName(objectNames) {
      //   this.selectedObjName = objectNames.map((x) => x.name);
      // },



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

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
      <div class="file-container">
        <h2>File As</h2>
        <div class="file-list">
          <div class="file-box">
            <p>Browse Videos</p>
            <img src="../../../assets/green-button.png" alt="green-button">
          </div>
          <div class="file-box">
            <p>Browse Linked Images</p>
            <img src="../../../assets/green-button.png" alt="green-button">
          </div>
          <div class="file-box">
            <p>Browse Images</p>
            <img src="../../../assets/green-button.png" alt="green-button">
          </div>
          <div class="file-box">
            <p>Browse Gifs</p>
            <img src="../../../assets/green-button.png" alt="green-button">
          </div>
        </div>
      </div>

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
        <h2>Browse By</h2>
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

      <div class="file-container">
        <h4>Browse By</h4>
        <div class="file-list">
          <div class="file-box">
            <p>Profile</p>
            <img src="../../../assets/green-button.png" alt="green-button">
          </div>
          <div class="file-box">
            <p>Accounts</p>
            <img src="../../../assets/green-button.png" alt="green-button">
          </div>
        </div>
      </div>

    </div>
  </div>
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
        h4 {
          color: #fff;
          font-size: 1.5vw;
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

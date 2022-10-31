<template>
  <div class="main-page">
    <!-- <h1>Index</h1> -->
    <router-link to="/home">Home</router-link>
  </div>
</template>

<style lang="scss">
  .main-page {
    min-height: 100vh;
    background: url(../../../assets/index-bg.jpg) #000;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    a {
      padding-top: 3rem;
      display: flex;
      justify-content: center;
      font-size: 0px;
      width: fit-content;
      margin: 0 auto;
      width: 185px;
      height: 61px;
    }
  }

  @media only screen and (min-width: 1700px) {
    .main-page {
      a {
        padding-top: 4rem;
      }
    }
  }

  @media only screen and (min-width: 1900px) {
    .main-page {
      a {
        padding-top: 4.5rem;
      }
    }
  }

  @media only screen and (min-width: 2000px) {
    .main-page {
      a {
        padding-top: 5.5rem;
      }
    }
  }

  @media only screen and (min-width: 2200px) {
    .main-page {
      a {
        padding-top: 6.5rem;
      }
    }
  }
</style>

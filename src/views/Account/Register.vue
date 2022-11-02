<template>
  <div class="register-container">
    <!-- <h1>Register</h1> -->
    <RegisterComponent></RegisterComponent>
  </div>
</template>

<style>
  .register-container {
    display: flex;
    flex-direction: column;
    min-height: 67vw;
    background-image: url(../../assets/register-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 40px 0;
  }
  h1 {
    color: #fff;
  }
</style>

<script>
import RegisterComponent from "@/components/Account/Register";
export default {
  name: "LoginView",
  components: {
    RegisterComponent,
  },
};
</script>

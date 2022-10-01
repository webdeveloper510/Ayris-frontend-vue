<template>
  <h1>Reset Pass</h1>
  <form @submit.prevent="handleResetPwd">
    <div id="login-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" />
      </div>
      <div class="form-group">
        <button type="submit">Reset Password</button>
      </div>
      <div class="form-group" id="message">
        {{ message }}
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "ResetPwdView",
  components: {},
  data() {
    return {
      email: null,
      message: "",
    };
  },
  methods: {
    handleResetPwd() {
      console.log("handleResetPwd");
      console.log(this.email);
      this.email = "";
    },
  },
};
</script>

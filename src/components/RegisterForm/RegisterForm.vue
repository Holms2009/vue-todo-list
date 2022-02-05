<template>
  <form class="RegisterForm" action="POST" @submit.prevent="handleSubmit">
    <h2 class="RegisterForm__header">Register</h2>
    <label class="RegisterForm__label">
      User name:
      <input
        class="RegisterForm__input RegisterForm__input_user-name"
        type="text"
        name="user-name"
        placeholder="Enter user name"
        :value="userNameFieldValue"
        @input="handleUserNameInput"
      />
    </label>
    <label class="RegisterForm__label">
      Email:
      <input
        class="RegisterForm__input RegisterForm__input_email"
        type="email"
        name="email"
        placeholder="Enter e-mail adress"
        :value="emailFieldValue"
        @input="handleEmailInput"
      />
    </label>
    <label class="RegisterForm__label">
      Password:
      <input
        class="RegisterForm__input RegisterForm__input_password"
        type="password"
        name="password"
        placeholder="Enter password"
        :value="passwordFieldValue"
        @input="handlePasswordInput"
      />
    </label>
    <label class="RegisterForm__label">
      Repeat password:
      <input
        class="RegisterForm__input RegisterForm__input_password"
        type="password"
        name="password-repeat"
        placeholder="Enter password"
        :value="repeatPasswordFieldValue"
        @input="handleRepeatPasswordInput"
      />
    </label>
    <Button
      :class="{ Button_blocked: !dataIsCorrect }"
      textProp="Register"
      buttonType="submit"
    />
    <span class="RegisterForm__close" @click="$emit('closeform')"></span>
    <span class="RegisterForm__to-signin-form" @click="$emit('tosigninform')">Sign In</span>
  </form>
</template>

<script src="./RegisterForm.js"></script>
<style src="./RegisterForm.scss" lang="scss"></style>
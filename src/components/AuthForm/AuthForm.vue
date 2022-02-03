<template>
  <form class="AuthForm" action="POST" @submit.prevent="handleSubmit">
    <h2 class="AuthForm__header">Register</h2>
    <label class="AuthForm__label">
      Email:
      <input
        class="AuthForm__input AuthForm__input_email"
        type="email"
        name="email"
        placeholder="Enter e-mail adress"
        :value="emailFieldValue"
        @input="handleEmailInput"
      />
    </label>
    <label class="AuthForm__label">
      Password:
      <input
        class="AuthForm__input AuthForm__input_password"
        type="password"
        name="password"
        placeholder="Enter password"
        :value="passwordFieldValue"
        @input="handlePasswordInput"
      />
    </label>
    <label class="AuthForm__label">
      Repeat password:
      <input
        class="AuthForm__input AuthForm__input_password"
        type="password"
        name="password-repeat"
        placeholder="Enter password"
        :value="repeatPasswordFieldValue"
        @input="checkIfPasswordsMatch"
      />
    </label>
    <Button
      :class="{ Button_blocked: !dataIsCorrect }"
      textProp="Register"
      buttonType="submit"
    />
    <span class="AuthForm__close"></span>
  </form>
</template>

<script src='./AuthForm.js'></script>
<style src='./AuthForm.scss' lang="scss"></style>
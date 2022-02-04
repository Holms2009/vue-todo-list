<template>
  <form class="SignInForm" action="POST" @submit.prevent="handleSubmit">
    <h2 class="SignInForm__header">Sign In</h2>
    <label class="SignInForm__label">
      Email:
      <input
        class="SignInForm__input SignInForm__input_email"
        type="email"
        name="email"
        placeholder="Enter e-mail adress"
        :value="emailFieldValue"
        @input="handleEmailInput"
      />
    </label>
    <label class="SignInForm__label">
      Password:
      <input
        class="SignInForm__input SignInForm__input_password"
        type="password"
        name="password"
        placeholder="Enter password"
        :value="passwordFieldValue"
        @input="handlePasswordInput"
      />
    </label>
    <Button
      :class="{ Button_blocked: !dataIsCorrect }"
      textProp="Sign In"
      buttonType="submit"
    />
    <span class="SignInForm__close" @click="$emit('closeform')"></span>
  </form>
</template>

<script src="./SignInForm.js"></script>
<style src="./SignInForm.scss" lang="scss"></style>
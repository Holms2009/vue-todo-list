<template>
  <form class="SignInForm" action="POST" @submit.prevent="handleSubmit">
    <h2 class="SignInForm__header">Sign In</h2>
    <label class="SignInForm__label">
      Email:
      <input
        :class="[
          'SignInForm__input',
          { SignInForm__input_correct: emailIsCorrect },
        ]"
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
        :class="[
          'SignInForm__input',
          { SignInForm__input_correct: passwordIsCorrect },
        ]"
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
    <span class="SignInForm__to-register-form" @click="$emit('toregisterform')">
      Register
    </span>
    <span
      class="SignInForm__control SignInForm__tip-toggle"
      @click="handleTip"
    ></span>
    <span
      class="SignInForm__control SignInForm__close"
      @click="$emit('closeform')"
    ></span>
    <transition name="fade">
      <ValidationTip :items="tipItems" v-if="showTip" />
      <ErrorTip :items="tipItems" v-if="showErrorTip" />
      <ErrorCover :message="error" v-if="!!error" />
      <LoadingCover text="Please wait..." v-if="pending" />
    </transition>
  </form>
</template>

<script src="./SignInForm.js"></script>
<style src="./SignInForm.scss" lang="scss"></style>
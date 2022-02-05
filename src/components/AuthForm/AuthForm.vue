<template>
  <transition name="fade">
    <div class="AuthForm" @click.self="$emit('toggleauthform')">
      <SignInForm @closeform="$emit('toggleauthform')"  @toregisterform="showRegister = true" v-if="!showRegister"/>
      <RegisterForm @closeform="$emit('toggleauthform')" @tosigninform="showRegister = false" v-if="showRegister"/>
    </div>
  </transition>
</template>

<script src='./AuthForm.js'></script>
<style src='./AuthForm.scss' lang="scss"></style>
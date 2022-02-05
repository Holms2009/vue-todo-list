<template>
    <div class="AuthForm" @click.self="$emit('toggleauthform')">
      <transition name="fade">
        <SignInForm @closeform="$emit('toggleauthform')"  @toregisterform="showRegister = true" v-if="!showRegister"/>
        <RegisterForm @closeform="$emit('toggleauthform')" @tosigninform="showRegister = false" v-if="showRegister"/>
      </transition>
    </div>
</template>

<script src='./AuthForm.js'></script>
<style src='./AuthForm.scss' lang="scss"></style>
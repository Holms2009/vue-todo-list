<template>
  <div class="Header">
    <h1 class="Header__title">{{ title }}</h1>
    <AuthBlock :isAuth='isAuth' :userName='userName' @showauthform='$emit("toggleauthform")'/>
  </div>
</template>

<script src='./Header.js'></script>
<style lang="scss" src='./Header.scss'></style>
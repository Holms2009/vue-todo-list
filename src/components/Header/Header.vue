<template>
  <div class="Header">
    <div class="logo"></div>
    <AuthBlock :userName='userName' @showauthform='$emit("toggleauthform")'/>
  </div>
</template>

<script src='./Header.js'></script>
<style lang="scss" src='./Header.scss'></style>
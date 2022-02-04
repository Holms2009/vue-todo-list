<template>
  <div class="Header">
    <h1 class="Header__title">{{ title }}</h1>
    <AuthBlock :userName='userName' @showauthform='$emit("toggleauthform")'/>
  </div>
</template>

<script src='./Header.js'></script>
<style lang="scss" src='./Header.scss'></style>
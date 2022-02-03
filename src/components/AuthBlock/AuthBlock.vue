<template>
  <div class="AuthBlock">
    <div class="AuthBlock__login" v-if="!isAuth">
      <Button
        textProp="Login"
        buttonType="button"
        @click="$emit('showauthform')"
      />
    </div>
    <div class="AuthBlock__user" v-if="isAuth">
      <p class="AuthBlock__user-name" @click="showMenu = !showMenu">{{ userName }}</p>
      <transition name="fade-menu">
        <div class="AuthBlock__menu" v-if="showMenu">
          <a class="AuthBlock__link" href="#">Settings</a>
          <a class="AuthBlock__link" href="#">Exit</a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script src='./AuthBlock.js'></script>
<style src='./AuthBlock.scss' lang='scss'></style>
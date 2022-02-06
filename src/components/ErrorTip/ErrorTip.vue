<template>
  <div class="ErrorTip">
    <ul class="ErrorTip__list">
      <li class="ErrorTip__item" v-for="item in items" :key="item">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script src='./ErrorTip.js'></script>
<style src='./ErrorTip.scss' lang='scss'></style>
<template>
  <div class="ValidationTip">
    <ul class="ValidationTip__list">
      <li class="ValidationTip__item" v-for="item in items" :key="item">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script src='./ValidationTip.js'></script>
<style src='./ValidationTip.scss' lang='scss'></style>
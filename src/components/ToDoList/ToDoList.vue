<template>
  <ul class="ToDoList">
    <li v-for="item in items" :key="item.text">
      {{item.text}}
    </li>
  </ul>
</template>

<script src='./ToDoList.js'></script>
<style src='./ToDoList.scss' lang="scss"></style>
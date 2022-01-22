<template>
  <ul class="ToDoList">
    <li class="ToDoList__item" v-for="item in items" :key="item.text">
      <span class="ToDoList__item-text">{{ item.text }}</span>
      <span class="ToDoList__item-remove" @click="$emit('remove', item.text)"></span>
    </li>
  </ul>
</template>

<script src='./ToDoList.js'></script>
<style src='./ToDoList.scss' lang="scss"></style>
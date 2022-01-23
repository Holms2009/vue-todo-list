<template>
  <div class="ToDoList">
    <h2 class="ToDoList__title">{{ title }}</h2>
    <ul class="ToDoList__list">
      <li class="ToDoList__item" v-for="item in items" :key="item.text">
        <p class="ToDoList__item-text">{{ item.text }}</p>
        <span
          v-if="needButtons"
          class="ToDoList__button ToDoList__button_done"
          @click="$emit('done', { task: item, taskDone: true })"
        ></span>
        <span
          v-if="needButtons"
          class="ToDoList__button ToDoList__button_remove"
          @click="$emit('remove', { task: item })"
        ></span>
        <PriorityPopup v-if="needButtons" @changed-priority="$emit('priority-changed', $event, item)"/>
      </li>
    </ul>
  </div>
</template>

<script src='./ToDoList.js'></script>
<style src='./ToDoList.scss' lang="scss"></style>
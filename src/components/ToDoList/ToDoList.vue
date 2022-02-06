<template>
  <div class="ToDoList">
    <div class="ToDoList__title-wrapper">
      <h2 class="ToDoList__title">{{ title }}</h2>
      <div v-if="needButtons" class="ToDoList__sort">
        <span
          class="ToDoList__sort-toggle ToDoList__sort-toggle_low"
          @click="sort = 'low'"
        ></span>
        <span
          class="ToDoList__sort-toggle ToDoList__sort-toggle_mid"
          @click="sort = 'mid'"
        ></span>
        <span
          class="ToDoList__sort-toggle ToDoList__sort-toggle_high"
          @click="sort = 'high'"
        ></span>
        <span
          class="ToDoList__sort-toggle ToDoList__sort-toggle_none"
          @click="sort = 'none'"
        ></span>
      </div>
    </div>
    <ul class="ToDoList__list">
      <li class="ToDoList__item" v-for="item in sortedItems" :key="item.id">
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
        <PriorityPopup
          v-if="needButtons"
          :startPriority="item.priority"
          @changed-priority="$emit('priority-changed', $event, item)"
        />
      </li>
    </ul>
  </div>
</template>

<script src='./ToDoList.js'></script>
<style src='./ToDoList.scss' lang="scss"></style>
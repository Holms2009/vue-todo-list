<template>
  <div class="PriorityPopup">
    <span
      class="PriorityPopup__marker PriorityPopup__marker_green"
      title="Низкий приоритет"
      data-priority="low"
      @click="handleMarkerClick"
    ></span>
    <span
      class="PriorityPopup__marker PriorityPopup__marker_yellow"
      title="Средний приоритет"
      data-priority="mid"
      @click="handleMarkerClick"
    ></span>
    <span
      class="PriorityPopup__marker PriorityPopup__marker_red"
      title="Высокий приоритет"
      data-priority="high"
      @click="handleMarkerClick"
    ></span>
  </div>
</template>

<script src='./PriorityPopup.js'></script>
<style src='./PriorityPopup.scss' lang="scss"></style>
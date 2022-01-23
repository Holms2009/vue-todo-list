<template>
  <div class="PriorityPopup">
    <span
      :class="[
      'PriorityPopup__marker',
      'PriorityPopup__marker_green',
      {'PriorityPopup__marker_inactive': (priority !== 'none' && priority !== 'low')}
       ]"
      title="Низкий приоритет"
      data-priority="low"
      @click="handleMarkerClick"
    ></span>
    <span
      :class="[
      'PriorityPopup__marker',
      'PriorityPopup__marker_yellow',
      {'PriorityPopup__marker_inactive': (priority !== 'none' && priority !== 'mid')}
       ]"
      title="Средний приоритет"
      data-priority="mid"
      @click="handleMarkerClick"
    ></span>
    <span
      :class="[
      'PriorityPopup__marker',
      'PriorityPopup__marker_red',
      {'PriorityPopup__marker_inactive': (priority !== 'none' && priority !== 'high')}
       ]"
      title="Высокий приоритет"
      data-priority="high"
      @click="handleMarkerClick"
    ></span>
  </div>
</template>

<script src='./PriorityPopup.js'></script>
<style src='./PriorityPopup.scss' lang="scss"></style>
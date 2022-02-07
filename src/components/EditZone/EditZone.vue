<template>
  <div class="EditZone">
    <div class="EditZone__editor">
      <h2 class="EditZone__title">Task Title</h2>
      <div class="EditZone__description">
        <h4 class="EditZone__sub-title">Description:</h4>
        <textarea
          class="EditZone__textarea"
          name="description"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="EditZone__tags">
        <h4 class="EditZone__sub-title">Tags:</h4>
        <div class="EditZone__tags-container">
          <span class="EditZone__add-tag">+</span>
        </div>
      </div>
    </div>
    <div class="EditZone__settings">
      <h3 class="EditZone__settings-title">Settings:</h3>
    </div>
    <span class="EditZone__close" @click="$emit('toggle-editor')"></span>
  </div>
</template>

<script src='./EditZone.js'></script>
<style src='./EditZone.scss' lang='scss'></style>
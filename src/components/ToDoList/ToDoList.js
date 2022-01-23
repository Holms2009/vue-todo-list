import PriorityPopup from "../PriorityPopup/PriorityPopup.vue";

export default {
  name: 'ToDoList',
  props: ['items', 'title', 'needButtons'],
  components: {
    PriorityPopup
  },
}
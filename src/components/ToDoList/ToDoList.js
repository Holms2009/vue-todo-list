import PriorityPopup from "../PriorityPopup/PriorityPopup.vue";

export default {
  name: 'ToDoList',
  props: ['items', 'title', 'needButtons', 'activeItems'],
  data() {
    return {
      sort: 'none'
    }
  },
  computed: {
    sortedItems: function () {
      if (this.sort === 'none') return this.items;

      const sortedItems = this.items.filter(item => item.priority === this.sort);

      return sortedItems;
    }
  },
  components: {
    PriorityPopup
  },
}
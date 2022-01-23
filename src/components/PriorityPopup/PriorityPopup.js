export default {
  name: 'PriorityPopup',
  props: ['startPriority'],
  data() {
    return {
      priority: this.startPriority
    }
  },
  methods: {
    handleMarkerClick: function (evt) {
      const marker = evt.currentTarget;
      const priority = marker.dataset.priority;

      this.priority = priority;
      this.$emit('changed-priority', this.priority);
    }
  }
}
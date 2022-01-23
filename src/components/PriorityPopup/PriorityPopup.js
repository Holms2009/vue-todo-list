export default {
  name: 'PriorityPopup',
  data() {
    return {
      priority: 'none'
    }
  },
  methods: {
    handleMarkerClick: function (evt) {
      const marker = evt.currentTarget;
      const allMarkers = Array.from(marker.parentElement.children);
      const priority = marker.dataset.priority;

      marker.classList.toggle('PriorityPopup__marker_active');

      if (allMarkers.find(el => el.matches('.PriorityPopup__marker_active')) === undefined) {
        allMarkers.forEach(element => {
          element.classList.remove('PriorityPopup__marker_inactive');
        });
        this.$emit('changed-priority', 'none');
        return;
      }

      allMarkers.forEach(element => {
        if (element !== marker && element.matches('.PriorityPopup__marker_active')) {
          element.classList.remove('PriorityPopup__marker_active');
        }
        if (element.matches('.PriorityPopup__marker_active')) {
          element.classList.remove('PriorityPopup__marker_inactive');
          return;
        };
        element.classList.add('PriorityPopup__marker_inactive');
      });

      this.$emit('changed-priority', priority);
    }
  }
}
export default {
  name: 'ToDoList',
  data() {
    return {
      items: this.props.items,
    }
  },
  props: {
    items: Array,
  }
}
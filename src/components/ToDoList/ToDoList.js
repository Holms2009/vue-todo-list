export default {
  name: 'ToDoList',
  props: ['itemsProp'],
  data() {
    return {
      items: this.itemsProp,
    }
  }
}
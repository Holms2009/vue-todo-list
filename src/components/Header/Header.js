import Button from "../Button/Button.vue";
import AuthBlock from "../AuthBlock/AuthBlock.vue";

export default {
  name: "Header",
  props: ['userName'],
  data() {
    return {
      title: 'My ToDo List'
    }
  },
  components: {
    Button,
    AuthBlock
  }
}
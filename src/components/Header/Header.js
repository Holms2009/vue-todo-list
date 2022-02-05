import Button from "../Button/Button.vue";
import AuthBlock from "../AuthBlock/AuthBlock.vue";

export default {
  name: "Header",
  props: ['userName'],
  components: {
    Button,
    AuthBlock
  }
}
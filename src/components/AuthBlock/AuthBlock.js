import Button from '../Button/Button.vue';
import { signOut } from "firebase/auth";

export default {
  name: 'AuthBlock',
  props: ['isAuth', 'userName'],
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    handleExitClick: function () {
      signOut(this.$store.state.auth);
    }
  },
  components: {
    Button
  }
}
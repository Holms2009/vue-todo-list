import { signOut } from "firebase/auth";

import Button from '../Button/Button.vue';
import { auth } from '../../main';

export default {
  name: 'AuthBlock',
  props: ['userName'],
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    handleExitClick: function () {
      signOut(auth);
    }
  },
  computed: {
    isAuth: function () {
      return this.$store.getters.isUserAuth;
    }
  },
  components: {
    Button
  }
}
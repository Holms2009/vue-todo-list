import Button from '../Button/Button.vue';

export default {
  name: 'AuthBlock',
  props: ['isAuth', 'userName'],
  data() {
    return {
      showMenu: false
    }
  },
  methods: {

  },
  components: {
    Button
  }
}
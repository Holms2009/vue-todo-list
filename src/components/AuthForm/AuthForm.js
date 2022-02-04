import Button from '../Button/Button.vue';
import RegisterForm from "../RegisterForm/RegisterForm.vue";
import SignInForm from '../SignInForm/SignInForm.vue';

export default {
  name: 'AuthForm',
  data() {
    return {
      showRegister: true
    }
  },
  components: {
    Button,
    RegisterForm,
    SignInForm
  },
}
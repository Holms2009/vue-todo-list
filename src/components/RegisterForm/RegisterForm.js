import { createUserWithEmailAndPassword } from "firebase/auth";

import Button from '../Button/Button.vue';
import { auth } from '../../main';
import { validateEmail, validatePassword } from "../../utils/validation";

export default {
  name: 'RegisterForm',
  data() {
    return {
      emailFieldValue: '',
      emailIsCorrect: false,
      passwordFieldValue: '',
      passwordIsCorrect: false,
      repeatPasswordFieldValue: '',
      passwordsMatch: false
    }
  },
  methods: {
    handleEmailInput: function (evt) {
      const fieldValue = evt.currentTarget.value;

      this.emailFieldValue = fieldValue;
      this.emailIsCorrect = validateEmail(this.emailFieldValue);
    },

    handlePasswordInput: function (evt) {
      const fieldValue = evt.currentTarget.value;

      this.passwordFieldValue = fieldValue;
      this.passwordIsCorrect = validatePassword(this.passwordFieldValue);
      this.checkIfPasswordsMatch();
    },

    handleRepeatPasswordInput: function (evt) {
      const fieldValue = evt.currentTarget.value;

      this.repeatPasswordFieldValue = fieldValue;
      this.checkIfPasswordsMatch();
    },

    checkIfPasswordsMatch: function (evt) {
      this.passwordsMatch = (this.passwordFieldValue === this.repeatPasswordFieldValue) ? true : false;
    },

    handleSubmit: function (evt) {
      const form = evt.currentTarget;

      createUserWithEmailAndPassword(auth, this.emailFieldValue, this.passwordFieldValue)
        .then((response) => {
          form.reset();
          this.$emit('closeform');
        })
        .catch((err) => {
          this.$store.dispatch('setErrorAction', err.message);
        })
    }
  },
  computed: {
    dataIsCorrect: function () {
      if (this.emailIsCorrect && this.passwordIsCorrect && this.passwordsMatch) {
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    Button
  }
}
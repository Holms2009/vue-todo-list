import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import Button from '../Button/Button.vue';
import { auth } from '../../main';

export default {
  name: 'AuthForm',
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
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      this.emailFieldValue = fieldValue;

      if (emailPattern.test(fieldValue)) {
        this.emailIsCorrect = true;
      } else {
        this.emailIsCorrect = false;
      }
    },

    handlePasswordInput: function (evt) {
      const fieldValue = evt.currentTarget.value;
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

      this.passwordFieldValue = fieldValue;

      if (passwordPattern.test(fieldValue)) {
        this.passwordIsCorrect = true;
      } else {
        this.passwordIsCorrect = false;
      }
    },

    checkIfPasswordsMatch: function (evt) {
      const fieldValue = evt.currentTarget.value;

      this.repeatPasswordFieldValue = fieldValue;

      if (this.passwordFieldValue === this.repeatPasswordFieldValue) {
        this.passwordsMatch = true;
      } else {
        this.passwordsMatch = false;
      }
    },

    handleSubmit: function () {
      createUserWithEmailAndPassword(auth, this.emailFieldValue, this.passwordFieldValue)
        .catch(err => {
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
  },
}
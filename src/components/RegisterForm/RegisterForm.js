import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import Button from '../Button/Button.vue';
import ValidationTip from "../ValidationTip/ValidationTip.vue";
import { auth } from '../../main';
import { validateEmail, validatePassword, validateUserName } from "../../utils/validation";

export default {
  name: 'RegisterForm',
  data() {
    return {
      userNameFieldValue: '',
      userNameIsCorrect: false,
      emailFieldValue: '',
      emailIsCorrect: false,
      passwordFieldValue: '',
      passwordIsCorrect: false,
      repeatPasswordFieldValue: '',
      passwordsMatch: false,
      showTip: false,
      tipItems: [
        'Use only latin letters and numbers for e-mail, password and user name',
        'Minimum user name length is 6 characters',
        'Minimum password length is 8 characters',
        'Password must contain minimum 1 number and 1 uppercase letter'
      ],
      error: null
    }
  },
  methods: {
    handleUserNameInput: function (evt) {
      const fieldValue = evt.currentTarget.value;

      this.userNameFieldValue = fieldValue;
      this.userNameIsCorrect = validateUserName(this.userNameFieldValue);
    },

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
          updateProfile(response.user, {
            displayName: this.userNameFieldValue
          })
          form.reset();
          this.$emit('closeform');
        })
        .catch((err) => {
          this.error = err;
        })
    }
  },
  computed: {
    dataIsCorrect: function () {
      if (this.userNameIsCorrect && this.emailIsCorrect && this.passwordIsCorrect && this.passwordsMatch) {
        return true;
      }

      return false;
    }
  },
  components: {
    Button,
    ValidationTip
  }
}
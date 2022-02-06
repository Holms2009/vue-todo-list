import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import Button from '../Button/Button.vue';
import ValidationTip from "../ValidationTip/ValidationTip.vue";
import ErrorTip from '../ErrorTip/ErrorTip.vue';
import ErrorCover from "../ErrorCover/ErrorCover.vue";
import LoadingCover from "../LoadingCover/LoadingCover.vue";
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
      showErrorTip: false,
      tipItems: [
        'Use only latin letters and numbers for e-mail, password and user name',
        'Minimum user name length is 6 characters',
        'Minimum password length is 8 characters',
        'Password must contain minimum 1 number and 1 uppercase letter'
      ],
      error: null,
      pending: false
    }
  },
  methods: {
    handleTip: function () {
      if (this.showErrorTip) {
        this.showErrorTip = false;
        return;
      }

      this.showTip = !this.showTip;
    },
    
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
      if (!this.dataIsCorrect) {
        this.showTip = false;
        this.showErrorTip = true;
        return;
      }

      this.pending = true;
      this.showTip = false;
      this.showErrorTip = false;
      const form = evt.currentTarget;

      createUserWithEmailAndPassword(auth, this.emailFieldValue, this.passwordFieldValue)
        .then((response) => {
          updateProfile(response.user, {
            displayName: this.userNameFieldValue
          })
          form.reset();
          this.$emit('closeform');
          this.pending = false;
        })
        .catch((err) => {
          this.pending = false;

          if (err.message.includes('auth/email-already-in-use')) {
            this.error = 'E-mail already in use!';
          } else {
            this.error = 'Something went wrong...';
          }

          setTimeout(() => this.error = null, 3000);
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
    ValidationTip,
    ErrorCover,
    LoadingCover,
    ErrorTip
  }
}
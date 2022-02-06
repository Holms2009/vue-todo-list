import { signInWithEmailAndPassword } from "firebase/auth";

import Button from '../Button/Button.vue';
import ValidationTip from "../ValidationTip/ValidationTip.vue";
import ErrorCover from "../ErrorCover/ErrorCover.vue";
import LoadingCover from "../LoadingCover/LoadingCover.vue";
import { auth } from '../../main';
import { validateEmail, validatePassword } from "../../utils/validation";

export default {
  name: 'SignInForm',
  data() {
    return {
      emailFieldValue: '',
      emailIsCorrect: false,
      passwordFieldValue: '',
      showTip: false,
      tipItems: [
        'Use only latin letters and numbers for e-mail and password',
        'Minimum password length is 8 characters',
        'Password must contain minimum 1 number and 1 uppercase letter'
      ],
      error: null,
      pending: false
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
    },

    handleSubmit: function (evt) {
      this.pending = true;
      const form = evt.currentTarget;

      signInWithEmailAndPassword(auth, this.emailFieldValue, this.passwordFieldValue)
        .then((response) => {
          form.reset();
          this.$emit('closeform');
          this.pending = false;
        })
        .catch((err) => {
          this.pending = false;

          if (err.message.includes('auth/wrong-password')) {
            this.error = 'Wrong password!';
          } else if (err.message.includes('auth/user-not-found')) {
            this.error = 'No such user!';
          } else {
            this.error = 'Something went wrong...';
          }

          setTimeout(() => this.error = null, 3000);
        })
    }
  },
  computed: {
    dataIsCorrect: function () {
      if (this.emailIsCorrect && this.passwordFieldValue !== '') {
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    Button,
    ValidationTip,
    ErrorCover,
    LoadingCover
  }
}
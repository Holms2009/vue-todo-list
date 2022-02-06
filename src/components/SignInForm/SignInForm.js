import { signInWithEmailAndPassword } from "firebase/auth";

import Button from '../Button/Button.vue';
import ValidationTip from "../ValidationTip/ValidationTip.vue";
import ErrorTip from '../ErrorTip/ErrorTip.vue';
import ErrorCover from "../ErrorCover/ErrorCover.vue";
import LoadingCover from "../LoadingCover/LoadingCover.vue";
import { auth } from '../../main';
import { validateEmail, validateLatinAndNumbers } from "../../utils/validation";

export default {
  name: 'SignInForm',
  data() {
    return {
      emailFieldValue: '',
      emailIsCorrect: false,
      passwordFieldValue: '',
      passwordIsCorrect: false,
      showTip: false,
      showErrorTip: false,
      tipItems: [
        'All fields maut be filled',
        'Use only latin letters and numbers for e-mail and password',
        'Minimum password length is 8 characters',
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

    handleEmailInput: function (evt) {
      const fieldValue = evt.currentTarget.value;

      this.emailFieldValue = fieldValue;
      this.emailIsCorrect = validateEmail(this.emailFieldValue);
    },

    handlePasswordInput: function (evt) {
      const fieldValue = evt.currentTarget.value;

      this.passwordFieldValue = fieldValue;
      this.passwordIsCorrect = validateLatinAndNumbers(this.passwordFieldValue);
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
    },
  },
  computed: {
    dataIsCorrect: function () {
      if (this.emailIsCorrect && this.passwordFieldValue !== '' && this.passwordIsCorrect) {
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    Button,
    ValidationTip,
    ErrorTip,
    ErrorCover,
    LoadingCover
  }
}
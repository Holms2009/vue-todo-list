export default {
  name: 'Button',
  props: ['textProp', 'buttonType'],
  data() {
    return {
      text: this.textProp
    }
  },
  methods: {
    handleClick: function () {
      this.$emit('click');
    }
  }
}
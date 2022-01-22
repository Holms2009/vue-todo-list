export default {
  name: 'Button',
  props: ['textProp'],
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
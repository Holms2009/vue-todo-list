export default {
  name: 'Button',
  data() {
    return {
      text: this.props.text
    }
  },
  props: {
    text: String
  }
}
<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  render(createElement) {
    return createElement(
      this.tag,
      this.text.split('\n').reduce((accumulator, string) => {
        if (!Array.isArray(accumulator)) {
          return [accumulator, createElement('br'), string];
        }

        return accumulator.concat([createElement('br'), string]);
      }),
    );
  },
};
</script>

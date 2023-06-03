// imageBorderMixin.js
export default {
    data() {
      return {
        showBorder: false
      };
    },
    methods: {
      toggleBorder() {
        this.showBorder = !this.showBorder;
      }
    }
  };
<template>
    <div @click="toggleBorder">
      <img :src="src" :alt="alt" :title="title" class="d-block w-100" :class="{ 'image-border': showBorder }" />
    </div>
  </template>

<script>
import imageBorderMixin from "@/mixins/imageBorderMixin";

export default {
  name: "ImageComponent",
  mixins: [imageBorderMixin],
  props: {
    src: {
      type: String,
      required: true,
      validator: function(value) {
        // Validate that the value is a valid image format (e.g., JPG, PNG, GIF)
        const imageExtensions = /\.(jpg|jpeg|png|gif)$/i;
        return imageExtensions.test(value);
        }
    },
    alt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>
  
<style scoped>
.image-border {
  border: 1rem solid blue;
}
</style>
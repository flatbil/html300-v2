<template>
  <div>
    <h1>Images</h1>
    
    <!-- Carousel -->
    <section id="mycarousel" class="carousel slide" data-bs-ride="carousel">
      <!-- Carousel Indicators -->
      <div class="carousel-indicators">
        <!-- Indicator buttons for each slide -->
        <button v-for="(image, index) in images" :key="index" type="button" :data-bs-target="'#mycarousel'" :data-bs-slide-to="index" :class="{ active: index === 0 }"></button>
      </div>
      
      <!-- Carousel Inner -->
      <div class="carousel-inner">
        <!-- Slide items -->
        <div v-for="(image, index) in images" :key="index" class="carousel-item" :class="{ active: index === 0 }">
          <!-- Image Component -->
          <ImageComponent :src="image.src" :alt="image.alt" :title="image.title" />
        </div>
      </div>
      
      <!-- Carousel Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
        <!-- Previous icon -->
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
        <!-- Next icon -->
        <span class="carousel-control-next-icon"></span>
      </button>
    </section>
  </div>
</template>


<script>
import ImageComponent from "@/components/ImageComponent.vue";

export default {
  name: "ImagesPage",
  components: {
    ImageComponent,
  },
  data() {
    return {
      images: [
        { src: "images/Front.jpg", alt: "Image 1", title: "Front View" },
        { src: "images/Livingroom.jpg", alt: "Image 2", title: "Living Room" },
        { src: "images/Hall.jpg", alt: "Image 3", title: "Hallway" },
        { src: "images/View.jpg", alt: "Image 4", title: "Scenic View" },
      ],
    };
  },
};
</script>

<style>
#mycarousel {
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
}
</style>

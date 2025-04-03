<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

export default {
  setup() {
    const lightModeImages = [
      "/landing/screenshots/light/admin.png",
      "/landing/screenshots/client-dashboard-2.png",
      "/landing/screenshots/light/1.png",
      "/landing/screenshots/light/2.png",
      "/landing/screenshots/light/3.png",
      "/landing/screenshots/light/4.png",
      "/landing/screenshots/light/5.png",
      "/landing/screenshots/light/6.png",
    ];

    const darkModeImages = [
      "/landing/screenshots/dark/admin.png",
      "/landing/screenshots/client-dashboard-2.png",
      "/landing/screenshots/dark/1.png",
      "/landing/screenshots/dark/2.png",
      "/landing/screenshots/dark/3.png",
      "/landing/screenshots/dark/4.png",
      "/landing/screenshots/dark/5.png",
      "/landing/screenshots/dark/6.png",
    ];

    const placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="; // transparent bg

    const loaded = ref(Array(lightModeImages.length).fill(false));
    loaded.value[0] = true;

    const isDarkMode = ref(document.documentElement.classList.contains("dark"));

    const currentImages = computed(() => {
      return isDarkMode.value ? darkModeImages : lightModeImages;
    });

    let sliderInstance = null;

    onMounted(() => {
      sliderInstance = new KeenSlider(".keen-slider", {
        loop: true,
        initial: 0,
        animationEnded: (s) => {
          const idx = s.track.details.rel;
          loaded.value[idx] = true;
        },
      });

      const observer = new MutationObserver(() => {
        isDarkMode.value = document.documentElement.classList.contains("dark");
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      onUnmounted(() => {
        observer.disconnect();
        if (sliderInstance) {
          sliderInstance.destroy();
        }
      });
    });

    function nextSlide() {
      if (sliderInstance) {
        sliderInstance.next();
      }
    }

    function prevSlide() {
      if (sliderInstance) {
        sliderInstance.prev();
      }
    }

    return { currentImages, loaded, nextSlide, prevSlide, placeholder };
  },
};
</script>

<template>

<section id="slider" style="position: relative;">
  <div class="slider" style="position: relative;">
    <div
      ref="container"
      class="keen-slider"
      style=""
    >
      <div
        class="keen-slider__slide lazy__slide"
        v-for="(src, idx) in currentImages"
        :key="idx"
      >
        <div class="image-container">
          <img :src="loaded[idx] ? src : placeholder" alt="Paymenter" />
        </div>
        <div v-if="!loaded[idx]" class="spinner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="var(--vp-c-text-1)"
            width="48px"
            height="48px"
          >
            <path
              d="M12 3C16.9706 3 21 7.02944 21 12H19C19 8.13401 15.866 5 12 5V3Z"
            ></path>
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="0.5s"
              type="rotate"
              from="0"
              to="360"
              repeatCount="indefinite"
            />
          </svg>
        </div>
      </div>
    </div>
    <button class="nav-button left" @click="prevSlide">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        fill="currentColor"
      >
        <path
          d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
        ></path>
      </svg>
    </button>
    <button class="nav-button right" @click="nextSlide">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        fill="currentColor"
      >
        <path
          d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"
        ></path>
      </svg>
    </button>
  </div>
  
  <div
    style="
      position: absolute;
      bottom: 0;
      left: 0;
      background: linear-gradient(to bottom, transparent 0%, var(--vp-c-bg));
      width: 100%;
      height: 400px;
      pointer-events: none;
    "
  ></div>
</section>
  </template>
  
  <style scoped>
  .lazy__slide {
    position: relative;
    overflow: hidden;
  }
  
  .image-container {
    width: 100%;
    padding-top: 56.25%; /*16:9 (9/16 = 0.5625)*/
    position: relative;
  }
  
  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--vp-c-bg);
    border-radius: 8px;
    border: 1px solid var(--vp-c-divider);
    fill: var(--vp-c-text-1);
    padding: 10px;
    cursor: pointer;
    z-index: 10;
  }
  
  .nav-button.left {
    left: 20px;
  }
  
  .nav-button.right {
    right: 20px;
  }
  
  .nav-button:hover {
    background-color: rgba(70, 103, 255, 0.2);
  }
  </style>
  
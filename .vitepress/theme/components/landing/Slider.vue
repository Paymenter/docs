<script setup>
import { onMounted } from 'vue';
import KeenSlider from 'keen-slider';

onMounted(() => {
  new KeenSlider(".keen-slider");
});
</script>

<template>
    <section id="slider">
        <div class="slider">
            <div class="keen-slider">
            <div class="keen-slider__slide" style="border:8px solid #5672cd94;border-radius:20px;">
                <img style="border-radius:15px;" src="/laptop.svg" alt="Paymenter" class=""/>
            </div>
            <div class="keen-slider__slide" style="border:8px solid #5672cd94;border-radius:20px;">
                <img style="border-radius:15px;" src="/laptop.svg" alt="Paymenter" class=""/>
            </div>
            <div class="keen-slider__slide" style="border:8px solid #5672cd94;border-radius:20px;">
                <img style="border-radius:15px;" src="/laptop.svg" alt="Paymenter" class=""/>
            </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
@import 'keen-slider/keen-slider.min.css';
</style>
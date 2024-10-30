<script setup>
import { onMounted } from 'vue';
</script>

<template>
    <section id="hero">
      <h1 class="tagline">
        Effortless Hosting Management
        <br /> with Open-Source Freedom.
      </h1>
      <p class="description">
        Paymenter is an open source webshop solution for hosting companies. It's developed to provide an more easy way to manage your hosting company.
      </p>
      

  <div class="buttons">
                <a href="https://github.com/sponsors/Paymenter" target="_blank" class="btn btn-primary svg-left" style="color:white;">
                    Get Started
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM16.0001 8V16.4142L12.5001 12.9142L8.70718 16.7071L7.29297 15.2929L11.0859 11.5L7.58586 8H16.0001Z"></path></svg>
                
                </a>
                <a href="https://github.com/Paymenter/Paymenter" target="_blank" class="btn svg-left">
                    Demo
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
#hero {
  padding: 46px 32px;
}

.tagline {
  font-size: 60px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  margin: 0px auto;
}

.description {
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 794px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 56px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>

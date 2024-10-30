<script setup>
import { onMounted } from 'vue';
</script>

<template>
    <section id="hero">

      <div style="display: inline-flex;align-items: center;margin-bottom: 20px;"> 
        <div style="display: inline-flex;align-items: center; background:#e7f0fe; margin-right:8px; padding: 4px 8px; border-radius:8px;">
        <svg style="margin-right:6px;" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4667ff"><path d="M14 4.4375C15.3462 4.4375 16.4375 3.34619 16.4375 2H17.5625C17.5625 3.34619 18.6538 4.4375 20 4.4375V5.5625C18.6538 5.5625 17.5625 6.65381 17.5625 8H16.4375C16.4375 6.65381 15.3462 5.5625 14 5.5625V4.4375ZM1 11C4.31371 11 7 8.31371 7 5H9C9 8.31371 11.6863 11 15 11V13C11.6863 13 9 15.6863 9 19H7C7 15.6863 4.31371 13 1 13V11ZM17.25 14C17.25 15.7949 15.7949 17.25 14 17.25V18.75C15.7949 18.75 17.25 20.2051 17.25 22H18.75C18.75 20.2051 20.2051 18.75 22 18.75V17.25C20.2051 17.25 18.75 15.7949 18.75 14H17.25Z"></path></svg>
        <p style="text-transform:uppercase;color:#4667ff;">New</p>
      </div>
      <a href="/blog/v1-alpha-release" class="btn svg-left" data-v-b6c8f334=""> V1 Alpha Release <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-v-b6c8f334=""><path d="M12 13H4V11H12V4L20 12L12 20V13Z" data-v-b6c8f334=""></path></svg></a>
      </div>

      <h1 class="tagline">
        Effortless Hosting Management
        <br /> with Open-Source Freedom.
      </h1>
      <p class="description">
        Paymenter is an open source webshop solution for hosting companies. It's developed to provide an more easy way to manage your hosting company.
      </p>

  <div class="buttons">
                <a href="/docs/getting-started/install" class="btn btn-primary svg-left" style="color:white;">
                    Get Started
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM16.0001 8V16.4142L12.5001 12.9142L8.70718 16.7071L7.29297 15.2929L11.0859 11.5L7.58586 8H16.0001Z"></path></svg>
                
                </a>
                <a href="/docs/installation/install" target="_blank" class="btn svg-right" style="background: var(--vp-c-bg-alt);">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"></path></svg>  
                  Install
      </a>
                <a href="https://demo.paymenter.org/" target="_blank" class="btn svg-right" style="background: var(--vp-c-bg-alt);">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z"></path></svg>

                  Demo
      </a>
    </div>
  </section>
</template>

<style scoped>
#hero {
  padding: 46px 32px;
  max-width: 920px;
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

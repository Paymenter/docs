<script setup>
import { useData } from 'vitepress';

const { frontmatter } = useData();
</script>

<template>
<section class="relative overflow-hidden mt-12 minh-72 rounded-3xl p-4 md:p-0" >
    <div class="banner-support-content p-8" style='background-image: url("/landing/texture.png");'>
        <div class="banner-support-left">
            <div class="text-3xl lg:text-4xl font-semibold mb-4 text-white">{{ frontmatter.supportbanner.text }}</div>
            <p class="text-base text-white/80 mb-8">{{ frontmatter.supportbanner.tagline }}</p>
            <div class="buttons">
                <a href="https://github.com/sponsors/Paymenter" target="_blank" class="btn btn-secondary svg-right">
                    <service-fill class="size-5 fill-[#DB61A2]" />
                    {{ frontmatter.supportbanner.sponsorButton }}
                </a>
                <a href="https://github.com/Paymenter/Paymenter" target="_blank" class="btn btn-secondary svg-right">
                    <star-fill class="size-5 fill-[#E3B341]" />
                    {{ frontmatter.supportbanner.starButton }}
                </a>
            </div>
            <a href="/docs/contribute/how-to-help" class="how-to-contribute">
                {{ frontmatter.supportbanner.howToContribute }}
                <arrow-right-fill class="size-5" />
            </a>
        </div>
        <div class="dashboard-preview">
          <img style="border-radius:15px;" src="/landing/banner-img.png" alt="Paymenter" class="">
        </div>
    </div>
</section>
</template>


<style scoped> 
    /* banner-support styles */
    .banner-support {
        position: relative;
        width: 100%;
        height: 250px;
        overflow: hidden;
        background-position: center;
        background-image: url("/landing/texture.png");
        color: white;
        border-radius:20px;
    }
    
    .banner-support-content {
        position: relative;
        z-index: 2;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px;
    }
    
    .banner-support-title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 10px;
                line-height: 64px;
        font-size: 56px;
    }
    
    .banner-support-subtitle {
        font-size: 1rem;
        margin-bottom: 20px;
        opacity: 0.8;
    }
    
    .dashboard-preview {
        display: none;
    }
    
    /* Responsive styles */
    @media (min-width: 768px) {
        .banner-support {
            height: 300px;
        }
        
        .banner-support-content {
            flex-direction: row;
        }
        
        .banner-support-left {
            width: 60%;
        }
        
        .banner-support-title {
            font-size: 2.5rem;
        }
        
        .banner-support-subtitle {
            font-size: 1.1rem;
        }
        
        .dashboard-preview {
            display: block;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 40%;
            height: 100%;
            background-size: cover;
            background-position: center;
        }
    }
</style>
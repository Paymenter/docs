<script setup>
import { useData } from 'vitepress';

const { frontmatter } = useData();
</script>

<template>
    <section class="relative overflow-hidden mt-12 minh-72 rounded-3xl">
        <div class="relative lg:p-14 p-8 bg-[url(/landing/texture.png)] bg-cover">
            <div class="flex flex-col items-start">
                <div class="text-3xl lg:text-4xl font-semibold mb-4 text-white">{{ frontmatter.supportbanner.text }}
                </div>
                <p class="text-base text-white/80 mb-8 max-w-3xl">{{ frontmatter.supportbanner.tagline }}</p>
                <div class="buttons mt-8">
                    <a href="https://github.com/sponsors/Paymenter" target="_blank" class="btn btn-secondary svg-right">
                        <service-fill class="size-5 fill-[#DB61A2]" />
                        {{ frontmatter.supportbanner.sponsorButton }}
                    </a>
                    <a href="https://github.com/Paymenter/Paymenter" target="_blank"
                        class="btn btn-secondary svg-right">
                        <star-fill class="size-5 fill-[#E3B341]" />
                        {{ frontmatter.supportbanner.starButton }}
                    </a>
                </div>

            </div>

            <img class="absolute -top-44 right-0 object-cover right-[-60%] h-[600px]"
                src="/landing/screenshots/support-banner.webp" alt="Paymenter" />

            <!--
            <div class="absolute top-8 left-18 z-0">
                <svg class="h-96 scale-180 fill-white/20" viewBox="0 0 150 205" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_17)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0 107V205H42.8571V139.638H100C133.333 139.638 150 123 150 89.7246V69.5L75 107V69.5L148.227 32.8863C143.133 10.9621 127.057 0 100 0H0V107ZM0 107V69.5L75 32V69.5L0 107Z"
                            fill="current"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_17">
                            <rect width="150" height="205" fill="currentcolor"></rect>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        -->
        </div>
    </section>
</template>

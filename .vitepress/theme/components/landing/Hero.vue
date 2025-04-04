<script setup>
import { useData } from 'vitepress';

const { frontmatter } = useData();
</script>

<template>
    <section class="flex flex-col items-center text-center p-4 md:p-0">
        <div class="mt-14">
            <div class="flex justify-center mt-8">
                <a href="/blog/v1-release">
                    <div
                        class="flex items-center gap-2 rounded-full py-2 px-4 text-[var(--vp-c-text-1)] bg-[var(--vp-c-bg-alt)] border border-[var(--vp-c-border)] text-sm mb-8">
                        <sparkling-fill class="size-5" />
                        {{ frontmatter.heroLanding.noticeLink }}
                        <arrow-right-fill class="size-4" />
                    </div>
                </a>
            </div>

            <h1 class="flex justify-center">
                <span class="max-w-xl text-[40px] md:text-6xl font-semibold tracking-tighter leading-14 md:leading-16">
                    {{ frontmatter.heroLanding.text }}
                </span>
            </h1>

            <p class="max-w-2xl text-lg py-6 text-[var(--vp-c-text-2)]">
                {{ frontmatter.heroLanding.tagline }}
            </p>

            <div class="flex gap-4 justify-center mt-4">
                <a href="/docs/getting-started/introduction"
                    class="flex items-center justify-center py-2 px-4.5 rounded-lg bg-[var(--vp-c-brand-1)] !text-white">
                    {{ frontmatter.heroLanding.getStartedButton }}
                    <svg class="size-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM16.0001 8V16.4142L12.5001 12.9142L8.70718 16.7071L7.29297 15.2929L11.0859 11.5L7.58586 8H16.0001Z">
                        </path>
                    </svg>
                </a>
                <a href="https://demo.paymenter.org/" target="_blank"
                    class="flex items-center justify-center py-2 px-4.5 rounded-lg bg-[var(--vp-c-bg-alt)] border border-[var(--vp-c-border)]"
                    style="background: var(--vp-c-bg-alt);">
                    {{ frontmatter.heroLanding.demoButton }}
                </a>
            </div>



        </div>

    </section>
</template>

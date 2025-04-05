<script setup>
import { useData } from 'vitepress';

const { frontmatter } = useData();
</script>

<template>


    <div class="w-full relative z-0 bg-black">

        <div
            class="mask-x-from-70% mask-x-to-90% mask-y-from-70% mask-y-to-90% -rotate-45 bg-[var(--vp-c-brand-1)]/10 h-64 w-[1200px] absolute top-28 blur-3xl">
        </div>


        <div
            class="mask-x-from-70% mask-x-to-90% mask-y-from-70% mask-y-to-90% -rotate-45 bg-[var(--vp-c-brand-1)]/10 h-64 w-[1200px] absolute top-28 right-28 blur-3xl">
        </div>

        <div
            class="mask-x-from-70% mask-x-to-90% mask-y-from-70% mask-y-to-90% -rotate-45 bg-[var(--vp-c-brand-1)]/10 h-64 w-[1200px] absolute top-48 right-28 blur-3xl">
        </div>

        <div
            class="mask-x-from-70% mask-x-to-90% mask-y-from-70% mask-y-to-90% -rotate-45 bg-[var(--vp-c-brand-1)]/10 h-64 w-[1200px] absolute top-48 left-28 blur-3xl">
        </div>

        <div
            class="absolute bg-linear-to-t from-[#3054FF]/40 to-[#6430FF]/10 w-full backdrop-blur-2xl h-[1100px] mask-b-from-10% mask-radial-[50%_90%] mask-radial-from-80%">
            <svg id="noice" class="w-full h-full">
                <filter id="noise-filter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.94" numOctaves="4" stitchTiles="stitch">
                    </feTurbulence>
                    <feColorMatrix type="saturate" values="0"></feColorMatrix>
                    <feComponentTransfer>
                        <feFuncR type="linear" slope="0.36"></feFuncR>
                        <feFuncG type="linear" slope="0.36"></feFuncG>
                        <feFuncB type="linear" slope="0.36"></feFuncB>
                        <feFuncA type="linear" slope="0.16"></feFuncA>
                    </feComponentTransfer>
                    <feComponentTransfer>
                        <feFuncR type="linear" slope="1.47" intercept="-0.23" />
                        <feFuncG type="linear" slope="1.47" intercept="-0.23" />
                        <feFuncB type="linear" slope="1.47" intercept="-0.23" />
                    </feComponentTransfer>
                </filter>
                <rect width="100%" height="100%" filter="url(#noise-filter)"></rect>
            </svg>
        </div>
        <!--bg-[var(--vp-c-brand-1)]/10-->


    </div>



    <section class="flex flex-col items-center text-center p-4 md:p-0 relative z-10">
        <div class="mt-14">
            <div class="flex justify-center mt-8">
                <a href="/blog/v1-release.md">
                    <div
                        class="flex items-center gap-2 rounded-full py-2 px-4 text-[var(--vp-c-text-1)] bg-[var(--vp-c-bg-alt)]/50 border border-[var(--vp-c-border)] text-sm mb-8">
                        <sparkling-fill class="size-5" />
                        {{ frontmatter.heroLanding.noticeLink }}
                        <arrow-right-fill class="size-4" />
                    </div>
                </a>
                <!--
                <a href="/blog/v1-release.md" class="mb-8">
                    <div
                        class="![animation-duration:4s] ![animation-iteration-count:infinite] animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-3xl bg-conic/[from_var(--border-angle)] from-[var(--vp-c-border)]/20 via-[#37ad9d] to-[#37ad9d] from-80% via-90% to-100% p-px">
                        <div
                            class="flex items-center gap-2 rounded-full py-2 px-4 text-[var(--vp-c-text-1)] bg-[var(--vp-c-bg-alt)] border border-[var(--vp-c-border)] text-sm">
                            <sparkling-fill class="size-5" />
                            {{ frontmatter.heroLanding.noticeLink }}
                            <arrow-right-fill class="size-4" />
                        </div>
                    </div>
                </a>
                -->
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

<script setup>
import { useData } from 'vitepress';
import FeatureItem from '@components/landing/FeatureItem.vue';

const { frontmatter } = useData();
</script>


<template>
    <div class="p-4 md:p-0">

        <section class="py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 mb-12">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                        <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#888b93">
                            <path
                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM16.8201 17.0761C18.1628 15.8007 19 13.9981 19 12C19 8.13401 15.866 5 12 5C10.9391 5 9.9334 5.23599 9.03241 5.65834L10.0072 7.41292C10.6177 7.14729 11.2917 7 12 7C14.7614 7 17 9.23858 17 12H14L16.8201 17.0761ZM14.9676 18.3417L13.9928 16.5871C13.3823 16.8527 12.7083 17 12 17C9.23858 17 7 14.7614 7 12H10L7.17993 6.92387C5.83719 8.19929 5 10.0019 5 12C5 15.866 8.13401 19 12 19C13.0609 19 14.0666 18.764 14.9676 18.3417Z">
                            </path>
                        </svg>
                        <span class="text-sm uppercase tracking-widest text-[#9ca3af]">
                            What is Paymenter?
                        </span>
                    </div>
                    <div class="text-3xl font-semibold ">
                        A next-generation billing platform for modern hosting businesses
                    </div>
                </div>
                <div class="flex flex-col justify-end">
                    <span class="flex justify-center font-normal text-[var(--vp-c-text-2)]">
                        Paymenter simplifies billing, enhances transactions, and supports seamless customizations to
                        meet
                        your
                        unique business needs.
                    </span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
                <FeatureItem icon="robot-3-fill" title="Automation"
                    description="Streamline operations with automated billing and service deployment." />
                <FeatureItem icon="phone-find-fill" title="Responsive"
                    description="Perfect user experience across all devices, from desktop to mobile." />
                <FeatureItem icon="flashlight-fill" title="Performant"
                    description="Lightning-fast operations for smooth and reliable transactions." />
                <FeatureItem icon="brush-ai-fill" title="Personalization"
                    description="Create custom themes and experiences tailored to your business." />
                <FeatureItem icon="open-source-fill" title="Open-Source"
                    description="Free to use, transparent code, and backed by a growing community of developers." />
            </div>
        </section>

        <section class="py-12">
            <div class="mt-24 relative flex align-center justify-center">
                <div style="height: 250px; width: 1000px; overflow: hidden; position: relative;">
                    <img src="/landing/extensions-1.svg" alt="Paymenter" style="
            height: auto;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
          " />
                </div>
                <div style="
          position: absolute;
          bottom: 0;
          left: 0;
          background: linear-gradient(to bottom, transparent 0%, var(--vp-c-bg));
          width: 100%;
          height: 200px;
          pointer-events: none;
        " data-v-46ce5301=""></div>
            </div>

            <div class="flex flex-col p-6 items-center">
                <div class="flex flex-col gap-6 lg:max-w-2xl items-center text-center">
                    <div class="flex items-center gap-3 text-[#9ca3af]">
                        <puzzle-2-fill class="size-5" />
                        <span class="text-sm uppercase tracking-widest text-[#9ca3af]">
                            Extensible
                        </span>
                    </div>
                    <div class="text-3xl font-semibold ">
                        Powerful Extensions & Integrations
                    </div>
                    <span class="flex font-normal text-[var(--vp-c-text-2)]">
                        Customize your billing platform with a growing marketplace of extensions. From payment gateways
                        to service integrations, build the perfect solution for your business.
                    </span>
                    <div class="flex gap-4 justify-center mt-4">
                        <a href="https://builtbybit.com/resources/categories/paymenter.76/" class="btn btn-primary svg-left" style="color:white;">
                            {{ frontmatter.featuresLanding.extensible.marketplaceButton }}
                            <arrow-right-up-box-fill class="size-5" />
                        </a>
                        <a href="https://github.com/Paymenter/Paymenter/tree/master/extensions" target="_blank"
                            class="btn" style="background: var(--vp-c-bg-alt);">
                            Bundled Extensions
                        </a>
                    </div>
                </div>
            </div>

            <div class="relative flex align-center justify-center">
                <div style="height: 250px; width: 1000px; overflow: hidden; position: relative;" data-v-46ce5301="">
                    <img src="/landing/extensions-2.svg" alt="Paymenter" style="
            height: auto;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
          " />
                </div>
                <div style="
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(to top, transparent 0%, var(--vp-c-bg));
          width: 100%;
          height: 200px;
          pointer-events: none;">
                </div>
            </div>
        </section>

        <section class="py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 mt-24 ">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-3 text-[#9ca3af]">
                        <service-fill class="size-5 " />
                        <span class="text-sm uppercase tracking-widest">
                            Sponsors
                        </span>
                    </div>
                    <div class="text-3xl font-semibold ">
                        Building Together a Sustainable Future for Open-Source Billing
                    </div>
                </div>
                <div class="flex flex-col justify-end">
                    <span class="flex font-normal text-[var(--vp-c-text-2)]">
                        The continued development and maintenance of Paymenter is made possible by these generous
                        sponsors:
                    </span>
                </div>
            </div>
            <div class="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                <a class="h-18 md:w-72 w-full flex justify-center items-center border border-[var(--vp-c-divider)] rounded-lg opacity-75 grayscale hover:grayscale-0 hover:opacity-100"
                    href="https://wisehosting.com/?rel=paymenter" target="_blank">
                    <svg width="193" height="24" viewBox="0 0 193 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_486_22854)">
                            <path
                                d="M47.1367 3.24609H50.6129L53.0826 11.3424L56.5284 3.30548H56.5885L60.0247 11.3328L62.4847 3.24609H65.9735L60.7454 19.5026H60.5561L56.5225 10.7783L52.5489 19.5026H52.3692L47.1367 3.24609Z"
                                fill="#00B8FF" />
                            <path d="M67.5723 3.24609H70.7991V19.3H67.5723V3.24609Z" fill="#00B8FF" />
                            <path
                                d="M72.752 16.5332L75.3315 14.7205C75.6493 15.2558 76.1083 15.6932 76.6582 15.9848C77.2082 16.2764 77.8278 16.4109 78.4492 16.3736C79.9628 16.3736 80.9789 15.756 80.9789 14.8994C80.9789 13.7243 79.0572 12.798 77.3736 11.9614C75.5713 11.0654 73.5879 10.0789 73.5879 7.5194C73.5879 4.74095 75.9387 2.9082 78.8864 2.9082C81.0777 2.9082 82.8904 3.81455 83.6172 5.75643L81.2373 7.41993C81.0219 6.99967 80.6909 6.64979 80.2831 6.41159C79.8754 6.17338 79.408 6.05681 78.9361 6.07562C77.7314 6.07562 76.8346 6.77265 76.8346 7.59958C76.8346 8.55567 78.0498 8.88377 79.8922 9.75227C82.5512 11.0068 84.2244 12.3615 84.2244 14.8319C84.2244 17.7595 81.8341 19.622 78.398 19.622C75.7732 19.6205 73.8276 18.5248 72.752 16.5332Z"
                                fill="#00B8FF" />
                            <path
                                d="M89.4026 6.42316V9.56015H94.9395V12.7773H89.4026V16.0932H95.8562V19.3H86.1758V3.24609H95.8562V6.42316H89.4026Z"
                                fill="#00B8FF" />
                            <path
                                d="M110.429 3.24609V19.3H107.212V12.8664H101.446V19.3H98.2285V3.24609H101.446V9.66704H107.212V3.24609H110.429Z"
                                fill="white" />
                            <path
                                d="M112.52 11.2948C112.512 9.6411 112.997 8.02252 113.91 6.64424C114.824 5.26595 116.126 4.19004 117.653 3.55289C119.179 2.91573 120.859 2.74604 122.482 3.06532C124.105 3.3846 125.596 4.17847 126.767 5.3463C127.937 6.51412 128.735 8.0033 129.059 9.62505C129.382 11.2468 129.217 12.9281 128.584 14.4557C127.95 15.9834 126.878 17.2886 125.502 18.206C124.126 19.1234 122.509 19.6115 120.855 19.6086C118.652 19.5966 116.542 18.7175 114.982 17.1615C113.422 15.6056 112.537 13.498 112.52 11.2948ZM125.955 11.2747C125.959 10.2677 125.665 9.2822 125.108 8.44286C124.552 7.60352 123.759 6.9481 122.83 6.55955C121.901 6.171 120.877 6.06679 119.889 6.26011C118.901 6.45343 117.992 6.93559 117.278 7.64556C116.564 8.35554 116.076 9.2614 115.877 10.2485C115.678 11.2357 115.777 12.2597 116.16 13.1909C116.543 14.1222 117.194 14.9189 118.03 15.4801C118.866 16.0414 119.85 16.342 120.857 16.3439C122.203 16.341 123.493 15.807 124.448 14.8577C125.403 13.9085 125.945 12.6209 125.955 11.2747Z"
                                fill="white" />
                            <path
                                d="M130.475 16.5332L133.054 14.7205C133.372 15.2558 133.831 15.6932 134.381 15.9848C134.931 16.2764 135.55 16.4109 136.172 16.3736C137.686 16.3736 138.702 15.756 138.702 14.8994C138.702 13.7243 136.779 12.798 135.096 11.9614C133.293 11.0654 131.31 10.0789 131.31 7.5194C131.31 4.74095 133.661 2.9082 136.609 2.9082C138.8 2.9082 140.613 3.81455 141.34 5.75643L138.96 7.41993C138.744 6.99972 138.413 6.64989 138.006 6.4117C137.598 6.17351 137.13 6.0569 136.659 6.07562C135.454 6.07562 134.557 6.77265 134.557 7.59958C134.557 8.55567 135.772 8.88377 137.614 9.75227C140.274 11.0068 141.946 12.3615 141.946 14.8319C141.946 17.7595 139.556 19.622 136.12 19.622C133.493 19.6205 131.55 18.5248 130.475 16.5332Z"
                                fill="white" />
                            <path d="M154.058 6.44247H150.115V19.2992H146.878V6.44247H142.924V3.24609H154.058V6.44247Z"
                                fill="white" />
                            <path d="M155.873 3.24609H159.1V19.3H155.874L155.873 3.24609Z" fill="white" />
                            <path
                                d="M174.795 3.20851V19.6016H174.647L165.115 10.3287V19.3218H161.889V2.9502H162.048L171.559 12.2023V3.20851H174.795Z"
                                fill="white" />
                            <path
                                d="M193.001 11.6433C193.001 16.6828 189.525 19.6208 185.342 19.6208C184.246 19.6287 183.158 19.4205 182.142 19.008C181.126 18.5956 180.201 17.9871 179.42 17.2172C177.843 15.6623 176.948 13.5445 176.932 11.3297C176.916 9.11484 177.781 6.98445 179.335 5.40714C180.89 3.82982 183.008 2.93479 185.223 2.91895C187.426 2.99406 189.522 3.8891 191.099 5.42868L189.306 8.10767C188.236 6.95228 186.756 6.26209 185.184 6.1851C184.509 6.19594 183.843 6.3407 183.224 6.61098C182.606 6.88127 182.047 7.27169 181.581 7.75959C181.115 8.24749 180.75 8.82314 180.508 9.45315C180.266 10.0832 180.151 10.755 180.171 11.4296C180.191 12.1042 180.344 12.7682 180.623 13.383C180.901 13.9979 181.298 14.5513 181.792 15.0112C182.286 15.4711 182.867 15.8284 183.5 16.0622C184.133 16.296 184.806 16.4017 185.481 16.3733C187.771 16.3733 189.415 15.1982 189.524 13.266H185.371V10.2886H192.921C192.972 10.7384 192.998 11.1906 193.001 11.6433Z"
                                fill="white" />
                            <path d="M43 0H42V24H43V0Z" fill="white" />
                            <path d="M0 1.16309L14.3146 21.3538L17.2519 17.093L5.91618 1.16309H0Z" fill="white" />
                            <path d="M23.0127 9.15253L20.0234 4.95256L22.7529 1.16309H28.5243L23.0127 9.15253Z"
                                fill="white" />
                            <path
                                d="M37.0286 1.16309L22.7555 21.3538L8.48242 1.16309H14.3778L22.7555 12.9324L30.9468 1.16309H37.0286Z"
                                fill="#00B8FF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_486_22854">
                                <rect width="193" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>

                <a class="
            h-18 
            w-72 
            flex
            justify-center 
            items-center 
            border 
            border-[var(--vp-c-divider)] 
            rounded-lg
            opacity-75
            grayscale
            hover:grayscale-0
            hover:opacity-100
            " href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"
                    style="    text-transform: uppercase;
        letter-spacing: .2em;
         font-size: 22px;    text-shadow: 3px 3px 0 #a44044, -1px -1px 0 #a44044, 1px -1px 0 #a44044, -1px 1px 0 #a44044, 1px 1px 0 #a44044;">
                    ACME <sup class="text-[10px]">©</sup>
                </a>

                <a class="
            h-18 
            w-72 
            flex
            justify-center 
            items-center 
            gap-2
            border 
            border-[var(--vp-c-divider)] 
            rounded-lg
            opacity-75
            grayscale
            hover:grayscale-0
            hover:opacity-100
            " href="https://github.com/sponsors/Paymenter" target="_blank">
                    Become a sponsor
                    <arrow-right-fill class="size-5" />
                </a>

            </div>
        </section>


        <section class="py-12 relative overflow-hidden">

            <div
                class="mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80% absolute inset-0 z-0 flex items-center justify-center transform-3d rotate-x-55 rotate-y-0 -rotate-z-45">
                <div
                    class="![animation-duration:4s] ![animation-iteration-count:infinite] animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-3xl bg-conic/[from_var(--border-angle)] from-[var(--vp-c-border)] via-[var(--vp-c-brand-1)] to-[var(--vp-c-border)] from-80% via-90% to-100% p-px shadow-2xl shadow-[#4060ff]/20">
                    <div class="bg-[var(--vp-c-bg)] p-20 rounded-3xl">

                        <div
                            class="![animation-duration:3s] ![animation-iteration-count:infinite] animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-3xl bg-conic/[from_var(--border-angle)] from-[var(--vp-c-border)] via-[var(--vp-c-brand-1)] to-[var(--vp-c-border)] from-80% via-90% to-100% p-px">

                            <div class="bg-[var(--vp-c-bg)] p-20 rounded-3xl">

                                <div
                                    class="![animation-duration:2s] ![animation-iteration-count:infinite] animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-3xl bg-conic/[from_var(--border-angle)] from-[var(--vp-c-border)] via-[var(--vp-c-brand-1)] to-[var(--vp-c-border)] from-80% via-90% to-100% p-px">

                                    <div class="bg-[var(--vp-c-bg)] p-20 rounded-3xl">
                                        <div
                                            class="p-10 rounded-3xl bg-[#4060ff]/20 border border-[#4060ff] shadow-2xl shadow-[#4060ff]/20 text-[var(--vp-c-text-1)]/50">
                                            <cloud-fill class="size-24" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--
            <div
                class="mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80% absolute inset-0 z-0 flex items-center justify-center transform-3d rotate-x-55 rotate-y-0 -rotate-z-45 opacity-40 lg:opacity-100">
                <div
                    class="border border-[var(--vp-c-brand-1)] border-dashed p-24 rounded-3xl shadow-xl shadow-[#4060ff]/20">
                    <div class="border border-[var(--vp-c-text-2)] border-dashed p-20 rounded-3xl ">
                        <div
                            class="border border-[var(--vp-c-text-2)] border-dashed p-20 rounded-3xl shadow-xl shadow-[#4060ff]/20">
                            <div class="w-full animate-rotate-border max-w-sm  rounded-lg ">
                                <div
                                    class="p-10 rounded-3xl bg-[#4060ff]/20 border border-[#4060ff] shadow-2xl shadow-[#4060ff]/20">
                                    <cloud-fill class="size-24" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            -->
            <!--
            <div style="
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(to top, transparent 0%, var(--vp-c-bg));
          width: 100%;
          height: 200px;
          pointer-events: none;">
            </div>
        -->

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 mb-12 lg:mt-44 mt-20 relative z-10">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-3 text-[var(--vp-c-text-2)]">
                        <cloud-fill class="size-5" />
                        <span class="text-sm uppercase tracking-widest">
                            Cloud
                        </span>
                    </div>
                    <div class="text-3xl font-semibold text-[var(--vp-c-text-1)]">
                        Hassle-free cloud hosting
                    </div>
                    <span class="flex justify-center font-normal text-[var(--vp-c-text-3)]">
                        Deploy Paymenter instantly on our optimized cloud infrastructure. Scale effortlessly as your
                        business grows, with automatic updates and backups included. Start for just $5/month with our
                        beginner-friendly hosting solution.
                    </span>
                </div>

                <div class="flex flex-col justify-center lg:items-center items-start">
                    <div class="flex gap-4 justify-center">
                        <a href="https://paas.paymenter.org/" class="btn btn-primary svg-left" style="color:white;">
                            {{ frontmatter.featuresLanding.cloud.paasButton }}
                            <arrow-right-up-box-fill class="size-5" />
                        </a>
                        <a href="https://paas.paymenter.org" target="_blank" class="btn svg-left">
                            About PaaS
                            <arrow-right-fill class="size-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
                <FeatureItem icon="translate-2" title="Multi-language"
                    description="Support multiple languages seamlessly with built-in translation." />
                <FeatureItem icon="currency-fill" title="Multi-currency"
                    description="Accept payments with automatic currency conversion and rates." />
                <FeatureItem icon="customer-service-fill" title="Support System"
                    description="Manage customer issues with an integrated ticketing solution." />
                <FeatureItem icon="megaphone-fill" title="Announcements"
                    description="Keep your customers informed with a built-in blog system." />
                <FeatureItem icon="hand-coin-fill" title="Affiliates"
                    description="Grow your business with a powerful affiliate tracking and reward system." />
            </div>
        </section>

        <!--
        <section class="py-12">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 mb-12">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                        <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#888b93">
                            <path
                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM16.8201 17.0761C18.1628 15.8007 19 13.9981 19 12C19 8.13401 15.866 5 12 5C10.9391 5 9.9334 5.23599 9.03241 5.65834L10.0072 7.41292C10.6177 7.14729 11.2917 7 12 7C14.7614 7 17 9.23858 17 12H14L16.8201 17.0761ZM14.9676 18.3417L13.9928 16.5871C13.3823 16.8527 12.7083 17 12 17C9.23858 17 7 14.7614 7 12H10L7.17993 6.92387C5.83719 8.19929 5 10.0019 5 12C5 15.866 8.13401 19 12 19C13.0609 19 14.0666 18.764 14.9676 18.3417Z">
                            </path>
                        </svg>
                        <span class="text-sm uppercase tracking-widest text-[#9ca3af]">
                            Built-in Features
                        </span>
                    </div>
                    <div class="text-3xl font-semibold ">
                        Integrated Features Ready to Use
                    </div>
                </div>
                <div class="flex flex-col justify-end">
                    <span class="flex justify-center font-normal text-[var(--vp-c-text-2)]">
                        Every core tool you need, integrated and ready. From multi-language support to affiliate
                        management, all working together seamlessly.
                    </span>
                </div>
            </div>
            
        </section>
-->
        <section class="py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 mb-12">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-3 text-[#9ca3af]">
                        <team-fill class="size-5" />
                        <span class="text-sm uppercase tracking-widest text-[#9ca3af]">
                            Community
                        </span>
                    </div>
                    <div class="text-3xl font-semibold ">
                        Connect With Our Community
                    </div>
                    <span class="flex justify-center font-normal text-[var(--vp-c-text-2)]">
                        Connect with thousands of hosting providers and developers. Share insights, get support, and
                        contribute to making Paymenter even better. Join our Discord server and GitHub to be part of the
                        journey.
                    </span>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        <FeatureItem icon="download-fill" title="+15,000" description="Total Software Downloads" />
                        <FeatureItem icon="github-fill" title="+760" description="GitHub Stars and Growing" />
                        <FeatureItem icon="user-community-fill" title="+2,100" description="Active Community Members" />
                    </div>
                </div>
                <div class="flex flex-col justify-center lg:items-center items-start">
                    <div class="flex gap-4 justify-center">
                        <a href="https://discord.gg/xB4UUT3XQg" class="btn btn-secondary svg-right">
                            <discord-fill class="size-5 fill-[#5865F2]" />
                            Discord
                        </a>

                        <a href="https://github.com/Paymenter/Paymenter" target="_blank" class="btn svg-left">
                            {{ frontmatter.supportbanner.howToContribute }}
                            <arrow-right-fill class="size-5" />
                        </a>
                    </div>


                </div>




            </div>
        </section>

    </div>
</template>

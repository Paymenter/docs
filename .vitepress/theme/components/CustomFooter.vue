<template>
  <footer class="mt-32">
    <div class="mx-auto max-w-(--vp-layout-max-width) px-4 py-16 sm:px-6 lg:px-8">
      <div class="lg:flex lg:items-start lg:gap-8">

        <div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16 w-full">
          <div class="col-span-2 sm:col-span-1">
            <svg class="h-7 fill-(--vp-c-text-2)" viewBox="0 0 150 205" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_17)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 107V205H42.8571V139.638H100C133.333 139.638 150 123 150 89.7246V69.5L75 107V69.5L148.227 32.8863C143.133 10.9621 127.057 0 100 0H0V107ZM0 107V69.5L75 32V69.5L0 107Z"
                  fill="current" />
              </g>
              <defs>
                <clipPath id="clip0_1_17">
                  <rect width="150" height="205" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </div>

          <div class="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <p class="font-medium text-white">Product</p>
            <ul class="space-y-4 text-sm">
              <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
                <a href="#">
                  Features
                </a>
              </li>

              <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
                <a href="/docs/installation/install">
                  Installation
                </a>
              </li>

              <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
                <a href="#">
                  Marketplace
                </a>
              </li>

              <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
                <a href="https://paas.paymenter.org/">
                  PaaS (Cloud)
                </a>
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900 dark:text-white">Developers</p>
            <ul class="space-y-4 text-sm">
              <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
                <a href="/development/extensions/">
                  Extensions
                </a>
              </li>

              <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
                <a href="/development/theme">
                  Themes
                </a>
              </li>

              <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
                <a href="/development/event-list">
                  Events
                </a>
              </li>

              <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
                <a href="/development/OAuth">
                  OAuth
                </a>
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900 dark:text-white">About</p>
            <ul class="space-y-4 text-sm text-(--vp-c-text-2)">
              <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
                <a href="/docs/guides/FAQ">
                  FAQ
                </a>
              </li>

              <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
                <a href="https://github.com/orgs/Paymenter/people">
                  Team
                </a>
              </li>

              <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
                <a href="https://github.com/Paymenter/Paymenter/releases">
                  Releases
                </a>
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900 dark:text-white">Other</p>
            <ul class="space-y-4 text-sm">
              <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
                <a href="/blog/">
                  Blog
                </a>
              </li>

              <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
                <a href="/docs/contribute/how-to-help">
                  Contribute

                </a>
              </li>
            </ul>
          </div>

          <ul class="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
            <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
              <a href="https://linkedin.com/company/paymenter" rel="noreferrer" target="_blank">
                <span class="sr-only">LinkedIn</span>
                <linkedin-box-fill class="size-6" />
              </a>
            </li>
            
            <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
              <a href="https://discord.gg/xB4UUT3XQg" rel="noreferrer" target="_blank">
                <span class="sr-only">Discord</span>
                <discord-fill class="size-6" />
              </a>
            </li>

            <li class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]">
              <a href="https://github.com/Paymenter/Paymenter" rel="noreferrer" target="_blank">
                <span class="sr-only">Github</span>
                <github-fill class="size-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>


    </div>
  </footer>
</template>
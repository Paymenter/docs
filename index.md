---
title: Paymenter
titleTemplate: Open-Source Billing, Built for Hosting

layout: home
aside: false
editLink: false
markdownStyles: false

heroLanding:
  notice: New
  noticeLink: V1.1 Release
  text: Open-Source Billing, Built for Hosting
  tagline: Automate subscriptions, eliminate billing chaos, and grow your hosting business – without vendor lock-ins or hidden costs.
  getStartedButton: Get Started
  installButton: Install
  demoButton: Live Demo

featuresLanding:
  extensible:
    text: Extensible
    tagline: Extensions for your needs
    desc: Create your own themes, modify and add what you need, create your custom experience for your customers.
    marketplaceButton: Explore marketplace
  responsive:
    text: Responsive
    tagline: Mobile first
    desc: Create your own themes, modify and add what you need, create your custom experience for your customers.
  performance:
    text: Performance
    tagline: Lightning Fast
    desc: Create your own themes, modify and add what you need, create your custom experience for your customers.
  multiLanguage:
    text: Multi-language
    tagline: Internationalization
    desc: Create your own themes, modify and add what you need, create your custom experience for your customers.
  multiCurrency:
    text: Multi-currency
    tagline: Multiple currencies with ease
    desc: Create your own themes, modify and add what you need, create your custom experience for your customers.
  personalization:
    text: Personalization
    tagline: Fully Customizable
    desc: Create your own themes, modify and add what you need, create your custom experience for your customers.
  openSource:
    text: Open-Source
    tagline: 100% Open Source
    desc: Create your own themes, modify and add what you need, create your custom experience for your customers.
  community:
    text: Community
    tagline: Join the community
    desc: Create your own themes, modify and add what you need, create your custom experience for your customers.
    discordButton: Discord
  cloud:
    text: cloud
    tagline: Hassle-free cloud hosting
    desc: Create your own themes, modify and add what you need, create your custom experience for your customers.
    paasButton: Start for $5/month
  blog:
    text: Blog
    tagline: Create announcements or blog posts
    desc: Create your own themes, modify and add what you need, create your custom experience for your customers.
  tickets:
    text: Tickets
    tagline: Built-in ticketing system
    desc: Create your own themes, modify and add what you need, create your custom experience for your customers.

supportbanner:
  text: Support Us to Keep Going
  tagline: Your support enables us to keep developing and improving Paymenter for everyone. Each GitHub star and sponsorship helps us build the future of open-source billing.
  sponsorButton: Sponsor
  starButton: Star us on GitHub
  howToContribute: How to Contribute?
---

<script setup>
  import Hero from '@theme/components/landing/Hero.vue'
  import Slider from '@theme/components/landing/Slider.vue'
  import Features from '@theme/components/landing/Features.vue'
  import SupportBanner from '@theme/components/landing/SupportBanner.vue'
  import CustomFooter from '@theme/components/CustomFooter.vue'
</script>

<div class="w-full overflow-hidden h-full">
  <Hero />
  <Slider />
</div>

<div class="container mx-auto max-w-(--vp-layout-max-width)">
    <Features />
    <SupportBanner />
</div>

<div class="w-full">
    <CustomFooter />
</div>

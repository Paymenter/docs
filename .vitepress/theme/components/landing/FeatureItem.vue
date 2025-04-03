<template>
  <div class="flex flex-col gap-5">
    <div class="flex items-center gap-3 text-sm uppercase tracking-widest text-[var(--vp-c-text-2)]">
      <component :is="icon" class="size-5" />
      {{ title }}
    </div>
    <span class="font-normal text-sm text-[var(--vp-c-text-3)]">
      {{ description }}
    </span>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  defineProps({
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  });
</script>

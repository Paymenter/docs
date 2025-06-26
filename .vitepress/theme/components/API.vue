<script setup lang="ts">
import { ApiReference } from '@scalar/api-reference'
import '@scalar/api-reference/style.css'
</script>

<template>
  <ApiReference
    :configuration="{
      url: '/openapi.json',
      hideDarkModeToggle: true,
      theme: 'purple',
      hideTestRequestButton: true,
      servers: [
        {
            url: 'https://demo.paymenter.org',
            description: 'Production server'
        }
      ]
    }" />
</template>
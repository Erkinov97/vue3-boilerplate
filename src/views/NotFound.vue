<script setup lang="ts">
import { RouterLink } from "vue-router";
import { componentMiddleware } from "@/router/middleware";
componentMiddleware({
  name: "NotFound",
});
</script>
<template>
  <div>Not Found</div>
  <RouterLink to="/">Go Home</RouterLink>
</template>

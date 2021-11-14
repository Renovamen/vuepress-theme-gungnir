<template>
  <Common>
    <template #page>
      <Home />
    </template>
  </Common>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Common from "../components/Common.vue";
import Home from "../components/Home.vue";

export default defineComponent({
  name: "HomePage",

  components: {
    Common,
    Home
  }
});
</script>

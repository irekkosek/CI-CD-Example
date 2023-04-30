<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <button @click="increment">{{ count }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  data() {
    const count = ref(0);
    const BACKEND_IP = 'localhost';
    const increment = async () => {
  const response = await fetch(`http://localhost/api/count`); //`http://${BACKEND_IP}/api/count/` 
  const data = await response.json();
  count.value = data.count;
};

    return {
      count,
      increment,
    };
  },
});
</script>

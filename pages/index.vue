<script>
  import Hero from '~/components/Header.vue'
  import Investiments from '~/components/Investiments.vue'

  export default defineComponent({
    name: 'Index',
    components: {
      Hero,
      Investiments
    }
  })
</script>
<template>
  <Hero />
  <Investiments />
</template>
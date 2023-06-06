<script>
  import Hero from '~/components/Header.vue'
  import Investiments from '~/components/Investiments.vue'
  import Benefits from '~/components/Benefits.vue'

  export default defineComponent({
    name: 'Index',
    components: {
      Hero,
      Investiments,
      Benefits
    }
  })
</script>
<template>
  <Hero />
  <Investiments />
  <Benefits />
</template>
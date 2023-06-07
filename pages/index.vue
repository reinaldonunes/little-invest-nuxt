<script>
  import Hero from '~/components/Header.vue'
  import Investiments from '~/components/Investiments.vue'
  import Benefits from '~/components/Benefits.vue'
  import Quote from '~/components/Quote.vue'

  export default defineComponent({
    name: 'Index',
    components: {
      Hero,
      Investiments,
      Benefits,
      Quote
    }
  })
</script>
<template>
  <Hero />
  <Investiments />
  <Benefits />
  <Quote />
</template>
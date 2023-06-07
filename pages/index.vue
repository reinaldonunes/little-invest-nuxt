<script>
  import Hero from '~/components/Header.vue'
  import Investiments from '~/components/Investiments.vue'
  import Benefits from '~/components/Benefits.vue'
  import Quote from '~/components/Quote.vue'
  import Register from '~/components/Register.vue'

  export default defineComponent({
    name: 'Index',
    components: {
      Hero,
      Investiments,
      Benefits,
      Quote,
      Register
    }
  })
</script>
<template>
  <Hero />
  <Investiments />
  <Benefits />
  <Quote />
  <Register />
</template>
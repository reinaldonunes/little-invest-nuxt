<script>
  import Header from '~/components/Header.vue'

  export default defineComponent({
    name: 'App',
    components:{
      Header
    }
  })
</script>
<template>
  <div>
    <Header />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');

  *{
    font-family: 'IBM Plex Sans', sans-serif;
  }
</style>

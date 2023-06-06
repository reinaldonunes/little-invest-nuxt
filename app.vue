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

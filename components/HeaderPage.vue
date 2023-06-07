<script>
  export default defineComponent({
    props: {
      title: {
        type: String,
        required: true
      }
    }
  })
</script>
<template>
  <div class="py-10 px-4 bg-[#4455DD] text-center">
    <span class="text-white text-[32px] font-semibold">{{  title }}</span>
  </div>
</template>
<style></style>
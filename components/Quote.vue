<script>

</script>
<template>
  <div class="pt-[180px] sm:pt-[225px] lg:pt-[450px] pb-[100px] px-4 bg-quote">
      <div class="m-auto max-w-[1440px] w-full z-index flex flex-col">
        <span class="leading-snug text-white font-semibold text-[28px] italic max-w-[490px] relative quotation-mark text-center sm:text-start m-auto sm:ml-0 mb-4">
          Com o little invest eu pude ter certeza de que o meu dinheiro estava rendendo sem ter que perder tempo do meu dia pensando onde investir.
        </span>
        <span class="text-gray-400 font-semibold italic m-auto sm:m-0">Gabriela Marques</span>
      </div>
  </div>
</template>
<style scoped>
  .bg-quote{
    background:url("/img/quote.jpg") no-repeat center top;
    background-size:cover;
    position:relative;
    overflow: hidden;
  }
    .bg-quote:before{
      content:'';
      position:absolute;
      top:0;
      left:0;
      right:0;
      width:100%;
      height:100%;
      display:block;
      background:rgba(56, 71, 182, 0.692);
    }
    .z-index{
      position:relative;
      z-index: 1;
    }

    .quotation-mark:before{
      content:'“';
      position:absolute;
      left:-36px;
      top:-126px;
      font-size:200px;
      font-weight:bold;
      color:#2534a3;
    }
</style>
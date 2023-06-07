<script>
</script>
<template>
  <div class="px-4 relative before-bg">
    <div class="m-auto max-w-[1440px] w-full items-center grid grid-cols-1 md:grid-cols-2 z-1 relative">
      <div class="bg-gray-100 py-20">
        <span class="font-semibold text-[36px] justify-center flex">Crie a sua conta</span>
        <form class="max-w-[75%] m-auto mt-10">
          <label class="flex-col flex mb-5">
            <span class="font-bold mb-1 text-gray-700">Nome</span>
            <input type="text" name="name" placeholder="" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
          </label>
          <label class="flex-col flex mb-8">
            <span class="font-bold mb-1 text-gray-700">Email</span>
            <input type="text" name="email" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
          </label>
          <button type="button" class="w-full justify-center px-6 py-3 font-semibold flex rounded-md text-white bg-[#4455DD] hover:bg-[#4411DD] ease-in duration-100">Iniciar Cadastro</button>
        </form>
      </div>
      <div class="py-20">
        <figure class="m-auto mb-6 max-w-[350px]">
          <img src="/svg/customer-service-woman.svg" alt="Ajuda 24h do nosso Suporte Online" title="Ajuda 24h do nosso Suporte Online" />
        </figure>
        <span class="leading-snug text-gray-600 text-[20px] justify-center flex">Ajuda 24h do nosso Sistema Online</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .before-bg:before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:50%;
    background:#f3f4f6;
  }
  @media screen and (max-width:768px){
    .before-bg:before{
      height:50%;
      width:100%;
    }
  }
</style>
<script>
import HeaderPage from '~/components/HeaderPage.vue'

export default defineComponent({
  name: 'Index',
  components: {
    HeaderPage
  }
})
</script>
<template>
  <HeaderPage title="Faça a sua Inscrição" />
  <div id="steps" class="py-16 max-w-[100%] md:max-w-[50%] m-auto grid grid-cols-1 sm:grid-cols-3 relative">
    <hr class="bg-gray-300 absolute" />
    <div class="flex flex-col mb-4 relative z-1">
      <i class="i-progress isComplete m-auto mb-4" />
      <span class="text-[26px] font-semibold text-gray-900 text-center">1ª Etapa</span>
      <span class="text-[18px] text-gray-500 text-center mb-2">Dados Pessoais</span>
    </div>
    <div class="flex flex-col mb-4 relative z-1">
      <i class="i-progress m-auto mb-4" />
      <span class="text-[26px] font-semibold text-gray-900 text-center">2ª Etapa</span>
      <span class="text-[18px] text-gray-500 text-center mb-2">Pagamento</span>
    </div>
    <div class="flex flex-col mb-4 relative z-1">
      <i class="i-progress m-auto mb-4" />
      <span class="text-[26px] font-semibold text-gray-900 text-center">3ª Etapa</span>
      <span class="text-[18px] text-gray-500 text-center mb-2">Instruçoes</span>
    </div>
  </div>

  <aside id="first-step">
    <form class="max-w-[100%] md:max-w-[920px] px-4 m-auto mt-10 mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        <label class="flex-col flex mb-5">
          <span class="font-bold mb-1 text-gray-700">Nome</span>
          <input type="text" name="name" placeholder="Nome Completo" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
        <label class="flex-col flex mb-8">
          <span class="font-bold mb-1 text-gray-700">Endereço</span>
          <input type="text" name="address" placeholder="Nome da rua, número, etc" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
        <label class="flex-col flex mb-5">
          <span class="font-bold mb-1 text-gray-700">CPF</span>
          <input type="text" name="cpf" placeholder="xxx.xxx.xxx-xx" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
        <label class="flex-col flex mb-8">
          <span class="font-bold mb-1 text-gray-700">Estado</span>
          <input type="text" name="uf" placeholder="Estado" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
        <label class="flex-col flex mb-5">
          <span class="font-bold mb-1 text-gray-700">Email</span>
          <input type="email" name="email" placeholder="Email" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
        <label class="flex-col flex mb-8">
          <span class="font-bold mb-1 text-gray-700">CEP</span>
          <input type="text" name="cep" placeholder="xxxxx-xxx" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
      </div>
      <button type="button" class="ml-auto mr-0 justify-center px-6 py-3 font-semibold flex rounded-md text-white bg-[#4455DD] hover:bg-[#4411DD] ease-in duration-100">Próxima etapa &raquo;</button>
    </form>
  </aside>

  <aside id="second-step">
    <form class="max-w-[100%] md:max-w-[500px] px-4 m-auto mt-10 mb-16">
      <label class="flex-col flex mb-5">
        <span class="font-bold mb-1 text-gray-700">Nome do cartão</span>
        <input type="text" name="card_name" placeholder="Como escrito no cartão" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
      </label>
      <label class="flex-col flex mb-8">
        <span class="font-bold mb-1 text-gray-700">Endereço</span>
        <input type="text" name="card_number" placeholder="Número do cartão" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
      </label>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <label class="flex-col flex mb-5">
          <span class="font-bold mb-1 text-gray-700">Vencimento</span>
          <input type="text" name="card_expiration" placeholder="xx/xxxx" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
        <label class="flex-col flex mb-5">
          <span class="font-bold mb-1 text-gray-700">CCV</span>
          <input type="text" name="card_security_code" placeholder="xxxx" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
      </div>
      <button type="button" class="m-auto justify-center px-6 py-3 font-semibold flex rounded-md text-white bg-[#4455DD] hover:bg-[#4411DD] ease-in duration-100">Realizar Pagamento</button>
    </form>
  </aside>

  <aside id="second-step" class="px-10 text-center">
    <span class="text-[28px] md:text-[42px] text-center font-semibold leading-snug mb-6">Obrigado pela compra.<br />Em breve entraremos em contato.</span>
    <figure>
      <img src="/svg/monitor-cash-credit-card.svg" width="450px" class="m-auto" />
    </figure>
  </aside>

</template>
<style scoped>
  .i-progress{
    display:block;
    width:32px;
    height:32px;
    background:#fff;
    border:2px solid #ddd;
    border-radius:50%;
  }
    .isComplete{
      background: #4455DD;
      border-color: #3646be;
    }
  .progress-line{
    width:70%;
    left:15%;
    right:15%;
    top:78px;
    height:1.5px;
  }
  @media screen and (max-width:768px){
    .progress-line{
      display:none;
    }
  }
</style>
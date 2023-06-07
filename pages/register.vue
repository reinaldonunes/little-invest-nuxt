<script>
import HeaderPage from '~/components/HeaderPage.vue'

export default defineComponent({
  name: 'Index',
  components: {
    HeaderPage
  },

  data(){
    return{
      step: {
        current: 1,
        last: 0
      },
      user: {
        name: null,
        address: null,
        cpf: null,
        uf: null,
        email: null,
        cep: null
      },
      card: {
        owner: null,
        number: null,
        expiration: null,
        code: null
      }

    }
  },

  methods: {
    validFields(step){
      if(step === 1){
        if(this.user.name === null){
          alert("Preencha o campo NOME")
          this.$refs['name'].focus()
          return false
        }
        if (this.user.address === null) {
          alert("Preencha o campo ENDEREÇO")
          this.$refs['address'].focus()
          return false
        }
        if (this.user.cpf === null) {
          alert("Preencha o campo CPF")
          this.$refs['cpf'].focus()
          return false
        }
        if (this.user.uf === null) {
          alert("Preencha o campo ESTADO")
          this.$refs['uf'].focus()
          return false
        }
        if (this.user.email === null) {
          alert("Preencha o campo EMAIL")
          this.$refs['email'].focus()
          return false
        }
        if (this.user.cep === null) {
          alert("Preencha o campo CEP")
          this.$refs['cep'].focus()
          return false
        }
      }      

      if(step === 2){
        if (this.card.owner === null) {
          alert("Preencha o campo NOME DO CARTÃO")
          this.$refs['owner'].focus()
          return false
        }
        if (this.card.number === null) {
          alert("Preencha o campo NÚMERO DO CARTÃO")
          this.$refs['number'].focus()
          return false
        }
        if (this.card.expiration === null) {
          alert("Preencha o campo  VENCIMENTO")
          this.$refs['expiration'].focus()
          return false
        }
        if (this.card.code === null) {
          alert("Preencha o campo CCV")
          this.$refs['code'].focus()
          return false
        }
      }

      return true
    },
    nextStep(last){
      const isValid = this.validFields(last)

      if(isValid === true){
        this.step.current = last + 1
        this.step.last = last
      }
    }
  }
})
</script>
<template>
  <HeaderPage title="Faça a sua Inscrição" />
  <div id="steps" class="py-16 max-w-[100%] md:max-w-[50%] m-auto grid grid-cols-1 sm:grid-cols-3 relative">
    <div class="flex flex-col mb-4 relative z-1">
      <i class="i-progress isComplete m-auto mb-4">✔</i>
      <span class="text-[26px] font-semibold text-gray-900 text-center">1ª Etapa</span>
      <span class="text-[18px] text-gray-500 text-center mb-2">Dados Pessoais</span>
    </div>
    <div class="flex flex-col mb-4 relative z-1">
      <i class="i-progress m-auto mb-4" :class="{isComplete : step.current === 2 && step.last === 1 || step.last === 2}">✔</i>
      <span class="text-[26px] font-semibold text-gray-900 text-center">2ª Etapa</span>
      <span class="text-[18px] text-gray-500 text-center mb-2">Pagamento</span>
    </div>
    <div class="flex flex-col mb-4 relative z-1">
      <i class="i-progress m-auto mb-4" :class="{ isComplete: step.current === 3 }" >✔</i>
      <span class="text-[26px] font-semibold text-gray-900 text-center">3ª Etapa</span>
      <span class="text-[18px] text-gray-500 text-center mb-2">Instruçoes</span>
    </div>
  </div>

  <aside id="first-step" v-if="step.current === 1">
    <form class="max-w-[100%] md:max-w-[920px] px-4 m-auto mt-10 mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        <label class="flex-col flex mb-5">
          <span class="font-bold mb-1 text-gray-700">Nome</span>
          <input type="text" name="name" placeholder="Nome Completo" ref="name" v-model="user.name" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
        <label class="flex-col flex mb-8">
          <span class="font-bold mb-1 text-gray-700">Endereço</span>
          <input type="text" name="address" placeholder="Nome da rua, número, etc" ref="address" v-model="user.address"  class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
        <label class="flex-col flex mb-5">
          <span class="font-bold mb-1 text-gray-700">CPF</span>
          <input type="text" name="cpf" placeholder="xxx.xxx.xxx-xx" v-model="user.cpf" ref="cpf" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
        <label class="flex-col flex mb-8">
          <span class="font-bold mb-1 text-gray-700">Estado</span>
          <input type="text" name="uf" placeholder="Estado" v-model="user.uf" ref="uf" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
        <label class="flex-col flex mb-5">
          <span class="font-bold mb-1 text-gray-700">Email</span>
          <input type="email" name="email" placeholder="Email" v-model="user.email"  ref="email" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
        <label class="flex-col flex mb-8">
          <span class="font-bold mb-1 text-gray-700">CEP</span>
          <input type="text" name="cep" placeholder="xxxxx-xxx" v-model="user.cep" ref="cep" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
      </div>
      <button type="button" @click="nextStep(1)" class="ml-auto mr-0 justify-center px-6 py-3 font-semibold flex rounded-md text-white bg-[#4455DD] hover:bg-[#4411DD] ease-in duration-100">Próxima etapa &raquo;</button>
    </form>
  </aside>

  <aside id="second-step" v-if="step.current === 2">
    <form class="max-w-[100%] md:max-w-[500px] px-4 m-auto mt-10 mb-16">
      <label class="flex-col flex mb-5">
        <span class="font-bold mb-1 text-gray-700">Nome do cartão</span>
        <input type="text" name="card_name" placeholder="Como escrito no cartão" ref="owner" v-model="card.owner" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
      </label>
      <label class="flex-col flex mb-8">
        <span class="font-bold mb-1 text-gray-700">Número do cartão</span>
        <input type="text" name="card_number" placeholder="Número do cartão" ref="number" v-model="card.number" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
      </label>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <label class="flex-col flex mb-5">
          <span class="font-bold mb-1 text-gray-700">Vencimento</span>
          <input type="text" name="card_expiration" placeholder="xx/xxxx" ref="expiration" v-model="card.expiration" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
        <label class="flex-col flex mb-5">
          <span class="font-bold mb-1 text-gray-700">CCV</span>
          <input type="text" name="card_security_code" placeholder="xxxx" ref="code" v-model="card.code" class="px-4 py-3 rounded-md text-gray-600 italic bg-gray-200" />
        </label>
      </div>
      <button type="button" @click="nextStep(2)" class="m-auto justify-center px-6 py-3 font-semibold flex rounded-md text-white bg-[#4455DD] hover:bg-[#4411DD] ease-in duration-100">Realizar Pagamento</button>
    </form>
  </aside>

  <aside id="second-step" class="px-10 text-center" v-if="step.current === 3">
    <span class="text-[28px] md:text-[42px] text-center font-semibold leading-snug mb-6">Obrigado pela compra.<br />Em breve entraremos em contato.</span>
    <figure>
      <img src="/svg/monitor-cash-credit-card.svg" class="w-[450px] h-[450px] flex m-auto" />
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
    text-align:center;
    font-size:0;
  }
    .isComplete{
      background: #4455DD;
      border-color: #3646be;
      color:#fff;
      font-size:18px;
    }
</style>
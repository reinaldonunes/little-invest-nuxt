<script lang="ts">
  export default defineComponent({
    data(){
      return{
        investments: [
          { id: 1, name: 'LCI 2018/12', percent: '110% do CDB', bank: 'Banco Certo' },
          { id: 1, name: 'LCI 2020/01', percent: '115% do CDB', bank: 'Santrafe' },
          { id: 1, name: 'LCI 2022/06', percent: '117% do CDB', bank: 'Banco Inova' },
          { id: 1, name: 'LCI 2024/07', percent: '122% do CDB', bank: 'Cofre Agora' }
        ]
      }
    }
  })
</script>
<template>
  <div class="py-16 px-4 bg-[#4455DD]">
    <div class="m-auto max-w-[1440px] w-full items-center grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div class="bg-white rounded-md p-8 flex flex-col" v-for="item in investments" :key="item.id" >
        <h6 class="font-bold text-[22px] text-gray-900">{{ item.name }}</h6>
        <span class="text-blue-400 font-[600]">{{ item.percent }}</span>
        <hr class="bg-gray-400 w-[60px] h-[2px] mt-2 mb-2"/>
        <span class="text-base text-[#818181]">{{ item.bank }}</span>
        <NuxtLink
          to="/register"
          class="mt-4 w-full justify-start px-4 py-3 font-[500] flex rounded-md text-white bg-[#4455DD] hover:bg-[#4411DD] ease-in duration-100 btn-add-cart"  
        >Adicionar</NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .btn-add-cart{
    position:relative;
  }
    .btn-add-cart:after{
      content:'+';
      position:absolute;
      top:50%;
      margin-top:-13px;
      right:16px;
      width:26px;
      height:26px;
      line-height:24px;
      font-weight:bold;
      color:#4455DD;
      background:#fff;
      border-radius:50%;
      text-align:center;
      justify-content: center;
    }
</style>
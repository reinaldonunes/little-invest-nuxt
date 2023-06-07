<script>
  export default defineComponent({
    name: 'Benefits',
    data(){
      return{
        benefits: [
          { id: 1, name: 'Acesso Online', description: 'Acesse a nossa plataforma e escolha o seu plano', image: '/svg/monitor-window.svg' },
          { id: 2, name: 'Rendimento Fácil', description: 'Espere até a data de resgate e acompanhe o rendimento', image: '/svg/monitor-loading-progress.svg' },
          { id: 3, name: 'Resgate Simples', description: 'Retire o rendimento e gaste parte em viagens e compras', image: '/svg/monitor-cash-credit-card.svg' }
        ]
      }
    }
  })
</script>

<template>
  <div class="py-16 px-4">
    <div class="m-auto max-w-[1440px] w-full items-center">
      <span class="flex w-full justify-center text-center leading-snug text-[36px] text-gray-900">Mais fácil que gastar dinheiro</span>

      <div class="mt-5 mb-5 grid sm:grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center"> 
        <section class="flex flex-col rounded-md text-center" v-for="item in benefits" :key="item.id">
          <img :src="item.image" width="320" class="m-auto"/>
          <span class="font-semibold text-[24px] text-gray-900 mt-3 mb-1">{{ item.name }}</span>
          <span class="max-w-[85%] m-auto">{{ item.description }}</span>
        </section>
      </div>
    </div>
  </div>
</template>
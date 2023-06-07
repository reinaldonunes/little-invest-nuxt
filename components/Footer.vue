<script lang="ts">
</script>
<template>
  <footer class="flex flex-col">
    <div class="bg-gray-900 px-4 py-16">
      <div class="m-auto max-w-[1440px] flex-1 flex-col md:flex-row flex justify-between grid grid-cols-1 md:grid-cols-3">
        <section>
          <span class="text-[24px] text-gray-100 font-semibold flex justify-center md:justify-start">MAPA DO SITE</span>
          <aside class="grid grid-cols-1 md:grid-cols-2 mt-4">
            <div class="flex flex-col m-auto md:m-0">
              <NuxtLink to="/" class="text-gray-400 hover:text-white w-fit text-sm font-semibold mb-2">- Home</NuxtLink>
              <NuxtLink to="/" class="text-gray-400 hover:text-white w-fit text-sm font-semibold mb-2">- Investir</NuxtLink>
              <NuxtLink to="/" class="text-gray-400 hover:text-white w-fit text-sm font-semibold mb-2">- Serviços</NuxtLink>
            </div>
            <div class="flex flex-col m-auto md:ml-0">
              <NuxtLink to="/" class="text-gray-400 hover:text-white w-fit text-sm font-semibold mb-2">- Conta</NuxtLink>
              <NuxtLink to="/" class="text-gray-400 hover:text-white w-fit text-sm font-semibold mb-2">- Termos</NuxtLink>
              <NuxtLink to="/" class="text-gray-400 hover:text-white w-fit text-sm font-semibold mb-2">- Contato</NuxtLink>
            </div>
          </aside>
        </section>

        <section class="flex flex-col mt-10 md:mt-0">
          <span class="text-[24px] text-gray-100 font-semibold flex justify-center md:justify-start">REDES SOCIAIS</span>
          <div class="justify-center text-center md:justify-start md:text-start mt-4 flex">
            <NuxtLink to="/" target="_blank" class="me-4"><img src="/svg/facebook.svg" width="38"/></NuxtLink>
            <NuxtLink to="/" target="_blank" class="me-4"><img src="/svg/instagram.svg" width="38"/></NuxtLink>
            <NuxtLink to="/" target="_blank" class="me-4"><img src="/svg/twitter.svg" width="38"/></NuxtLink>
            <NuxtLink to="/" target="_blank" class=""><img src="/svg/youtube.svg" width="38"/></NuxtLink>
          </div>
        </section>

        <section class="flex flex-col mt-10 md:mt-0">
          <span class="text-[24px] text-gray-100 font-semibold flex justify-center md:justify-start">SOBRE</span>
          <span class="text-gray-300 leading-snug mt-2 text-center md:text-start">A Little Invest é uma empresa de investimentos criada para facilitar a vida dos investidores. Com ela você investe rapidamente o seu dinheiro.</span>
        </section>
      </div>
    </div>
    <div class="p-4 bg-[#4455DD]">
      <div class="m-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2">
        <span class="text-sm text-gray-200 text-center md:text-start">&copy; 2023 Alguns direitos reservados - Little Invest</span>

        <span class="text-sm text-gray-200 text-center md:text-right">&copy; Origamid Cursos | Feito em Nuxt.js 3 por Reinaldo J. Nunes</span>
      </div>
    </div>
  </footer>
</template>
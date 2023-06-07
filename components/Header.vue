<script lang="ts">
</script>
<template>
  <header class="bg-gray-100 p-4 flex">
    <div class="m-auto max-w-[1440px] flex-1 flex-col md:flex-row flex justify-between items-center">
      <NuxtLink to="/">
        <figure>
          <img src="/svg/little-invest.svg" width="160px" alt="Little Invest App" title="Little Invest App" />
        </figure>
      </NuxtLink>

      <nav>
        <ul class="flex">
          <li>
            <NuxtLink
              to="/investiments"
              class="p-2 flex rounded-md text-sm sm:text-base text-gray-700 hover:text-blue-500 ease-in duration-100"  
            >Investimentos</NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="/services"
                class="p-2 flex rounded-md text-sm sm:text-base text-gray-700 hover:text-blue-500 ease-in duration-100"  
              >Serviços</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="p-2 flex rounded-md text-sm sm:text-base text-gray-700 hover:text-blue-500 ease-in duration-100"  
            >Contato</NuxtLink>
          </li>
          <li class="ms-4">
            <NuxtLink
              to="/register"
              class="p-2 flex rounded-md text-sm sm:text-base text-white bg-[#4455DD] hover:bg-[#4411DD] ease-in duration-100"  
            >Cadastre-se</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
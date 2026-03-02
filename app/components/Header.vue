<template>
  <div class="bg-[#F1F0EE]">
    <div class="w-[1200px] m-auto px-8 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-[#0F1826] font-semibold text-[18px]">NAJOT</span>
          <img src="/header-logo.svg" alt="logo">
          <span class="text-[#0F1826] font-semibold text-[18px]">TA'LIM</span>
        </div>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-[37px]">
            <nuxt-link to="/kursler" class="text-sm hover:text-[#C8A96E] cursor-pointer">Kurslar</nuxt-link>
            <nuxt-link to="/blog" class="text-sm hover:text-[#C8A96E] cursor-pointer">Blog</nuxt-link>
          </div>
          <button class="bg-white text-[#2D2D2D] text-sm font-medium px-5 py-1.5 rounded-full shadow-sm hover:shadow-md">
            Kirish
          </button>
          <button class="bg-[#F5F5F5] p-[4px] rounded-full text-[#2D2D2D] hover:bg-slate-200 hover:text-[#C8A96E] flex items-center justify-center">
            <img src="/Moon.svg" alt="moon">
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup></script>
<template>
  <Header/>
  <div class="max-w-[1200px] m-auto px-8 py-8">

    <!-- Breadcrumb -->
    <div class="flex items-center gap-2 text-[13px] text-[#6B7280] mb-6">
      <span class="cursor-pointer hover:text-[#BA8D5B]"><router-link to="/">Bosh sahifa</router-link></span>
      <span>→</span>
      <span class="text-[#BA8D5B]">Kurslar</span>
    </div>

    <!-- Title + Search -->
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-[28px] font-bold text-[#0F1826]">Barcha o'quv kurslari</h1>
      <div class="relative">
        <input v-model="search" type="text" placeholder="Izlash" class="bg-[#F5F5F3] rounded-lg px-4 py-2.5 pr-10 text-[14px] outline-none w-[260px] focus:border focus:border-[#BA8D5B]">
        <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      </div>
    </div>

    <div class="flex gap-2 mb-8">
      <button v-for="filter in filters" :key="filter" @click="activeFilter = filter" :class="[  'px-5 py-2 rounded-full text-[13px] font-medium transition-colors duration-200',activeFilter === filter  ? 'bg-[#BA8D5B] text-white'    : 'bg-white border border-[#E5E7EB] text-[#6B7280] hover:border-[#BA8D5B] hover:text-[#BA8D5B]'        ]">
        {{ filter }}
      </button>
    </div>

    <div class="grid grid-cols-2 gap-6">
      <div
          v-for="course in filtered"
          :key="course.id"
          class="border border-[#E5E7EB] rounded-2xl p-6 cursor-pointer hover:shadow-md transition-shadow duration-200"
      >
        <div class="flex items-center gap-4 mb-4">
          <span class="border border-[#E5E7EB] text-[#0F1826] text-[12px] font-medium px-3 py-1 rounded-full">{{ course.category }}</span>
          <span class="text-[#BA8D5B] text-[13px]">Davomiyligi: {{ course.duration }}</span>
          <span class="text-[#BA8D5B] text-[13px]">Darslar soni: {{ course.lessons }}</span>
        </div>
        <div class="flex items-start justify-between gap-4">
          <div>
            <h3 class="text-[22px] font-bold text-[#0F1826] mb-3 leading-[1.3]">{{ course.title }}</h3>
            <p class="text-[#6B7280] text-[13px] leading-relaxed">{{ course.desc }}</p>
          </div>
          <img :src="course.img" :alt="course.title" class="w-[140px] flex-shrink-0 object-contain">
        </div>
      </div>
    </div>

  </div>
  <Footer/>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const activeFilter = ref('Barchasi')
const filters = ['Barchasi', 'Dasturlash']

import { courses } from "~/data/mocks.js";

const filtered = computed(() => {
  let result = courses
  if (activeFilter.value !== 'Barchasi') {
    result = result.filter(c => c.category === activeFilter.value)
  }
  if (search.value.trim()) {
    result = result.filter(c =>
        c.title.toLowerCase().includes(search.value.toLowerCase())
    )
  }
  return result
})
</script>
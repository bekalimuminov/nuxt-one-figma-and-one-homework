<template>
   <Header/>
      <section>
        <div class="max-w-[1200px] m-auto px-8 py-12">
          <p class="text-[16px] mb-[32px]">Bosh sahifa <span class="w-[10px] h-[5px] ml-[8px] mr-[8px]">-></span><router-link to="/" class="text-[#BA8D5B] text-[16px]">Bloger</router-link></p>

          <div class="flex gap-2 mb-8 flex-wrap">
            <button v-for="filter in filters" :key="filter" @click="activeFilter = filter" :class="[ 'px-4 py-2 rounded-full text-[13px] font-medium transition-colors duration-200',activeFilter === filter? 'bg-[#BA8D5B] text-white'          : 'bg-white border border-[#E5E7EB] text-[#6B7280] hover:border-[#BA8D5B] hover:text-[#BA8D5B]'        ]">{{ filter }}</button>
          </div>

          <div class="grid grid-cols-3 gap-6">
            <div v-for="post in filtered" :key="post.id" class="cursor-pointer group">
              <div class="relative rounded-xl overflow-hidden mb-3">
                <img :src="post.img" :alt="post.title" class="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300">
                <span class="absolute top-3 left-3 bg-[#BA8D5B] text-white text-[11px] font-medium px-3 py-1 rounded-full">{{ post.category }}</span>
              </div>
              <div class="flex items-center gap-3 text-[#6B7280] text-[12px] mb-2">
                <span>{{ post.date }}</span>
                <div class="flex items-center gap-1">
                  {{ post.views }}
                </div>
              </div>
              <h3 class="text-[15px] font-semibold text-[#0F1826] leading-[1.4] mb-1 group-hover:text-[#BA8D5B] transition-colors">{{ post.title }}</h3>
              <p class="text-[#6B7280] text-[13px]">{{ post.desc }}</p>
            </div>
          </div>
          <button class="max-w-[209px] w-full items-center rounded-[100px] bg-[#BA8D5B] ml-[480px] text-white py-[13px] mt-[70px]">Ko'proq ko'rish</button>
        </div>
      </section>
   <Footer/>
</template>

<script setup>
import { ref, computed } from 'vue'
import { posts } from "~/data/mocks.js";

const activeFilter = ref('Barchasi')

const filters = ['Barchasi', 'Bitiruv marosimi', 'Master-klass', 'Musobaqa', 'Dasturlash', 'Najot Quiz']


const filtered = computed(() => {
  if (activeFilter.value === 'Barchasi') return posts
  return posts.filter(p => p.category === activeFilter.value)
})
</script>
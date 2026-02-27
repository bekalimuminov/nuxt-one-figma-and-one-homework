<template>
  <section>
    <div class="max-w-[1200px] m-auto px-8 py-12">
      <h2 class="text-[28px] font-[800] text-[#0F1826] mb-10">Bizning afzalliklarimiz</h2>

      <div class="grid grid-cols-2 gap-x-20 gap-y-12">
        <!-- Onlayn akademiya -->
        <div class="flex gap-[20px]">
          <div>
            <img src="/online.svg" alt="img">
          </div>
          <div>
            <h3 class="text-[17px] font-[700] text-[#0F1826]">Onlayn akademiya</h3>
            <p class="text-[#6B7280] text-[14px] w-[480px]">«Najot Ta'lim» digital academy — bu zamonaviy kasbllar o'qitiladigan onlayn akademiya. Qayerda bo'lishingizdan qat'i nazar: uydami yo mehmonda, daladami yo safarda — o'zingizga qulay tarzda va vaqtda bilim olishingiz mumkin, internet va noutbuk bo'lsa bas.</p>
          </div>
        </div>

        <!-- O'z ishining ustalari -->
        <div class="flex gap-[20px]">
          <div>
            <img src="/yulduz.svg" alt="img">
          </div>
          <div>
            <h3 class="text-[17px] font-[700] text-[#0F1826]">O'z ishining ustalari</h3>
            <p class="text-[#6B7280] text-[14px] w-[470px]">Darslar katta tajribaga ega malakali mutaxassislar tomonidan tayyorlangan. O'z ishining ustalaridan yanada ishonchli bilim va tajribaga ega bo'lasiz.</p>
          </div>
        </div>

        <!-- Shunchaki kurs emas -->
        <div class="flex gap-[20px]">
          <div>
            <img src="/shunchaki.png" alt="img">
          </div>
          <div>
            <h3 class="text-[17px] font-[700] text-[#0F1826]">Shunchaki kurs emas</h3>
            <p class="text-[#6B7280] text-[14px] w-[480px]">Har bir o'quv kursi shunday ishlab chiqilganki, ularni muvaffaqiyatli yakunlab, siz zamonaviy kasb egasiga aylanishingiz va shu sohada o'z faoliyatingizni boshlashingiz mumkin. Hammasi o'z qo'lingizda.</p>
          </div>
        </div>

        <!-- Interaktiv darslar -->
        <div class="flex gap-[20px]">
          <div>
            <img src="/intiractiv.svg" alt="img">
          </div>
          <div>
            <h3 class="text-[17px] font-[700] text-[#0F1826]">Interaktiv darslar</h3>
            <p class="text-[#6B7280] text-[14px] w-[470px]">Darslarni o'zlashtirish davrida sizda savollar tug'ilishi tabiiy holat. Mentorlarga murojaat qilishingiz, o'zingizni qiziqtirgan savollaringizga javob olishingiz va tavsiyalar olishingiz mumkin.</p>
          </div>
        </div>
      </div>

      <!-- Ko'proq -->
      <div class="flex items-center gap-1 mt-10 cursor-pointer w-fit">
        <span class="text-[#0EB182] text-[14px] font-medium">Ko'proq</span>
        <img src="/arrow-down.svg" alt="arrow" class="w-4 h-4">
      </div>
    </div>
  </section>
  <section>
    <div>
      <div class="max-w-[1200px] m-auto px-8 py-12">
        <h2 class="text-[28px] font-bold text-[#0F1826] mb-3">Yo'nalishlar bo'yicha kurslar</h2>
        <p class="text-[#6B7280] text-[14px] mb-8">Zamonaviy sohalardan birini o'rganing va talabgir kasb egasi bo'ling!</p>

        <div class="flex gap-4">
          <div class="border border-[#E5E7EB] rounded-lg p-5 w-[220px] cursor-pointer hover:shadow-md transition-shadow duration-200">
            <h3 class="text-[15px] font-semibold text-[#0F1826] mb-2">Dasturlash foundation</h3>
            <p class="text-[#6B7280] text-[13px]">Foundation dasturlash kursida</p>
          </div>

          <div class="border border-[#E5E7EB] rounded-lg p-5 w-[220px] cursor-pointer hover:shadow-md transition-shadow duration-200">
            <h3 class="text-[15px] font-semibold text-[#0F1826] mb-2">.NET mutaxassislik kursi</h3>
            <p class="text-[#6B7280] text-[13px]">.NET mutaxassislik kursi</p>
          </div>
        </div>

        <div class="mt-8">
          <span class="text-[#0EB182] text-[14px] font-medium cursor-pointer">Barcha kurslarni ko'rish</span>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div>
      <div class="max-w-[1200px] m-auto px-8 py-12">
        <h2 class="text-[28px] font-bold text-[#0F1826] mb-3">Bitiruvchilarimizning ish joylari:</h2>
        <p class="text-[#6B7280] text-[14px] mb-10">Eng yaxshi bitiruvchilarimiz nufuzli tashkilot va kompaniyalarda faoliyat yuritadi. Zamonaviy kasb egalariga doim va har yerda talab yuqori bo'ladi.</p>
        <div class="grid grid-cols-6 gap-4">
          <div v-for="item in companies" :key="item.id" class="border border-[#E5E7EB] rounded-lg p-4 flex items-center justify-center h-[90px] hover:shadow-md transition-shadow duration-200 cursor-pointer">
            <img :src="item.img" alt="img" class="max-h-[40px] object-contain">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div>
      <div class="max-w-[1200px] m-auto px-8 py-12">
        <h2 class="text-[28px] font-bold text-[#0F1826] mb-3">Bitiruvchilarimizdan izohlar</h2>
        <p class="text-[#6B7280] text-[14px] mb-8 max-w-[700px]">O'quv kurslarimiz, ustozlar, qo'lga kiritilgan bilim va ko'nikmalar, olingan natijalar haqida bitiruvchilarimizdan eshiting hamda ulardan kerakli tavsiyalar oling.</p>

        <div class="flex gap-4">
          <div v-for="person in persons" :key="person.id" class="relative rounded-2xl overflow-hidden w-[270px] h-[420px] cursor-pointer group">
            <img :src="person.img" :alt="person.name" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div>
      <div class="max-w-[1200px] m-auto px-8 py-12">
        <div class="flex rounded-2xl overflow-hidden border border-[#E5E7EB]">

          <!-- Left image -->
          <div class="w-[380px] flex-shrink-0">
            <img src="/contactt.png" alt="contact" class="w-[512px] h-[634px] object-cover">
          </div>

          <div class="bg-[#FAFAF9] px-12 py-10 w-full">
            <div class="bg-white w-[448px] h-[570px] px-12 py-10 rounded-[10px]">
              <h2 class="text-[26px] font-bold text-[#0F1826] mb-3">Yordam kerakmi?</h2>
              <p class="text-[#6B7280] text-[14px] leading-relaxed mb-8">
                <span class="text-[#BA8D5B] cursor-pointer">FAQ</span> bo'limi ham sizga yordam bera olmadimi? Telefon raqamingizni yozib qoldiring, biz sizga qo'ng'iroq qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz.
              </p>
              <div class="flex flex-col gap-4 mb-6">
                <div class="flex flex-col gap-1">
                  <label class="text-[12px] text-[#6B7280]">Ismingizni kiriting</label>
                  <input type="text" placeholder="Ali" class="border border-[#E5E7EB] rounded-lg px-4 py-2.5 text-[14px] text-[#0F1826] outline-none focus:border-[#BA8D5B] bg-white">
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-[12px] text-[#6B7280]">Telefon raqamingizni kiriting</label>
                  <input type="text"placeholder="+998 00 000 00 00" class="border border-[#E5E7EB] rounded-lg px-4 py-2.5 text-[14px] text-[#0F1826] outline-none focus:border-[#BA8D5B] bg-white">
                </div>
              </div>
              <p class="text-[12px] text-[#6B7280] mb-4">"So'rov yuborish" tugmasini bosish orqali<span class="text-[#BA8D5B] cursor-pointer">Platformadan foydalanish qoidalari</span> ga rozilik bildirasiz.</p>
              <button class="bg-[#BA8D5B] text-white text-[15px] font-medium px-[120px] ml-[5px] py-[15px] rounded-full hover:bg-[#a87a4a]">So'rov yuborish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
  import { companies } from "~/data/mocks.js";
  import { persons } from "~/data/mocks.js";
</script>

export const persons = [
    { id: 1, img: '/person1.png'},
    { id: 2, img: '/person2.png'},
    { id: 3, img: '/person3.png'},
    { id: 4, img: '/person4.png'},
]

export const companies = [
    { id: 1, img: '/epam.svg' },
    { id: 2, img: '/epam.svg' },
    { id: 3, img: '/epam.svg' },
    { id: 4, img: '/epam.svg' },
    { id: 5, img: '/epam.svg' },
    { id: 6, img: '/epam.svg' },
    { id: 7, img: '/epam.svg' },
    { id: 8, img: '/epam.svg' },
    { id: 9, img: '/epam.svg' },
    { id: 10, img: '/epam.svg' },
    { id: 11, img: '/epam.svg' },
    { id: 12, img: '/epam.svg' },
    { id: 13, img: '/epam.svg' },
    { id: 14, img: '/epam.svg' },
    { id: 15, img: '/epam.svg' },
    { id: 16, img: '/epam.svg' },
    { id: 17, img: '/epam.svg' },
    { id: 18, img: '/epam.svg' },
]

export const posts = [
    { id: 1, category: 'Musobaqa', img: '/musobaqa.png', date: '19-aprel, 2023', views: 119, title: '16-aprel kuni «Najot Ta\'lim»da SMM menejerlari uchun story management', desc: '«SMM musobaqasi» bo\'lib o\'tdi' },
    { id: 2, category: 'Master-klass', img: '/master-class.png', date: '19-aprel, 2023', views: 92, title: 'Farg\'ona filialida «Engineericly» YouTube kanali asoschisi Jahongirmirzo Ibrohimo', desc: '«Engineericly» YouTube kanali asoschisi Jahongirmirzo Ibrohimov bilan master-klass' },
    { id: 3, category: 'Musobaqa', img: '/muusobaqa.png', date: '19-aprel, 2023', views: 109, title: 'SMM-menejer va Grafik dizaynerlar o\'rtasidagi «Marketing Team» jamoaviy', desc: '«Marketing Team» musobaqasi g\'oliblari e\'lon qilindi' },
    { id: 4, category: 'Musobaqa', img: '/musobaqa2.png', date: '19-aprel, 2023', views: 101, title: '2-aprel kuni bo\'lib o\'tgan dasturlash bo\'yicha «Algoritmlash» musobaqasi', desc: 'Dasturilar o\'rtasida «Algoritmlash» musobaqasi' },
    { id: 5, category: 'Master-klass', img: '/master-class2.png', date: '19-aprel, 2023', views: 187, title: '«Iwash» va «Carbon technologies» loyihalari asoschilari bilan «Shaxsiy', desc: 'Otabek Jurayev va Behzodbek Shoyunusovlar bilan master-klass' },
    { id: 6, category: 'Musobaqa', img: '/mizabaqa.png', date: '11-aprel, 2023', views: 270, title: '100 ga yaqin SMM-menejer va grafik dizaynerlar «Marketing Team»', desc: '«Marketing Team» jamoaviy musobaqasi' },
]

export const courses = [
    {
        id: 1,
        category: 'Dasturlash',
        duration: '19 soat 24 daqiqa',
        lessons: '126 ta',
        title: 'Dasturlash foundation',
        desc: 'Foundation dasturlash kursida C va Python dasturlash tillari va ular orqali dasturlashning mantiq-mohiyati o\'rgatiladi. Kurs davomida dasturlashning fundamental tushunchalari, dasturchining ishini yengillashtirib beradigan',
        img: '/blue-laptop.png'
    },
    {
        id: 2,
        category: 'Dasturlash',
        duration: '23 soat 7 daqiqa',
        lessons: '93 ta',
        title: '.NET mutaxassislik kursi',
        desc: '.NET mutaxassislik kursi yordamida universal C# dasturlash tilida ishlovchi va o\'z faoliyatida .NET platformasi va texnologiyalaridan foydalanuvchi dasturchiga aylaning. C# dasturlash tilining imkoniyatlari va qo\'llash',
        img: '/yellow-laptop.png'
    },
]


export const courseGroups = ref([
    [
        { id: 1, title: 'Dasturlash foundation', desc: 'Foundation dasturlash kursida' },
        { id: 2, title: '.NET mutaxassislik kursi', desc: '.NET mutaxassislik kursi' }
    ]
])
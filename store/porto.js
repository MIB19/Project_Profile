import { defineStore } from 'pinia';

export const usePortoStore = defineStore('porto', {
  state: () => ({
    portofolio: [
      {
        id: 1,
        img: '/icon/TnLogo.svg',
        title: 'Ternaknesia Apps',
        platform: 'Web, Android, IOS',
        url: 'https://app.ternaknesia.com',
        desc: 'Apps that are used as livestock sales and daily meat needs. in it there is the sale of daily meat and momentary livestock such as qurban both in wholesale and in units',
        job_desc: [
          'Building and maintain code',
          'Slicing design from Figma',
          'Produce staging apps for software QA',
          'Collaborate with Backend developer for data & API consume',
          'Collaborate with UI/UX to produce attractive design',
          'Reporting to Product Manager and CTO',
        ],
        tech_stack: [
          'NuxtJs V2 upgrade to V3',
          'VueJs',
          'CapacitorJs',
          'IonicJs',
          'Vuex upgrade to Pinia',
          'Tailwind Css',
          'Rest API',
          'Git',
        ],
        doc: [
          '/porto/ternaknesia/1.png',
          '/porto/ternaknesia/2.png',
          '/porto/ternaknesia/3.png',
          '/porto/ternaknesia/4.png',
          '/porto/ternaknesia/5.jpg',
          '/porto/ternaknesia/6.jpg',
          '/porto/ternaknesia/7.jpg',
          '/porto/ternaknesia/8.jpg',
        ],
      },
      {
        id: 2,
        img: '/icon/InvestIc.png',
        title: 'Ternakinvest Apps',
        url: 'https://ternakinvest.com',
        platform: 'Web, Android, IOS',
        desc: 'Apps that are used to collect funding for breeders.',
        job_desc: [
          'Building and maintain code',
          'Slicing design from Figma',
          'Produce staging apps for software QA',
          'Collaborate with Backend developer for data & API consume',
          'Collaborate with UI/UX to produce attractive design',
          'Reporting to Product Manager and CTO',
        ],
        tech_stack: [
          'NuxtJs V2',
          'VueJs',
          'Laravel',
          'CapacitorJs',
          'Vuex',
          'Tailwind Css',
          'Rest API',
          'Git',
        ],
        doc: [
          '/porto/ternakinvest/1.png',
          '/porto/ternakinvest/2.png',
          '/porto/ternakinvest/3.png',
          '/porto/ternakinvest/4.png',
          '/porto/ternakinvest/5.jpg',
          '/porto/ternakinvest/6.jpg',
          '/porto/ternakinvest/7.jpg',
          '/porto/ternakinvest/8.jpg',
        ],
      },
      {
        id: 3,
        img: '/icon/SobaternakLogo.svg',
        title: 'Sobaternak Web',
        url: 'https://app.sobaternak.com',
        platform: 'Web',
        desc: 'Web used by breeders for recording their animals as a profit or loss report they get.',
        job_desc: [
          'Building and maintain code',
          'Slicing design from Figma',
          'Produce staging web for software QA',
          'Collaborate with Backend developer for data & API consume',
          'Collaborate with UI/UX to produce attractive design',
          'Reporting to Product Manager and CTO',
        ],
        tech_stack: [
          'NextJs',
          'ReactJs',
          'Redux',
          'ReduxThunk',
          'Redux Persist',
          'Tailwind Css',
          'Rest API',
          'Git',
        ],
        doc: [
          '/porto/sobaternak/1.png',
          '/porto/sobaternak/2.png',
          '/porto/sobaternak/3.png',
          '/porto/sobaternak/4.png',
        ],
      },
      {
        id: 4,
        img: '/icon/SlothLogo.svg',
        title: 'Sloth Web',
        url: 'https://sloth.id',
        platform: 'Web',
        desc: 'Web Company Profile',
        job_desc: [
          'Building and maintain code',
          'Slicing design from Figma',
          'Produce staging web for software QA',
          'Building API for consume',
          'Collaborate with UI/UX to produce attractive design',
          'Reporting to Client',
        ],
        tech_stack: [
          'NextJs',
          'ReactJs',
          'TypeScript',
          'Laravel',
          'Redux',
          'Tailwind Css',
          'Rest API',
          'Git',
        ],
        doc: ['/porto/sloth/1.png', '/porto/sloth/2.png', '/porto/sloth/3.png'],
      },
      {
        id: 5,
        img: '',
        title: 'VanaStore',
        url: 'https://vanastore.my.id',
        platform: 'Web',
        desc: 'A website that is used to sell gamer needs such as diamonds, game vouchers, and trading accounts',
        job_desc: [
          'Building and maintain code',
          'Designing use figma',
          'Produce staging web for client',
          'Building API for consume',
          'Collaborate with Client to produce attractive design',
          'Reporting to Client',
        ],
        tech_stack: [
          'NuxtJs V3',
          'VueJs',
          'TypeScript',
          'Laravel',
          'Pinia',
          'Tailwind Css',
          'Rest API',
          'Git',
        ],
        doc: ['/porto/vana/1.png'],
      },
    ],
  }),
  getters: {
    getPorto(state) {
      return state.portofolio;
    },
  },
});

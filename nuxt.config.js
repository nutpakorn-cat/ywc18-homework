export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'คนละครึ่ง',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'ค้นหาร้านค้าที่เข้าร่วมโครงการ คนละครึ่ง. พื้นที่ใกล้ฉัน. ค้นหา. ประเภทร้านค้า. อาหารและเครื่องดื่ม · ธงฟ้า · กิจการ OTOP · สินค้าทั่วไป. ค้นหาตามจังหวัด. ทั้งหมด. ใกล้ฉัน.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
      { src: 'js/select-box.min.js', type: 'text/javascript', body: true, defer: true },
      { src: 'js/modal.min.js', type: 'text/javascript', body: true, defer: true }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/static/css/theme.css',
    '@/static/css/form.css',
    '@/static/css/fonts.css',
    '@/static/css/media-condition.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  target: 'static',
  router: {
    base: '/ywc18-homework/dist/'
  }
}

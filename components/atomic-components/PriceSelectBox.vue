<template>
  <div class="custom-select">
    <select>
      <option value="กรุณาเลือก" >กรุณาเลือก</option>
      <EachPrice v-for="(price, index) in dummyPriceAPI" :key="index + 1" :index="price" :text="price" />
    </select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dummyPriceAPI: [
          "ไม่เกิน 100 บาท",
          "100 - 300 บาท",
          "300 - 600 บาท",
          "มากกว่า 600 บาท"
        ]
      }
    },
    name: 'PriceSelectBox'
  }
</script>
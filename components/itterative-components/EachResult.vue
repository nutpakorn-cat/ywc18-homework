
<template>
  <div class="searched-result-item">
    <div class="row responsive full-height">
      <div class="result-object-image responsive-m-6-px" :style="'background-image: url(\'' + payload.coverImageId + '\');'"></div>
      <div class="result-object-details responsive-pb-10-px">
        <div class="row mt-16-px">
          <h3 class="result-object-header">{{ payload.shopNameTH }}</h3>
          <div v-if="payload.isOpen == 'Y'" class="tag bold-font">เปิดอยู่</div>
        </div>
        <p class="grey">
          {{ payload.categoryName }}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span v-if="payload.priceLevel >= 1" class="black">฿</span><span class="grey" v-else>฿</span><span v-if="payload.priceLevel >= 2" class="black">฿</span><span class="grey" v-else>฿</span><span v-if="payload.priceLevel >= 3" class="black">฿</span><span class="grey" v-else>฿</span><span v-if="payload.priceLevel >= 4" class="black">฿</span><span class="grey" v-else>฿</span>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{{ payload.addressDistrictName }} {{ payload.addressProvinceName }}
        </p>
        <div class="line"></div>
        <p class="grey" v-html="payload.highlightText"></p>
        <p class="grey mt-8-px"><span class="semi-bold-font black">เมนูแนะนำ:</span> <data v-for="(rec, index) in payload.recommendedItems" :key="index">{{ rec }} </data></p>
        <div class="row mt-15-px">
          <div v-if="payload.facilities.indexOf('ที่จอดรถ') != -1" class="facility-icon">
            <img src="images/facilities/car-parking.png">
          </div>
          <div v-if="payload.facilities.indexOf('บริการจัดส่งอาหาร') != -1" class="facility-icon">
            <img src="images/facilities/food-delivery-service.png">
          </div>
          <div v-if="payload.facilities.indexOf('จำหน่ายเครื่องดื่มแอลกอฮอล์') != -1" class="facility-icon">
            <img src="images/facilities/alcohol.png">
          </div>
          <div v-if="payload.facilities.indexOf('สามารถนำสัตว์เลี้ยงเข้าได้') != -1" class="facility-icon">
            <img src="images/facilities/pet.png">
          </div>
          <div v-if="payload.facilities.indexOf('รับจองล่วงหน้า') != -1" class="facility-icon">
            <img src="images/facilities/reservation.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EachResult',
  props: ['payload']
}
</script>
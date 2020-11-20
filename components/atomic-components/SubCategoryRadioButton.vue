<template>
  <div>
    <EachSubCategory key="ทั้งหมด" index="ทั้งหมด" name="ทั้งหมด" @setSubCategory="setSubCategory" :isChecked="true" />
    <div v-for="(category, categoryIndex) in dummyCategoryAPI" :key="categoryIndex">
      <EachSubCategory v-for="(subCategory, subCategoryIndex) in dummyCategoryAPI[categoryIndex].subcategories" :key="subCategoryIndex" :index="subCategory" :name="subCategory" @setSubCategory="setSubCategory" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          dummyCategoryAPI: [
            {
            "name": "ร้านอาหารและเครื่องดื่ม",
            "subcategories": [
                "อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว",
                "ก๋วยเตี๋ยว ก๋วยจั๊บ",
                "ชาบู สุกี้ยากี้ หม้อไฟ",
                "ปิ้งย่าง หมูกะทะ",
                "ของหวาน ไอศกรีม เบเกอรี่ เครื่องดื่ม",
                "ผับ ร้านเหล้า บาร์",
                "ร้านขายผลไม้ / ร้านขายผัก",
                "ร้านอาหารอีสาน",
                "ร้านอาหารญี่ปุ่น",
                "ข้าวต้ม โจ๊ก เกาเหลา",
                "คาราโอเกะ",
                "บุฟเฟ่ต์",
                "บุฟเฟ่ต์โรงแรม",
                "พิซซ่า ฟาสต์ฟู้ด จานด่วน",
                "พิซซ่า ฟาสต์ฟู้ด จานด่วน",
                "อาหารจีน",
                "อาหารเจ มังสวิรัติ สุขภาพ",
                "อาหารใต้",
                "อาหารทะเล",
                "อาหารนานาชาติ",
                "อาหารมุสลิม อิสลาม",
                "อาหารเวียดนาม",
                "อาหารอินเดีย",
                "อาหารเหนือ",
                "อาหารว่าง ขนม ของกินเล่น",
                "อื่นๆ"
            ]
            },
            {
            "name": "ร้านค้า OTOP",
            "subcategories": [
                "ผลิตภัณฑ์อาหาร",
                "ผลิตภัณฑ์เครื่องดื่ม",
                "ผลิตภัณฑ์ผ้า / เครื่องแต่งกาย / เครื่องประดับ",
                "ผลิตภัณฑ์ของใช้ / ของตกแต่ง / ของที่ระลึก",
                "ผลิตภัณฑ์สมุนไพรที่ไม่ใช่อาหาร"
            ]
            },
            { "name": "ร้านธงฟ้า", "subcategories": [] },
            {
            "name": "สินค้าทั่วไป",
            "subcategories": [
                "ร้านขายของฝาก",
                "ร้านจำหน่ายอะไหล่รถทุกประเภท",
                "ร้านขายรถยนต์/มอเตอร์ไซต์",
                "ร้านขายอุปกรณ์เพื่อการกีฬา",
                "ร้านขายสินค้าเกษตร",
                "ร้านเกี่ยวกับสัตว์เลี้ยง / ขายอาหารสัตว์",
                "ร้านจัดสวน / ขายต้นไม้ / ดอกไม้ / พวงหรีด",
                "สินค้าเกี่ยวกับการตกแต่งบ้าน",
                "ร้านขายเสื้อผ้า / เครื่องประดับ / สินค้าแฟชั่น",
                "ร้านขายเครื่องสำอางและบำรุงผิวพรรณ",
                "ร้านขายยาและอาหารเสริม",
                "ร้านขายของใช้ / อุปกรณ์",
                "มินิมาร์ท / ร้านขายของชำ",
                "ตลาดสด",
                "ซุปเปอร์มาร์เก็ต"
            ]
            }
        ]
      };
    },
    methods: {
      setSubCategory(value) {
        this.$emit('setSubCategory', value);
      }
    },
    created() {
      this.dummyCategoryAPI = this.dummyCategoryAPI.filter(
        (each) => ((each.name === this.categoryName) || this.categoryName === 'ทั้งหมด')
      );
    },
    props: ['categoryName'],
    name: 'SubCategoryRadioButton',
  }
</script>
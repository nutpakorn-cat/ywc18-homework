<template>
  <div>
    <h3 class="bold-font mb-20-px">ประเภทร้านค้า</h3>
    <CategoryRadioButton @setCategory="setCategory" />
    
    <h3 class="bold-font mt-35-px mb-10-px">จังหวัด/ใกล้ฉัน</h3>
    <ProvinceSelectBox />

    <h3 class="bold-font mt-35-px mb-10-px">ราคา</h3>
    <PriceSelectBox />

    <h3 class="bold-font mt-35-px mb-15-px">ประเภท{{ categoryName }}</h3>
    <SubCategoryRadioButton :key="categoryName" :categoryName="categoryName" @setSubCategory="setSubCategory" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        categoryName: 'ทั้งหมด',
        subCategoryName: 'ทั้งหมด'
      }
    },
    methods: {
      setCategory(value) {
        this.categoryName = value;
        this.$emit('setCategory', value);
      },
      setSubCategory(value) {
        this.subCategoryName = value;
        this.$emit('setSubCategory', value);
      }
    },
    name: 'SearchFilterComponent'
  }
</script>
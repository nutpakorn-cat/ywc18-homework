<template>
  <div id="searched-result-section">
    <div class="large-container">
      <h3 class="semi-bold-font mt-zero compressed-text-space">ผลการค้นหา {{ categoryName }}</h3>
      <div class="row mt-47-px">
        <SearchFilterCard @setCategory="setCategory" @setSubCategory="setSubCategory" />
        <SearchedResultCard :categoryName="categoryName" :subCategoryName="subCategoryName" />
      </div>
    </div>
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
    name: 'SearchedResult'
  }
</script>
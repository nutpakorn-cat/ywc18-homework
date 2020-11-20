<template>
  <div id="search-filter" class="mr-33-px compressed-text-space responsive-hidden"> 
    <SearchFilterComponent @setCategory="setCategory" @setSubCategory="setSubCategory" />
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
        this.$emit('setCategory', value);
      },
      setSubCategory(value) {
        this.$emit('setSubCategory', value);
      }
    },
    name: 'SearchFilterCard'
  }
</script>
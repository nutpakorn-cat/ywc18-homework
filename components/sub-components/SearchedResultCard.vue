<template>
  <div class="full-width">
    <SearchedResultList :key="categoryName + subCategoryName" :categoryName="categoryName" :subCategoryName="subCategoryName" />
    <div class="text-center mb-20-px">
      <a class="btn">ดูเพิ่มเติม</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchedResultCard',
    props: ['categoryName', 'subCategoryName']
  }
</script>
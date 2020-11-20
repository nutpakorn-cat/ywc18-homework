<template>
  <label class="form-control">{{ name }}
  <input type="radio" name="categoryName" @change="updateCategoryParentData">
  <span class="checkmark"></span>
  </label>
</template>

<script>
  export default {
    methods: {
      updateCategoryParentData(e) {
        this.$emit('setCategory', this.name);
      }
    },
    name: 'EachCategory',
    props: ['index', 'name']
  }
</script>
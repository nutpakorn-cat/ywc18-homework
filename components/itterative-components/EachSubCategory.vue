<template>
  <label class="form-control">{{ name }}
  <input type="radio" name="subCategoryName" @change="setSubCategory">
  <span class="checkmark"></span>
  </label>
</template>

<script>
  export default {
    methods: {
      setSubCategory(e) {
        this.$emit('setSubCategory', this.name);
      }
    },
    name: 'EachSubCategory',
    props: ['index', 'name', 'isChecked']
  }
</script>
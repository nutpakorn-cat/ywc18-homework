<template>
  <option :value="index">{{ text }}</option>
</template>

<script>
  export default {
    name: 'EachProvince',
    props: ['index', 'text']
  }
</script>
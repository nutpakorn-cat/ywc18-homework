<template>
  <option :value="index" >{{ text }}</option>
</template>

<script>
  export default {
    name: 'EachPrice',
    props: ['index', 'text']
  }
</script>
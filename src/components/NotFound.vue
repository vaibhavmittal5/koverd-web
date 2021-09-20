<template>
  <b-container fluid>
    <h1>{{this.message}}</h1>
  </b-container>
</template>

<script>
export default {
  name: 'NotFound',
  props: [
    'message'
  ]
}
</script>

<style scoped>

</style>

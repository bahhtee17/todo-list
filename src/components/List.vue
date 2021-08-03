<template>
  <div>
      <Item v-for="item, id in items" :key="id" :item="item"/>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
    components: {
        Item
    },

    props:['items']

}
</script>

<style>

</style>
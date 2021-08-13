<template>
  <div>
      <Item
      v-for="item, index of items"
      :key="index"
      :item="item"/>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
    components: {
        Item
    },

    computed: {
        items(){
            return this.$store.getters.getList
        }
    },



    props:['item']

}
</script>

<style>

</style>
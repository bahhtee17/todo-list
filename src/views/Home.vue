<template>
   <div>
       <h1>Todo</h1>
       <List/>
   </div>
</template>

<script>
import List from '../components/List.vue'

export default {
  name: 'Home',
  components: {
     List
  },



}
</script>

<template>
   <div>
       <h1>Todo</h1>
       <List :items="items"/>
   </div>
</template>

<script>
import List from '../components/List.vue'

export default {
  name: 'Home',
  components: {
     List
  },

  data(){
    return{
      items: this.$store.state.items
    }
  }

}
</script>

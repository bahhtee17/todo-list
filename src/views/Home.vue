<template>
   <div>
       <h1>Todo</h1>
       <List/>
       <Form/>
   </div>
</template>

<script>
import List from '../components/List.vue'
import Form from '../components/Form.vue'

export default {
  name: 'Home',
  components: {
     List,
     Form
  },

  mounted(){
    this.$store.dispatch('loadData')
  }



}
</script>

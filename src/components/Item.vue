<template>
  <div class="container" :class="{'item--done' : item.done}">
    <button @click="deleteItem" class="delete">X</button>
    <h4>{{item.title}}</h4>
    <input @click="checkBoxHandler" class="checkbox" type="checkbox"/>
  </div>
</template>

<script>
export default {
    props:['item'],


     methods: {
        deleteItem(){
            this.$store.commit('deleteItem', this.item.id)
            this.$store.dispatch('saveData')
        },

        checkBoxHandler(){
           this.$store.commit('checkTask', this.item.id)
        }

    },




}
</script>

<style scoped>



  .container{
    display: inline-table;
    border: 0px;
    border-radius: 10px;
    width: 30%;
    background-color:yellow;
    margin-bottom: 10px;
    margin-left: 10px;
    box-shadow: 2px 2px 5px;

  }


  .checkbox:hover{
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 100px;
  }

  button:hover{
    background-color: rgb(250, 131, 131);
    width: 30px;
    height: 30px;
  }

  .delete{
   width: 10%;
    border: none;
    border-radius: 10px;
    background: rgb(255, 80, 80);
    margin-left: 88%;
  }

  .item--done{
  text-decoration: line-through;
  }
</style>
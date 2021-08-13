<template>
  <div class="inputItem">
     <input v-model="value" class="input" type="text"/>
     <button class="submit" @click="addHandler">Submit</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            value: ''
        }
    },

    methods: {

        addHandler(){
            this.$store.commit('setTask', this.value)
            this.$store.dispatch('saveData')
            this.value = ''
        }

    }

}
</script>

<style scoped>



  .input{
      background-color: rgb(240, 255, 156);
      margin: 100px 20px;
      width: 350px;
      height: 25px;
      border-radius: 10px;
      box-shadow: 1px 1px 3px;
  }

  .input:hover{
    background-color: rgb(255, 255, 255);

  }
  .submit{
      display: inline-flexbox;
     padding: 10px;
     border: none;
     background-color: rgb(152, 253, 50);
     border-radius: 5px;

  }

  .submit:hover{
      background-color: chartreuse;
  }




</style>
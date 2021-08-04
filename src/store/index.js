import { createStore } from 'vuex'

export default createStore({
  state: {
    items: ['one', 'two', 'three']
  },
  mutations: {
    deleteItem(state, id){
      state.items.splice(id, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})

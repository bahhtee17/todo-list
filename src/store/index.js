import { createStore } from 'vuex'

export default createStore({
  state: {
    items: [{id:1, title: 'one', done: false},
    {id: 2, title: 'two', done: false}]
  },
  mutations: {
    deleteItem(state, id){
      const index = state.items.findIndex((task) => task.id === id)
      state.items.splice(index, 1);
    },
    checkTask(state, id){
      const task = state.items.find((task) => task.id === id)
    }
  },
  getters: {
    getList(state){
      return state.items
    }

  },
  actions: {
  },
  modules: {
  }
})

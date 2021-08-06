
import { createStore } from 'vuex'
import idGenerator from '../components/utils/idGenerator';

export default createStore({
  state: {
    items: []
  },

  getters: {
    getList(state){
      return state.items
    }

  },
  mutations: {
   setList(state, items){
     state.items = items
   },

    setTask(state, title){
      state.items.push({
        id: idGenerator(),
        title: title,
        done: false
      })
    },

    deleteItem(state, id){
      const index = state.items.findIndex((task) => task.id === id)
      state.items.splice(index, 1);
    },
    checkTask(state, id){
      const task = state.items.find((task) => task.id === id)
      task.done =!task.done
    }
  },

  actions: {
   saveData({state}){
     window.localStorage.setItem('items', JSON.stringify(state.items))
   },

   loadData({commit}){
     const items = JSON.parse(window.localStorage.getItem('items'))
     commit('setList', items || [])
   }

  },
  modules: {
  }
})

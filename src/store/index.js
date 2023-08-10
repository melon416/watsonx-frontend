import Vuex from "vuex"

const state = {
  tableItem: {}
}

const getters = {
  getTableItem: (state) => {
    return state.tableItem;
  }
}

const mutations = {
  SET_TABLE_ITEM: (state, data) => {
    state.tableItem = data;
  }
}

const actions = {
  setTableItem({ commit }, data) {
    commit("SET_TABLE_ITEM", data)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store;
import { createStore } from 'vuex'
import { pupilsList } from '../data/data'

export default createStore({
    state: {
        boysList: null,
        girlsList: null,
        selectedCouples: [],
        selectedCouple: { boy: null, girl: null },
        statusButton: null,
    },
    getters: {
        getBoysList: ({ boysList }) => boysList,
        getGirlsList: ({ girlsList }) => girlsList,
        getSelectedCouples: ({ selectedCouples }) => selectedCouples,
        getSelectedBoys: (state) => (id) => {
            return state.selectedCouple.boy == id
        },
        getSelectedGirls: (state) => (id) => {
            return state.selectedCouple.girl == id
        },
        isLackOfDancer(state) {
            return !state.boysList.length || !state.girlsList.length
        },
    },
    mutations: {
        setList(state, pupilsList) {
            state.boysList = pupilsList.filter((boy) => boy.gender === 'male')
            state.girlsList = pupilsList.filter((girls) => girls.gender === 'female')
        },
        selectedBoy(state, id) {
            state.selectedCouple.boy === id ? (state.selectedCouple.boy = null) : (state.selectedCouple.boy = id)
        },
        selectedGirl(state, id) {
            state.selectedCouple.girl === id ? (state.selectedCouple.girl = null) : (state.selectedCouple.girl = id)
        },
        addCouple(state) {
            state.selectedCouples.push({
                id: new Date().getTime(),
                boy: state.boysList.find((boy) => boy.id === state.selectedCouple.boy),
                girl: state.girlsList.find((girl) => girl.id === state.selectedCouple.girl),
            })
            state.boysList = state.boysList.filter((boy) => boy.id !== state.selectedCouple.boy)
            state.girlsList = state.girlsList.filter((girl) => girl.id !== state.selectedCouple.girl)
        },
    },
    actions: {
        setList({ commit }) {
            commit('setList', pupilsList)
        },
        selectedBoy({ commit }, id) {
            commit('selectedBoy', id)
        },
        selectedGirl({ commit }, id) {
            commit('selectedGirl', id)
        },
        addCouple({ commit }) {
            commit('addCouple')
        },
    },
    modules: {},
})

import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './_actions'
import { mutations } from './_mutations'

Vue.use(Vuex);

const state = {
    user: {},
    events: [],
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
});
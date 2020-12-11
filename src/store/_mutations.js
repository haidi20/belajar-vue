import * as types from './_mutation-types'

export const mutations = {
    [types.SIGN_IN](state, user_payload) {
        state.user = user_payload;
    },
    [types.SIGN_OUT](state) {
        state.user = ""
    },
    [types.EVENTS](state, event_payload) {
        state.events.push(event_payload);
    }
}
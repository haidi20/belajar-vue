import * as types from './_mutation-types'

export const signIn = ({ commit }, user_payload) => {
    commit(types.SIGN_IN, user_payload);
}

export const logOut = ({ commit }) => {
    commit(types.SIGN_OUT);
}
// store/auth.js
import { supabase } from '~/plugins/supabase'

export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  async signInWithEmail({ commit }, { email, password }) {
    const { user, error } = await supabase.auth.signIn({ email, password })
    if (error) throw error
    commit('SET_USER', user)
  },

  async signInWithOAuth({ commit }, provider) {
    const { user, error } = await supabase.auth.signIn({ provider })
    if (error) throw error
    commit('SET_USER', user)
  },

  async signOut({ commit }) {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    commit('SET_USER', null)
  },

  async checkUser({ commit }) {
    const user = supabase.auth.user()
    commit('SET_USER', user)
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.user
  }
}
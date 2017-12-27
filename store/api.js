export const strict = false

export const state = () => ({
  token: null,
  token_expire: null
})

export const mutations = {
  set_token (state, token) {
    state.token = token.token
    state.token_expire = token.expire
  }
}

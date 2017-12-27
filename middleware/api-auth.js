import Http from '~/helpers/http'
import Func from '~/helpers/func'

export default async function ({ store, isServer, res, req }) {
  let token

  if (isServer) {
    if (!req.cookies.access_token) {
      let response = await Http.get('http://myframework.test/jwt/get_token.php')
      token = response.data.token

      let responseDecode = await Http.get('http://myframework.test/jwt/decode_token.php', {
        params: {
          access_token: token
        }
      })

      let maxAge = parseInt(responseDecode.data.max_age)

      store.commit('api/set_token', {
        token: token,
        expire: maxAge
      })

      res.cookie('access_token', token, {path: '/', maxAge: maxAge})
      res.cookie('access_token_exp', maxAge, {path: '/', maxAge: maxAge})
    } else {
      store.commit('api/set_token', {
        token: req.cookies.access_token,
        expire: req.cookies.access_token_exp
      })
    }
  } else {
    token = Func.getCookie('access_token')
    let expire = Func.getCookie('access_token_exp')
    if (!token) {
      window.location.reload()
    }
    store.commit('api/set_token', {
      token: token,
      expire: expire
    })
  }
}

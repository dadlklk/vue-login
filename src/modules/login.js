// 登录接口
export function login() {

  const loginData = {
    "code": 304,
    "msg": "登录失败",
    "data": {
      "id": 1,
      "userId": 1,
      "token": "1111111111"
    }
  }
  /*
  const loginData = {
    "code": 200,
    "msg": "登录成功",
    "data": {
      "id": 1,
      "userId": 1,
      "token": "1111111111"
    }
  }
  */
  return {
    url: 'login',
    type: 'post',
    data: loginData
  }
}
// 登出接口
export function logout() {
  const logoutData = {
    "code": 200,
    "msg": null,
    "data": {
    }
  }
  return {
    url: 'logout',
    type: 'get',
    data: logoutData
  }
}

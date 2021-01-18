
const airClickHost = 'https://open.airclick.com';
const token = ' eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6aGFuZ3poaXpoZW43QGdtYWlsLmNvbSIsImNyZWF0ZWQiOjE2MTA5NDAxNzIxOTIsImV4cCI6MTYxMTU0NDk3Mn0.ipb_c9MLFEDGR6pPdJSh1xqjvgaW7jrVEOpSFEHsCgYPuZTE7DZJLB7mDwJz8ikwuPOqHO1PtV1Ec6F7-XUC2A';
// const AUTH_TOKEN = 'Newhaha';
let AUTH_TOKEN = 'Bearer' + token;
// const AUTH_TOKEN = token;

// for debug
const uesrInfo = {
  "status": 200,
  "msg": "registration success",
  "data": {
    "memberLevelId": 4,
    "gender": 0,
    "city": "USA",
    "isNewUser": true,
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6aGFuZ3poaXpoZW43QGdtYWlsLmNvbSIsImNyZWF0ZWQiOjE2MTA5NDAxNzIxOTIsImV4cCI6MTYxMTU0NDk3Mn0.ipb_c9MLFEDGR6pPdJSh1xqjvgaW7jrVEOpSFEHsCgYPuZTE7DZJLB7mDwJz8ikwuPOqHO1PtV1Ec6F7-XUC2A",
    "password": "$2a$10$oOCyX2iyvxu/LvA63D.9m.bVqbuhJdpd4p5C5mb3BbkPMr/bz4OBW",
    "createTime": "2021-01-18T03:22:52.090+00:00",
    "adminId": 23213,
    "nickname": "hahaha",
    "currency": "USD",
    "id": 56,
    "class": "com.macro.mall.model.UmsMember",
    "username": "zhangzhizhen7@gmail.com",
    "status": 1
  }
};

const qs = Qs;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

const getValue = (selector) => $(selector).val();
const getChecked = (selector) => $(selector).get(0).checked;
const resetParams = () => ({
  singin_email: getValue('#singin-email'),
  singin_pwd: getValue('#singin-password'),
  reg_email: getValue('#register-email'),
  reg_code: getValue('#register-code'),
  reg_nickname: getValue('#register-nickname'),
  reg_pwd: getValue('#register-password'),
  reg_agree: getChecked('#register-agree'),
})

// axios 
const request = (config) => {
  const { method, data, success = () => { }, error = () => { }, removeLoading = () => { } } = config;
  // update token

  if (window.localStorage.getItem('airClickToken')) {
    AUTH_TOKEN = window.localStorage.getItem('airClickToken')
  }
  console.log('AUTH_TOKEN', AUTH_TOKEN)

  // const _data = method.toUpperCase() === 'POST' ? data : qs.stringify(data);
  axios({
    method: 'get',
    headers: {
      Authorization: AUTH_TOKEN,
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    ...config,
    data: qs.stringify(data)
  }).then(res => {
    removeLoading();
    const { data = {}, status } = res;
    if (data.status === 500) {
      Qmsg.error(data.msg);
      error();
      console.log('500');
    } else if (data.status === 200) {
      console.log('200', data.data);
      success(data)
    } else if (data.status === 404) {
      Qmsg.error(data.msg);
      console.log('404', data.msg);
    }
  }).catch(err => {
    removeLoading();
    throw new Error(err);
  })
}
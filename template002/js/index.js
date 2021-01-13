
const airClickHost = 'https://open.airclick.com';
const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODA5NjQyMzU1QHFxLmNvbSIsImNyZWF0ZWQiOjE2MTA1MTI1OTUyMTUsImV4cCI6MTYxMTExNzM5NX0.zJ3Ed5Q2GV6MV1twhJgguA0Anb5kHB8baU6v1f1jGJKFOlbUxYuIG6vmuJPiU7mKzNzkQyjLXL4QIwh4r5Jm-w';
const AUTH_TOKEN = 'Bearer' + token;

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

console.log(Element);
const request = (config) => {
  const { method, data, success = () => { }, error = () => { }, removeLoading = () => { } } = config;
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
    console.log('我是ress', res, data, data.status, data.status === 200, data.status == 200);
    if (data.status === 500) {
      Qmsg.error(data.msg);
      error();
      console.log('500');
    } else if (data.status === 200) {
      console.log('200', data.data);
      success(data.data)
    } else if (data.status === 404) {
      Qmsg.error(data.msg);
      console.log('404', data.msg);
    }
  }).catch(err => {
    removeLoading();
    throw new Error(err);
  })
}

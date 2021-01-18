// sigin action
// const airClickHost = 'https://open.airclick.com';
// const AUTH_TOKEN = "Bearer hahha"

// console.log('sfsdjfsdfdf');
// var qs = Qs;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

// let getValue = (selector) => $(selector).val();
// let getChecked = (selector) => $(selector).get(0).checked;

$(document).ready(function () {
  // .register-btn style 
  const renderRegBtnStyle = () => {
    const { reg_email, reg_code, reg_nickname, reg_pwd, reg_agree } = resetParams();
    if (reg_email && reg_code && reg_nickname && reg_pwd && reg_agree) {
      $('.register-btn').css({
        'background': '#a6c76d',
        'border-color': '#a6c76d',
      }).attr('disabled', false);
    } else {
      $('.register-btn').css({
        'background': '#bcc8a9',
        'border-color': '#bcc8a9',
      }).attr('disabled', true);
    }
  }
  // .signin-btn style 
  const renderSignBtnStyle = () => {
    const { singin_email, singin_pwd } = resetParams();
    if (singin_email && singin_pwd) {
      $('.signin-btn').css({
        'background': '#a6c76d',
        'border-color': '#a6c76d',
      }).attr('disabled', false);
    } else {
      $('.signin-btn').css({
        'background': '#bcc8a9',
        'border-color': '#bcc8a9',
      }).attr('disabled', true);
    }
  }
  // $('#register-email,#register-code,#register-nickname,#register-password').change(renderRegBtnStyle);
  $('#register-email,#register-code,#register-nickname,#register-password,#register-agree').keypress(renderRegBtnStyle);
  $('#singin-email,#singin-password').keypress(renderSignBtnStyle);
  $('#register-agree').click(renderRegBtnStyle);

  // get token
  // $.post(airClickHost + '/api/user/activeByPwd', {})

  // send verification code
  $('#register .register-btn-code').click(() => {
    const { reg_email } = resetParams();
    $('.register-btn-code').css({
      "border-color": '#e9e7e8',
      'background': '#e9e7e8',
      'color': '#b1afaf',
    }).text('(60s)').attr('disabled', true);
    let second = 59;
    const interval = setInterval(() => {
      if (second >= 0) {
        $('.register-btn-code').text(`(${second}s)`);
        --second;
      } else {
        $('.register-btn-code').css({
          "border-color": '#a6c76c',
          'background': '#a6c76c',
          'color': 'white',
        }).text('Send Code').attr('disabled', false);
        clearInterval(interval);
      }
    }, 1000);
    request({
      method: 'post',
      url: airClickHost + '/api/user/sendEmailCode',
      data: {
        email: reg_email,
      }
    })
  })

  // register by email
  $('#register .register-btn').on('click', () => {
    const { reg_email, reg_code, reg_nickname, reg_pwd } = resetParams();
    request({
      method: 'post',
      url: airClickHost + '/api/user/RegisterByEmail',
      data: {
        adminId: 23213,
        code: reg_code,
        email: reg_email,
        nickname: reg_nickname,
        pwd: reg_pwd
      }
    })
  })

  // signin
  $('#signin .signin-btn').on('click', () => {
    const { singin_email, singin_pwd } = resetParams();


    request({
      method: 'post',
      url: airClickHost + '/api/user/activeByPwd',
      data: {
        email: singin_email,
        pwd: singin_pwd,
      },
      success: (res) => {
        // console.log('login',$('.login >span').text('张志阵'));
        $('.login >span').text('')
        console.log('进入success', res.data);
        const { data } = res;

        localStorage.setItem('username', 'test-zzz');
        // localStorage.setItem('airClickToken', 'test-zzz');
        localStorage.setItem('airClickToken', data.tokenHead + data.token);
        localStorage.setItem('airClickUserId', data.userId);
        // window.location.href = window.location.origin + '/account.html';
      }
    })
  });
});
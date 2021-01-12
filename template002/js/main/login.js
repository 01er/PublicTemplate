// sigin action
const airClickHost = 'https://open.airclick.com';
const AUTH_TOKEN = "Bearer hahha"


var qs = Qs;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

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

// .register-btn style 
const renderRegBtnStyle = () => {
    const { singin_email, singin_pwd, reg_email, reg_code, reg_nickname, reg_pwd, reg_agree } = resetParams();
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

$(document).ready(function() {
    // $('#register-email,#register-code,#register-nickname,#register-password').change(renderRegBtnStyle);
    $('#register-email,#register-code,#register-nickname,#register-password,#register-agree').keypress(renderRegBtnStyle);
    $('#register-agree').click(renderRegBtnStyle);



    // get token
    // $.post(airClickHost + '/api/user/activeByPwd', {})

    $('#signin').on('click', () => {
        $.post(airClickHost + '/api/user/RegisterByEmail', {
            adminId: 23213,
            code: 213131313131,
            email: '23213@1321.com',
            nickname: 'zzz',
            pwd: 'sdfsdf'
        })
    });
    // send verification code
    $('.register-btn-code').click(() => {
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
            axios.post(airClickHost + '/api/user/sendEmailCode', qs.stringify({
                email: '1809642355@qq.com'
            })).then(function(res) {
                console.log('res---', res);

            })

        })
        // register by email
    $('#register .register-btn').on('click', () => {
        const { singin_email, singin_pwd, reg_email, reg_code, reg_nickname, reg_pwd } = resetParams();
        $.post(airClickHost + '/api/user/RegisterByEmail', {
            adminId: 23213,
            code: reg_code,
            email: reg_email,
            nickname: reg_nickname,
            pwd: reg_pwd
        })
    })

});
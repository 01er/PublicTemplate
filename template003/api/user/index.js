const path = 'api/api/user';

// 登录
const activeByPwd = `${path}/activeByPwd`;
// 注册
const RegisterByEmail = `${path}/RegisterByEmail`;
// 邮箱验证码
const sendEmailCode = `${path}/sendEmailCode`;
// 用户信息
const getUserInfo = `${path}/getUserInfo`;
// 修改密码
const updatePassword = `${path}/updatePassword`;
// 忘记密码
const forgetPassword = `${path}/forgetPassword`;
// 添加支付方式
const addPaymentMethod = `${path}/addPaymentMethod`;
// 删除支付方式
const deleteBank = `${path}/deleteBank`;
// 查询支付方式列表
const getPaymentMethodList = `${path}/getPaymentMethodList`;
// 编辑用户支付方式
const updatePaymentMethod = `${path}/updatePaymentMethod`;

export default {
    activeByPwd,
    RegisterByEmail,
    sendEmailCode,
    getUserInfo,
    updatePassword,
    forgetPassword,
    addPaymentMethod,
    deleteBank,
    getPaymentMethodList,
    updatePaymentMethod,
}
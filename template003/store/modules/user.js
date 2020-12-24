import userApi from '../../api/user';
import axios from 'axios'

const state = {
  userInfo: {}
};

const getters = {
  userInfo: (state) => {
    return state.userInfo
  },
}
const mutations = {
  setUserInfo: (state, userInfo) => {
    state.userInfo = userInfo;
  },
};

const actions = {
  // user login
  login: (context, userInfo) => {
    const { email, pwd } = userInfo;
    return new Promise((resolve, reject) => {
      axios.post(`${userApi.activeByPwd}?email=${email}&pwd=${pwd}`).then((res) => {
        console.log(res)
        context.commit('setUserInfo', res)
        resolve(res);
      })
    });
  },
  // user RegisterByEmail
  registerByEmail: (context, userInfo) => {
    const { adminId, code, email, nickname, pwd } = userInfo;
    return new Promise((resolve, reject) => {
      axios.post(`${userApi.RegisterByEmail}?adminId=${adminId}&code=${code}&email=${email}&nickname=${nickname}&pwd=${pwd}`).then((res) => {
        console.log(res)
        // context.commit('setUserInfo', res)
        resolve(res);
      }, (error) => {
        reject(error)
      })
    });
  },
  // user updatePassword 
  updatePassword: (context, userInfo) => {
    const { oldPassword, password } = userInfo;
    return new Promise((resolve, reject) => {
      axios.post(`${userApi.updatePassword}?oldPassword=${oldPassword}&password=${password}`).then((res) => {
        console.log(res)
        // context.commit('setUserInfo', res)
        resolve(res);
      }, (error) => {
        reject(error)
      })
    });
  },
  // user updatePassword 
  forgetPassword: (context, userInfo) => {
    const { email, password } = userInfo;
    return new Promise((resolve, reject) => {
      axios.post(`${userApi.forgetPassword}?email=${email}&password=${password}`).then((res) => {
        console.log(res)
        // context.commit('setUserInfo', res)
        resolve(res);
      }, (error) => {
        reject(error)
      })
    });
  },
  // sendEmailCode
  sendEmailCode: (context, email) => {
    return new Promise((resolve, reject) => {
      axios.post(`${userApi.sendEmailCode}?email=${email}`).then((res) => {
        resolve(res);
      }, (error) => {
        reject(error)
      })
    });
  },
  // getUserInfo
  getUserInfo: (context) => {
    return new Promise((resolve, reject) => {
      axios.post(userApi.getUserInfo).then((res) => {
        console.log(res)
        // context.commit('setUserInfo', res)
        resolve(res);
      }, (error) => {
        reject(error)
      })
    });
  },
  // addPaymentMethod 
  addPaymentMethod: (context, userInfo) => {
    const { address, bankName, bankNumber, cellphone, city, country, email, expiryDate, firstname, lastname, postcode, securityCode, state } = userInfo;
    return new Promise((resolve, reject) => {
      axios.post(`${userApi.addPaymentMethod}?address=${address}&bankName=${bankName}&bankNumber=${bankNumber}&cellphone=${cellphone}&city=${city}&country=${country}&email=${email}&expiryDate=${expiryDate}&firstname=${firstname}&lastname=${lastname}&postcode=${postcode}&securityCode=${securityCode}&state=${state}`).then((res) => {
        console.log(res)
        // context.commit('setUserInfo', res)
        resolve(res);
      }, (error) => {
        reject(error)
      })
    });
  },
  // updatePaymentMethod 
  updatePaymentMethod: (context, userInfo) => {
    const { address, bankName, bankNumber, cellphone, city, country, email, expiryDate, firstname, lastname, postcode, securityCode, state, uid } = userInfo;
    return new Promise((resolve, reject) => {
      axios.post(`${userApi.updatePaymentMethod}?address=${address}&bankName=${bankName}&bankNumber=${bankNumber}&cellphone=${cellphone}&city=${city}&country=${country}&email=${email}&expiryDate=${expiryDate}&firstname=${firstname}&lastname=${lastname}&postcode=${postcode}&securityCode=${securityCode}&state=${state}&uid=${uid}`).then((res) => {
        console.log(res)
        // context.commit('setUserInfo', res)
        resolve(res);
      }, (error) => {
        reject(error)
      })
    });
  },
  // deleteBank 
  deleteBank: (context, id) => {
    return new Promise((resolve, reject) => {
      axios.post(`${userApi.deleteBank}?id=${id}`).then((res) => {
        console.log(res)
        // context.commit('setUserInfo', res)
        resolve(res);
      }, (error) => {
        reject(error)
      })
    });
  },
  // getPaymentMethodList 
  getPaymentMethodList: (context, name) => {
    return new Promise((resolve, reject) => {
      axios.post(`${userApi.getPaymentMethodList}?name=${name}`).then((res) => {
        console.log(res)
        // context.commit('setUserInfo', res)
        resolve(res);
      }, (error) => {
        reject(error)
      })
    });
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

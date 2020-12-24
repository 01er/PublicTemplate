<template>
  <div>
    <Header />
    <Breadcrumbs title="Register" />
    <section class="register-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3>{{title}}</h3>
            <div class="theme-card">
              <ValidationObserver v-slot="{ invalid }">
              <form class="theme-form" @submit.prevent="onSubmit">
                <div class="form-group">
                  <label for="email">Your email address</label>
                  <ValidationProvider rules="required|email" v-slot="{ errors }" name="email">
                    <input
                      type="text"
                      class="form-control"
                      id="Email"
                      v-model="email"
                      placeholder="Email"
                      name="email"
                    />
                    <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="form-group code-input">
                  <label for="code">Verification code</label>
                  <ValidationProvider rules="required" v-slot="{ errors }" name="code">
                    <!-- <input
                      type="text"
                      class="form-control"
                      id="code"
                      v-model="code"
                      placeholder="Code"
                      name="code"
                    /> -->
                    <b-input-group>
                      <template v-slot:append>
                        <b-input-group-text  :class="{'redClass':!sendFlag, 'grayClass':sendFlag}" @click="getEmailCode">{{codeText}}</b-input-group-text>
                      </template>
                      <!-- <b-form-input></b-form-input> -->
                      <input
                      type="text"
                      class="form-control"
                      id="code"
                      v-model="code"
                      placeholder="Code"
                      name="code"
                    />
                    </b-input-group>
                    <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <!-- <div class="code-box"></div> -->
                </div>
                <div class="form-group">
                  <label for="nickname">Nickname</label>
                  <ValidationProvider rules="required" v-slot="{ errors }" name="nickname">
                    <input
                      type="text"
                      class="form-control"
                      id="nickname"
                      v-model="nickname"
                      placeholder="Nickname"
                      name="nickname"
                    />
                    <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="Password">Password</label>
                  <ValidationProvider rules="required" v-slot="{ errors }" name="Password">
                    <input
                      type="password"
                      class="form-control"
                      id="Password"
                      v-model="pwd"
                      placeholder="Password"
                      name="Password"
                    />
                    <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="form-row">
                  <button
                  type="submit"
                  class="btn btn-solid mt-2"
                  :disabled="invalid || disabledFlag"
                >{{RegisterText}}</button>
                </div>
              </form>
              </ValidationObserver>
            </div>
          </div>
          <div class="col-lg-6 right-login">
            <h3>{{logintitle}}</h3>
            <div class="theme-card authentication-right">
              <h6 class="title-font">Have an account</h6>
              <p>If you are already a member of Ultikart store, please log in with your mobile phone number. The system will automatically bind your official account and merge you in Ultikart store
Ultikart shopping points on the official website and store.</p>
              <!-- <a href="/page/account/register" class="btn btn-solid">Create an Account</a> -->
              <nuxt-link :to="{ path: '/page/account/login-firebase' }" class="btn btn-solid">LOGIN</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      sendFlag: false,
      logintitle: 'Login',
      title: 'create account',
      email: null,
      password: null,
      adminId: null,
      code: null,
      nickname: null,
      pwd: null,
      timer: null,
      count: null,
      codeText: 'Send Code',
      RegisterText: 'create account',
      disabledFlag: false
    }
  },
  mounted () {
  },
  methods: {
    getEmailCode() {
      const myreg = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/
      if (!myreg.test(this.email)) {
        this.$toasted.show('The email field must be a valid email', {
          theme: 'bubble',
          position: 'top-center',
          type: 'error',
          duration: 3000
        })
        return
      }
      if(this.sendFlag) return
      const TIME_COUNT = 60;
      this.sendFlag = true;
      this.codeText = `${TIME_COUNT} s`;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count--;
          this.codeText = `${this.count} s`;
        } else {
          this.sendFlag = false;
          this.codeText='Send Code'
          clearInterval(this.timer);
          this.timer = null;
        }
        }, 1000)
      }
      this.$store.dispatch('user/sendEmailCode',this.email).then(({ data }) => {
        this.$toasted.show(data.msg, {
          theme: 'toasted-primary',
          position: 'top-center',
          type: 'error',
          duration: 3000
        })
      }).finally(() => {
      });
    },
    onSubmit() {
      this.disabledFlag = true
      this.RegisterText = 'create account...'
      const userInfo = {
        adminId : this.tools.adminId,
        code: this.code,
        email: this.email,
        nickname: this.nickname,
        pwd: this.pwd,
      }
      this.$store.dispatch('user/registerByEmail',userInfo).then(({ data }) => {
        if(data.status === 200) {
          this.$toasted.show(data.msg, {
            theme: 'toasted-primary',
            position: 'top-center',
            type: 'error',
            duration: 3000
          })
          this.$router.push('/page/account/login-firebase')
        } else {
          this.$toasted.show(data.msg, {
            theme: 'bubble',
            position: 'top-center',
            type: 'error',
            duration: 3000
          })
        }
      }).finally(() => {
        this.disabledFlag = false
        this.RegisterText = 'create account'
      });
    }
  }
}
</script>

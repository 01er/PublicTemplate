<template>
  <div>
    <Header />
    <Breadcrumbs />
    <section class="login-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3>{{logintitle}}</h3>
            <div class="theme-card">
              <ValidationObserver v-slot="{ invalid }">
                <form class="theme-form" @submit.prevent="signUp">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <ValidationProvider rules="required|email" v-slot="{ errors }" name="Email">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="email"
                        placeholder="Email"
                        name="email"
                        required
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <ValidationProvider rules="required" v-slot="{ errors }" name="password">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="password"
                        placeholder="Enter your password"
                        required
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-solid mt-2"
                    :disabled="invalid"
                  >Login</button>
                  <!-- <a class="btn-solid btn" href="javascript:void(0)" @click="signUp"> Login </a> -->

                  <!-- Social Media -->
                  <div class="social mt-3">
                    <div class="form-group btn-showcase d-flex">
                      <button
                        @click="socialLoginFacebook"
                        class="btn social-btn btn-fb d-inline-block"
                      >
                        <i class="fa fa-facebook"></i>
                      </button>
                      <button @click="socialLogin" class="btn social-btn btn-twitter d-inline-block">
                        <i class="fa fa-google"></i>
                      </button>
                      <button
                        @click="socialLoginTwitter"
                        class="btn social-btn btn-google d-inline-block"
                      >
                        <i class="fa fa-twitter"></i>
                      </button>
                      <button
                        @click="socialLoginGit"
                        class="btn social-btn btn-github d-inline-block"
                      >
                        <i class="fa fa-github"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </ValidationObserver>
            </div>
          </div>
          <div class="col-lg-6 right-login">
            <h3>{{registertitle}}</h3>
            <div class="theme-card authentication-right">
              <h6 class="title-font">Create A Account</h6>
              <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
              <!-- <a href="/page/account/register" class="btn btn-solid">Create an Account</a> -->
              <nuxt-link :to="{ path: '/page/account/register' }" class="btn btn-solid">Create an Account</nuxt-link>

            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import firebase from 'firebase'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
import Userauth from './auth/auth'
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm'

export default {
  components: {
    Header,
    Footer,
    ValidationProvider,
    ValidationObserver,
    Breadcrumbs
  },
  data() {
    return {
      logintitle: 'Login',
      registertitle: 'New Customer',
      errors: [],
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      const userInfo = {
        email: this.email,
        pwd: this.password,
      }
      this.$store.dispatch('user/login',userInfo).then(({ data }) => {
        this.$toasted.show(data.msg, {
          theme: 'bubble',
          position: 'top-center',
          type: 'error',
          duration: 4000
        })
      }).finally(() => {
      });
    },
    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log('Result', result)
          Userauth.localLogin(result)
          this.$router.replace('/')
        })
        .catch((err) => {
          alert('Oops. ' + err.message)
        })
    },
    socialLoginFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log('Result', result)
          Userauth.localLogin(result)
          this.$router.replace('/')
        })
        .catch((err) => {
          alert('Oops. ' + err.message)
        })
    },
    socialLoginTwitter() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log('Result', result)
          Userauth.localLogin(result)
          this.$router.replace('/')
        })
        .catch((err) => {
          alert('Oops. ' + err.message)
        })
    },
    socialLoginGit() {
      const provider = new firebase.auth.GithubAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log('Result', result)
          Userauth.localLogin(result)
          this.$router.replace('/')
        })
        .catch((err) => {
          alert('Oops. ' + err.message)
        })
    }
  }
}
</script>

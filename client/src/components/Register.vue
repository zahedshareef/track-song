<template>
  <div>
   <h1>Register</h1>
   <input type="email" name="email" v-model="email" placeholder="email" />
   <br>
   <input type="password" name="password" v-model="password" placeholder="password" />
   <br/>
   <button @click="register">Register</button>
  </div>
</template>
<script>
import authenticationService from '@/services/authenticationService'
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  methods: {
    async register () {
      const response = await authenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  },
  watch: {
    email (value) {
      console.log('email changed to: ', value)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello'
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<script setup>
  import { RouterLink, useRouter } from 'vue-router'
  import { auth } from '../firebaseConfig'
  import { ref, computed, onBeforeMount } from 'vue'
  import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider,signInWithPopup } from 'firebase/auth'

  const router = useRouter()
  const provider = new GoogleAuthProvider()
  const github = new GithubAuthProvider()

  const user = computed(() => {
    return auth.currentUser
  })

  onBeforeMount(() => {
    if (auth.currentUser) {
       router.push({
      path: '/createpoll'
    })
    }
  })
  
  const formDetails = ref({
    email: '',
    password: '' 
  })
 const handleSubmit = () => {
  signInWithEmailAndPassword (getAuth(), formDetails.value.email, formDetails.value.password)
  .then(() => {
    formDetails.value = {
      email: '',
      password: ''
    }
    router.push({
      path: '/createpoll'
    })
  })
   .catch(error => {
     alert(error.message)
   })
}

const googleLogin = () => {
  signInWithPopup(getAuth(), provider)
   .then(() => {
     router.push({
      path: '/createpoll'
    })
   })
  .catch(error => {
    alert(error.message)
  })
}
 const githublogin = () => {
    signInWithPopup(getAuth(), github)
   .then(() => {
     router.push({
      path: '/createpoll'
    })
   })
  .catch(error => {
    alert(error.message)
  })
 }
  
   
</script>
<template>

 <header class="flex items-center justify-between p-3 shadow-lg">
    <h1 class="text-xl">Fast 
      <span class="text-[#0FCB18]">Poll</span>
    </h1>
    <button class="bg-[#0FCB18] p-2 rounded-md text-white">Create Poll</button>
    <div class="flex items-center justify-evenly space-x-3">
      <button class="text-red-500">Public Poll</button>
      <div class="space-x-2 border-l border-gray-300 px-3">
        <RouterLink to="/login">
      <button class="text-gray-700">login</button>
        </RouterLink>
        <RouterLink to="/signup">
      <button class="bg-[#1385D2] text-white p-2 rounded-md">Signup</button>
        </RouterLink>
      </div>
    </div>
 </header>
  
  <section class="mx-auto max-w-md rounded-lg place-items-center justify-center grid my-12 bg-gray-200 box-shadow-white shadow-2xl">
    <div class="text-center">
      <h1 class="text-xl sm:text-2xl text-bold">
        Log in to your account
      </h1>
      <p class="my-2">Or
      <RouterLink to="/signup">
        <button class="text-[#0FCB18]">create a free account</button>
      </RouterLink>
      </p>
    </div>
    <form @submit.prevent="handleSubmit" class="max-auto max-w-sm p-3 border border-t-2 border border-t-[#0FCB18]">
      <div class="space-y-2 my-2">
        <label class="block">Email</label>
        <input v-model="formDetails.email" type="email" class="w-full focus:outline-none p-2 border brder-gray-400 rounded-md focus:ring-1 focus:border-0">
      </div>
      <div class="space-y-2 my-2">
      <label class="block">Password</label>
       <input v-model="formDetails.password" type="password" class="w-full focus:outline-none p-2 border brder-gray-400 rounded-md focus:ring-1 focus:border-0">
    </div>

      <button @click="createpoll" class="w-full bg-[#0FCB18] text-white px-3 py-2 rounded-md my-4">Login</button>
      <div class="flex items-center justify-center space-x-2 my-4">
      <div class="w-full h-[2px] bg-gray-300"></div>
        <p class="shrink-0">Or continue with</p>
      <div class="w-full h-[2px] bg-gray-300 "></div>
      </div>
      <div class="flex items-center justify-evenly gap-2 " >
        <div @click="googleLogin" class="flex items-center space-x-2 border border-gray-300 p-3 sm:p-3 rounded-md justify-center cursor-pointer">
          <font-awesome-icon icon="fa-brands fa-google" />
          <p>Google</p>
        </div>
                <div @click="githublogin" class="flex items-center space-x-2 border border-gray-300 p-3 rounded-md justify-center cursor-pointer">
                  <font-awesome-icon icon="fa-brands fa-github" />
          <p>GitHub</p>
        </div>
                <div class="flex items-center space-x-2 border border-gray-300 p-3 rounded-md justify-center cursor-pointer">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
          <p>Twitter</p>
        </div>
      </div>
    </form>
  </section>
</template>
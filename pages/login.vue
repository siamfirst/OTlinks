<template>
 
  <div class="w-full bg-red-400 flex-col">
  </div>
  <!-- login -->
  <div v-if="!openreset" class="flex min-h-full flex-col justify-center px-6 pt-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="/fourty_OT.png" alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
    </div>
    <form @submit.prevent="login" class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input type="text" v-model="uname"
            class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between">
          <label for="password" class=" block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input type="text" v-model="upass"
            class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div>
        <button type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
      </div>
      <p class="mt-10 text-center text-sm text-gray-500">
        This website for OT member (Chiang Rai). <br> Contact : OT department of Chiang Rai Hospital.
      </p>
    </form>
  </div>
  <div class="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8">
    <button @click="openresetpass" v-if="!openreset">Forget passsword</button>
  </div>


  <!-- reset password -->
  <div v-if="openreset" class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="/fourty_OT.png" alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Reset Email</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="resetemail" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input type="text" v-model="email"
              class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
        </div>
      </form>
      <p class="mt-10 text-center text-sm text-gray-500">
        Please check your Email after reset password
      </p>
    </div>
  </div>

</template>



<script setup lang="ts">
import {
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
import { openuser } from '~/store/user'


const auth = inject('auth')
const user = inject('user')
const uname = ref()
const upass = ref()
const openreset = ref(false)
const store = openuser()

function openresetpass() {
  openreset.value = true
}

async function login() {
  signInWithEmailAndPassword(auth, uname.value, upass.value)
    .then((userCredential) => {
      if (user?.value?.email != null) {
        store.compairadmin(user?.value?.email)
        navigateTo('/otworking')
        console.log(userCredential)
      } else {
        window.alert("email or pass was wrong")
        navigateTo('/login')
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert(errorCode + errorMessage)
    });
  //window.alert('User name is :' + uname.value + '  and Password is : ' + upass.value)
}


function resetemail() {
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      openreset.value = false
      window.alert(
        "Password reset email sent!"
      )
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}//resetemail
</script>

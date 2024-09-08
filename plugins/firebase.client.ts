import { initializeApp } from 'firebase/app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: "AIzaSyA-nRkLSjc2YD2uVoQSw_qTm9WSXnqQyIQ",
  authDomain: "ot-link-58d76.firebaseapp.com",
  projectId: "ot-link-58d76",
  storageBucket: "ot-link-58d76.appspot.com",
  messagingSenderId: "687468469404",
  appId: "1:687468469404:web:98dcfb0896e426c296e159",
  measurementId: "G-XXSFSX4EFT"
  }
  initializeApp(firebaseConfig)
  const { auth,user ,signout } = useAuth()
  const {db} = useDb()
  
  nuxtApp.vueApp.provide('signout',signout)
  nuxtApp.vueApp.provide('db',db)
  nuxtApp.vueApp.provide('auth', auth)
  nuxtApp.vueApp.provide('user', user)
})
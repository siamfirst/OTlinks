<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="/fourty_OT.png" alt="OTCR">
    </div>
    <div class="text-xs text-gray-400 flex justify-center">
    {{ me }}{{ adduser }}
    </div>

    <div class="flex justify-between">
      <div class="bg-transparent  text-sm text-blue-500 font-semibold  px-2 py-2">

      </div>
  <button class="rounded-md bg-green-400 focus-visible:outline-2 px-2 mt-1" @click="logout">logout</button>
    </div>
    <!-- refer back -->
    <div class="flex" v-if=admin>
      <nuxt-link to="/chiangrai-refer" class="text-red-600 text-sm">refer back</nuxt-link>|
      <button @click="showuserdialog" class="text-green-600 text-sm">open form new user</button>|
      <button @click="hinduserdialog" class="text-green-600 text-sm">close form new user</button>
    </div>
    <!-- New user form -->
    <div v-if=admin>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" v-if=adduser >
      <form @submit.prevent="Signup" class="space-y-6 pb-6 rounded-md border-2 px-4">
        <div class="w-full flex justify-center text-green-700">New user form</div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address of member</label>
          <div class="mt-2">
            <input type="text" v-model="uname"
              class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class=" block text-sm font-medium leading-6 text-gray-900">Password of memer</label>
          </div>
          <div class="mt-2">
            <input type="text" v-model="upass"
              class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <div>
            <label for="text" class="pl-2 block text-sm font-medium leading-6 text-gray-900">
              Hospital</label>
            <select v-model="hospitalpt"
              class="mb-6  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option v-for="i in hospitalname" v-bind:key="i.nameH" :value="i.val">{{ i.nameH }}</option>
            </select>
          </div>
          <button type="submit"
            class=" flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
            new member</button>
        </div>
      </form>
      <div>
      </div>
    </div>
    </div>

   

    <!-- data -->

    <ul>
      <li v-for="todo in todos" :key="todo.id" class="pl-1 pt-4 mt-2">
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <div class="space-y-6 pb-6 rounded-md border-2 px-2">
            <div class=" pt-2">
              <p class="text-xs">{{ todo.refer_paper }}</p>
              <img :src="todo.refer_paper" alt="" class=" w-10 h-15 ">
              <p class="text-xs">{{ todo.Hospital }}</p>
              <div>
                <p class="text-gray-900 font-bold text-sm ">{{ todo.Name }} {{ todo.Surname }}</p>
                <p class="text-gray-600 text-xs mb-2">Tel. {{ todo.Tel }}</p>
              </div>
              <p class="text-gray-700 text-xs">Dx. {{ todo.Dx }}</p>
              <p class="text-gray-700 text-xs">From Dr. {{ todo.Dr_note }}</p>
              <p class="text-gray-400 text-xs"> {{ new Date(todo.date_refer.seconds *
        1000).toLocaleDateString("th-TH") }}
                {{ new Date(todo.date_refer.seconds * 1000).toLocaleTimeString("th-TH") }}
              </p>
            </div>
            <div class="flex flex-col">
              <div class="flex justify-between">
                <div>
                  <p class="text-sm bg-yellow-300">OT note </p>
                </div>
                <div class="flex flex-wrap">
                  <p class="text-sm">last F/U to now =</p>
                  <p class="bg-red-400 rounded-md px-3"> {{ getdays(todo.OT_note_date.toDate(), todo.date_refer.toDate())
                    }}</p>
                  <p class="text-sm">วัน</p>
                </div>
              </div>
              <div class="mt-2">
                <p class="text-xs bg-green-200">
                  {{ todo.OT_note }}
                </p>
                <p class="text-xs text-gray-400 mb-2">
                  {{ new Date(todo.OT_note_date.seconds * 1000).toLocaleDateString("th-TH") }}
                  {{ new Date(todo.OT_note_date.seconds * 1000).toLocaleTimeString("th-TH") }}
                </p>
      
                <textarea type="text" v-model="anser" v-if= !admin 
                  class=" pl-2 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"></textarea>
              </div>
              <button class="w-1/4 h-6 text-sm bg-red-400 rounded-md " v-if=!admin
                @click="anserme(anser, todo.Iditem)">ตอบกลับ</button>
            </div>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>
<script setup lang="ts">
import { createUserWithEmailAndPassword ,signOut } from "firebase/auth";
import { doc, setDoc, getDocs, arrayUnion, query, where } from 'firebase/firestore'
import { collection } from "firebase/firestore";
import { openuser } from '~/store/user'
import { storeToRefs } from 'pinia'


const { admin,adduser } = storeToRefs(openuser())
const opn = openuser()

const uname = ref()
const upass = ref()
const hospitalpt = ref()
const auth = inject('auth')
const user = inject('user')
const anser = ref()
const db = inject('db')
const todos = ref()
const hospitalnameitem = ref()
const me = ref()


onMounted(() => {
  me.value = user?.value?.email
  readdata()
 
})

function showuserdialog() {
  opn.showdialoguser()
}

function hinduserdialog() {
  opn.hinddialoguser()
} 
 function logout() {
  signOut(auth).then(() => {
        navigateTo('/login')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert(errorCode + errorMessage)
    });
  //window.alert('User name is :' + uname.value + '  and Password is : ' + upass.value)
}

async function readdata() {
  const todoss: any = [];
  if (user?.value?.email == "ot.rehab.crh@gmail.com"){
    const qcr = query(collection(db, 'pt'))
    const querySnapshotcrt = await getDocs(qcr);
    querySnapshotcrt.forEach((doc) => {
      console.log(doc.id, "s => ", doc.data());
      const ptmembercr = {
        Iditem: doc.id,
        Dr_note: doc.data().Dr_note,
        Dx: doc.data().Dx,
        Hospital: doc.data().Hospital,
        Name: doc.data().Name,
        Surname: doc.data().Surname,
        OT_note: doc.data().OT_note,
        OT_note_date: doc.data().OT_note_date,
        Tel: doc.data().Tel,
        date_refer: doc.data().date_refer,
        refer_paper: doc.data().refer_paper,
        user_email_hos: doc.data().user_email_hos
      }
      todoss.push(ptmembercr)
      todos.value = todoss
     

    })

  } else {
    const q = query(collection(db, 'user'),where("Email", "==", user?.value?.email))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data().Hospital);
      hospitalnameitem.value = doc.data().Hospital
    })
    const items = query(collection(db, 'pt'),where("Hospital", "==", hospitalnameitem.value))
    const querySnapshotitem = await getDocs(items);
    querySnapshotitem.forEach((doc) => {
      console.log(doc.id, "s => ", doc.data());
      // console.log('iditem :' + doc.id)
      const ptmember = {
        Iditem: doc.id,
        Dr_note: doc.data().Dr_note,
        Dx: doc.data().Dx,
        Hospital: doc.data().Hospital,
        Name: doc.data().Name,
        Surname: doc.data().Surname,
        OT_note: doc.data().OT_note,
        OT_note_date: doc.data().OT_note_date,
        Tel: doc.data().Tel,
        date_refer: doc.data().date_refer,
        refer_paper: doc.data().refer_paper,
        user_email_hos: doc.data().user_email_hos
      }
      todoss.push(ptmember)
      todos.value = todoss
      
    })
  }
}

function anserme(textans: any, id: any) {
  // console.log('from anserme: '+textans+id)
  setDoc(doc(db, "pt", id), {
    OT_note: user?.value?.email + "<< >>" + textans,
    OT_note_date: new Date(),
    user_email_hos: arrayUnion(user?.value?.email)
  }, { merge: true })
    .then(() => {
      anser.value = ''
      console.log('Successfully updated the record')
      window.location.reload()
    })
    .catch(error => {
      console.error('There was an error editing the record: ' + error)
    })
}

async function Signup() {
  await createUserWithEmailAndPassword(auth, uname.value, upass.value)
    .then((userCredential) => {
      const docData = {
        Email: uname.value,
        Hospital: hospitalpt.value
      }
      const OTRef = doc(collection(db, 'user'))
      setDoc(OTRef, docData)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
    .then(
      () => {
        uname.value = "",
          upass.value = ""
      }
    )
}

function getdays(dat: any, crhdat: any) {
  if (dat == crhdat) {
    return 0
  } else {
    const firstDate = new Date(dat) // 10th May, 2022
    const secondDate = new Date() // today, 14th May, 2022
    const firstDateInMs = firstDate.getTime()
    const secondDateInMs = secondDate.getTime()
    const differenceBtwDates = secondDateInMs - firstDateInMs
    const aDayInMs = 24 * 60 * 60 * 1000
    const daysDiff = Math.round(differenceBtwDates / aDayInMs)
    //console.log(daysDiff)
    return daysDiff
  }

}

const hospitalname = [
  {
    nameH: 'Chiang Rai Hospital',
    val: 'craih'
  }, {
    nameH: 'Maesai Hospital',
    val: 'msaih'
  }, {
    nameH: 'Maejan Hospital',
    val: 'mchh'
  }, {
    nameH: 'MaeLoa Hospital',
    val: 'mlh'
  }, {
    nameH: 'Somdetphayannasangwon Hospital',
    val: 'sdpyswh'
  }, {
    nameH: 'Phayamengrai Hospital',
    val: 'pymrh'
  }, {
    nameH: 'Phan Hospital',
    val: 'ph'
  },
  {
    nameH: 'Mae suai Hospital',
    val: 'msuaih'
  },
  {
    nameH: 'Wiangpapao Hospital',
    val: 'wpph'
  }, {
    nameH: 'Maephaluang Hospital',
    val: 'mfuh'
  }, {
    nameH: 'Maephaluang medical center ',
    val: 'centermfh'
  }, {
    nameH: 'Padad Hospital',
    val: 'pdh'
  }, {
    nameH: 'Turng Hospital',
    val: 'th'
  }, {
    nameH: 'Yupparat Chiang Khong Hospital',
    val: 'sdpyckh'
  }, {
    nameH: 'Wiang Kaen Hospital',
    val: 'wkh'
  }, {
    nameH: 'Doi Luang Hospital',
    val: 'dlh'
  }, {
    nameH: 'Chiang Rung Hospital',
    val: 'crungh'
  }, {
    nameH: 'Chiang Saen Hospital',
    val: 'csh'
  }, {
    nameH: 'Khun Tan Hospital',
    val: 'kth'
  }
]
</script>
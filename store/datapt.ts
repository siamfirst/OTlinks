import { defineStore } from "pinia";

export const storept = defineStore("storept",()=>{
    const todostore = ref() ;
   
    return{
    todostore,
    }
    
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(storept, import.meta.hot))
}
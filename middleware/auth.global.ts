export default defineNuxtRouteMiddleware(async(to,from)=>{
    const user =inject('user')

    if(user?.value?.email && to.name ==='login'){
        return navigateTo('/otworking')
    }
    if(!user?.value?.email && to.name !=='login'){
        return navigateTo('/login')
    }
})
export default defineEventHandler(async (event) => {
  const {message,token}=await readBody(event)
  console.log('line message ='+ message+token)
  try {
    const response =await $fetch('https://notify-api.line.me/api/notify',{
  method:'POST',
  headers:{
    'Authorization':'Bearer cZySzjlBOfqn50oz2cNyEitfRoHRWoW2DdfdNo2C5LT',
    'Content-Type':'application/x-www-form-urlencoded'
  },
  body:new URLSearchParams({
    message:message
  })
})
return response
  } catch (error) {
    console.log( "line message error" +error)
  }
})


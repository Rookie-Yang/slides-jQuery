$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')
$('.images > img:nth-child(4)').addClass('enter')

let index = 1
setInterval(()=>{
  $(`.images > img:nth-child(${x(index)})`).removeClass('current').addClass('leave')
  .one('transitionend',(e)=>{
    $(e.currentTarget).removeClass('leave').addClass('enter')
  })  
  $(`.images > img:nth-child(${x(index+1)})`).removeClass('enter').addClass('current')
  index++
},3000)

function x(n){
  if(n>4){
   n%=4
   if(n===0){
     n=4
   }
  }
  return n
}
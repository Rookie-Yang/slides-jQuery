

let index
init()

let timer=setInterval(()=>{
  makeLeave(getImage(index))
  .one('transitionend',(e)=>{
    makeEnter($(e.currentTarget))
  })  
  makeCurrent(getImage(index+1))
  index++
},1000)

document.addEventListener('visibilitychange',function(e){
  if(document.hidden){
    window.clearInterval(timer)
  }else{
    timer=setInterval(()=>{
      makeLeave(getImage(index))
      .one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))
      })  
      makeCurrent(getImage(index+1))
      index++
    },1000)
  }
})



function getImage(index){
  return $(`.images > img:nth-child(${x(index)})`)
}

function x(index){
  if(index>4){
    index%=4
   if(index===0){
    index=4
   }
  }
  return index
}

function makeLeave($node){
  return $node.removeClass('current enter').addClass('leave')
}

function makeCurrent($node){
  return $node.removeClass('leave enter').addClass('current')
}

function makeEnter($node){
  return $node.removeClass('leave current').addClass('enter')
}

function init(){
  index =1
  $(`.images > img:nth-child(${index})`).addClass('current')
  .siblings().addClass('enter')
}
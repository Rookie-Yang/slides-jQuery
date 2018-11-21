

let index
init()
setInterval(()=>{
  makeLeave(getImage(index))
  .one('transitionend',(e)=>{
    makeEnter($(e.currentTarget))
  })  
  makeCurrent(getImage(index+1))
  index++
},3000)



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
  $node.removeClass('current enter').addClass('leave')
  return $node
}

function makeCurrent($node){
  $node.removeClass('leave enter').addClass('current')
}

function makeEnter($node){
  $node.removeClass('leave current').addClass('enter')
}

function init(){
  index =1
  $(`.images > img:nth-child(${index})`).addClass('current')
  .siblings().addClass('enter')
}
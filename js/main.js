$buttons = $('#buttonWrapper > button')
$slides = $('#slides')
$images = $slides.children('img')
let current = 0

makeFakeslides()
$slides.css({transform:"translateX(-600px)"})
bindEvents()
$('#previous').on('click',function(){
  goToslide(current-1)
})
$('#next').on('click',function(){
  goToslide(current+1)
})

function bindEvents(){
  $('#buttonWrapper').on('click','button',function(e){
    let $button = $(e.currentTarget)
    let index = $button.index()
    goToslide(index)
  })

}
let timer = setInterval(function(){
  goToslide(current+1)
},2000)

$('.container').on('mouseenter',function(){
  window.clearInterval(timer)
})

$('.container').on('mouseleave',function(){
  timer = setInterval(function(){
    goToslide(current+1)
  },2000)
})

function goToslide(index){
  if(index>$buttons.length-1){
    index=0
  }else if(index<0){
    index =$buttons.length-1
  }
  if(current === $buttons.length - 1 && index === 0){
    //最后一张到第一张
    $slides.css({transform : `translateX(${-($buttons.length + 1)*600}px)`})
    .one('transitionend',function(){
      $slides.hide().offset()
      $slides.css({transform : `translateX(${-(index+1)*600}px)`}).show()
    })
  }else if(current === 0 && index === $buttons.length - 1){
    //第一张到最后一张
     $slides.css({transform : `translateX(0px)`})
    .one('transitionend',function(){
      $slides.hide().offset()
      $slides.css({transform : `translateX(${-(index+1)*600}px)`}).show()
    })
  }else{
    $slides.css({transform : `translateX(${-(index+1)*600}px)`})
  }
  current = index
}


function makeFakeslides(){
  $firstCopy = $images.eq(0).clone(true)
  $lastCopy = $images.eq($images.length-1).clone(true)
  
  $slides.append($firstCopy)
  $slides.prepend($lastCopy)
}
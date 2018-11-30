$buttons = $('#buttonWrapper > button')
$slides = $('#slides')
$images = $slides.children('img')
$firstCopy = $images.eq(0).clone(true)
$lastCopy = $images.eq($images.length-1).clone(true)

$slides.append($firstCopy)
$slides.prepend($lastCopy)
let current = 0
$buttons.eq(0).on('click',function(e){
  if(current ===3){

  }
  $slides.css({transform : 'translateX(-600px)'})
  current = 0
})
$buttons.eq(1).on('click',function(e){
  $slides.css({transform : 'translateX(-1200px)'})
  current = 1
})
$buttons.eq(2).on('click',function(e){
  $slides.css({transform : 'translateX(-1800px)'})
  current = 2
})
$buttons.eq(3).on('click',function(e){
  if(current===0){

  }
  $slides.css({transform : 'translateX(-2400px)'})
  current = 3
})
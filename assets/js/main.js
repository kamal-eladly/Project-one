


$('.buttons button').click(function(){
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  btnId=$(this).attr('id');
  if($(this).eq(0)){
    $(`.portfolio .content .row >div`).fadeIn();

  }
  $(`.portfolio .content .row >div[custom=${btnId}]`).siblings().css("display","none");
$(`.portfolio .content .row >div[custom=${btnId}]`).css("display",'block');

})


$(window).scroll(function(){

    if($(this).scrollTop()> $('#services').offset().top-100){
    
        $("#nav").css({
          backgroundColor:"white",
        })

        $('.navlink').css("color","black")
        $('.btn-nav').css("color","black")

    }
    else{
      $("#nav").css('backgroundColor',"transparent")
      $('.navlink').css("color","white")
      $('.btn-nav').css("color","white")

    }
})


let input=document.getElementsByClassName('form-control')
console.log(input);

for(let i=0;i<input.length;i++){
  input[i].addEventListener('focus',function(){
    this.style.borderBottom="2px solid #fa450e";
  });
}

for(let i=0;i<input.length;i++){
  input[i].addEventListener('blur',function(){
    this.style.borderBottom="2px solid white";
  });
}

$(document).ready(function(){
  $('.sk-folding-cube').fadeOut(1000,function () {
    $('.loading').fadeOut(1000,function(){
    $('body').css('overflowY','visible')
  })  
  });
})
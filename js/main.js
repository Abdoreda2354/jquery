 /// <reference types="../@types/jquery" />

 var mediaQuery = window.matchMedia("(max-width: 994px)");
 if (mediaQuery.matches) {
    $('nav').removeClass('d-none')
    $('.leftmenue').addClass('d-none')
    $('.icon').addClass('d-none')
} else {
    $('nav').addClass('d-none')
    $('.leftmenue').removeClass('d-none')
    $('.icon').removeClass('d-none')

}
 function handleMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
        $('nav').removeClass('d-none')
        $('.leftmenue').addClass('d-none')
        $('.icon').addClass('d-none')
    } else {
        $('nav').addClass('d-none')
        $('.leftmenue').removeClass('d-none')
        $('.icon').removeClass('d-none')

    }
  }
  $(window).on( 'resize',function() {
    var mediaQuery = window.matchMedia("(max-width: 994px)");
      handleMediaQueryChange(mediaQuery);
      mediaQuery.addListener(handleMediaQueryChange);
  });
//////////////////////////////////////////////////////////////////////////////////////////



let scroll = $('#section2').offset().top-150
$(window).on('scroll' ,function() {
 let scrolltop = $(window).scrollTop();
 if ( scroll<= scrolltop)  {
    $('nav').css('cssText' , `
    background-color: #111111;
    `)
    $('nav a').css('cssText' , `
    color: #fff;
    `)
    $('nav button i').css('cssText' , `
    color: #fff;
    `)
    console.log(navHight);


 }
 if ( scroll> scrolltop) {
    $('nav').css('cssText' , `
    background-color: #ffffff;
    `)
    $('nav a').css('cssText' , `
    color: #000;
    `)
    $('nav button i').css('cssText' , `
    color: #000;
    `)

 }

  });

/////////////////////////////////////////////////////////////////////////////////////////////

$('.icon').on('click' , function(){
    $('.leftmenue').css('cssText' , `
    left: 0;
    `)
    $('.icon').css('cssText' , `
    left: 231px;
    `)
})
$('.exit').on('click' , function(){
    $('.leftmenue').css('cssText' , `
    left: -220px;
    `)
    $('.icon').css('cssText' , `
    left:20px;
    `)
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.accordion').on('click', function({target}){
    // $(target).slideToggle(1000)
    let cardBody = $(target).next();
    let siblings = $(target).parent().siblings();
    console.log(siblings);
    for (let i = 0; i < siblings.length; i++) {
        
       $(siblings[i]).children().last().slideUp(500);
    }
    $(cardBody).slideToggle(500);
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let countDownDate = new Date("Dec 31 , 2023 23:59:59").getTime(); 
let counter = setInterval(function(){
    let dateNow= new Date().getTime();
    let diffDate = countDownDate-dateNow
    let Days = Math.floor( diffDate / (1000*60*60*24));
    let hours =  Math.floor(diffDate % (1000*60*60*24) / (1000*60*60))
    let min =  Math.floor(diffDate % (1000*60*60)/ (1000*60))
    let sec =  Math.floor(diffDate % (1000*60)/ (1000))
    
    $('.days').html(Days +" " +  "D")
    $('.hours').html(hours +" "+ "h")
    $('.minutes').html(min +" "+ "m")
    $('.sec').html(sec +" "+ "s")
}, 1000)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let count =100
$('textarea').on( 'keyup' , function(){
    let lenght = $('textarea').val().length;
    console.log(lenght);
    count =100-lenght
    $('#chars').html(count);

    if (count<= 0) {
      $('#chars').html('your available character finished ') 
    }
})
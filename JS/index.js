// open section
$('#open').on('click', function(){
    $('#openButton').animate({ marginLeft :'200px'}  )
    $('#leftMenu').animate({ width:'200px'}  )
})
$('.closebtn').on('click', function(){
    $('#leftMenu').animate({ width:'0'}  )
    $('#openButton').animate({ marginLeft :'0'},1100  ) 
})

// singer section
$('.toggleFirst').on('click', function(){
    $(".innerFirst").slideToggle(700);
})
$('.toggleSecond').on('click', function(){
    $(".innerSecond").slideToggle(700);
})
$('.toggleThird').on('click', function(){
    $(".innerThird").slideToggle(700);
})
$('.toggleFourth').on('click', function(){
    $(".innerFourth").slideToggle(700);
})


// counter section
let countDownDate = new Date('6 october, 2025 10:50:00').getTime();
let time = setInterval(function(){
    let timeNow = new Date().getTime();
    let distance = countDownDate-timeNow;
    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    let second = Math.floor((distance % (1000*60)) / 1000);
    $('.days').html(days +'D');
    $('.hours').html(hours+'H');
    $('.minuts').html(minutes+'M');
    $('.second').html(second+'S');
})


// textarea section
let maxLength = 100;
$('textarea').keyup(function () { 
    let len = maxLength - $(this).val().length;
    $('#chars').text(len);
    if (len < 0) {
        $('#chars').text('your available character finished');
    }else{
        $('#chars').text(len);
    }
});




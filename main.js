if($(document).scrollTop() > $("#about").offset().top){
    console.log($("#about").offset().top)
    $(".nave").css("backgroundColor","rgba(0, 0, 0, 0.488)")
    $(".back-top").fadeIn(400)
}else{
    $(".nave").css("backgroundColor","transparent") 
    $(".back-top").fadeOut(400) 
}



$(document).scroll(()=>{
    if($(document).scrollTop() > $("#about").offset().top){
        console.log($("#about").offset().top)
        $(".nave").css("backgroundColor","rgba(0, 0, 0, 0.488)")
        $(".back-top").fadeIn(400)
    }else{
        $(".nave").css("backgroundColor","transparent") 
        $(".back-top").fadeOut(400) 
    }
})
$(".back-top").click(function(){
    $(document).scrollTop(0) 
})
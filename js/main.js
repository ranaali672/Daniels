$(".setting-icon").click(function(){
    let left=$(".settings").css("left")
    
    if(left=="0px"){
        let widthInner=$(".setting-inner").outerWidth(true)
        $(".settings").animate({left:`-${widthInner}px`},1000)
    }else{
        
        $(".settings").animate({left:`0px`},1000)
    }
  
})
let widthInner=$(".setting-inner").outerWidth(true)
$(".settings").css({left:`-${widthInner}px`})


$(".box").click(function(){
    let color = $(this).css("background-color");
    $(".custom").css("color",color)
    $(".custombg").css("background-color",color)

  

})
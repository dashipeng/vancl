$(function(){
       $.ajax({
            url:"header.html",
            type:"get"
        }).then(function(res){
            $(res).replaceAll("header");
            $(`<link rel="stylesheet" href="../css/header.css">`).appendTo("head")
        })

        $.ajax({
            url:"footer.html",
            type:"get"
        }).then(function(res){
            console.log(res)
            $(res).replaceAll("footer");
            $(`<link rel="stylesheet" href="../css/footer.css">`).appendTo("head")
        })
        
    var $lgImg=$("#lg-img");
    var $superZhao=$("#super-zhao");
    var $shazhao=$("#shazhao");
    var ZHAO=200;
    var LG=400;    
    
    $("#fu-fangda").hover(function(){      
        $lgImg.toggleClass("displayNone");
        $shazhao.toggleClass("displayNone")
    })
    .mousemove(function(e){
        var top=e.offsetY-ZHAO/2;
        var left=e.offsetX-ZHAO/2;
        if(top<0){
            top=0
        }else if(top>LG-ZHAO){
            top=LG-ZHAO
        }
        if(left<0){
            left=0
        }else if(left>LG-ZHAO){
            left=LG-ZHAO
        }
        $shazhao.css({
            top:top+"px",
            left:left+"px"
        })
        $lgImg.css("background-position",`${-left*2}px ${-top*2}px`)
    })
    $("#details-right>p:not(:first-child) a").click(function(){
        $(this).children("span:last-child").toggleClass("displayNone")

        $(this).addClass("active")
        .siblings().removeClass("active")
        .children("span:last-child").addClass("displayNone")
        
        
    })
})
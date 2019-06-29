$(function(){
    $.ajax({/*引入头部*/ 
        url:"header.html",
        type:"get",
        success: function(result) {
           $(result).replaceAll("header") ;
           $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head")
        }
    }) /* 引入尾部*/ 
    $.ajax({
        url:"footer.html",
        type:"get"
    }).then(function(result){
        $(result).replaceAll("footer") ;
        $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head")
    })
})
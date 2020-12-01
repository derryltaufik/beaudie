// slider
$(document).ready(function(){

    $('.best-next').click(function(){
        var currImg = $(".best-active");
        var nextImg = currImg.next();
    
        if(nextImg.length){
            currImg.removeClass('best-active').css("z-index", -10);
            nextImg.addClass('best-active').css("z-index", 10);
        }
    })

    $('.best-prev').click(function(){
        var currImg = $(".best-active");
        var prevImg = currImg.prev();
    
        if(prevImg.length){ 
            currImg.removeClass('best-active').css("z-index", -10);
            prevImg.addClass('best-active').css("z-index", 10);
        }
    })
    
    $('.rec-next').click(function(){
        var currImg = $(".rec-active");
        var nextImg = currImg.next();
    
        if(nextImg.length){
            currImg.removeClass('rec-active').css("z-index", -10);
            nextImg.addClass('rec-active').css("z-index", 10);
        }
    })

    $('.rec-prev').click(function(){
        var currImg = $(".rec-active");
        var prevImg = currImg.prev();
    
        if(prevImg.length){ 
            currImg.removeClass('rec-active').css("z-index", -10);
            prevImg.addClass('rec-active').css("z-index", 10);
        }
    })
})
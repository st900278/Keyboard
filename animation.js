$(document).ready(function(){
    var mouse = false;
    var mouse2 = false;
    var recent = 0;
    $(".center-mid")
    .on('mousedown', function(e){
        mouse = true;
        recent = parseInt($(this).parent('.grid').attr("data-index"));
    })
    .on('click', function(e){
        $(".output").append($(this).text());
    })
    .on('mouseover', function(e){
        if(mouse){
            var that = parseInt($(this).parent('.grid').attr("data-index"));
            if(that == recent + 1){
                $(".output").append($('.grid[data-index="'+recent+'"]').find(".center-right").text());
            }
            else if(that == recent + 2){
                $(".output").append($('.grid[data-index="'+recent+'"]').find(".bottom-left").text());
            }
            else if(that == recent + 3){
                $(".output").append($('.grid[data-index="'+recent+'"]').find(".bottom-mid").text());
            }
            else if(that == recent + 4){
                $(".output").append($('.grid[data-index="'+recent+'"]').find(".bottom-right").text());
            }
            else if(that == recent - 1){
                $(".output").append($('.grid[data-index="'+recent+'"]').find(".center-left").text());
            }
            else if(that == recent - 2){
                $(".output").append($('.grid[data-index="'+recent+'"]').find(".top-right").text());
            }
            else if(that == recent - 3){
                $(".output").append($('.grid[data-index="'+recent+'"]').find(".top-mid").text());
            }
            else if(that == recent - 4){
                $(".output").append($('.grid[data-index="'+recent+'"]').find(".top-left").text());
            }
            recent = that;
        }
    });
    $("body").on('mouseup', function(){
        mouse = false;
    });
    $(".leftbar #del").on('click', function(){
        $(".output").html($(".output").html().slice(0,-1));
    });
    $("div#com")
    .on('mousedown', function(){
        mouse2 = true;
    })
    .on('mouseup', function(){
        mouse2 = false;
    })
    .on('click', function(){
        $(".output").append(",");
    })
    .on('mouseover', function(){
        console.log(mouse2);  
    });
    $("#sym div").not('#com').each(function(){
        console.log($(this));
        $(this).on('click',function(){
            console.log("test");
        });
    });
});
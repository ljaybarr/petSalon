$(document).ready(function(){
    console.log("service action");
    $("#groomingDiv").hide();
    $("#vaccinesDiv").hide();
    $("#hotelDiv").hide();
    $("#groomingBtn").click(function(){
        $("li").removeClass("darkBtn");
        $(this).addClass("darkBtn");
        $("#groomingDiv").show();
        $("#vaccinesDiv").hide();
        $("#hotelDiv").hide();
    });
    $("#vaccinesBtn").click(function(){
        $("li").removeClass("darkBtn");
        $(this).addClass("darkBtn");
        $("#groomingDiv").hide();
        $("#hotelDiv").hide();
        $("#vaccinesDiv").show();
    });
    $("#hotelBtn").click(function(){
        $("li").removeClass("darkBtn");
        $(this).addClass("darkBtn");
        $("#groomingDiv").hide();
        $("#vaccinesDiv").hide();
        $("#hotelDiv").show();
    })
});

$(document).ready(function(){
    console.log("service action");
    $("#dog").show();
    $("#cat").show();
    $("#hamster").show();
    $("dog").show();
    $("#dogBtn").click(function(){
        $(this).addClass();
        $("#dog").show();
        $("#cat").hide();
        $("#hamster").hide();
        $("#other").hide();
    });
    $("#catBtn").click(function(){
        $(this).addClass();
        $("#dog").hide();
        $("#cat").show();
        $("#hamster").hide();
        $("#other").hide();
    });
    $("#hamsterBtn").click(function(){
        $(this).addClass();
        $("#dog").hide();
        $("#cat").hide();
        $("#hamster").show();
        $("#other").hide();
    });
    $("#otherBtn").click(function(){
        $(this).addClass();
        $("#dog").hide();
        $("#cat").hide();
        $("#hamster").hide();
        $("#other").show();
    })
});

//Filter Pet Info by Type in Register HTML//
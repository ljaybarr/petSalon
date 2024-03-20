// JS vs jQuery

$("h1").click(function(){
    $(".header-img img").hide();
});

$("p").click(function(){
    $(".header-img img").show();
});

$("#dark-mode").click(function(){
    $("header").addClass("dark");
});

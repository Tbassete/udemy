//document.querySelector("h1") // isso sem jquery

$("h1");//jquery
//$("h1").css("color", "lightgreen"); //jquery

//document.querySelectorAll("button")

$("button")// dont have different in select one or select all

$("h1").addClass("bigtitle margin50")
$("h1").removeClass("bigtitle")

$("button").addClass("margin50")

//$("h1").hasClass("margin-50")// the console will respond true.

$("h2").addClass("bigtitle margin50").text("bye")

$("h2").html("<em>hey</em>")

$("a").attr("href", "https://www.google.com/search?q=tradutor&oq=trad&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRhAMhQIAhBFGDkYQxiDARixAxiABBiKBTIOCAMQRRgnGDsYgAQYigUyEggEEAAYQxiDARixAxiABBiKBTIGCAUQABgDMgYIBhBFGDwyBggHEEUYPNIBBzYzN2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8")

$("h1").click(function(){
    $("h1").css("color", "purple")
})

//for(var i=0; i<=5; i++){
  //  document.querySelectorAll("button")[i].//addEventListener("click", function(){
  //      document.querySelector("h1").style.color = "purple";
  //  });

//}

$("button").click(function(){
    $("h1").css("color", "purple");
})

//$("input").keypress(function(event){
//    $("h1").text(event.key)
//})

$("h1").on("click", function(){
    $("h1").css("color", "purple")
})

//add anything with jquery
$("h1").before("<button>new</button>");//for the change work on funciton before this, this line have to stay before the function about change color the h1


$("button.buttonm").on("click", function(){
    $("div.menu").slideToggle();
    //animate({opacity: 0.5})
    //toggle
    //slideUp
    //slideDown
    //slideToggle
    //fadeToggle
})
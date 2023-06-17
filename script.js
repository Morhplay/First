$(document).ready(function() {

    // $("div button").mouseleave(function(){
    //     alert("hello")
    // })

    // $("input").keypress(function(){
    //     alert("the press")
    // })


    $("div button:first-child").click(function(){
        $("input").animate({
        margin: "-=2rem",
        width:  "-=5rem"
        }, 5000)
    })

    // $("div button:nth-child(2)").click(function(){
    //     $("input").slideDown(3000)
    // })

    
    // var a = $("#testdiv button:first-child").text()
    //     alert(a)
    // var a = $("#testdiv").html()
    // alert(a)

    $("#btn").click(function(){
       
        $("#testdiv").append($("<h1>from js</h1>"))
    })
     // $("input").remove()

    //     $("input").toggleClass("test")
    // })
        // var a = $("input").val()
        // alert(a)
    //     $("input").css("background-color", "red")
    // })
   

})






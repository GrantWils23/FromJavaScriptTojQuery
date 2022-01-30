
/* This creates both tags to disappear as clicking on one means all p tags will close and hide */
// $("p").click(function() {
//     $("p").slideToggle("slow");
// })


/* Using this in the function isolates it to the component that was clicked on and performs the function on "this" object */
$("p").click(function() {
    $(this).slideToggle("slow");
});


$("button").mouseenter(function() {
    $(this).removeClass("makeRed").addClass("makeBlue");
});

$("button").mouseleave(function() {
    $(this).removeClass("makeBlue").addClass("makeRed");
});

// $(document).ready(function() {
//     $(".box").on("click", function() {
//         var classNames = $(this).attr("class").split(" "); /* Splitting the class names will give you a list, for example ["box", "one"] */
//         $("." + classNames[1]).css("background-color", "red")
//     });
// })


$(document).ready(function() {
    $(".box").on("click", function() {
        /** when we click on an element that has a
         'box' class, this element will be fired.
        */
       var classNames = $(this).attr("class").split(" ");
       var boxClass = classNames[0];
       var className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            // if the object is already red, it changes it to black
            $("." + className).css("background-color", "#000");
        } else {
            /** Turns all elements with a box class black and then
             * change the color of all elements with the same
             * class name as the clicked element to red.
             */
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});



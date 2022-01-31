$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 


$(document).ready(function() {
     $("#stream1_btn").click(function() {
         $(".stream1").removeClass('highlight_stream');
         $(".stream2").removeClass('highlight_stream');
         $(".stream3").removeClass('highlight_stream');
         $(".stream1").addClass('highlight_stream');
    });
});
$(document).ready(function() {
     $("#stream1_btn").mouseenter(function() {
         $(".stream1").removeClass('highlight_stream');
         $(".stream2").removeClass('highlight_stream');
         $(".stream3").removeClass('highlight_stream');
         $(".stream1").addClass('highlight_stream');
    });
});

$(document).ready(function() {
     $("#stream1_btn").mouseleave(function() {
         $(".stream1").removeClass('highlight_stream');
         $(".stream2").removeClass('highlight_stream');
         $(".stream3").removeClass('highlight_stream');
         $(".stream1").addClass('highlight_stream');
    });
});
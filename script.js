$(document).ready(function () {
    $("#stream1_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });

    $("p").on("click", function () {
        $("p").css("color", "red");
    });

    $("h2").on("mouseover", function () {
        $("h2").css("background-color", "lightblue");
    });
    $("h2").on("mouseout", function () {
        $("h2").css("background-color", "#fff");
    });

    $(".card").on("mouseover", function () {
        $("h2").css("font-size", "1.5em");
    });
    $(".card").on("mouseout", function () {
        $("h2").css("font-size", "1em");
    });

    $(".bottom_button").on("mouseenter", function () {
        $("body").css("background-color", "black");
    });
    $(".bottom_button").on("mouseleave", function () {
        $("body").css("background-color", "#eee");
    });

}); 
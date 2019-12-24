$(document).ready(function () {
    $("#title").append(mainheading);
    $("#subtitle").append(subheading);
    $("#bot-icon").click(function () {
        $("#bot-icon").hide();
        $(".main").show();
    });
    $(".hidebot").click(function () {
        $("#bot-icon").show();
        $(".main").hide();
    });
});
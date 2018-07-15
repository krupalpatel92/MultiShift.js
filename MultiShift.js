$(document).ready(function(e) {

    $("#gallery_thumb div a").click(function(e) {

        var is_click = $(this).attr("data-selected");
        var current_position = parseInt($(this).attr("data-number"));
        var last_click = parseInt($(".last_clicking").attr('data-number'));
        var lclick = $(".last_clicking").attr("id");
        $("#" + lclick).removeClass("last_clicking");

        if (is_click != 1) {
            $(this).addClass("selected");
            $(this).attr("data-selected", "1");
        } else {
            $(this).removeClass("selected");
            $(this).attr("data-selected", "0");
        }

        //======================== START Shift + Click ========================//
        if (e.shiftKey) {
            //====================== Step 1 ======================//
            if (current_position > last_click) {
                var current_on_off = $("#gallery_thumb div a:[data-number=" + current_position + "]").attr("data-selected");
                for (var i = last_click; i < current_position; i++) {
                    if (current_on_off == 1) {
                        $("#gallery_thumb div a:[data-number=" + i + "]").addClass("selected");
                        $("#gallery_thumb div a:[data-number=" + i + "]").attr("data-selected", "1");
                    } else {
                        $("#gallery_thumb div a:[data-number=" + i + "]").removeClass("selected");
                        $("#gallery_thumb div a:[data-number=" + i + "]").attr("data-selected", "0");
                    }
                }

            }

            //====================== Step 2 ======================//
            if (current_position < last_click) {
                var current_on_off = $("#gallery_thumb div a:[data-number=" + last_click + "]").attr("data-selected");
                for (var i = current_position; i < last_click; i++) {
                    if (current_on_off == 1) {
                        $("#gallery_thumb div a:[data-number=" + i + "]").addClass("selected");
                        $("#gallery_thumb div a:[data-number=" + i + "]").attr("data-selected", "1");
                    } else {
                        $("#gallery_thumb div a:[data-number=" + i + "]").removeClass("selected");
                        $("#gallery_thumb div a:[data-number=" + i + "]").attr("data-selected", "0");
                    }
                }
            }

        }
        //======================== END Shift + Click ========================//

        $(this).addClass("last_clicking");
        //$.cookie('last_click', current_position);
    });


    $("#save_gallery").click(function() {
        var allVals = [];
        $("#gallery_thumb div a:[data-selected=1]").each(function() {
            allVals.push($(this).attr("data-number"));
        });
        if (allVals != "") {
            alert("Selected images is " + allVals);
        } else {
            alert("Please select images.");
        }
    });

});
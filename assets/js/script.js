// Display today's day and date
var todayDate = moment().format('dddd, MMM D YYYY, HH:mm');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn function event  //
    $(".saveBtn").on("click", function () {
      
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save values in localstorage // 
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
      
        var timeNow = moment().hour();

        //  function to loop over time block
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // check time and add classes for past, present or future indicators //
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // loop and Get value from local storage keys//
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var currentDayEl=$("#currentDay")
  var currentDayTime=dayjs().format("dddd, MMMM D YYYY, HH:mm")

  console.log(currentDayTime)

  currentDayEl.text(currentDayTime)

  // military time //
  var currentHour= dayjs().hour()

    console.log(currentHour)
// 1.create loop to get all the time bloks ID's startting from 9am
 // 2. compare the i with the current hour
  for (let i = 9; i < 14; i++) {
    var timeBlock=$("#hour-"+i)
  if(i===currentHour){

    timeBlock.addClass("present")
  }
  else if(currentHour>i){
    timeBlock.addClass("past")
    }


  }
  
  // listener for click events on the save button to save the user input in local storage//

  $("button").click(function () {
    for (let i = 9; i < 18; i++) {
      var txt = $("#" + i).val();
      if (txt i== null) {
        var data = {text: txt };
        localStorage.setItem(i, JSON.stringify(data));
    };
  };
});

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

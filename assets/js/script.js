// code to display the current date in the header of the page//
$(function () {

  var currentDayEl=$("#currentDay")
  var currentDayTime=dayjs().format("dddd, MMMM D YYYY, HH:mm")
  var saveBtn= $(".saveBtn")

  console.log(currentDayTime)

  currentDayEl.text(currentDayTime)
  // military time var //
  var currentHour= dayjs().hour()

  console.log(currentHour)
// 1.create loop to get all the time bloks ID's startting from 9am
 // 2. compare the i with the current hour
  for (let i = 9; i < 18; i++) {
    var timeBlock=$("#hour-"+i)
    var event= localStorage.getItem("hour-"+i)

    console.log(event)

    
  if(i===currentHour){

    timeBlock.addClass("present")
  }
  else if(currentHour > i){
    timeBlock.addClass("past")
    }
    else{
      timeBlock.addClass("future")
    }

  }
  

// select  text area and compare the current block by comparing the id to the current hour//
//$ ("textarea").each(function () {
  //var textAreaNumber = parseInt($(this).attr("id"));

 // if(currentHour > textAreaNumber) {
   // $(this).addClass("past");
 // } else if (currentHour < textAreaNumber) {
  //  $(this).addClass("future");
 // } else {
  //  $(this).addClass("present");
  //}
//});
        // print storage  data func//
  for (let i = 0; i < localStorage.length; i++) {
   var key = localStorage.key(1);
   var value = JSON.parse(localStorage.getItem(key));
   $("#" + key).val(value.text);   
  };
      // save event / function //
  function saveEvent(event){
    var currentButton=$(event.target)
    var textArea= currentButton.siblings("textarea")
    var parentId= currentButton.parent().attr("id")

  alert(textArea.val() +" "+ parentId)

    localStorage.setItem(parentId, textArea.val())

  }

  saveBtn.on("click", saveEvent)


});

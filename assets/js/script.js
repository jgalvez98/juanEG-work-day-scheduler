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
  
    // print storage  data func and loop through key names//     
   for (let i = 0; i < localStorage.length; i++) {
   var key = localStorage.key(i);
   var value = localStorage.getItem(key);
   // value into the web page //
   $("id" + key).val(value.text);   
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

// //initialize variables for header and current time
// var nowDate = document.getElementById("current_date")
// var now = dayjs().format("dddd - MMMM DD YYYY")
// var nowTime = dayjs().hour();
// nowDate.innerHTML = "Today's Date: " + now
// $(document).ready(function(){

//initialize variables for header and current time
var nowDate = document.getElementById("current_date")
var now = dayjs().format("dddd - MMMM DD YYYY")
var nowTime = dayjs().hour();
nowDate.innerHTML = "Today's Date: " + now

$(".time-block").each(function(){
    //after the split take the numeric value
    //Get Hour Value of Each Time Block
    var scheduleTime ="hour-" + $(this).attr("id").split("-")[1];
    console.log(scheduleTime)
    //Get Saved Value from Local Storage and Display in Correct Time Block's Text Area
    var toDoThing= localStorage.getItem(scheduleTime);
    console.log(toDoThing)
    var toDoText = $(this).find(".description");
    toDoText.val(toDoThing);
//create if else to compare times to current time.
//textarea class provided by bootstrap is ".description"
  if (scheduleTime < nowTime){
    //use jq FIND to designate specific class based on time
      $(this).find(".description").addClass("past");
  }else if(scheduleTime == nowTime){
      $(this).find(".description").addClass("present");
  }else if(scheduleTime >nowTime){
      $(this).find(".description").addClass("future");
   }
});

//take the given bootstrap class saveBtn and for each dynamically save each list item and hour
$(".saveBtn").on("click", function(){
  //assign var to return the time of the chore
  //calling the hour id by accessing the btn's parent's attribute
  var key = $(this).parent().attr("id");
  //assign var to return the chore text
  var value = $(this).parent().find(".description").val();
  localStorage.setItem(key,value);
});


// }
// )

//wrap in jquery
//use jq each to iterate through every section with the class "time-block"
// $(".time-block").each(function(){
//     //after the split take the numeric value
//     //Get Hour Value of Each Time Block
//     var scheduleTime = $(this).attr("id").split("-")[1];
//     //Get Saved Value from Local Storage and Display in Correct Time Block's Text Area
//     var toDoThing= localStorage.getItem(scheduleTime);
//     console.log(toDoThing)
//     var toDoText = $(this).find(".description");
//     toDoText.val= (toDoThing(value));
// //create if else to compare times to current time.
// //textarea class provided by bootstrap is ".description"
//   if (scheduleTime < nowTime){
//     //use jq FIND to designate specific class based on time
//       $(this).find(".description").addClass("past");
//   }else if(scheduleTime == nowTime){
//       $(this).find(".description").addClass("present");
//   }else if(scheduleTime >nowTime){
//       $(this).find(".description").addClass("future");
//    }
// });

// //take the given bootstrap class saveBtn and for each dynamically save each list item and hour
// $(".saveBtn").on("click", function(){
//   //assign var to return the time of the chore
//   //calling the hour id by accessing the btn's parent's attribute
//   var key = $(this).parent().attr("id");
//   //assign var to return the chore text
//   var value = $(this).parent().find(".description").val();
//   localStorage.setItem(key,value);
// });



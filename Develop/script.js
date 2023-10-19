// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //jS code goes here
  // 
  $(".saveBtn").on("click", function () {
    const hourBlock = $(this).parent().attr("id")
    const note = $(this).siblings(".description").val()
    localStorage.setItem(hourBlock, note)
  })
  for (var i = 9; i <= 17; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  function timeUpdate() {
    let currentTime = dayjs().hour()
    console.log(currentTime)
    $(".time-block").each(function () {
      const timeId = parseInt($(this).attr("id").split("-")[1])
      console.log(timeId)
      if (timeId < currentTime) {
        $(this).addClass("past")
      } else if (timeId === currentTime) {
        $(this).addClass("present")
      } else {
        $(this).addClass("future")
      }
    })
  }
  timeUpdate()

  $("#currentDay").text(dayjs().format('[Today is:] MM/ DD/ YYYY[, Time :] HH:mm'))




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

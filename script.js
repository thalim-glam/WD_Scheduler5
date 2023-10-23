// The jQuery starts from here -

$(function () {
  $(".saveBtn").on("click", function () {
    const hourBlock = $(this).parent().attr("id")
    const note = $(this).siblings(".description").val()
    localStorage.setItem(hourBlock, note)
    //localStorage.sort((a, b) => { a.hourBlock - b.hourBlock })
    alert("Add/Change to the new event? Click OK to confirm")
  })
  for (var i = 9; i <= 17; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
  }

  // TODO: Add a listener for click events on the save button.
  //
  function timeUpdate() {
    let currentTime = dayjs().hour()
    console.log(currentTime)
    $(".time-block").each(function () {
      const timeId = parseInt($(this).attr("id").split("-")[1])
      // console.log(timeId)
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

  // $("#currentDay").text(moment().format('[Today: ] LLLL'))
  //  dayjs.extend(LocalizedFormat)

  $("#currentDay").text(dayjs().format('[Today: ] dddd, MMMM D, YYYY h:mm A'))

  // Button function to clear local storage and clear contents
  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
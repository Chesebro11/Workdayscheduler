//setting date format to variable displaying that variable
var localDate = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(localDate);

// Event Listener to save
$(".saveBtn").on('click', function(){
    //Grabs text from textarea and the ID with its time slot
    var descriptionText = $(this).siblings('.description').val();
    var timePlace = $(this).parent().attr('id');
    //store with localstorage console log to debug
    localStorage.setItem(descriptionText, timePlace);
    console.log(descriptionText)
    console.log(timePlace)    
})

function timeColor() {
    // get current hour
    var hourIs = moment().hour();
}
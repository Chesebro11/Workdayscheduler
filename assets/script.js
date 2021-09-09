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

// function to color code the time
function timeColor() {
    // get current hour
    var hourIs = moment().hour();
    console.log(hourIs);

    // loop through each time block
    $('.time-block').each(function () {
        var blockTime = parseInt($(this).attr('id').split('hour')[1]);

        // use provided css to apply the correct styles
        if (blockTime < hourIs) {
            $(this).addClass('past');
        }
        else if (blockTime === hourIs) {
            $(this).addClass('present');
        }
        else {
            $(this).addClass('future')
        }
    }
    )}

    timeColor();
    // retreive any data in localstorage
    $("#first .description").localStorage.getItem('first');
    $('#second .description').localStorage.getItem('second');
    $('#third .description').localStorage.getItem('third');
    $('#fourth .description').localStorage.getItem('fourth');
    $('#fifth .description').localStorage.getItem('fifth');
    $('#sixth .description').localStorage.getItem('sixth');
    $('#seventh .description').localStorage.getItem('seventh');
    $('#eigth .description').localStorage.getItem('eigth');
    $('#ninth .description').localStorage.getItem('ninth');



//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click into a time block
//THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist

    

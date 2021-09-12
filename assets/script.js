//setting date format to variable displaying that variable
var localDate = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(localDate);

$(document).ready(function (){
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

    
    // retreive any data in localstorage
    $("first .description").val(localStorage.getItem('first'));
    $('second .description').val(localStorage.getItem('second'));
    $('third .description').val(localStorage.getItem('third'));
    $('fourth .description').val(localStorage.getItem('fourth'));
    $('#fifth .description').val(localStorage.getItem('fifth'));
    $('sixth .description').val(localStorage.getItem('sixth'));
    $('seventh .description').val(localStorage.getItem('seventh'));
    $('eigth .description').val(localStorage.getItem('eigth'));
    $('ninth .description').val(localStorage.getItem('ninth'));

    timeColor();
})
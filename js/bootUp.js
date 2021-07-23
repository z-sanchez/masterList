var backgroundColor = document.querySelector('body');


//Object that tracks currently displayed day
var currentDay = {
    month: 7,
    day: 22,
    year: 2021
};


var today = new Date();

//today today
var today = {
    month: today.getMonth() +1,
    day: today.getDate(),
    year: today.getFullYear()
};

window.onload = function () {
    setDateDisplay(today.month, today.day, today.year);

    currentDay.month = today.month;
    currentDay.day = today.day;
    currentDay.year = today.year;

};


function color(color) {

    backgroundColor.style.backgroundColor = color;


}





//comment new code 
//task with over 7 thingies stop (menu for seeing that days todo's)

// end lettering if its too long

//update screen if day is present when todo is made

//clean input boxes after using them

//update month header

//store arrays with memory for next bootup

//keywords and neat clickable items

//widgets on top (weather and time)

//update todays date API??

//responsive

//refactor

//animations???

//cheese day cheese graphic

//add dark mode circles
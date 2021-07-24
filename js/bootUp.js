var backgroundColor = document.querySelector('body');

var yearsInMemory = false;

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

    yearsInMemory = localStorage.getItem('yearsInMemory');

    setDateDisplay(today.month, today.day, today.year);

    if (JSON.parse(yearsInMemory) == true) {
        yearArrayJSON = JSON.parse(localStorage.getItem('yearArray'));
        yearsStored = JSON.parse(localStorage.getItem('yearsStored'));

        for (let i = 0; i < yearsStored; ++i)
            yearArray[i] = yearArrayJSON[i];
    }

    currentDay.month = today.month;
    currentDay.day = today.day;
    currentDay.year = today.year;
};



window.onbeforeunload = function() {

    yearsInMemory = true;

    localStorage.setItem('yearsInMemory', yearsInMemory);

    storeYears();

 }





function color(color) {

    backgroundColor.style.backgroundColor = color;


}


function storeYears() {


    localStorage.setItem('yearArray', JSON.stringify(yearArray));
    localStorage.setItem('yearsStored', JSON.stringify(yearsStored));


}


//refactor

//comment new code 

//responsive

//update month header

//widgets on top (weather and time)

//update todays date API??

//update screen if day is present when todo is made

//clean input boxes after using them

//task with over 7 thingies stop (menu for seeing that days todo's)

// end lettering if its too long

//keywords and neat clickable items

//cheese day cheese graphic

//add dark mode circles

//animations???

const calendar = document.getElementById("calendar");
var calendarOnScreen = 0;

var calendarPage = windowFlex.cloneNode(true);
calendarPage.classList.add("calendarWindow");
calendarPage.children[0].innerHTML = "New Date";

var calendarFlex = calendarPage.children[1].children[0];
calendarFlex.removeChild(calendarFlex.children[0]);
calendarFlex.removeChild(calendarFlex.children[0]);
calendarFlex.style.marginTop = "12%";

var calendarInput = calendarFlex.children[1];

calendarCheckMark = calendarFlex.children[2];
calendarCheckMark.style.marginTop = "8%";



body.addEventListener('click', (event) => {


    if (event.target.id == "calendar") {
        calendarOnScreen = 2;
        addCalendarScreen();
        return;
    }


    if (event.target.classList == 'windowFlex calendarWindow' && calendarOnScreen == 2 || event.target.classList == 'fade' && calendarOnScreen == 2 ) {
        closeCalendarScreen();
    }


})

function addCalendarScreen() {
    body.appendChild(overlayFade);
    body.appendChild(calendarPage);
}

function closeCalendarScreen() {

    body.removeChild(overlayFade);
    body.removeChild(calendarPage);
    calendarOnScreen = 1;
}

calendarCheckMark.addEventListener('click', () => {

    if (calendarInput.value.length == 0) {
        window.alert("No Date Entered");
        addCalendarScreen;
        return;
    }
    else {
        let storeDate = calendarInput.value,
        jumpMonth,
        jumpDay,
        jumpYear;

        if (storeDate == "today" || storeDate == "Today") {
            goTo(today.month, today.day, today.year);
            closeCalendarScreen();
            return;
        }
    

        if (storeDate[0] == '0')
            jumpMonth = parseInt(storeDate[1]);
        else 
            jumpMonth = parseInt(storeDate[0] + storeDate[1]);


        if (storeDate[3] == '0')
            jumpDay = parseInt(storeDate[4]);
        else 
            jumpDay = parseInt(storeDate[3] + storeDate[4]);

    
        jumpYear = parseInt(storeDate.slice(6));

        try {
            if (checkValidDate(jumpMonth, jumpDay, jumpYear) == true) {
                goTo(jumpMonth, jumpDay, jumpYear);
                closeCalendarScreen();
            }
            else {
                window.alert("Invalid Date");
                addCalendarScreen;
            }
        }
        catch {
            window.alert("Invalid Date");
            addCalendarScreen;
        }
    }



})


function goTo(jumpMonth, jumpDay, jumpYear) {
    currentDay.month = jumpMonth;
    currentDay.day = jumpDay;
    currentDay.year = jumpYear;

    setDateDisplay(jumpMonth, jumpDay, jumpYear);
}


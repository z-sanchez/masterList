const addTask = document.getElementById('add');
const body = document.getElementById('grid');

const overlayFade = document.createElement("div");
const addTaskWindow = document.createElement("div");
const windowFlex = document.createElement("section");
const newTaskLabel = document.createElement("h2");
const taskTitle = document.createElement("h2");
const innerFlex = document.createElement("div");
const taskTextBox = document.createElement("input");
const dateTitle = document.createElement("h2");
const dateTextBox = document.createElement("input");
const checkMark = document.createElement("img");


//fades entire page
overlayFade.classList.add("fade");



//window desing flexBox
windowFlex.classList.add("windowFlex");

addTaskWindow.classList.add("windowBackground");

newTaskLabel.classList.add("newTaskHeader");
newTaskLabel.innerHTML = "New Task";


windowFlex.appendChild(newTaskLabel);
windowFlex.appendChild(addTaskWindow);


//flex box to hold menu
innerFlex.classList.add("innerFlex");
taskTitle.innerHTML = "Title";
taskTextBox.setAttribute("type", "text");
dateTitle.innerHTML = "Date";
dateTextBox.setAttribute("type", "text");
dateTextBox.value = "mm/dd/yyyy";
checkMark.src = "/images/checkMark.png";
addTaskWindow.appendChild(innerFlex);
innerFlex.appendChild(taskTitle);
innerFlex.appendChild(taskTextBox);
innerFlex.appendChild(dateTitle);
innerFlex.appendChild(dateTextBox);
innerFlex.appendChild(checkMark);

let onScreen = 1;



//FIX THIS SHIT LATRER!!
body.addEventListener('click', (event) => {

    if (event.target.id == "add") {
        onScreen = 2;
        return;
    }

    if (event.target.classList == 'windowFlex' && onScreen == 2 || event.target.classList == 'fade' && onScreen == 2 ) {
        closeScreen();
    }


})



function displayAddScreen() {

    body.appendChild(overlayFade);
    body.appendChild(windowFlex);

}

function closeScreen() {

    body.removeChild(overlayFade);
    body.removeChild(windowFlex);
    onScreen = 1;
}



checkMark.addEventListener('click', () => {

    if (taskTextBox.value.length == 0) {
        window.alert("No Task Entered");
        displayAddScreen();
        return;
    }

    if (dateTextBox.value.length == 0) {
        window.alert("No Date Entered");
        displayAddScreen();
        return;
    }
    
    storeData();

});


addTask.addEventListener('click', () => {

    displayAddScreen();


});





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
dateTextBox.value = "MM/DD/YYYY";
checkMark.src = "/images/checkMark.png";
addTaskWindow.appendChild(innerFlex);
innerFlex.appendChild(taskTitle);
innerFlex.appendChild(taskTextBox);
innerFlex.appendChild(dateTitle);
innerFlex.appendChild(dateTextBox);
innerFlex.appendChild(checkMark);




function displayAddScreen() {

    body.appendChild(overlayFade);

    body.appendChild(windowFlex);

}


addTask.addEventListener('click', () => {

    displayAddScreen();



    checkMark.addEventListener('click', () => {

        body.removeChild(overlayFade);
        body.removeChild(windowFlex);

    })


});

//add task (store tasks as well)


//show tasks with event listener to delete (call when updating display)

//find alternative to display none problem 
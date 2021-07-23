const taskItem = document.createElement("div");
taskItem.classList.add("listItemBorder");

const input = document.createElement("input");
input.classList.add("radio");
input.setAttribute("type", "radio");


const label = document.createElement("label");
label.classList.add("item");

taskItem.appendChild(input);
taskItem.appendChild(label);




function storeData() {

    let storeDate = dateTextBox.value,
        task = taskTextBox.value,
        storeMonth,
        storeDay,
        storeYear;

    if (storeDate == "today" || storeDate == "Today") {
        closeScreen();
    
        let index = searchYears(0, yearsStored -1, today.year);
        yearArray[index].memory = true;
        let foundDay = yearArray[index].monthArray[today.month -1][today.day -1];
        foundDay.taskArray[foundDay.numTask] = task;
        ++foundDay.numTask;
        return;
    }


    if (storeDate[0] == '0')
        storeMonth = parseInt(storeDate[1]);
    else 
        storeMonth = parseInt(storeDate[0] + storeDate[1]);


    if (storeDate[3] == '0')
        storeDay = parseInt(storeDate[4]);
    else 
        storeDay = parseInt(storeDate[3] + storeDate[4]);

    
    storeYear = parseInt(storeDate.slice(6));

    try {
        if (checkValidDate(storeMonth, storeDay, storeYear) == true) {
            closeScreen();
    
            let index = searchYears(0, yearsStored -1,storeYear);
            yearArray[index].memory = true;
            let foundDay = yearArray[index].monthArray[storeMonth -1][storeDay -1];
            foundDay.taskArray[foundDay.numTask] = task;
            ++foundDay.numTask;
        }
        else {
            window.alert("Invalid Date");
            displayAddScreen();
        }
    }
    catch {
        window.alert("Invalid Date");
        displayAddScreen();
    }



}


function displayTask(dateRef, dayNum) {

    for (let i = 0; i < dateRef.numTask; ++i) {

        let clone = {
            structure: taskItem.cloneNode(true),
            taskIndex: i,
            date: dateRef
        };

        console.log(clone.taskIndex);
        clone.structure.children[1].innerText = dateRef.taskArray[i];

        clone.structure.addEventListener('click', (event) => {

            if (event.target.classList == "radio") {
                clone.date.taskArray.splice(clone.taskIndex, 1);
                --clone.date.numTask;
                clone.structure.remove();
            }
            
        });

        dayDisplays[dayNum].children[1].appendChild(clone.structure);
    }

}
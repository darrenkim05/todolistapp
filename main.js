let items = [];
let completed = [];

const itemsDiv = document.getElementById('items')
const itemInputElement = document.getElementById('itemInput');
const itemInputButton = document.getElementById('itemInputButton');
const addItemButton = document.getElementById('addItemButton');

itemInputButton.addEventListener("click", addInput);
addItemButton.addEventListener("click", addItem);


window.addEventListener("DOMContentLoaded", () => {
    console.log()
    loadFromLocalStorage();
    
    console.log("items", items);
    console.log("Completed:", completed);
})


function loadFromLocalStorage() {
    if (localStorage.getItem("itemslocalstorage") != null){
        items = JSON.parse(localStorage.getItem("itemslocalstorage"));
        addItem();
        console.log("items", items);
        
    }
    else {
        localStorage.setItem("itemslocalstorage", JSON.stringify(items));
    }
    if (localStorage.getItem("completedlocalstorage") != null){
        completed = JSON.parse(localStorage.getItem("completedlocalstorage"));
        console.log("completed", completed);
        addCompleted();
        
    }
    else {
        localStorage.setItem("completedlocalstorage", JSON.stringify(completed));
    }

}

function addInput() {
    var itemValue;
    if (itemInputElement != null) {
        itemValue = itemInput.value;
        items.push(itemValue);  
        console.log("items list", items); 
        itemInputElement.value = "";
        
        
    }
    else {
        console.log("itemInputElement is Null");
    }
}



function addItem() {
    itemsDiv.innerHTML = "";
    for (let i = 0; i < items.length; i++){
        const ul = document.createElement("ul");
        const button = document.createElement("button");
        ul.id = `item${i}`;
        button.id = `button${i}`;
        button.setAttribute("class", "removebutton");
        var itemid = items[i];
        ul.textContent = `${itemid}`;
        itemsDiv.appendChild(ul);
        itemsDiv.appendChild(button);
        button.addEventListener("click", function(event){
            parameter1(event, i);
        })
    localStorage.setItem("itemslocalstorage", JSON.stringify(items));
        
    }

}

function parameter1(event, id) {
    console.log("removebutton0", id);
    clearItem(id);

}


function clearItem(id) {
    console.log("remove this item! with id:", id);
    completed.push(items[id]);
    items.splice(id,1);
    console.log("Items, post splice: ", items);
    addItem();
    addCompleted();
    
    console.log("items", items);
    console.log("completed: ", completed);
    localStorage.setItem("itemslocalstorage", JSON.stringify(items));

}

function addCompleted() {
    const completedDiv = document.getElementById("completed");
    completedDiv.innerHTML = "";
    for (let i = 0; i < completed.length; i++) {
        const ul = document.createElement("ul");
        const button = document.createElement("button");
        ul.id = `comp${i}`;
        button.id =`delete${i}`;
        ul.textContent = completed[i];
        completedDiv.appendChild(ul);
        completedDiv.appendChild(button);
        button.addEventListener("click", function(event){
            parameter2(event, i);
        })
        localStorage.setItem("completedlocalstorage", JSON.stringify(completed));
    }
function parameter2(event,id) {
    deleteItem(id);
}
}
function deleteItem(id) {
    completed.splice(id, 1);
    console.log("completed, post splice: ", completed);
    localStorage.setItem("completedlocalstorage", JSON.stringify(completed)); // FIX THIS IDK WHY NOT WORKING
    addCompleted();
    
}


console.log(itemsDiv)
function renderItems() {
    itemsDiv.clear
}




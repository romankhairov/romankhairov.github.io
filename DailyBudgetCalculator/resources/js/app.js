// Features of application:
// 1)two main blocks: input (salary, rent, savings) and output (calculated daily budget)
// 2)in the end is summarise- how much I saved
// 3)income block has inputs of name and value
// 4)output block is a table, rows depends from days in selected month
// 5)app use local Storage

// writing base input blocks



// ****************** Input Block ***************************
// Create a new list item when clicking on the "Add" button
var theList = [];

  function inputList() {

    var item = document.getElementById('todoInput').value;
    var text = document.createTextNode(item);
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    var newItem = document.createElement("li");

    newItem.appendChild(checkbox);
    newItem.appendChild(text);
    document.getElementById("inputList").appendChild(newItem);

    theList.push(item); // This adds the item to theList[]
    //localStorage.setItem("inputList", JSON.stringify(theList)); // Set localStorage object
    //var storedTodoList = JSON.parse(localStorage.getItem("inputList")); // Get localStorage object

    console.log(theList);


    return clear();
  }

  function clear() {
    todoInput.value = "";
  }

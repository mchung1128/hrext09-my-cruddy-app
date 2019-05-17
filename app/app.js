/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/

//localStorage interaction function
//get item
var getItem = function(key) {
  return window.localStorage.getItem(key);
}

//create
var createItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//update
var updateItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//delete
var deleteItem = function(key) {
  return window.localStorage.removeItem(key);
}

//clear everything
var clearEverything = function() {
  return window.localStorage.clear();
}

var keyExists = function(key) {
  var currentValue = getItem(key);
  return currentValue !== null;
}


///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks

function parseList(name) { // parses the bucket list into an object
  var item = getItem(name);
  JSON.parse(item);
  return item;
}
function createList(category, input) {
  var obj = {}; // creates bucket list object
  obj[category] = [input]; // adds category and whatever value was typed in
  return JSON.stringify(obj);
}
function addToList(name, category, input) {
  var list = parseList(name); // parses into an object
  if (list[category]) {
    list[category].push(input); // accesses the category and pushes
  } else {
    list[category] = [input];
  }
  return JSON.stringify(item);
}


/* HELPER FUNCTION
  1. Parse the bucket list object
  2. Creating the initial bucket list object
  3. Add to input to category
  4. 
*/

$(document).ready(function() {
  $('#addButton').click(function(event) {
    event.preventDefault();

    var profileName = $("#nameInput").val();
    var category = $("#categoryDropdown").val();
    var input = $("#valueInput").val();
    if (keyExists(profileName)) { // if person already has a bucket list
      addToList(profileName, category, input);
    } else {
      createItem(profileName, createList(category, input));
      // createItem(profileName, input);
    }
  });

  $('#updateButton').click(function(event) {
    event.preventDefault();

    var profileName = $("#nameInput").val();
    var currentValue = $("#categoryDropdown").val();
    if (keyExists(profileName)) {
      updateItem(profileName, currentValue);
    } else {
      //current key doesnt exist, do stuff
    }
  });
});

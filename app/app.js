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
var getItem = function(key) { //returns the value WHICH IS A STRING
  //i: string
  //o: string '[hi]'
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

// function parseList(name) { // parses the bucket list into an object
//   var item = getItem(name);
//   return JSON.parse(item);
// }

function createList(category, input) {
  var obj = {}; // creates bucket list object
  obj[category] = [input]; // adds category and whatever value was typed in
  return JSON.stringify(obj);
}

function addCategory(name, category, input) {
  // get the bucketlist obj
  var obj = JSON.parse(getItem(name));
  // add category to bucketlist obj
  obj[category] = [input];
  return obj;
}

function addToList(name, category, input) { // add items to bucket list
  var list = JSON.parse(getItem(name)); // parses list into an object
    // if the list has the category
    // console.log(list[category], input);
  list[category].push(input); // pushes input into the category array
    // console.log('\n', list[category], input);
  return updateItem(name, JSON.stringify(list));
}

function categoryExists(name, categoryName) {
  var profile = JSON.parse(getItem(name)); // gets bucket list
  return profile.hasOwnProperty(categoryName); // does bucket list have this category?
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

    var profileName = $(`#nameInput`).val();
    var category = $(`#categoryDropdown`).val();
    var input = $(`#valueInput`).val();
    var $individualList = $(`<div id='${profileName}List' class='individual-list w3-round-xlarge'></div>`);
    var $name = $(`<div class='name'>${profileName}</div>`);
    var $category = $(`<div id='${category}' class='category'>${category}</div>`);
    var $inputContainer = $(`<div class='input-container'></div>`);
    var $input = $(`<ul id='${profileName}${category}' class='list'><li><label><input type='checkbox'>${input}</label></li></ul>`);
    var $newItem = $(`<li><label><input type='checkbox'>${input}</label></li>`);
// 1. no profile exists
//   - create profile and add category that's selected with input
// 2. profile does exist, but category does not
//   - add category to profile along with input
// 3. profile does exist and category exists
//   - check does the category include the input else add item
  
    if (keyExists(profileName) && categoryExists(profileName, category)) { // if person already has a bucket list
      var obj = JSON.parse(getItem(profileName)) // => bucket list object
      if (obj[category].includes(input)) {
        window.alert("This is already on your list!");
        console.log('here')

      } else {
        addToList(profileName, category, input);
        //HOW DO I ACCESS THE PROFILE'S CATEGORY'S DIV
        $(`ul[id='${profileName}${category}']`).append($newItem);
        console.log('here')

      }
      //if the key exists, go to $individualList => $category => $input and add input to this div
    } else if (keyExists(profileName) && !categoryExists(profileName, category)){
      updateItem(profileName, JSON.stringify(addCategory(profileName, category, input)));
// need to access existing individual list div to add the $category and $inputContainer
      $input.appendTo($inputContainer);
      $inputContainer.appendTo($category);
      $category.appendTo(`#${profileName}List`);
      $(`#${profileName}List`).appendTo($(".list-container"));
      // console.log('here')
      // createItem(profileName, input);
    } else if (!keyExists(profileName)) {
      createItem(profileName, createList(category, input));
      $input.appendTo($inputContainer);
      $inputContainer.appendTo($category);
      $individualList.append($name, $category);
      $individualList.appendTo($(".list-container"));
      // console.log('here')
    }
  $(`#valueInput`).val('');
  });
});

/*
Name input field => $(`#nameInput`).val(); AKA key
category dropdown => $(`#categoryDropdown`).val(); key in the value obj
input => $(`#valueInput`).val(); value in the value obj

function to create bucketlist obj

if it's a new profile- create create bucketlist obj with name as key and {category: [input]};
have profile but not category- add category as key to bucket list object and set value [input]
have profile and category - find profile and category and push input into category array


list container div
  personal div
    name div
    category div
      item container
        items ul => unordered list
    category
      item container
        items ul
  personal div



*/
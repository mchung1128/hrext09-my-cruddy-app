# hrext09-my-cruddy-app
Create Read Update and Delete framework using JS

 ## Tasks

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

 ### Advanced Reqs
- [ ] Item that I added goes here...

Bucket list

Each person can enter items to add to their own personal bucket list almost like a nested list?
Is it possible to add a password field to get access to edit your list? e.g. passwordProtect-esque.
Key is person's name
	- key input pulls the value which is the bucket list object
Value is an object that stores person's bucket list 
	- how do you update that list? (need to update the values object's keys/values)
	- JSON.parse(window.localStorage.getItem('person')) => gets me the whole bucket list of specific person in obj form
	- adding/updating needs to add/update the parsed object (have to add this functionality to )
	- instead of deleting the item off the list is there a way to cross it off/check it off so you can continue to see what was once on the list? send to a new page instead of deleting? once completed, move into a new section of "completed"

Person: (Key)
	name

Bucket list: (Value)
	places i want to go
		- see the northern lights
		- climb mount kilamanjaro
	things i want to eat/drink
		- cheese in france
		- wine in napa valley
	things i want to do
		- sky diving
		- scuba diving in the great barrier reef
	books i want to read
		- LOTR
		- Harry Potter series
	skills
		- learn a new language
		- learn an instrument
		- learn a sport
		- learn to cook
	milestones
		- first kiss
		- fall in love
		- get engaged
		- marriage
		- become a parent
		- get a degree
		- become a millionaire
	tv shows/movies i want to watch

	name => {Places I want to go to: [x, y, z], Things I want to eat/drink: [x, y, z]}

	form to enter name, drop down for category, form to enter personal items/things in the category


Too complicated? maybe just have it be a simple personal list for the specfic person that's entering the info?


Name will create an empty object- each category will have it's own key in the obj with an array of the items listed as the key value

Key                  
Mike

Value
{Places I : [], Things: [], }            


If the item is already on the list, gives a pop up saying it's already on the list.

Make each item click-able so once it's completed, you can click on it and it gets removed from the list, but gets added to a "Completed" section

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

Each person can enter items to add to their own personal bucket list
Key is person's name
	- key input pulls the value which is the bucket list object
Value is an object that stores person's bucket list
	- how do you update that list? (need to update the values object's keys/values)
	- JSON.parse(window.localStorage.getItem('person')) => gets me the whole bucket list of specific person in obj form
	- adding/updating needs to add/update the parsed object (have to add this functionality to )
	- instead of deleting the item off the list is there a way to cross it off/check it off so you can continue to see what was once on the list?

Person: (Key)
	name

Bucket list: (Value)
	things to do (stored as an object)

Too complicated? maybe just have it be a simple personal list for the specfic person that's entering the info?

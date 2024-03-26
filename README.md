[visit website](https://abir-xyz.github.io/Cocktail-Api/)

# Our Goal

##### our goal is to get random data(drinks) from the api and display some of the drinks at the front page and user should able to search drinks from the searchbar. Also the user should able to know more about the drink when he/she click the specific drink...

### we need to do 3 things

- display drink
- search drink
- get more info about the specific drink

### now how we should approach this?

#### to display the data

- fetch the data
- get the data from the api
- then display the data

### how the searchbar works?

##### when the user press any key to search in the form, we took the value from the form(searchbar) by "keyup" event and fetch it right away with the searchApi then the api search for the specific data and display it with the help of the previous function named "displayData"

- get the value from the form
- connect the searchApi with the value
- then display it

### how to get the details about the specific item

- each of the drink item has a specific id. we run an event and when the user click the item we get back the specific id
- then we set the id to our localStorage.(because we get the id from index html but we need the id on the drink html. so that we set the id on the localStorage)
- then we set our API and connect the api with that id we are getting back from the localStorage
- then we display the data from the api by destructuring it...

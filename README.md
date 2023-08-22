# React concepts implemented in each project 
# **1. My Travel Journal**

In this static page, I have used impleted the following concepts of React js

1. Custom Components - For creating cards of each place travelled
2. Maps - Rendering jsx for each place object 
3. Conditional Rendering - Adding Favourites from the list
4. Styling

<img width="532" alt="traveljournal1" src="https://github.com/abilt5991/ReactJSCode/assets/125937034/2803719c-3725-4ec3-873a-92f644e4aaf7">



# **2. Meme Generator**

This is an interactive application for generating memes, that takes 2 input text for a meme image. When "Get a new image" button is clicked, it renders a new image witha fetch api call.

1. React Hook useState() - [Handling sideeffects]. Forremembering values of the component. ["setMeme" and "setAllMemes" are two useState hooks]

2. React Hook useEffect() - For making a fetch call and handling promises. Have updated the "allMemes" state object with the response data. There's no need for dependencies here. So, the second parameter of this hook is left empty. Also, no clean up as the fetch call is made on load and there is no "Memory leak" that's handled with a cleanup function.

3. Form inputs and State - For displaying, meme texts and maintaining their values with the state object "meme"

4. Eventhandler onClick - For fetching a random new image url and to change the displayed image.

<img width="662" alt="memegenerator2" src="https://github.com/abilt5991/ReactJSCode/assets/125937034/e5564e2d-cb9b-4579-8e3d-0e6e5d8d3400">


# **3. Shopping List**

This is a dynamic page, where we can Create our Shopping List with "addItem" and "deleteItem" functions. 
It handles error, by checking for "Empty and Duplicate" values when we try to add an item to the list.

This project showcases how React enables the creation of dynamic interfaces with efficient state management and rendering.

1. React Hook useState() - For storing all items of the sopphing list component, "Additem". ["itemVal" and "allItems" are two useState hooks]

2. Maps - For Rendering js for each item in the shopping list array, "allItems"

3. Event Handling - Delete item and Add item events 

4. Filter() - For deleting an item from the array index, and retaining all the other values of the array

5. Error Handling - Conditional error handling for "Empty & Duplicate" Values.

6. some() - For conditional checking on duplicate values and alerts with a message.

<img width="825" alt="shoppinglist3" src="https://github.com/abilt5991/ReactJSCode/assets/125937034/1e034596-69e6-48c7-b844-f567f64ab7cc">


# **4. TenZies Game App**

This is an interactive online game called 'TenZies' where you roll the dice with an active timer and a roll count. Each time you roll you can click on certain boxes to hold it from next roll. Once you've rolled all the boxes to a same number you complete the game. You can reset or start a new game at any given point.

1. Stopwatch - created a 'Timer' component to implement the stopwatch using the following react components
   - useState() hook - For setting timer value
   - useEffect() hook - setInterval and clearInterval functions for running the stopwatch
   - useRef() hook - For resetting the timer count to 0 in the stopwatch

2. Rollcount - created to keep track of the number of rolls made to win with the use of useState() hook

3. Dice - created to display the TenZies dice 
   - map() array function - To clone and display 10 dice in the app and display random values on them
   - Used "conditional styling" to style a dice based on the player's click when it is held

4.  Rolling Dice - Used "ID" of Dice within a map() to hold the Dice from rolling based on selection, so that when the player rolls again 
    only the unheld Dice are updated to the next set of random values while the rest stays the same

5. Confetti - used the React component to display when the player wins the TenZies once all the Dice are matched (used CDN link instead of 
   npm)

6. Reset and New Game - player can start a new game after finishing or reset to a new game at any point in time (which resets all the react 
   states in the app)


![TenziesWin](https://github.com/abilt5991/ReactJSCode/assets/125937034/9ba1b251-2fa4-49c4-bbcd-b45d984f759d)


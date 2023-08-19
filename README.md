# React concepts implemented in each project 
# **1. My Travel Journal**

In this static page, I have used impleted the following concepts of React js

1. Components
  For creating cards of each place travelled
2. Maps
  Rendering jsx for each place object 
3. Conditional Rendering 
   Adding Favourites from the list

<img width="532" alt="Screenshot 2023-08-16 at 12 10 24 am" src="https://github.com/abilt5991/ReactJSCode/assets/125937034/b3714d95-6e85-4b5b-8af5-9a7c1efc35ff">


# **2. Meme Generator**

1. React Hook useState()
For remembering values of the component

2. useEffect()
For making a fetch call and handling promises. Have updated the "allMemes" state object with the response data. There's no need for dependencies here. So, the second parameter of this hook is left empty. Also, no clean up as the fetch call is made on load and there is no "Memory leak" that's handled with a cleanup function.

3. Form inputs and State
For displaying, meme texts and maintaining their values with the state object "meme"

4. Eventhandler onClick
For fetching a random new image url and to change the displayed image.

<img width="662" alt="Screenshot 2023-08-19 at 9 27 29 pm" src="https://github.com/abilt5991/ReactJSCode/assets/125937034/1de16e3a-fe4f-44f6-ab1c-dd80dd141133">

// Import stylesheets
import './style.css';

// Write TypeScript code!
const Images = [
  "images/folder1.jpg",
  "images/folder2.jpg",
  "images/folder3.jpg",

]
const appDiv: HTMLElement = document.getElementById("app")
appDiv.innerHTML = `
<div style="display:flex; justify-content: center; text-align:center">
  <img style="color: darkgreen" class="team-image", src="${Images} ", alt="App-logo">
  <h1 style="color: darkred">Typescript Variable Declaration</h1>
</div>
`

//DECLARING VARIABLES
//using a for-loop

function doSomething() {
  for (let i = 0; i < 5; i++) {
    console.log(i)
  }
}

doSomething()






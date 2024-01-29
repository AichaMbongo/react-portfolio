ASSIGNMENT QUESTIONS
## 1. What is NPM?

NPM stands for Node Package Manager. It's a tool that helps developers manage and share JavaScript code libraries, making it easy to reuse code and manage project dependencies.

## 2. What is SPA?

SPA stands for Single Page Application. It's a type of web application that loads a single HTML page and dynamically updates the content as the user interacts with the app. This provides a smoother user experience without full-page reloads.

## 3. What is the event loop?

The event loop is a core concept in JavaScript that manages the execution of code. It continuously checks the message queue for tasks, executes them one by one, and repeats. This helps in handling asynchronous operations without blocking the main thread.

## 4. Difference between `export x` and `export default x`? How to import them differently?

`export x` allows you to export multiple values from a module, and you import them using curly braces (`import { x } from 'module';`). `export default x` exports a single default value, and you import it without braces (`import x from 'module';`).

## 5. Why use `className` in React and not `class`?

In React, you use `className` instead of `class` because `class` is a reserved keyword in JavaScript. React uses JSX, and to avoid conflicts, it uses `className` to apply styles to HTML elements.

## 6. Why not write `<button onClick={setCounter(counter + 1)}> +1 </button>`? What will happen?

This code would directly call `setCounter` when rendering, causing an infinite loop. To fix it, use a callback function like `onClick={() => setCounter(counter + 1)}` to ensure it's only called when the button is clicked.

## 7. What is object destructuring and its connection to React components?

Object destructuring is a way to extract values from objects and create variables. In React, it's commonly used in function parameters to destructure props. Example: `const MyComponent = ({ prop1, prop2 }) => { /* component code */ };`

## 8. Using HTML and JavaScript in the same function in React?

In React, JSX allows you to write HTML-like code in JavaScript functions. This is possible because React's compiler (Babel) translates JSX into JavaScript under the hood.

## 9. What is async/await? Bring an example.

`async/await` is a syntax in JavaScript used to work with asynchronous code more comfortably. Example:

javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}

## 10. What is a Promise? Bring an example.
A Promise is an object representing the eventual completion or failure of an asynchronous operation. Example:

const fetchData = () => new Promise((resolve, reject) => {
  // asynchronous operation
  if (success) {
    resolve('Data fetched successfully');
  } else {
    reject('Error fetching data');
  }
});

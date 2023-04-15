# A Simple Age Calculator

## Overview

Working with Dates in Vanilla JavaScript can be quite Challenging especially for a beginner, this simple project can help a beginner sharpen his knowledge of JavaScript Date Object.

## Screenshots

### Desktop

![Desktop View](./screenshots/Screenshot%202023-04-15%20at%2010-56-52%20Age%20Calculator.png)

### Mobile

![Mobile View](./screenshots/Screen%20Shot%202023-04-15%20at%2011.09.29.png)

## My Method

---

I have not used anything specia here when it comes to styling.

## A qucick look at the Code

### HTML Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Age Calculator</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section class="container">
      <p>Age Calculator</p>
      <input type="date" id="date" />
      <button onclick="calcAge()">What's my Age</button>
      <p id="text"></p>
    </section>
    <script src="./script.js"></script>
  </body>
</html>
```

### CSS

```css
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: grid;
  place-items: center;
  background-repeat: no-repeat;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 1.8;
  min-height: 100dvh;
  overflow-x: hidden;
}

.container {
  background: #fff;
  margin: auto;
  padding: 2rem;
  width: min(85%, 400px);
  min-height: 50dvh;
  border-radius: 0.2em;
  filter: drop-shadow(0em 0em 0.5em rgb(197, 189, 197));
}

input,
button {
  width: 100%;
  margin-block: 2rem;
  padding: 1em;
  outline: none;
  border: 0.5px solid rgb(238, 229, 238);
  border-radius: 5px;
  font-size: 1rem;
  color: #383638;
}
input:hover,
input:focus {
  border: 0.5px solid rgb(175, 151, 175);
}
button {
  margin-top: 1em;
  background: rgb(204, 16, 204);
  color: #fff;
  cursor: pointer;
  font-weight: 700;
}

button:hover,
button:focus {
  opacity: 0.8;
}

p {
  text-align: center;
  color: rgb(54, 12, 54);
  font-size: clamp(1rem, 3vw + 0.5rem, 1.9rem);
  font-weight: 700;
}
```

### JavaScript Code

```javascript
const text = document.getElementById("text");
const dateInput = document.getElementById("date");

function calcAge() {
  const totalMSInYear = 365 * 24 * 60 * 60 * 1000;
  const now = new Date().getTime();
  let selectedDate = dateInput.value;

  if (!selectedDate) {
    text.innerHTML = "Please Select Date";
    return;
  }

  let age;
  let myTotalMS;

  selectedDate = new Date(selectedDate).getTime();
  myTotalMS = now - selectedDate;

  age = myTotalMS / totalMSInYear;

  if (Math.sign(age) == -1) {
    text.innerText = "Invalid Date";
    return;
  }

  age = Math.floor(age);

  text.innerHTML = `You are ${age} Year(s) Old`;
}
```

## Repository

[Click here](https://github.com/bulamagk/A-simple-Age-Calculator)

## Live Preview

[Click here](https://bulamagk.github.io/A-simple-Age-Calculator/)

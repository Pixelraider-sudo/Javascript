// let title = document.getElementById("title");

// let button = document.getElementById("btn");

// button.addEventListener("click", function () {
//   title.textContent = "DOM is Awesome 🔥";
// });
//document represents the whole page.
//getElementById() this selects the html element the title in this case.
//addEventListener() this waits for an event --when the button is clicked what happens to it.
//text content - it changes the text


//MINI CHALLENGE

// Try:
// change background color
// change button text
// show your name after click
// make button disappear

let button = document.getElementById("btn");

button.onclick = function () {
    document.body.style.backgroundColor = "blue";
    button.style.display = "none";
};
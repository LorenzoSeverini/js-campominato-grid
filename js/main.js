/************************************/
/********** MAIN JS *****************/
/************************************/

// reload the page on click header link 
const myLink = document.getElementById('myLink');

myLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of following the link
    location.reload(); // Reload the page
});

grid = document.getElementById("myGrid");
Btngenerate = document.getElementById("myGenerate");
Btncancel = document.getElementById("myCancel");

// choose the difficulty level and generate the grid (1 = 7x7, 2 = 9x9, 3 = 10x10)
const mySelect = document.getElementById('myDifficulty');

Btngenerate.addEventListener('click', () => {
    const myValue = mySelect.value;
    if (myValue == 1) {
        grid.innerHTML = "";
        for (let i = 1; i <= 49; i++) {
            grid.innerHTML += `<div class="myBox1">${i}</div>`;
        }
    } else if (myValue == 2) {
        grid.innerHTML = "";
        for (let i = 1; i <= 81; i++) {
            grid.innerHTML += `<div class="myBox2">${i}</div>`;
        }
    } else if (myValue == 3) {
        grid.innerHTML = "";
        for (let i = 1; i <= 100; i++) {
            grid.innerHTML += `<div class="myBox3">${i}</div>`;
        }
    }
});

// on click the background changes color
grid.addEventListener('click', (event) => {
    event.target.classList.add('myClicked');
});

// on double click the background color returns to the original color
grid.addEventListener('dblclick', (event) => {
    event.target.classList.remove('myClicked');
});

// on click cancel grid is deleted
Btncancel.addEventListener('click', () => {
    grid.innerHTML = "";
});
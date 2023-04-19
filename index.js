console.log("Weclcome back to Advance JavaScript!");


const countValue = document.querySelector('#counter');

const increment = () => {
    let value = parseInt(countValue.innerText); // Get the value from ui
    value += 1; // Update the value
    countValue.innerText = value; // Set the value to the UI
};

const decrement = () => {
    let value = parseInt(countValue.innerText); // Get the value from ui
    value -= 1; // Update the value
    countValue.innerText = value; // Set the value to the UI
};
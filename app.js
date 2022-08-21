const colors = ["green", "red", "rgba(133,122,200)", "#87CEEB"];
const btn = document.getElementById("btn");
const color = document.querySelector(".colour");

btn.addEventListener('click', function() {
    // getting a random number between 0-3 colours [3]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
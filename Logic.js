const clicker = document.getElementById("Clicker");
const points = document.getElementById("Points");

let game;

function updateCount()
{
game.number++;
points.innerHTML = "Balance: " + game.number;
}



clicker.addEventListener("click", function (event) 
{
updateCount();
});
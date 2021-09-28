const clicker = document.getElementById("Clicker");
const points = document.getElementById("Points");

let game;
game = new Point();


function updateCount()
{
    points.innerHTML = game.log;
}

clicker.addEventListener("click", function (event) 
{
    event.preventDefault();
    game.play();
    updateCount();
});
// Wasn't working in here for some reason?
//function clock()
//{
//    var date = new Date();
//    document.getElementById("datetime").innerHTML = date;
//
//    setTimeout(clock, 1000)
//}
//
//clock();

function calcprompt()
{
    const input = prompt("Please enter a positive number and click enter.");
    document.getElementById("input").value = "";

    document.getElementById("result").innerHTML = factorial(input);
}

function calc()
{
    const input = document.getElementById("input").value;
    document.getElementById("input").value = "";

    document.getElementById("result").innerHTML = factorial(input);
}

function factorial(input)
{
    if(input == 1 || input == 0)
    {
        return 1;
    }
    else if(input < 0)
    {
        alert("The number you entered was negative.");
    }
    else
    {
        return input * factorial(input - 1);
    }
}

/* Also wasn't working while in here for some reason?
        var movingthing = document.querySelector("#picture");
        var bounds = document.querySelector("#Animated-Image");

        bounds.addEventListener("click", getPos, false);

        function getPos(e)
        {
            var originalPosition = getPosition(e.currentTarget);
            var xPos = e.clientX - originalPosition.x - (movingthing.clientWidth / 2);
            var yPos = e.clientY - originalPosition.y - (movingthing.clientHeight / 2);
     
                movingthing.style.left = xPos + "px";
                movingthing.style.top = yPos + "px";
        }

        function getPosition(e) 
        {
            var xPos = 0;
            var yPos = 0;
 
            while (e) {
                xPos += (e.offsetLeft + e.clientLeft);
                yPos += (e.offsetTop + e.clientTop);
                e = e.offsetParent;
            }return {
                x: xPos,
                y: yPos
            };
        }
*/

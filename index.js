var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
function sequence()
{
    userClickedPattern=[];
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut().fadeIn();
    

    switch(randomChosenColor)
    {
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;

        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;

        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;

        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        
        default:
            console.log("idk wtf he pressed");
            break;
    }
    level++;
    $("#level-title").text("level "+level);

}

function handler()
{
    if(started)
    {
        var userChosenColor = this.id;
        userClickedPattern.push(userChosenColor);
        $("#" + userChosenColor).addClass("pressed");
        setTimeout(function(){
            $("#" + userChosenColor).removeClass("pressed");
        },100)
        checkanswer(userClickedPattern.length-1);
        
    }
    

    
    
    
   
    
    
    switch(userChosenColor)
    {
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;

        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;

        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;

        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        
        default:
            console.log("idk wtf he pressed");
            break;

    }
}

$(".btn").on("click", handler);

$(document).keypress(function (e) { 
    if(!started)
    {
        $("#level-title").text("level " + level);
        sequence();
        started=true;
        
    }
});
$("#startbutton").on("click", function () {
    if(!started)
    {
        $("#level-title").text("level " + level);
        sequence();
        started=true;
        
    }
    
    
});

function startOver()
{
    level = 0;
    gamePattern=[];
    started=false;
}

function checkanswer(level)
{
    if(gamePattern[level]===userClickedPattern[level])
    {
        
        if(userClickedPattern.length===gamePattern.length)
        {
            setTimeout(function(){
                sequence();
            },1000)
            
        }
        
    }
    else
    {
        var gameOverSound = new Audio("sounds/wrong.mp3");
        gameOverSound.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("game over!! press the start key to start again");
        startOver();
    }
   
    
    
}

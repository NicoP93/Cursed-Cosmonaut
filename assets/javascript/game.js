$(document).ready(function () {

    var Wins = 0;
    var Losses = 0; //Well need this to tracks wins and losses

    var PlayerScore = 0;
    var BlueGhost = Math.floor(Math.random() * 12) + 1;
    var PinkGhost = Math.floor(Math.random() * 12) + 1;
    var YellowGhost = Math.floor(Math.random() * 12) + 1;
    var RedGhost = Math.floor(Math.random() * 12) + 1; //Getting our variables for the ghosts

    var ComputerChoice = Math.floor(Math.random() * 101) + 19; //Not generating accurate results , getting our target score
    console.log(PlayerScore);
    console.log(ComputerChoice);
    console.log(BlueGhost, PinkGhost, YellowGhost, RedGhost);
    $("#Losses").text(Losses);
    $("#Wins").text(Wins);



    $("#Goal").text(ComputerChoice); //When game starts, load a number between 19 - 120 for computer score 


    $("#BlueGhost").on("click", function () {


        PlayerScore += BlueGhost;

        $("#Player-Score").text(PlayerScore);
        scoreChecker()
    });


    $("#PinkGhost").on("click", function () {


        PlayerScore += PinkGhost;

        $("#Player-Score").text(PlayerScore);
        scoreChecker()
    });


    $("#YellowGhost").on("click", function () {


        PlayerScore += YellowGhost;

        $("#Player-Score").text(PlayerScore);
        scoreChecker()
    });


    $("#RedGhost").on("click", function () {


        PlayerScore += RedGhost;

        $("#Player-Score").text(PlayerScore);
        scoreChecker()
    });



    function scoreChecker() {
        if (PlayerScore === ComputerChoice) {
            Wins++;
            alert("You win")
            $("#Wins").text(Wins);
            reset();

        } else if (PlayerScore > +ComputerChoice) {
            Losses++;
            alert("You lose")
            $("#Losses").text(Losses);
            reset();


        }
    }

    function reset() {//resets and new ghosts!

        PlayerScore = 0;
        $("#Player-Score").empty();//set score to 0 and show score

        ComputerChoice = Math.floor(Math.random() * 101) + 19;//get new goal and show
        $("#Goal").text(ComputerChoice);

        RedGhost = Math.floor(Math.random() * 12) + 1;//We need to Ghost scores so we run the variables again
        BlueGhost = Math.floor(Math.random() * 12) + 1;//
        PinkGhost = Math.floor(Math.random() * 12) + 1;
        YellowGhost = Math.floor(Math.random() * 12) + 1;
        console.log(BlueGhost, PinkGhost, YellowGhost, RedGhost);
    }
    ///Need reset function, will generate new 
});


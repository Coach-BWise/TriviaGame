$(document).ready(function() {
    //variables for timer
    var timeLeft = 35;
    var elem = document.getElementById('timer');
    var timerId = setInterval(countdown, 1000);

    //variables for dom
    var trivia = document.getElementById('trivia-wrapper')

    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            timesUp();
            elem.innerHTML = 'Times Up! Lets see how you did!'
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }
    
    $('#submit').on('click', function(){
        clearTimeout(timerId);
        timesUp();
        elem.innerHTML = 'Submitted! Lets see how you did!'
    });

    function timesUp() {
        
        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;
        
        $('input:radio:checked').each(function(){
            if($(this).attr("id") === 'yes'){
                correct++;
            }
        })
        for(var i=1; i<6; i++){
            var count = 0;
            $('input:radio').each(function(){
                if($(this).attr('name') === 'q'+i+'Answer'){
                    if($(this).prop("checked") != true){
                        count++
                        if(count==4){
                            unanswered++;
                        }
                    }
                }
            })
        }
        incorrect = 5-correct;

        $(trivia).empty();
        $("<div id='resultsWrapper' class='justify-content-center'>").appendTo(trivia);
        $("<div id='right' class='justify-content-center'>").appendTo('#resultsWrapper').text("Correct: " + correct);
        $("<div id='wrong'>").appendTo('#resultsWrapper').text("Incorrect: " + incorrect);
        $("<div id='noGuess'>").appendTo('#resultsWrapper').text("Unanswered: " + unanswered);
        $("<button id='playAgain' class='col-lg-6 col-sm-12'>").appendTo('#resultsWrapper').text("Play Again");
        
        $('#playAgain').on('click', function(){
            window.location.reload(true);
        })
    }
})
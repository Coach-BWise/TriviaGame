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
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }
    
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

        
        elem.innerHTML = 'Times Up! Lets see how you did!'
        

        $(trivia).empty();
        $("<div id='right' class='d-flex justify-content-center'>").appendTo(trivia).text("Correct: " + correct);
        $("<div id='wrong' class='d-flex justify-content-center'>").appendTo(trivia).text("Incorrect: " + incorrect);
        $("<div id='noGuess' class='d-flex justify-content-center'>").appendTo(trivia).text("Unanswered: " + unanswered);

    }
})
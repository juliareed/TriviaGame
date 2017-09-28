$(document).ready(function() {
    var index = 0;
    var countdownTimer = {
        time : 30,
        reset: function() {
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
        },
        start: function() {
            counter = setInterval(countdownTimer.count, 1000);  
        },
        stop: function() {
            clearInterval(counter);
        },
        count: function() {
            countdownTimer.time--;
            console.log(countdownTimer.time);
            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
            }
            else {
                index++;
                answerWrong();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                } else {
                    $(".answerchoice").hide();
                    showScore();
                }
            }
        }
    };

    //VARIABLES
    var correct = 0;
    var wrong = 0;
    var q1 = {
        question: 'What is the largest kind of shark?',
        possibleAnswers : ['A. Basking Shark',
        'B. Great White Shark',
        'C. Whale Shark',
        'D. Hammerhead Shark'],
        flags : [false, false, true, false],
        answer : 'C. Whale Shark'
    };

    var q2 = {
        question: 'How long can a shark go without eating?',
        possibleAnswers: ['A. A week',
        'B. A month',
        'C. 2 weeks',
        'D. A year'],
        flags : [false, true, false, false],
        answer : 'B. A month'
    };

    var q3 = {
        question : 'Mother sharks stay close to their babies until they are mature.',
        possibleAnswers : ['A. True',
        'B. False',
        'C. Depends on the individual shark',
        'D. Depends on the type of shark'],
        flags : [false, true, false, false],
        answer : 'B. False'
    };

    var q4 = {
        question : 'The following shark can stick its head out of water:',
        possibleAnswers : ['A. Tiger Shark',
        'B. Whale Shark',
        'C. Hammerhead Shark',
        'D. Reef shark'],
        flags : [true, false, false, false],
        answer : 'A. Tiger Shark'
    };

    var q5 = {
        question : 'Baby sharks are called:',
        possibleAnswers : ['A. Youths',
        'B. Babies',
        'C. Pups',
        'D. Puppies'],
        flags : [false, false, true, false],
        answer : 'C. Pups'
    };

    var q6 = {
        question : 'How long have sharks been around?',
        possibleAnswers : ['A. 4,000 years',
        'B. 4 million years',
        'C. 40 million years',
        'D. 400 million years'],
        flags : [false, false, false, true],
        answer : 'D. '
    };

    var q7 = {
        question : 'How many sharks are killed by humans every year?',
        possibleAnswers : ['A. 100 million',
        'B. 1 million',
        'C. 10,000',
        'D. 1,000'],
        flags : [true, false, false, false],
        answer : 'A. '
    };

    var q8 = {
        question : 'A shark\'s skeleton is made of:',
        possibleAnswers : ['A. Bone',
        'B. Muscles',
        'C. Glue',
        'D. Cartilage'],
        flags : [false, false, true, false],
        answer : 'C. '
    };

    
    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8];

    //FUNCTIONS
    function loadQuestion(questionSelection) {
        console.log(questionSelection);
        countdownTimer.reset();
        $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
        $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
        $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
        $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
        $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
    }


    function setup() {
        index = 0;
        $('.question').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function() {
            $(this).hide();
            countdownTimer.start();
            loadQuestion(index);
        });
    }       

    function getAnswer() {

        $('.answerchoice').on('click', function() {
          console.log('alert', index);
          index++;
          console.log('click', index);
          $(".question").text('');
          $("#buttonA").text('');
          $("#buttonB").text('');
          $("#buttonC").text('');
          $("#buttonD").text('');
          loadQuestion();
      })
    }

    function answerCorrect() {
        correct++;
        alert("YASSS!");
        console.log("correct");
    }

    function answerWrong() {
        wrong++;
        alert("NAH.");
        console.log("wrong");
    }

    function showScore() {
        $('.question').empty();
        $('.question').append("<h2><p>" + correct + " correct</p></h2>");
        $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();

    }

    setup();

    //START IT UP
    $('.answerchoice').on('click', function() {
     console.log($(this));
     if(this.id == 'buttonA') {
        var answerChosen = 'A';
    } else if(this.id == 'buttonB') {
        answerChosen = 'B';
    } else if (this.id == 'buttonC') {
        answerChosen = 'C';
    } else if (this.id == 'buttonD') {
        answerChosen = 'D';
    } 
    
    if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
        answerCorrect();
    } else if (answerChosen == 'A') {
        answerWrong();
    }
    if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
        answerCorrect();
    } else if (answerChosen == 'B') {
        answerWrong();
    }

    if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
        answerCorrect();
    } else if (answerChosen == 'C') {
        answerWrong();
    }
    if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
        answerCorrect();
    } else if (answerChosen == 'D') {
        answerWrong();
    }

    $(".question").text('');
    $("#buttonA").text('');
    $("#buttonB").text('');
    $("#buttonC").text('');
    $("#buttonD").text('');
    index++;

    if (index < questionArray.length) {
        loadQuestion(index);
    } else {
        $(".answerchoice").hide();
        showScore();
    }
});

});
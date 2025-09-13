var score = 0;
var stopNum = 0;
var clicked = false;
var scoreRec = document.getElementById("scoreRec");

const quiz = [
    {
        question: "When did Pakistan come into being?",
        options: ["14th August 1947", "23rd March 1940", "15th August 1947", "14th August 1950"],
        correctAnswer: "14th August 1947"
    },
    {
        question: "Who was the first Prime Minister of Pakistan?",
        options: ["Liaquat Ali Khan", "Muhammad Ali Jinnah", "Khawaja Nazimuddin", "Ayub Khan"],
        correctAnswer: "Liaquat Ali Khan"
    },
    {
        question: "Which is the national language of Pakistan?",
        options: ["Punjabi", "Urdu", "Sindhi", "Pashto"],
        correctAnswer: "Urdu"
    },
    {
        question: "What is the national sport of Pakistan?",
        options: ["Cricket", "Hockey", "Football", "Kabaddi"],
        correctAnswer: "Hockey"
    },
    {
        question: "Who was the first President of Pakistan?",
        options: ["Iskander Mirza", "Ayub Khan", "Zulfikar Ali Bhutto", "Yahya Khan"],
        correctAnswer: "Iskander Mirza"
    },
    {
        question: "What is the national flower of Pakistan?",
        options: ["Rose", "Jasmine", "Sunflower", "Tulip"],
        correctAnswer: "Jasmine"
    },
    {
        question: "Where is Minar-e-Pakistan located?",
        options: ["Islamabad", "Karachi", "Lahore", "Peshawar"],
        correctAnswer: "Lahore"
    },
    {
        question: "Who is known as the 'Quaid-e-Azam'?",
        options: ["Allama Iqbal", "Liaquat Ali Khan", "Muhammad Ali Jinnah", "Sir Syed Ahmed Khan"],
        correctAnswer: "Muhammad Ali Jinnah"
    },
    {
        question: "Which is the largest province of Pakistan by area?",
        options: ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"],
        correctAnswer: "Balochistan"
    },
    {
        question: "What is the currency of Pakistan?",
        options: ["Taka", "Rupee", "Dinar", "Riyal"],
        correctAnswer: "Rupee"
    }
];

var currentQuestion = 0;

function rederQestion() {
    var questionElement = document.getElementById("Question")
    questionElement.innerHTML = quiz[currentQuestion].question;

    var OptionListElement = document.getElementById("QuestionOptions");
    OptionListElement.innerHTML = '';
    for (var i = 0; i < quiz[currentQuestion].options.length; i++) {
        OptionListElement.innerHTML += `<li onclick="checkCorrect(event)"> 
        <h3 style=" width:520px; height:40px;
         border-radius:15px;
         background-color:white;
       padding-top:13px;
       padding-left:20px; " > ${quiz[currentQuestion].options[i]}</h3></li>`
    }
}

rederQestion();

function nextQusetion() {
    
    if (clicked == true) {
        currentQuestion++;
        rederQestion();
        stopNum++;
        console.log(currentQuestion)
        clicked = false;
    }else{
        alert("Please Chose any option")
    }

}


function checkCorrect(event) {
    if (quiz[currentQuestion].correctAnswer.trim() === event.target.innerText.trim()) {
        event.target.style.backgroundColor = "green";
        event.target.style.color = "White";
        score += 10;
        scoreRec.innerHTML = "Score" + score;
        clicked = true;
    } else {
        event.target.style.backgroundColor = "red";
        event.target.style.color = "White";
        clicked = true;
    }

}

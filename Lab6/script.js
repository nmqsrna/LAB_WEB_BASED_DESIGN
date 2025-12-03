//questions array
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 0 //paris
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Jupiter", "Saturn", "Mars"],
        answer: 3 //mars
    },
    {
        question: "What is the largest mammal on Earth?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: 1 //blue whale
    },
    {
        question: "In which year did World War II end?",
        options: ["1943", "1947", "1945", "1950"],
        answer: 2 //1945
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: 1 //william shakespeare
    }
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const feedbackText = document.getElementById('feedback-text');
const timeElement = document.getElementById('time');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const quizSection = document.getElementById('quiz-section');

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let timerInterval;
let timeLeft;
const TIME_PER_QUESTION = 15; //time in seconds

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
});

//start the quiz 
startQuiz();

//startQuiz()
function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    scoreContainer.classList.add('hide');
    quizSection.classList.remove('hide');
    shuffledQuestions = shuffleQuestions([...questions]); 
    totalQuestionsElement.innerText = questions.length;
    nextQuestion();
}

//shuffleQuestions() 
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//nextQuestion()
function nextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestions.length) {
        displayQuestion(shuffledQuestions[currentQuestionIndex]);
        startTimer();
    } else {
        showScore();
    }
}

//displayQuestion()
function displayQuestion(question) {
    questionElement.innerText = question.question;
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn');
        button.dataset.index = index; 
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

//startTimer()
function startTimer() {
    timeLeft = TIME_PER_QUESTION;
    timeElement.innerText = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timeElement.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeOut();
        }
    }, 1000);
}

function handleTimeOut() {
    feedbackText.innerText = "Time's Up!";
    feedbackText.style.color = "#e74c3c";
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;

        if (parseInt(button.dataset.index) === shuffledQuestions[currentQuestionIndex].answer) {
            button.classList.add('correct');
        }
    });
    nextButton.classList.remove('hide');
}

//checkAnswer() 
function selectAnswer(e) {
    clearInterval(timerInterval);
    const selectedButton = e.target;
    const selectedIndex = parseInt(selectedButton.dataset.index);
    const correctIndex = shuffledQuestions[currentQuestionIndex].answer;

    if (selectedIndex === correctIndex) {
        score++;
        feedbackText.innerText = "Correct!";
        feedbackText.style.color = "#2ecc71";
        selectedButton.classList.add('correct');
    } else {
        feedbackText.innerText = "Incorrect!";
        feedbackText.style.color = "#e74c3c";
        selectedButton.classList.add('incorrect');

        Array.from(answerButtonsElement.children).forEach(button => {
            if (parseInt(button.dataset.index) === correctIndex) {
                button.classList.add('correct');
            }
        });
    }

    //disable all buttons after answer is selected
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });

    nextButton.classList.remove('hide');
}

function resetState() {
    clearInterval(timerInterval);
    nextButton.classList.add('hide');
    feedbackText.innerText = '';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

//display the final score
function showScore() {
    quizSection.classList.add('hide');
    scoreElement.innerText = score;
    scoreContainer.classList.remove('hide');
}
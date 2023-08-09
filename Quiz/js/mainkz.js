const quizData = [
    {
        question: "Marwin қай жылы ашылды?",
        a: "1999",
        b: "2012",
        c: "2006",
        correct: "b",
    },
    {
        question: "Marwin қай компанияға тиесілі?",
        a: "Меломан",
        b: "Batyr Mall",
        c: "PavlodarEnergo",
        correct: "a",
    },
    {
        question: "Marwin ' e-де қандай өнім жоқ?",
        a: "Xbox",
        b: "Lego",
        c: "HyperX",
        correct: "c",
    },
    {
        question: "ҚР-ның қанша қаласында Marwin бар?",
        a: "10",
        b: "13",
        c: "6",
        correct: "b",
    },
    {
        question: "Marwin, Telegram Bot бар ма?",
        a: "Иә",
        b: "Жоқ",
        c: "Басқа қатысушы жазады деп ойлаймын :)",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Сіз дұрыс жауап бердіңіз ${score}/${quizData.length} сұрақтар!</h2>
            <button onclick="location.reload()">Қайта</button>
            `;
        }
    }
});
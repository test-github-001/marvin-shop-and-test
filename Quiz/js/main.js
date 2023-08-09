const quizData = [
    {
        question: "В каком году был открыт Marwin?",
        a: "1999",
        b: "2012",
        c: "2006",
        correct: "b",
    },
    {
        question: "Какой компаний принадлежит Marwin?",
        a: "Меломан",
        b: "Batyr Mall",
        c: "PavlodarEnergo",
        correct: "a",
    },
    {
        question: "Какой продукций нету в Marwin'e?",
        a: "Xbox",
        b: "Lego",
        c: "HyperX",
        correct: "c",
    },
    {
        question: "В скольких городах РК есть Marwin?",
        a: "10",
        b: "13",
        c: "6",
        correct: "b",
    },
    {
        question: "Имеется ли у Marwin, Телеграмм бот?",
        a: "Да",
        b: "Нет",
        c: "Другой участник думаю напишет :)",
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
            quiz.innerHTML = `<h2>Ты ответил правильно на ${score}/${quizData.length} вопросов!</h2>
            <button onclick="location.reload()">Заново</button>
            `;
        }
    }
});

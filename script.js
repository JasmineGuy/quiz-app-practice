const quizData =[
    {
        question: "How old is Jasmine?",
        a: "10",
        b: "22",
        c: "32",
        d: "102",
        correct: "c"
    },
    {
        question: "What is the most used programming language in 2019?",
        a: "java",
        b: "C",
        c:"Python",
        d: "Javascript",
        correct: "d"
    },
    {
        question: "Who is the president of the USA?",
        a: "Joe Biden",
        b: "Hillary Clinton",
        c:"Donald Trump",
        d: "Barack Obama",
        correct: "a"

    },
    {
        question: "What does html stand for?",
        a: "hypertext markup language",
        b: "hyperactive markup language",
        c:"cascading stylesheet",
        d: "JSON object notation",
        correct: "a"
    },
    {
        question: "What year was Javascript launched?",
        a: "1996",
        b: "2009",
        c:"2008",
        d: "None of the above",
        correct: "d"
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const question = document.getElementById('question');
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const dText = document.getElementById('d-text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;
};

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
    }

    function deselectAnswers(){

        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
            })
    };

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const currentQuizData = quizData[currentQuiz];

    console.log(currentQuizData)
    console.log(currentQuiz)
    const answer = getSelected();

    if (answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if( currentQuiz < quizData.length){
            loadQuiz();
        } else {
            console.log(score)
            quiz.innerHTML = `<h2>You answered ${score} out of ${quizData.length} correctly!</h2><button onClick="location.reload()">Reload</button>`
        }
    }     

    });
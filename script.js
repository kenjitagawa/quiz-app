const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

// Select necessary elements
// quiz, answer, question, *_text, submit

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const question = document.getElementById("question");

const text_a = document.getElementById("a_text");
const text_b = document.getElementById("b_text");
const text_c = document.getElementById("c_text");
const text_d = document.getElementById("d_text");

const texts = [text_a, text_b, text_c, text_d]

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    // Get a question from the pool of choices
    const currentQuestionData = quizData[currentQuestion];

    // Adding to DOM
    question.innerText = currentQuestionData.question;
    text_a.innerText = currentQuestionData.a
    text_b.innerText = currentQuestionData.b
    text_c.innerText = currentQuestionData.c
    text_d.innerText = currentQuestionData.d
};

// Get selected option
function getSelected () {
    let answer = null;
    
    // Check each item if they are checked 
    answerElements.forEach(answerElement => {
        if (answerElement.checked){
            answer = answerElement.id;
        }
    });

    return answer
}

// Loop through the quiz options and set value of checked 
function deselectOptions() {
    answerElements.forEach(answerElement => {
        answerElement.checked = false;
    });
};


// Submit button
submit.addEventListener("click", () => {
    
    // Check if a choice has been selected before proceeding
    const ans = getSelected();

    if (ans){
        // Check if answer is correct
        if (ans === quizData[currentQuestion].correct){
            score ++;
        };

        // Increment current question
        currentQuestion ++;
    
        // Check if end of array
        if (currentQuestion < quizData.length)
        {
            loadQuiz();
        }
        else 
        {
            quiz.innerHTML = `
                <button class="color-change" id="darkMode">
                    <i class="fa-solid fa-moon" id="moon"></i>
                    <i class="fa-solid fa-sun hide"></i>
                </button>
                 <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button id="submit" onclick="location.reload()">Reload</button>
            `;
        }
    }
})

window.onload = () => {
    let theme = localStorage.getItem('theme')
    
    if(theme == null){
        changeTheme('light')
    }else{
        changeTheme(theme);
    }
}

// Adding theme changing properties
const changeTheme = (color) => {
    
    if (color == "light"){
        document.getElementById('theme').href = '';
    }

    if (color == 'dark'){
		document.getElementById('theme').href = './css/dark.css';
	}
}


const colorChanger = document.getElementById("darkMode");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

colorChanger.addEventListener("click", () => {
    let themeInStorage = localStorage.getItem("theme");
    console.log(themeInStorage);

    // Changing to dark
    if (sun.classList.contains("hide")){
        sun.classList.remove("hide");
        moon.classList.add("hide");
        themeCur = "dark";
        changeTheme(themeCur);
        // Change color

    }
    // Changing to light
    else if (moon.classList.contains("hide")) {
        moon.classList.remove("hide");
        sun.classList.add("hide");
        themeCur = "light";
        changeTheme(themeCur);
        // Change color

    }

    console.log("Saving to memore: ", themeCur)
    localStorage.setItem("theme", themeCur);

});

















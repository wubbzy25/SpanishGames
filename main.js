//DECLARE HTML CLASS, ID, TAG VARIABLES
const destinationContainer = document.getElementById("destination__container");
const originContainer = document.getElementById("origin__container");
const originalText = document.getElementById("original__text");
const words = document.getElementsByClassName("word");
const check_button = document.getElementById("check_button");
const footer = document.getElementById("footer")

let question = null;


window.addEventListener('load', () => {
  const storedScore = localStorage.getItem('score');
  if (storedScore !== null) {
    score = parseInt(storedScore);
    scoreElement.innerText = score;
  }
  failures = localStorage.getItem('failures') || 0;
  failuresElement.innerText = failures;
  });



let destinationPosDefault = destinationContainer.getBoundingClientRect();
const scoreElement = document.querySelector('.score');
const totalElement = document.querySelector('.total');
let score = 0;

function incrementScore() {
  score++;
  scoreElement.innerText = score;
  localStorage.setItem('score', score);
}

function resetScore() {
  score = 0;
  scoreElement.innerText = score;
  localStorage.removeItem('score');
}

totalElement.innerText = 5;

const failuresElement = document.querySelector('.failures');
let failures = 0;

function incrementFailures() {
  failures++;
  failuresElement.innerText = failures;
  localStorage.setItem('failures', failures);

  if (failures === 3) {
    alert('Game Over');
    localStorage.removeItem('score');
    localStorage.removeItem('failures');
  }
}

function resetFailures() {
  failures = 0;
  failuresElement.innerText = failures;
  localStorage.removeItem('failures');
}

failuresElement.innerText = localStorage.getItem('failures') || 0;









//DECLARE CODE VARIABLES
//store coordinates of the words by order of their placement.
let destinationArray = [];


//store coordinates of the words in the origin array
const originArray = [];

//Pick a random exercise from the list
let exercise = exercises[Math.floor(Math.random() * exercises.length)];
let pregunta = exercise.pregunta.split(" ");
let respuesta = exercise.respuesta.split(" ");
let listOfWords = exercise.respuestas;

//Print the sentence in the speech bubble
for (let i = 0; i < pregunta.length; i++) {
  const spanNode = document.createElement("span");
  spanNode.textContent = pregunta[i];
  originalText.appendChild(spanNode);
}

// Print the list of words
let selectedQuestion = null;

// Print the list of words
for (let i = 0; i < listOfWords.length; i++) {
  const wordNode = document.createElement("div");
  wordNode.textContent = listOfWords[i];
  wordNode.classList.add("word");

  // Agregar un atributo de datos para almacenar la pregunta
  wordNode.setAttribute("data-question", `respuesta${i + 1}`);

  // Agregar el evento de clic a cada pregunta
  wordNode.addEventListener("click", handleClick);

  originContainer.appendChild(wordNode);
}

function handleClick(event) {
  const question = event.target.getAttribute("data-question");
  console.log(question)
  console.log(respuesta)
  if(question === respuesta.join("")){
    incrementScore();
    window.location.reload();
    if(score === 5){
      alert("Felicidades Haz Ganado")
      localStorage.removeItem('score');
      localStorage.removeItem('failures');
    }
}else{  
    incrementFailures()
    window.location.reload()
}
}

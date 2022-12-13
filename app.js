const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'რომელი სხეულის ნაწილი აკლია ლექსიას?',
    answers: [
      { text: 'ხელი', correct: false },
      { text: 'ყლე', correct: false },
      { text: 'ფეხი', correct: true },
      { text: 'თვალი', correct: false }
    ]
  },
  {
    question: 'ვის დანახვაზე არწყია რეზომ?',
    answers: [
      { text: 'დათუჩიას', correct: false },
      { text: 'გიო კახნიაშვილის', correct: false },
      { text: 'გიო კიკნაველიდის', correct: false },
      { text: 'ხეოს', correct: true }
    ]
  },
  {
    question: 'დალიე. რა არის შენი შემდგომი მოქმედება?',
    answers: [
      { text: 'არწყევ', correct: true },
      { text: 'აივნიდან აფსამ', correct: true },
      { text: 'ჭურჭელს რეცხავ', correct: true },
      { text: 'ფხიზლობ', correct: false }
    ]
  },
  {
    question: 'რას ეძახიან გიორგი კაპანაძეს?',
    answers: [
      { text: 'თაზოვიჩს', correct: false },
      { text: 'პატარა გიო', correct: true },
      { text: 'პრავდა', correct: false },
      { text: 'გიო', correct: false }
    ]
  },
  {
    question: 'ვინმემ დააცემინა , რას ეუბნები?',
    answers: [
      { text: 'ჯანმრთელობა', correct: false },
      { text: 'ჩაჯმა', correct: false },
      { text: 'შენ პირში', correct: false },
      { text: 'დედიშენის', correct: true }
    ]
  },
  {
    question: 'სად უნათებდა ბექა ფრიდონის?',
    answers: [
      { text: 'კაპოტზე', correct: false },
      { text: 'სახეში', correct: false },
      { text: 'ტრაქში', correct: true },
      { text: 'მარანში', correct: false }
    ]
  },
  {
    question: 'ციცოს ნამდვილი სახელი?',
    answers: [
      { text: 'ანა', correct: false },
      { text: 'მაყვალა', correct: false },
      { text: 'გრიმხილდა', correct: false },
      { text: 'დარიკო', correct: true }
    ]
  },
  {
    question: 'რომელი სასმლით მოვიწამლეთ მე და ცოტნე?',
    answers: [
      { text: 'ღვინო', correct: false },
      { text: 'წყალი', correct: false},
      { text: 'კაპი', correct: true },
      { text: 'არაყი', correct: false }
    ]
  },
  {
    question: 'რომელი დუოს დამსახურებაა ანდრიას უძილობა?',
    answers: [
      { text: 'ანა-მარიამი', correct: true },
      { text: 'ბექა-რეზო', correct: false },
      { text:  'დათუჩია-ხეო', correct: false },
      { text: 'ცოტნე-რეზო', correct: false }
    ]
  },
  {
    question: '?',
    answers: [
      { text: 'თაზოვიჩს', correct: false },
      { text: 'პატარა გიო', correct: true },
      { text: 'პრავდა', correct: false },
      { text: 'გიო', correct: false }
    ]
  }
]

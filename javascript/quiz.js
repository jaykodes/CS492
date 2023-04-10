const questions = [
	{
		question: "Which of the following states used COMPAS as a decision support tool?",
		answers: [
			{
				text: "Kanas",
				correct: false
			},
			{
				text: "New York",
				correct: true
			},
			{
				text: "New Jersey",
				correct: false
			},
			{
				text: "Wyoming",
				correct: false
			}
		]
	},
	{
		question: "What was the name of the nonprofit organization that exposed the biases in COMPAS?",
		answers: [
			{
				text: "Americares",
				correct: false
			},
			{
				text: "Direct Relief",
				correct: false
			},
			{
				text: "ProPublica",
				correct: true
			},
			{
				text: "United Way Worldwide",
				correct: false
			}
		]
	},
	{
		question: "Who was the most likely to get arrested at a traffic stop?",
		answers: [
			{
				text: "African American Women",
				correct: true
			},
			{
				text: "Caucasian Men",
				correct: false
			},
			{
				text: "Caucasian Women",
				correct: false
			},
			{
				text: "Hispanic Men",
				correct: false
			}
		]
	},
	{
		question: "What is the name of our main character?",
		answers: [
			{
				text: "Tyrone",
				correct: false
			},
			{
				text: "Emily",
				correct: false
			},
			{
				text: "Jonathan",
				correct: false
			},
			{
				text: "Caleb",
				correct: true
			}
		]
	},
	{
		question: "After Black People, what race had the most convictions in the UK?",
		answers: [
			{
				text: "Mixed",
				correct: false
			},
			{
				text: "Other (including Chinese)",
				correct: false
			},
			{
				text: "Asian",
				correct: true
			}
		]
	}
];

const question_element = document.getElementById("question")
const answer_button_element = document.getElementById("answer-buttons")
const next_btn_element = document.getElementById("next-btn")

let current_question_index = 0;
let score = 0;

function start_quiz() {
	
	current_question_index = 0;
	score = 0;
	next_btn_element.innerHTML = "Next";
	
	show_questions();
}

function reset_state() {
	
	next_btn_element.style.display = "none";
	
	while (answer_button_element.firstChild) {
		answer_button_element.removeChild(answer_button_element.firstChild)
	}
}

function select_answer(e) {
	
	const selected_btn = e.target;
	const is_correct = selected_btn.dataset.correct === "true";
	
	if (is_correct) {
		selected_btn.classList.add("correct");
		score += 1;
	}
	else {
		selected_btn.classList.add("incorrect");
	}

	Array.from(answer_button_element.children).forEach(button => {
		if (button.dataset.correct === "true") {
			button.classList.add("correct");
		}
		button.disabled = true;
	});
	
	next_btn_element.style.display = "block";
}

function show_questions() {

	reset_state();

	let current_question = questions[current_question_index];
	let question_num = current_question_index + 1;
	
	question_element.innerHTML = question_num + ". " + current_question.question;

	current_question.answers.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answer_button_element.appendChild(button);
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", select_answer)
	});
}

function show_score() {
	
	reset_state();
	question_element.innerHTML = `You scored ${score} out of ${questions.length}`;
	
	next_btn_element.innerHTML = "Play Again";
	next_btn_element.style.display = "block";
}

function handle_next_button() {
	
	current_question_index += 1;
	
	if (current_question_index < questions.length) {
		show_questions();
	}
	else {
		show_score();
	}
}

next_btn_element.addEventListener("click", ()=> {
	
	if (current_question_index < questions.length) {
		handle_next_button();
	}
	else {
		start_quiz();
	}
});

start_quiz();
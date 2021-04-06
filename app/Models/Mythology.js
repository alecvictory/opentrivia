export default class Mythology {
    constructor({ category, type, difficulty, question, correct_answer, incorrect_answers }) {

        this.category = category
        this.type = type
        this.difficulty = difficulty
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswers = incorrect_answers
        this.answers = [this.correctAnswer, ...this.incorrectAnswers]
    }

    get Template() {
        return /*html*/`
        <div class="card">
        <div class="card-header">
          ${this.question}
        </div>
        <ul class="list-group list-group-flush">
        <button>
        <li class="list-group-item">${this.correctAnswer}</li>
        </button>
        <button>
        <li class="list-group-item">${this.answers}</li>
        </button>
        <button>
        <li class="list-group-item">${this.answers}</li>
        </button>
        <button>
        <li class="list-group-item">${this.answers}</li>
        </button>
        </ul>
      </div>`
    }
}


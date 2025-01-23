class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }
    // 2. getQuestion()
    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }
    // 3. moveToNextQuestion()
    moveToNextQuestion() {
        this.currentQuestionIndex++
    }
    // 4. shuffleQuestions()
    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
    }
    // 5. checkAnswer(answer)
    checkAnswer(answer) {
        const currentQuestion = this.getQuestion();
        if (currentQuestion.answer === answer) {
            this.correctAnswers++;
        }
    }

    // 6. hasEnded()
    hasEnded() {
        if (this.currentQuestionIndex === this.questions.length) return true
        else return false
    }

    filterQuestionsByDifficulty(difficulty) {
        if (typeof difficulty !== "number" || difficulty < 1 || difficulty > 3) { return }
        this.questions = this.questions.filter(question => question.difficulty === difficulty)
    }

    averageDifficulty() {
        const average = this.questions.reduce((sum, difficult) => sum + difficult.difficulty, 0)
        return average / this.questions.length
    }
}

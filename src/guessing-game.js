class GuessingGame {
  #minNum = 0;
  #maxNum = 0;
  #guessNum = 0;

  setRange(min, max) {
    //этот метод принимает минимальное и максимальное значение диапазона чисел для угадывания
    this.#minNum = min;
    this.#maxNum = max;
  }

  guess() {
    //этот метод возвращает кандидата решения (вы делаете предположение на основе диапазона и предыдущих предположений)
    this.#guessNum = Math.round((this.#maxNum + this.#minNum) / 2);
    return this.#guessNum;
  }

  lower() {
    //этот метод вызывается, если предыдущая функция guess() вернула число, которое больше, чем ответ
    this.#maxNum = this.#guessNum;
  }

  greater() {
    //этот метод вызывается, если предыдущий вызов функции guess() вернул число, которое меньше, чем ответ
    this.#minNum = this.#guessNum;
  }
}

module.exports = GuessingGame;

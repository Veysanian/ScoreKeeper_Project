const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const resetButton = document.querySelector('#resetButton')

const pickedScore = document.querySelector('#playTo')



let p1score = 0;
let p2score = 0;
let winnigScore = 3;
let gameOver = false;

pickedScore.addEventListener('change', function () {
    winnigScore = parseInt(this.value);
    reseter();
})

const reseter = function () {
    gameOver = false;
    p1score = 0;
    p2score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-danger', 'has-text-success');
    p2Display.classList.remove('has-text-danger', 'has-text-success');
    p1Display.classList.remove('is-disabled')
    p2Display.classList.remove('is-disabled')
    p1Button.disabled = false;
    p2Button.disabled = false;
}

p1Button.addEventListener('click', function () {
    if (!gameOver) {
        p1score += 1;
        if (p1score === winnigScore) {
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
            p1Button.disabled =true;
            p2Button.disabled =true;
            gameOver = true;
        }
        p1Display.textContent = p1score;
    }
})

p2Button.addEventListener('click', function () {
    if (!gameOver) {
        p2score += 1;
        if (p2score === winnigScore) {
            p2Display.classList.add('has-text-success')
            p1Display.classList.add('has-text-danger')
            p1Button.disabled =true;
            p2Button.disabled =true;
            gameOver = true;
        }
        p2Display.textContent = p2score;
    }
})

resetButton.addEventListener('click', reseter);


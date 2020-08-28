let wrong = 0;
let right = 0;
let trials = 10;

const formInput = document.querySelector('#form-input');
const button = document.querySelector('#submit');
const wrongAns = document.querySelector('#wrong');
const rightAns = document.querySelector('#right');
const message = document.querySelector('#message');
const tries = document.querySelector('#tries');

function showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const row = document.querySelector('#row');
    container.insertBefore(div, row);

    // make alert vanish
    setTimeout(() => document.querySelector('.alert').remove(), 1000);
}

function results() {
    setTimeout(function () {
        if (wrong + right == 10) {
            message.innerHTML = `Game over!!!! You got ${right} out 10`;
            wrong = 0;
            right = 0;
            rightAns.innerHTML = 0;
            wrongAns.innerHTML = 0;
            trials = 10;
            tries.innerHTML = trials;


        }
    }, 0);
    message.innerHTML = ''
}



function game(e) {
    e.preventDefault
    let randomNumber = Math.round(Math.random() * 10);

    if (formInput.value > 10 || formInput.value < 0 || formInput.value == '') {
        showAlert('Enter a Number between 0 and 10', 'warning');
        formInput.value = '';



    } else if (formInput.value == randomNumber) {
        showAlert(`GO NINJA YOU GUESSED RIGHT! The right answer is ${randomNumber}`, 'success')
        formInput.value = '';
        right++;
        rightAns.innerHTML = right;
        trials--;
        tries.innerHTML = trials;

    } else if (formInput.value != randomNumber) {
        showAlert(`OOPS TRY AGAIN! The right answer is ${randomNumber}`, 'danger')
        formInput.value = '';
        wrong++;
        wrongAns.innerHTML = wrong;
        trials--;
        tries.innerHTML = trials;


    } else {
        console.log(formInput.value);
        formInput.value = '';
    }
    results();
}

button.addEventListener('click', game);
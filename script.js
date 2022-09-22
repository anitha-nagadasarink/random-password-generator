const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const alphabets = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+-=|`';:<>?/,.{}[]";


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    let newPasswordResult = document.getElementById('result').innerText;
    navigator.clipboard.writeText(newPasswordResult);
    alert(`Copied the text: ${newPasswordResult}`)
});

generateEl.addEventListener('click', () => {
    generatePassword(randomFunc.lower, randomFunc.number, randomFunc.upper, randomFunc.symbol, lengthEl.value);
});

function generatePassword(lower, upper, number, symbol, length) {
    let passwordResult = [];
    if (length >= 5  && length <= 20) {
        for (let i = 0; i < length; i++) {
            passwordResult.push(lower(), upper(), number(), symbol());
        }
        let processedPassword = String(passwordResult).replaceAll(",", "").slice(0, length);
        resultEl.innerText = processedPassword;

    } else if (length < 5) {
        resultEl.innerText = "Min Password length 5";
    } else if (length > 20) {
        resultEl.innerText = "Max Password length  20";
    }
}

function getRandomLower() {
    if (lowercaseEl.checked) {
        const randomLowChar = alphabets[Math.floor(Math.random() * 26) + 1];
        return randomLowChar;
    }

}


function getRandomUpper() {
    if (uppercaseEl.checked) {
        const upperChar = alphabets.toUpperCase();
        const randomUpperChar = upperChar[Math.floor(Math.random() * 26) + 1];
        return randomUpperChar;
    }

}


function getRandomNumber() {
    if (numbersEl.checked) {
        const randomNumbers = numbers[Math.floor(Math.random() * 9) + 1];
        return randomNumbers;
    }

}


function getRandomSymbol() {
    if (symbolsEl.checked) {
        const randomSymbols = symbols[Math.floor(Math.random() * 30) + 1];
        return randomSymbols;
    }
}

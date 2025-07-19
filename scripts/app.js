// Change Theme

let darkMode = localStorage.getItem('darkmode');
const changeTheme = document.getElementById('changeTheme');
const themeIcon = document.getElementById('themeIcon');

const enableDarkmode = () => {
    document.body.classList.add('dark-mode')
    localStorage.setItem('darkmode', 'changeTheme');
};

const disableDarkmode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkmode', null);
};

if (darkMode === 'changeTheme') enableDarkmode();

changeTheme.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkmode');
    if (darkMode !== 'changeTheme') {
        enableDarkmode();
        themeIcon.classList = 'bi bi-brightness-high fs-3';
    } else {
        disableDarkmode();
        themeIcon.classList = 'bi bi-moon fs-3';
    }
});

// If it was not a number

const result = document.getElementById('result');

function Calculate (value) {
    const calculateValue = eval(value || null);
    if (isNaN(calculateValue)) {
        result.value = 'Can t divide 0 with 0 '
        setTimeout(() => {
            result.value = '';
        }, 1300);
    } else {
        result.value = calculateValue;
    }
}

// Display Entred Value on Screen

function Livescreen (entredvalue) {
    if (!result.value){
        result.value = '';
    }

    result.value += entredvalue;
}

// Adding keyboard to Result

document.addEventListener('keydown', keyboardInput);

function keyboardInput(e) {
     e.preventDefault();

    // Numbers

    if (e.key === '0') {
        result.value += '0';
    } 
    else if (e.key === '1') {
        result.value += '1';
    }
    else if (e.key === '2') {
        result.value += '2';
    }
    else if (e.key === '3') {
        result.value += '3';
    }
    else if (e.key === '4') {
        result.value += '4';
    }
    else if (e.key === '5') {
        result.value += '5';
    }
    else if (e.key === '6') {
        result.value += '6';
    }
    else if (e.key === '7') {
        result.value += '7';
    }
    else if (e.key === '8') {
        result.value += '8';
    }
    else if (e.key === '9') {
        result.value += '9';
    }

    // Operators

    if (e.key === '+') {
        result.value += '+';
    }
    else if (e.key === '-') {
        result.value += '-';
    }
    else if (e.key === '*') {
        result.value += '*';
    }
    else if (e.key === '/') {
        result.value += '/';
    }

    // Decimal Key 

    if (e.key === '.') {
        result.value += '.';
    }

    // Keydown Enter to see Result 

    if (e.key === 'Enter') {
        Calculate(result.value)
    }

    // Backspace to Removeing to last input 

    if (e.key === 'Backspace') {
        const resInput = result.value;
        result.value = resInput.substring(0, result.value.length - 1);
    }
} 
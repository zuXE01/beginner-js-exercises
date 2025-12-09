    const numberButton = document.querySelectorAll('.number-btn');
    const equationButton = document.querySelectorAll('.equation-btn');
    let currentInput = '';
    let previousInput = '';
    let operator = null;
    let display = document.querySelector('.display');

    function updateDisplay(value) {
        display.innerText = `<p>${value}</p>`;


    };




    numberButton.forEach((button) => {
        button.addEventListener('click', () => {
            const number = button.innerText
            currentInput = currentInput + number;
            updateDisplay(currentInput);
            console.log(currentInput);
        });

    });


    equationButton.forEach((button) => {
        button.addEventListener('click', () => {
            if (currentInput === '') {
                return;
            };

            operator = button.innerText;
            previousInput = currentInput;
            currentInput = '';
            console.log(operator);
            
            
            
            
        });

    });

    document.querySelector('.calculateButton').addEventListener('click', () => {
        b = parseFloat(currentInput);
        a = parseFloat(previousInput);
        let result;
        switch (operator) {
            case '+': result = a + b
            break;
            case '-': result = a - b
            break;
            case 'x': result = a * b    
            break;
            case '/': result = a / b
            break;
        }
        updateDisplay(result);
        currentInput = result;
        previousInput = '';
        operator = null;

    });


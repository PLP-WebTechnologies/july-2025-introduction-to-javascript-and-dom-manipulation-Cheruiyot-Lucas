// ============================
// Part 1: Variables & Conditionals
// ============================
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.addEventListener('click', () => {
    const age = Number(document.getElementById('ageInput').value);
    if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else if (age > 0) {
        ageResult.textContent = "You are a minor.";
    } else {
        ageResult.textContent = "Please enter a valid age.";
    }
});

// ============================
// Part 2: Functions
// ============================

// Function 1: Greeting
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript mastery.`;
}

document.getElementById('greetBtn').addEventListener('click', () => {
    const name = prompt("What's your name?");
    document.getElementById('greetResult').textContent = greet(name);
});

// Function 2: Sum of two numbers
function sum(a, b) {
    return a + b;
}

document.getElementById('sumBtn').addEventListener('click', () => {
    document.getElementById('sumResult').textContent = `5 + 10 = ${sum(5, 10)}`;
});

// ============================
// Part 3: Loops
// ============================

document.getElementById('countBtn').addEventListener('click', () => {
    let output = '';
    for (let i = 1; i <= 5; i++) {
        output += i + ' ';
    }
    document.getElementById('countResult').textContent = output;
});

const colors = ['Red', 'Green', 'Blue', 'Yellow'];
document.getElementById('colorsBtn').addEventListener('click', () => {
    const colorsList = document.getElementById('colorsList');
    colorsList.innerHTML = '';
    colors.forEach(color => {
        const li = document.createElement('li');
        li.textContent = color;
        colorsList.appendChild(li);
    });
});

// ============================
// Part 4: DOM Manipulation
// ============================

document.getElementById('changeTextBtn').addEventListener('click', () => {
    document.querySelector('h1').textContent = "🎉 Heading Changed!";
});

document.getElementById('toggleColorBtn').addEventListener('click', () => {
    document.body.classList.toggle('highlight');
});

// Add a new element dynamically
document.getElementById('addElementBtn').addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.textContent = "I am a new element!";
    newDiv.style.padding = '5px';
    newDiv.style.margin = '5px 0';
    newDiv.style.border = '1px dashed #000';
    document.getElementById('dynamicContainer').appendChild(newDiv);
});

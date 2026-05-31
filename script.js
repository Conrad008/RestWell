const userForm = document.getElementById('userform');
const NameInput = document.getElementById('Name');
const AgeInput = document.getElementById('Age');
const dashboardOutput = document.getElementById('dashboardOutput');
const greetingDisplay = document.getElementById('greeting');
const ageInMonthsDisplay = document.getElementById('ageInMonths');
const contentAccessSection = document.getElementById('contentAccessSection');
const accessIcon = document.getElementById('accessIcon');
const accessTitle = document.getElementById('accessTitle');
const accessMessage = document.getElementById('accessMessage');
const quoteContainer = document.getElementById('quoteContainer');
const resetBtn = document.getElementById('resetBtn');

/**
 * Feature 4: Age Calculation in Months Function
 * @param {number} ageInYears 
 * @returns {number} age in months
 */
const calculateAgeInMonths = (ageInYears) => ageInYears * 12;

/**
 * Feature 5: Loop to Render Motivational Quote Multiple Times
 */


function displayMotivationalQuotes() {
    quoteContainer.innerHTML = ''; // Clear previous content
    const quote = "Consistency beats talent when talent doesn't work hard. Keep pushing!";
    
    // For Loop iterating 5 times to render standard quotes
    for (let i = 1; i <= 5; i++) {
        const quoteElement = document.createElement('div');
        quoteElement.className = "p-3  rounded-lg  text-sm border-l-4 border-indigo-500 font-medium";
        quoteElement.innerText = `${i}. "${quote}"`;
        quoteContainer.appendChild(quoteElement);
    }
}

function renderDashboard(name, age) {
    const parsedAge = parseInt(age, 10);

   
    greetingDisplay.innerText = `Welcome Back, ${name}!`;

   
    const totalMonths = calculateAgeInMonths(parsedAge);
    ageInMonthsDisplay.innerText = `You have are ${totalMonths.toLocaleString()} months old`;

    
    if (parsedAge >= 18) {
       
        contentAccessSection.className = "p-5 rounded-2xl border flex items-center gap-3  bg-white text-blue-100";
        accessTitle.innerText = "Premium Content Unlocked";
        accessMessage.innerText = "You are over 18. You have  access to all content.";
    } else {
        
        contentAccessSection.className = "p-5 rounded-2xl border flex bg-white text-blue-100 items-center gap-3 ";
        accessTitle.innerText = "Restricted Access Mode";
        accessMessage.innerText = "You are too young for adult content.";
    }

    // Feature 5 Call: Display Quotes
    displayMotivationalQuotes();

    // Reveal UI Display Element wrapper container
    dashboardOutput.classList.remove('hidden');
}

userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameValue = NameInput.value.trim();
    const ageValue = AgeInput.value;

    // Save into LocalStorage persistence database
    localStorage.setItem('savedProfileName', nameValue);
    localStorage.setItem('savedProfileAge', ageValue);

    // Update Visual Canvas State
    renderDashboard(nameValue, ageValue);
});

resetBtn.addEventListener('click', () => {
    localStorage.clear();
    dashboardOutput.classList.add('hidden');
    userForm.reset();
});

window.addEventListener('DOMContentLoaded', () => {
    const cachedName = localStorage.getItem('savedProfileName');
    const cachedAge = localStorage.getItem('savedProfileAge');

    if (cachedName && cachedAge) {
       
        NameInput.value = cachedName;
        AgeInput.value = cachedAge;
        
        renderDashboard(cachedName, cachedAge);
    }
});




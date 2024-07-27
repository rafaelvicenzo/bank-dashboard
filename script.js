'use strict'


// dateTime
function formateDateTime (date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0'); 

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;   
}

function formatDisplayTime(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

const currentTimeElement = document.getElementById('currentTime');
const now = new Date();

currentTimeElement.setAttribute('datetime', formateDateTime(now));
currentTimeElement.textContent = formatDisplayTime(now);


//Latest transactions colors
const transactionSituations = document.querySelectorAll('.situation');

transactionSituations.forEach((situation) => {
    if (situation.textContent === 'Fail') {
        situation.style.background = '#fa5757';
    } else if (situation.textContent === 'Completed') {
        situation.style.background = '#3fb8a9';
    } else if (situation.textContent === 'Hold') {
        situation.style.background = '#f8b917';
    }
});



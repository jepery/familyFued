// Function to calculate the total score
function calculateTotal() {
    // Initialize total score
    var totalScore = 0;

    // Loop through inputs with IDs starting with "roundOne"
    for (var i = 1; i <= 5; i++) {
        var roundOneInput = document.getElementById("roundOne" + i);
        // Parse the value as an integer and add it to total score
        totalScore += parseInt(roundOneInput.value) || 0; // Use 0 if input is empty
    }

    // Loop through inputs with IDs starting with "roundTwo"
    for (var i = 1; i <= 5; i++) {
        var roundTwoInput = document.getElementById("roundTwo" + i);
        // Parse the value as an integer and add it to total score
        totalScore += parseInt(roundTwoInput.value) || 0; // Use 0 if input is empty
    }

    // Update the value of textarea with ID "score3"
    document.getElementById("score3").value = totalScore;
}

// Call the function initially to calculate the total
calculateTotal();

// Add event listeners to each input to recalculate total whenever they change
for (var i = 1; i <= 5; i++) {
    document.getElementById("roundOne" + i).addEventListener("input", calculateTotal);
    document.getElementById("roundTwo" + i).addEventListener("input", calculateTotal);
}

function calculateTotal1() {
    // Initialize total score
    var totalScore = 0;

    // Loop through inputs with IDs starting with "roundOne"
    for (var i = 1; i <= 5; i++) {
        var roundOneInput = document.getElementById("roundOne" + i);
        // Parse the value as an integer and add it to total score
        totalScore += parseInt(roundOneInput.value) || 0; // Use 0 if input is empty
    }

    // Update the value of textarea with ID "score3"
    document.getElementById("roundOneTotal").value = totalScore;
}

// Call the function initially to calculate the total
calculateTotal1();

// Add event listeners to each input to recalculate total whenever they change
for (var i = 1; i <= 5; i++) {
    document.getElementById("roundOne" + i).addEventListener("input", calculateTotal1);
}

function calculateTotal2() {
    // Initialize total score
    var totalScore = 0;

    // Loop through inputs with IDs starting with "roundOne"
    for (var i = 1; i <= 5; i++) {
        var roundTwoInput = document.getElementById("roundTwo" + i);
        // Parse the value as an integer and add it to total score
        totalScore += parseInt(roundTwoInput.value) || 0; // Use 0 if input is empty
    }

    // Update the value of textarea with ID "score3"
    document.getElementById("roundTwoTotal").value = totalScore;
}

// Call the function initially to calculate the total
calculateTotal2();

// Add event listeners to each input to recalculate total whenever they change
for (var i = 1; i <= 5; i++) {
    document.getElementById("roundTwo" + i).addEventListener("input", calculateTotal2);
}

backgroundSound.onclick = function() {

    var audio = new Audio('sounds/bgsound.mp3');
    audio.play();

};